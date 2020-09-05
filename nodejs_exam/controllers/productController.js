productModel = require("../models/product")

exports.getProducts = (req, res) => {
    let kw = req.query.kw

    productModel.getProducts(kw, (err, products) => {
        if (err) 
            console.error(err)
        else
            res.send(products)
    })
}

exports.addProduct = (req, res) => {
    let product = new productModel(req.body.name, req.body.price, req.body.cateId)
    productModel.addProduct(product, (err, data) => {
        console.log(data)
        
        if (err)
            res.status(500).send(JSON.stringify({"message": "FAILED"}))
        else
            res.status(202).send(JSON.stringify({"message": "success"}))
    })
}

exports.getProductDetail = (req, res) => {
    productModel.getProductById(req.params.id, (err, product) => {
        if (err)
            console.error(err)
        else
            res.send(product)
    })
}