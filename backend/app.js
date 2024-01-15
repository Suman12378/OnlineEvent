const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("./initializeFirebase.js");

const authRouter = require("./routes/authRouter");
const errCodes = require("./errCode.js");



const app = express();
app.use(express.json());





app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use("/api/auth", authRouter); 

// I don't know why we use this middleware

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PATCH, DELETE"
    );
    next();
  });

  app.use("/", (req, res) => {
    res.send("hello, world");
  });

  module.exports = app;