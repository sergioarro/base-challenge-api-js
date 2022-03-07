const { allProducts, productById } = require('../models/product')

const getProducts = async ctx => {
  try {
    const products = await allProducts()
    ctx.status = 200
    ctx.body = products
  } catch (error) {
    ctx.status = 500
    ctx.body = "Error"
  }
}

const getProductById = async ctx => {
  try {
    const productId = ctx.params.id
    const product = await productById(productId)
    /*if ( isPalindrome(productId) && product && product.length > 0){
      
    }*/
    ctx.status = 200
    ctx.body = product
  } catch (error) {
    ctx.status = 500
    ctx.body = "Error"
  }
}

function isPalindrome(str) {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");

  return newStr === strReversed;
}

module.exports = { getProducts, getProductById }
