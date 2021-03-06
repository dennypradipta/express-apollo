const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { ApolloServer } = require("apollo-server-express");
const app = express();

require("dotenv").config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const apollo = new ApolloServer({
  modules: [require("./graphql/artists"), require("./graphql/songs")]
});

apollo.applyMiddleware({ app });

module.exports = app;
