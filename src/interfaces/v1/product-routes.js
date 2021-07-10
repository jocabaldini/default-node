const express = require("express")
const watchEndPoints = require("../../../watchEndPoints")

module.exports = (app, application) => {
  const prefix = "/products"
  const productRouter = express.Router()

  productRouter.get("/:warehouse*?", (req, res) => {
    try {
      const ret = application.getProducts(req.params)
      return res.status(ret.statusCode).send(ret.data)
    } catch (error) {
      return res.status(500).send(`Internal error: ${error}`)
    }
  })

  productRouter.post("", (req, res) => {
    try {
      const ret = application.createProduct(req.body)
      return res.status(ret.statusCode).send(ret.data)
    } catch (error) {
      return res.status(500).send(`Internal error: ${error}`)
    }
  })

  watchEndPoints.append(prefix, productRouter)
  app.use(prefix, productRouter)
}
