const { allProducts, productById, productByStr } = require('../models/product')

const getProducts = async ctx => {
  try {
    const products = await allProducts()
    ctx.status = 200
    ctx.body = products
  } catch (error) {
    console.error("error products: ", error)
    ctx.status = 500
    ctx.body = "Error"
  }
}

const getProductById = async ctx => {
  try {
    const productId = ctx.params.id
    const product = await productById(productId)
    ctx.status = 200
    ctx.body = product
  } catch (error) {
    console.error("error getProductById: ", error)
    ctx.status = 500
    ctx.body = "Error"
  }
}

const getProductByStr = async ctx => {
    try {
      const str = ctx.params.str
      const products = await productByStr(str)
      if (await isPalindrome(str)) await setDiscountPalindrome(products)
      ctx.status = 200
      ctx.body = products
    } catch (error) {
      console.error("error getProductByStr: ", error)
      ctx.status = 500
      ctx.body = "Error"
    }
  }

  const setDiscountPalindrome = async products =>  {
    if (!products || products.length === 0) return false   
    products.forEach(product => {
        product.price = product.price / 2;
    });
  }

const isPalindrome = async str => {
  if (!str) return false
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");
  return newStr === strReversed;
}

module.exports = { getProducts, getProductById, isPalindrome, getProductByStr, setDiscountPalindrome }
