const {pingRouteController} = require('./controllers/ping')
const { getProducts, getProductById } = require('../controllers/productController')

function loadRoutes(router) {
  router.get('/ping', pingRouteController)
  router.get('/products', getProducts)
  router.get('/product/:id', getProductById)
  return router
}

module.exports = {loadRoutes}
