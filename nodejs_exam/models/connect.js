var mysql = require('mysql')
var db = require('../configs/db')

conn = mysql.createConnection({
    'host': db.HOST,
    'user': db.USER,
    'password': db.PASSWORD,
    'database': db.DATABASE
})

module.exports = conn