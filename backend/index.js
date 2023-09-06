require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const createError = require("http-errors");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

// Express
const app = express();
app.use(express.json());

// Cors
app.use(cors());

// Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Morgan logger
app.use(logger("dev"));

// Routes
mongoose.connect(process.env.DB, { useNewUrlParser: true });

mongoose.connection
  .once("open", () => console.log("Mongo Connected"))
  .on("error", (e) => console.log(`ERROR: ${e}`));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Error handler
app.use(function (req, res, next) {
  next(
    createError(
      404,
      "Invalid API. Use the official documentation to get the list of valid APIS."
    )
  );
});

app.listen(port, console.log(`Server is running on ${port}`));
