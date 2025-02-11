const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Welcome to the RESTful API!");
});

module.exports = app;