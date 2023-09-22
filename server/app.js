const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userouter = require("./routes/Router");
const errorhandler = require("./middleware/Error");
const app = express();

//mongoose connect
mongoose
  .connect("mongodb://127.0.0.1:27017/Authentical")
  .then(() => {
    console.log("the mongoose connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//cors setup
app.use(cors());

//bodyparsersetup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//dotenv configaration
dotenv.config();

//router user
app.use(userouter);

//errorhadler
app.use(errorhandler);

module.exports = app;
