var http = require("http");
var url = require('url');

http.createServer(function(request, response)
    {
    var path = url.parse(request.url).pathname;
    if(path=="/connector")
    console.log("request recieved for connector");
    console.log("Path is " + path);
    console.log("httpVersion is " + request.httpVersion);

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World!');
  response.end();
}).listen(8080);
console.log("server initialized");
