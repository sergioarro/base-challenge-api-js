const { allProducts, productById, productByStr } = require('@models/product')
const { getProducts, getProductById, isPalindrome, getProductByStr } = require('@controllers/productController')

jest.mock('@models/product', () => ({
  allProducts: jest.fn(),
  productById: jest.fn(),
  productByStr: jest.fn(),
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

    it('return an error when fails', async () => {
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

    it('return an error when fails', async () => {
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

    it('return false str is empty', async () => {
        str = null
        expect(await isPalindrome(str)).toEqual(false)
    })
  })

  describe('getProductByStr', () => {

    it('return a products string adssdal', async () => {
        ctx = { params: { str: 'adssdal' } }
        const productsMock = [
            { "_id" : "62255e348487021893ad0a91", "id" : 215, "brand" : "adssdal", "description" : "fxzzj brynbv", "image" : "www.lider.cl/catalogo/images/electronicsIcon.svg", "price" : 871942 },
            { "_id" : "62255e348487021893ad0d37", "id" : 554, "brand" : "adssdal", "description" : "ugis modjhltc", "image" : "www.lider.cl/catalogo/images/tvIcon.svg", "price" : 634044 },
            { "_id" : "62255e348487021893ad0d67", "id" : 578, "brand" : "adssdal", "description" : "ysahli xhgio", "image" : "www.lider.cl/catalogo/images/electronicsIcon.svg", "price" : 28829 },
            { "_id" : "62255e348487021893ad0e5d", "id" : 701, "brand" : "adssdal", "description" : "xvdbn qrelrr", "image" : "www.lider.cl/catalogo/images/furnitureIcon.svg", "price" : 8119 },
            { "_id" : "62255e348487021893ad0e9f", "id" : 734, "brand" : "adssdal", "description" : "mñwysa pkcfw", "image" : "www.lider.cl/catalogo/images/toysIcon.svg", "price" : 492342 },
            { "_id" : "62255e348487021893ad101f", "id" : 926, "brand" : "adssdal", "description" : "yqfc rwkdjwqa", "image" : "www.lider.cl/catalogo/images/furnitureIcon.svg", "price" : 728652 },
            { "_id" : "62255e348487021893ad124f", "id" : 1206, "brand" : "adssdal", "description" : "kxzdm gñyzup", "image" : "www.lider.cl/catalogo/images/smartphoneIcon.svg", "price" : 935765 },
            { "_id" : "62255e348487021893ad1447", "id" : 1458, "brand" : "adssdal", "description" : "eñgqp ñqknol", "image" : "www.lider.cl/catalogo/images/homeIcon.svg", "price" : 78703 },
            { "_id" : "62255e348487021893ad1a23", "id" : 2208, "brand" : "adssdal", "description" : "etoel hrmmfy", "image" : "www.lider.cl/catalogo/images/furnitureIcon.svg", "price" : 235605 },
            { "_id" : "62255e348487021893ad1b5b", "id" : 2364, "brand" : "adssdal", "description" : "kdypuh pzjoj", "image" : "www.lider.cl/catalogo/images/gamesIcon.svg", "price" : 409131 },
            { "_id" : "62255e348487021893ad1ba1", "id" : 2399, "brand" : "adssdal", "description" : "bcynw xzlmso", "image" : "www.lider.cl/catalogo/images/computerIcon.svg", "price" : 179344 },
            { "_id" : "62255e348487021893ad1ec9", "id" : 2803, "brand" : "adssdal", "description" : "cxzbz lahbhe", "image" : "www.lider.cl/catalogo/images/bicycleIcon.svg", "price" : 108116 }
        ]
        productByStr.mockReturnValueOnce(productsMock)
  
        await getProductByStr(ctx)
  
        expect(ctx.body.length).toEqual(12)
    })

    it('return product not palindrome', async () => {
        let ctx = { params: { str: 'prodTest' } }
        const productsMock = [
            { "_id" : "62255e348487021893ad0a90", "id" : 217, "brand" : "prodTest", "description" : "fxzzj brynbv", "image" : "www.lider.cl/catalogo/images/electronicsIcon.svg", "price" : 871942 }
        ]
        productByStr.mockReturnValueOnce(productsMock)
  
        await getProductByStr(ctx)
  
        expect(ctx.body[0].price).toEqual(871942)
    })

    it('return not product and str palindrome', async () => {
        let ctx = { params: { str: 'adssda' } }
        const productsMock = []
        productByStr.mockReturnValueOnce(productsMock)
  
        await getProductByStr(ctx)
  
        expect(ctx.body.length).toEqual(0)
    })

    it('return products palindrome whit discount', async () => {
        ctx = { params: { str: 'adssda' } }
        const productsMock = [
            { "_id" : "62255e348487021893ad0a91", "id" : 215, "brand" : "adssda", "description" : "fxzzj brynbv", "image" : "www.lider.cl/catalogo/images/electronicsIcon.svg", "price" : 871942 },
            { "_id" : "62255e348487021893ad0d37", "id" : 554, "brand" : "adssda", "description" : "ugis modjhltc", "image" : "www.lider.cl/catalogo/images/tvIcon.svg", "price" : 634044 },
            { "_id" : "62255e348487021893ad0d67", "id" : 578, "brand" : "adssda", "description" : "ysahli xhgio", "image" : "www.lider.cl/catalogo/images/electronicsIcon.svg", "price" : 28829 },
            { "_id" : "62255e348487021893ad0e5d", "id" : 701, "brand" : "adssda", "description" : "xvdbn qrelrr", "image" : "www.lider.cl/catalogo/images/furnitureIcon.svg", "price" : 8119 },
            { "_id" : "62255e348487021893ad0e9f", "id" : 734, "brand" : "adssda", "description" : "mñwysa pkcfw", "image" : "www.lider.cl/catalogo/images/toysIcon.svg", "price" : 492342 },
            { "_id" : "62255e348487021893ad101f", "id" : 926, "brand" : "adssda", "description" : "yqfc rwkdjwqa", "image" : "www.lider.cl/catalogo/images/furnitureIcon.svg", "price" : 728652 },
            { "_id" : "62255e348487021893ad124f", "id" : 1206, "brand" : "adssda", "description" : "kxzdm gñyzup", "image" : "www.lider.cl/catalogo/images/smartphoneIcon.svg", "price" : 935765 },
            { "_id" : "62255e348487021893ad1447", "id" : 1458, "brand" : "adssda", "description" : "eñgqp ñqknol", "image" : "www.lider.cl/catalogo/images/homeIcon.svg", "price" : 78703 },
            { "_id" : "62255e348487021893ad1a23", "id" : 2208, "brand" : "adssda", "description" : "etoel hrmmfy", "image" : "www.lider.cl/catalogo/images/furnitureIcon.svg", "price" : 235605 },
            { "_id" : "62255e348487021893ad1b5b", "id" : 2364, "brand" : "adssda", "description" : "kdypuh pzjoj", "image" : "www.lider.cl/catalogo/images/gamesIcon.svg", "price" : 409131 },
            { "_id" : "62255e348487021893ad1ba1", "id" : 2399, "brand" : "adssda", "description" : "bcynw xzlmso", "image" : "www.lider.cl/catalogo/images/computerIcon.svg", "price" : 179344 },
            { "_id" : "62255e348487021893ad1ec9", "id" : 2803, "brand" : "adssda", "description" : "cxzbz lahbhe", "image" : "www.lider.cl/catalogo/images/bicycleIcon.svg", "price" : 108116 }
        ]
        productByStr.mockReturnValueOnce(productsMock)
  
        await getProductByStr(ctx)
  
        expect(ctx.body[0].price).toEqual(435971)
    })

    it('return an error when fails', async () => {
        productByStr.mockImplementation(() => {
          throw new Error();
        })
  
        await getProductByStr(ctx)
  
        expect(ctx).toMatchObject({
          status: 500,
          body: "Error",
        })
      })

  })

})
