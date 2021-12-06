console.log("HEllo from server")

//*      [ Importing Express js ]

const express = require("express")

//&      { Initialising an app with express }
const app = express()

//^      Configure a Port
const port = 5000


// Creating a get server
app.get("/", (req, res)=> {
    res.json("Welcome to cC.")
})

//?      Listen to a port
app.listen(port, () => {
  console.log(`Server started on Port ${port}.`)
})
