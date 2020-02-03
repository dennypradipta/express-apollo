import { gql } from "apollo-server-express";
import * as db from "../db";

export const typeDefs = gql`
  extend type Query {
    artists: [Artist]
    artist(id: ID!): Artist
  }

  type Artist {
    name: String
  }
`;

export const resolvers = {
  Query: {
    artists: async () => db.artists.findAll(),
    artist: async (obj, args, context, info) => db.artists.findByPk(args.id)
  }
};
