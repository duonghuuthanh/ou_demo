var http = require('http')
var fs = require('fs')
var url = require('url')
var parse = require('querystring')


var renderHTML = function(req, res, path='nodejs2208/index.html') {
    fs.readFile(path, function(err, data) {
        if (err)
            throw err
        
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(data)
        res.end()
    })
}

var readQuestion = function(req, res) {
    fs.readFile('nodejs2208/data/question.txt', 
        function(err, data) {
        if (err)
            throw err
        
        data = JSON.parse(data)

        var path = url.parse(req.url, true)
        if (path.query.keyword)
            data = data.filter(q => q.content.toLowerCase().indexOf(path.query.keyword.toLowerCase()) >= 0)
        
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.write(JSON.stringify(data))
        res.end()
    })
}

var addQuestion = function(req, res) {
    let body = ''
    req.on('data', chunk => {
       body += chunk.toString()
    })
    req.on('end', () => {
        console.info(parse.parse(body))
    })
    
}

http.createServer(function(req, res) {
    var path = url.parse(req.url, true)
    switch (path.pathname) {
        case '/':
            renderHTML(req, res)
            break
        case '/questions':
            renderHTML(req, res, 'nodejs2208/question.html')
            break
        case '/questions-add':
                renderHTML(req, res, 'nodejs2208/question-add.html')
                break
        case '/api/questions':
            if (req.method == 'GET') {
                readQuestion(req, res)
            } else if (req.method == 'POST') {
                addQuestion(req, res)
            }
            break
    }

    renderHTML(req, res)
}).listen(8085)

console.info("http://127.0.0.1:8085")