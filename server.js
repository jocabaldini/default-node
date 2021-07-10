const express = require("express")

const routes = require("./src/interfaces/v1/index")

module.exports = (application) => {
  const server = express()

  server.use(express.json())
  routes(server, application)

  server.listen(process.env.PORT)
  return server
}
