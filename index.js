const express = require("express")
const app = express()

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
})

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world")
})

app.listen(process.env.PORT)
