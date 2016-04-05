var http = require('http');
var EventEmitter = require('./index');
http.createServer(function(req,res){
    res.writeHeader(200);
    EventEmitter.hotel;
    res.end('Success\n');

}).listen(8080);
console.log('Success');
