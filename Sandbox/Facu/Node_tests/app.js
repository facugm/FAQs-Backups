var http = require('http');
var fs = require('fs');
var dt = require('./myfirstmodule');

const hostname = '127.0.0.1';
const port = 8080;

var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
