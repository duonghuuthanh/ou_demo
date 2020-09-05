var router = require('express').Router()
var controller = require('../controllers/productController')

router.get('/', (req, res) => {
    controller.getProducts(req, res)
})

router.post('/', (req, res) => {
    controller.addProduct(req, res)
})

router.get('/:id', (req, res) => {
    controller.getProductById(req, res)
})

module.exports = router