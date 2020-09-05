var conn = require("./connect")

class Product {
    constructor(name, price, cateId) {
        this.name = name
        this.price = price
        this.cateId = cateId
    }

    static addProduct(product, callback) {
        let sql = "INSERT INTO product(name, price, category_id) VALUES(?, ?, ?)"
        conn.query(sql, [product.name, parseFloat(product.price), parseInt(product.cateId)], 
            (err, data) => callback(err, data))
    }

    static getProducts(kw, callback) {
        let sql = "SELECT * FROM product"
        if (kw)
            sql += ` WHERE name like '%${kw}%'`

        conn.query(sql, (err, products) => {
            callback(err, products)
        })
    }

    static getProductById(proId, callback) {
        let sql = "SELECT * FROM product WHERE id=?"
        conn.query(sql, [proId], (err, product) => callback(err, product))
    }
}

module.exports = Product