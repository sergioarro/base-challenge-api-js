const { allProducts, productById } = require('@models/product')
const { getProducts, getProductById, isPalindrome } = require('@controllers/productController')

jest.mock('@models/product', () => ({
  allProducts: jest.fn(),
  productById: jest.fn(),
}))

let ctx = {}

describe('Product controller test', () => {
  describe('getProducts', () => {
    it('return all products', async () => {
      const productsMock = []
      allProducts.mockReturnValueOnce(productsMock)

      await getProducts(ctx)

      expect(ctx).toEqual({
        body: productsMock,
        status: 200,
      })
    })

    it('return an error when allProducts fails', async () => {
      allProducts.mockImplementation(() => {
        throw new Error();
      })

      await getProducts(ctx)

      expect(ctx).toMatchObject({
        status: 500,
        body: "Error",
      })
    })
  })

  describe('getProductById', () => {
    beforeAll(() => {
      ctx = { params: { id: 1 } }
    })

    it('return a products', async () => {
      const productsMock = [{"_id":"62255e348487021893ad08e5","id":1,"brand":"ooy eqrceli","description":"rlñlw brhrka","image":"www.lider.cl/catalogo/images/whiteLineIcon.svg","price":498724}]
      productById.mockReturnValueOnce(productsMock)

      await getProductById(ctx)

      expect(ctx.body.length).toEqual(1)
    })

    it('return an error when getProductById fails', async () => {
      productById.mockImplementation(() => {
        throw new Error();
      })

      await getProductById(ctx)

      expect(ctx).toMatchObject({
        status: 500,
        body: "Error",
      })
    })

    it('return empty params id string', async () => {
        ctx = { params: { id: 'oso' } }
        const productsMock = []
        productById.mockReturnValueOnce(productsMock)
  
        await getProductById(ctx)
  
        expect(ctx.body.length).toEqual(0)
    })

  })

  describe('isPalindrome', () => {
    beforeAll(() => {
      str = 'oso'
    })

    it('return isPalondrome true', async () => {
      expect(await isPalindrome(str)).toEqual(true)
    })

    it('return isPalondrome false', async () => {
        str = 'paralelepipedo'
        expect(await isPalindrome(str)).toEqual(false)
    })

    it('return isPalondrome false str is null', async () => {
        str = null
        expect(await isPalindrome(str)).toEqual(false)
    })
  })


})
