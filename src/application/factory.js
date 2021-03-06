const product = require("./product")
const infrastructure = require("../infrastructure")
const helpers = require("../../helpers")

const dependencies = {
  infrastructure: infrastructure(),
  helpers,
}
dependencies.domain = require("../domain")(dependencies)

module.exports = () => ({
  dependencies: dependencies,
  createProduct: product(dependencies).createProduct,
  getProducts: product(dependencies).getProducts,
})
