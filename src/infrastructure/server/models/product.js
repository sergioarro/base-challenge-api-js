const productsModel = require('../schema/product-schema')

const allProducts = async () => {
  const products = await productsModel.find()
  return products
}

const productById = async productId => {
  const product = await productsModel.find({ id: productId })
  return product
}

const productByStr = async str => {
    const products = await productsModel.find(
        { "$or": [{
            "brand": {'$regex' : '.*' + str + '.*'}
        }, 
        {
            "description": {'$regex' : '.*' + str + '.*'}
        }] 
    })
    return products
  }

module.exports = { allProducts, productById, productByStr }