const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(dotenv.config());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
