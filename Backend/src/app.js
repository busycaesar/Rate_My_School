const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/", require("./API"));

module.exports = app;
