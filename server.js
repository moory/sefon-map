/**
 * 由  冯博 创建于 2016/8/15.
 * @file server
 * @description
 */

var path = require('path');
var express = require('express');
var http = require('http');

var app = express();

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '', '../demo/base-map.html'))
});

var port = 3000;
var server = http.createServer(app);
server.listen(port, function (err, result) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('服务运行在端口:' + port);
    }
})