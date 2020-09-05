var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var productRouter = require('./routes/productRouter')
var port = 8081

app.use(bodyParser.json()) // application/json
app.use(bodyParser.urlencoded({extended: true})) // application/x-www-form-urlencoded
app.use('/products', productRouter)


app.listen(port, (err) => {
    if (err)
        console.error(err)
    else
        console.info(`http://127.0.0.1:${port}`)
})

