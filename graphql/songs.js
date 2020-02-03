import { gql } from "apollo-server-express";
import * as db from "../db";

export const typeDefs = gql`
  extend type Query {
    songs: [Song]
    song(id: ID!): Song
  }

  type Song {
    id: ID!
    name: String
    album: String
    artistID: String
    artist: Artist
  }
`;

export const resolvers = {
  Query: {
    songs: async () => db.songs.findAll(),
    song: async (obj, args, context, info) => db.songs.findByPk(args.id)
  },
  Song: {
    artist: async (obj, args, context, info) => db.songs.findByPk(obj.artistID)
  }
};
