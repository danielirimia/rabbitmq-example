const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const morgan = require("morgan");
const config = require("../config");
const messagingService = require("./services/messaging");

const app = express();

app.use(cors());
app.use(body_parser.json());
app.use(morgan("common"));

app.get("/", function(req, res) {
  messagingService.sendHelloWorld();
  res.status(200).json({
    success: true,
    message: "Hello, I'm the producer!"
  });
});

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`API Service is listening on port ${PORT}...`);
});
