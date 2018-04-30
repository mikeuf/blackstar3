var http = require("http");
var url = require('url');

http.createServer(function(request, response)
    {
    var path = url.parse(request.url).pathname;
//    if(path=="/connector")
//    {
    console.log("request recieved for connector");
    console.log("Path is " + path);
    response.statusCode = 200;
    response.responseText = "Response from the server!";
  response.writeHead(200, {'Content-type':'text/plan'});
  response.write('<!DOCTYPE html><html><body>');
  response.write('Hello Node JS Server Response');
  response.write('</body></html>');
  response.end('ending');

//    }
}).listen(8080);
console.log("server initialized");
