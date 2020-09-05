var router = require('express').Router()
var proController = require('../controllers/productController')

router.get('/', (req, res) => {
    proController.getProducts(req, res)
})

router.post('/', (req, res) => {
    proController.addProduct(req, res)
})

router.get('/:id', (req, res) => {
    proController.getProductDetail(req, res)
})

module.exports = router