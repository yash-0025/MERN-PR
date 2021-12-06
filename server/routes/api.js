const express = require("express");

const app = express.Router();

// Creating a get request handler for /.
app.get("/", (req, res) => {
    res.json("Welcome to cC API.")
})

module.exports = app;