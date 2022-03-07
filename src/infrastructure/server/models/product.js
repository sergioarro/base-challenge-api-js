const productsModel = require('../schema/product-schema')

const allProducts = async () => {
  const products = await productsModel.find()
  return products
}

const productById = async productId => {
  const product = await productsModel.find({ id: productId })
  return product
}

module.exports = { allProducts, productById }