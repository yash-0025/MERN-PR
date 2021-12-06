const express = require("express");

const app = express.Router();

// Import the auths
const auth = require("./api/auth.js")

// Creating a get request handler for /.
app.get("/", (req, res) => {
    res.json("Welcome to cC API.")
})


app.use("/auth", auth);
module.exports = app;