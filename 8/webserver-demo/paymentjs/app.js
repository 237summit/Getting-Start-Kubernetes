const http = require('http');
var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("PAYMENT Page" + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
