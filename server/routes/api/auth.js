const express = require("express")
const { CheckUserNamePassword } = require("../../helpers/Users")

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
  const { Username, Password } = req.body
  if (!Username || !Password) {
    res.status(400).json({
      Error: "Both Username and Password fields are mandatory.",
    })
  } else if (typeof Username === "string" && typeof Password === "string") {
    switch (CheckUserNamePassword(Username, Password)) {
      case 0:
        res.status(404).json({
          Error: "User does not exist",
        })
        CurrentUser = null
        break
      case -1:
        res.status(404).json({
          Error: "Invalid Username or Password",
        })
        CurrentUser = null
        break
      default:
        CurrentUser = CheckUserNamePassword(Username, Password)
        res.json(CheckUserNamePassword(Username, Password))
    }
  } else {
    res.status(400).json({
      Error:
        "Both Username and Password fieds are supposed to be in a string values.",
    })
  }
})

module.exports = app
