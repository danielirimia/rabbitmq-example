const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const morgan = require("morgan");
const config = require("../config");

const app = express();

app.use(cors());
app.use(body_parser.json());
app.use(morgan("common"));

app.get("/", function(req, res) {
  res.status(200).json({
    success: true,
    message: "Hello World!"
  });
});

const PORT = config.app.port;

const FgBlue = "\x1b[1;34m";

app.listen(PORT, () => {
  console.log(FgBlue,`API Service is listening on port ${PORT}...`);
});
