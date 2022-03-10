const productSchema = require('@schema/product-schema')
const { allProducts, productById, productByStr } = require('@models/product')

jest.mock('@schema/product-schema', () => ({
  find: jest.fn().mockImplementationOnce(() => ({
    limit: jest.fn().mockImplementationOnce(() => ([])),}))
}))

allProducts.find = jest.fn().mockImplementation(() => ({ limit: 
  jest.fn().mockResolvedValue([])})); 

describe('Product model test', () => {
  it('return all products', async () => {
    const productsMock = []
    productSchema.find.mockReturnValueOnce(productsMock)
    const products = await allProducts()
    expect(products).toEqual(productsMock)
  })

  it('return the product returned by productById', async () => {
    const productMock = []
    productSchema.find.mockReturnValueOnce(productMock)
    const product = await productById()
    expect(product).toEqual(productMock)
  })

  it('return the product returned by productByStr', async () => {
    const productMock = []
    productSchema.find.mockReturnValueOnce(productMock)
    const product = await productByStr()
    expect(product).toEqual(productMock)
  })
})
