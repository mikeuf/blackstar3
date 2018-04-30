var https = require("https");
var fs = require('fs');
var url = require('url');
var cors = require('cors');
var express = require('express');
var app = express();


    https.createServer({
 key: fs.readFileSync("/etc/nginx/ssl/mikepblack_com/mikepblack.com.key"),
 cert: fs.readFileSync("/etc/nginx/ssl/mikepblack_com/mikepblack.com.crt")
    }, app).listen(8080);

app.use(cors());

    app.get('/', function (req, res) {
      res.header('Content-type', 'text/html');
      return res.end('<h1>Hello, Secure World!</h1>');
    });



     /*   app.use(function(req, res, next) {
//            res.header("Access-Control-Allow-Origin", "*");
  //          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //        next();
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello world!\n");
        });
*/

// https.createServer(options, app).listen(8080);
/*
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(8080, () => console.log('Example app listening on port 3000!'))
*/
/*
https.createServer(options, function(request, response)
    {
    var path = url.parse(request.url).pathname;
    if(path=="/connector")
    console.log("request recieved for connector");
    console.log("Path is " + path);

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World!');
  response.end();
}).listen(8080);
*/

console.log("server initialized");
