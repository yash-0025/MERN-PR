const express = require("express")

const app = express.Router()

let CurrentUser = null

// ^  For checking current log in user
app.get("/login", (req, res) => {
  if (CurrentUser) {
    res.json(CurrentUser)
  } else {
    res.status(400).json({
      Error: "Not logged In",
    })
  }
})

//  * For logging a User
app.post("/login", (req, res) => {
  res.json(req.body)
})

module.exports = app
