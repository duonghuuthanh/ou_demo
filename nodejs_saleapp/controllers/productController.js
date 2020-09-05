var models = require('../models/product')
const { realpathSync } = require('fs')

exports.getProducts = (req, res) => {
    let kw = req.query.kw
    models.getProducts((err, products) => {
        if (err) {
            console.error(err)
            return
        }

        res.send(products)
    }, kw)
}

exports.addProduct = (req, res) => {
    console.info(req.body)
    let p = new models(req.body.name, req.body.price, req.body.cateId)

    models.addProduct((err, data) => {
        if (err)
            console.info(err)
        else
            res.status(200).send(JSON.stringify({data: data}))
    }, p)
}

exports.getProductById = (req, res) => {
    let productId = req.params.id
    models.getProductById((err, product) => {
        if (err) {
            console.error(err)
            res.status(500).send({'error': err});
        }

        res.send(product)
    }, productId)
}
