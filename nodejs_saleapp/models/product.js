const { read } = require('fs')

conn = require('./db')

class Product {
    constructor(name, price, cateId) {
        this.name = name
        this.price = price
        this.cateId = cateId
    }

    static addProduct = (result, product) => {
        let sql = "INSERT INTO product(name, price, category_id) VALUES(?, ?, ?)"
        conn.query(sql, [product.name, parseFloat(product.price), parseFloat(product.cateId)], 
            (err, data) => result(err, data))
    }

    static getProducts = (result, kw=null) => {
        let sql = "SELECT * FROM product"
        if (kw != null)
            sql += ` WHERE name like '%${kw}%'`
        
        conn.query(sql, (err, products) => result(err, products))
    }

    

    static getProductById = (result, productId) => {
        let sql = "SELECT * FROM product WHERE id=?"
        conn.query(sql, [productId], (err, products) => {
            if (err) 
                result(err, null)
            else
                result(err, products[0])
        })       
    }
}

module.exports = Product