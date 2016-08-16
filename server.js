/**
 * 由  冯博 创建于 2016/8/15.
 * @file server
 * @description
 */

var path = require('path');
var express = require('express');
var http = require('http');

var app = express();

app.use('/node_modules',express.static(__dirname+'/node_modules'));
app.use('/vendor',express.static(__dirname+'/demo/vendor'));
app.use('/dist',express.static(__dirname+'/dist'));
app.use('/config',express.static(__dirname+'/demo/config'));
app.use('/tile_google',express.static(__dirname+'/demo/tile_google'));
app.use('/zone-sync.js',express.static(__dirname+'/demo/zone-sync.js'));
// app.use(express.static('./vendor'));
app.get('/', function (request, response) {
    response.sendFile(path.resolve(__dirname, '', './demo/zone-sync.html'))
});

var port = 3000;
var server = http.createServer(app);

server.listen(port,'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('服务运行在端口:' + port);
    }
});