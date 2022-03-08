const {pingRouteController} = require('./controllers/ping')
const { getProducts, getProductById, getProductByStr } = require('../controllers/productController')

function loadRoutes(router) {
  router.get('/ping', pingRouteController)
  router.get('/products', getProducts)
  router.get('/product/:id', getProductById)
  router.get('/product/:str', getProductByStr)
  return router
}

module.exports = {loadRoutes}
