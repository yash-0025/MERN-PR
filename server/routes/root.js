const express = require("express")

const app = express.Router()

const api = require("./api.js")
// Creating a get request handler for /.
app.get("/", (req, res) => {
  res.json("Welcome to cC.")
})

app.use("/api", api)

module.exports = app
