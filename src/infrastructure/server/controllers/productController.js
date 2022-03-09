const { allProducts, productById, productByStr } = require('../models/product')

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
    ctx.status = 200
    ctx.body = product
  } catch (error) {
    ctx.status = 500
    ctx.body = "Error"
  }
}

const getProductByStr = async ctx => {
    try {
      const str = ctx.params.str
      var products = await productByStr(str)
      if (await isPalindrome(str)) products = await setDiscountPalindrome(products)
      ctx.status = 200
      ctx.body = products
    } catch (error) {
      ctx.status = 500
      ctx.body = "Error"
    }
  }

setDiscountPalindrome = async function(products)  {
  if (!products || products.length === 0) return []
  let listProductWhitDiscount = []   
  products.forEach(function(product,i,a) {
      let newProduct = {}
      newProduct._id = product._id
      newProduct.id = product.id
      newProduct.brand = product.brand
      newProduct.description = product.description
      newProduct.image = product.image
      newProduct.priceBeforeDiscount = product.price
      newProduct.price = Math.round(product.price / 2)
      listProductWhitDiscount.push(newProduct)
  });

  return listProductWhitDiscount;
}

const isPalindrome = async str => {
  if (!str) return false
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");
  return newStr === strReversed;
}

module.exports = { getProducts, getProductById, getProductByStr, isPalindrome }
