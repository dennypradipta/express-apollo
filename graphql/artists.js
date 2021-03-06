import { gql } from "apollo-server-express";
import * as db from "../db";

export const typeDefs = gql`
  extend type Query {
    artists: [Artist]
    artist(id: ID!): Artist
  }

  type Artist {
    id: ID
    name: String
    songs: [Song]
  }
`;

export const resolvers = {
  Query: {
    artists: async () => db.artists.findAll(),
    artist: async (obj, args, context, info) => db.artists.findByPk(args.id)
  },
  Artist: {
    songs: async (obj, args, context, info) =>
      db.songs.findAll({
        where: {
          artistID: obj.id
        }
      })
  }
};
