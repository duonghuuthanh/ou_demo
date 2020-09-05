var mysql = require('mysql')
var config = require('../configs/db')

var connection = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
})

module.exports = connection
