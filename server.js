var express = require('express');
var app = express();
var port = 1337;

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World, you are on Home page !');
    console.log('INFOS:: user connected on home page !');
});

app.listen(port);
console.log('INFOS:: Web Server now running on port "'+port+'" check here => http://localhost:1337');