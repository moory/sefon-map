/**
 * 由  冯博 创建于 2016/8/15.
 * @file server
 * @description
 */

var path = require('path');
var express = require('express');
var http = require('http');
var Mock = require("mockjs");

var app = express();

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/vendor', express.static(__dirname + '/demo/vendor'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/config', express.static(__dirname + '/demo/config'));
app.use('/maptile', express.static(__dirname + '/demo/maptile'));
app.use('/img', express.static(__dirname + '/demo/img'));
app.use('/addBaiduMap.js', express.static(__dirname + '/demo/addBaiduMap.js'));
app.use('/addMutiPoints.js', express.static(__dirname + '/demo/addMutiPoints.js'));
// app.use(express.static('./vendor'));
app.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname, '', './demo/base-map.html'))
});
app.get('/getData', function(request, response) {
    var data = Mock.mock({
        "list|3000": [{
            "lat|30-31.0-9": 1,
            "lng|120-122.0-7": 1,
            score: "@integer(1, 100)"
        }]
    })
    response.send(data);
})
var port = 3000;
var server = http.createServer(app);

server.listen(port, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('服务运行在端口:' + port);
    }
});