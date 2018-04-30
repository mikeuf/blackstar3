var https = require("https");
var fs = require('fs');
var url = require('url');
var cors = require('cors');
var express = require('express');
var app = express();

// BEGIN nodemailer variables
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mikepblack.com.contact.form@gmail.com',
    pass: 'gMonster$2g'
  }
});

var mailOptions = {
  from: 'mikepblack.com.contact.form@gmail.com',
  to: 'mike@mikepblack.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

 var transporter = nodemailer.createTransport(
{
        service: 'Gmail',
        auth: {
            user: 'mikepblack.com.contact.form@gmail.com', // Your email id
            pass: 'gMonster$2g' // Your password
        }
    });
// END nodemailer variables


    https.createServer({
 key: fs.readFileSync("/etc/nginx/ssl/mikepblack_com/mikepblack.com.key"),
 cert: fs.readFileSync("/etc/nginx/ssl/mikepblack_com/mikepblack.com.crt")
    }, app).listen(8080);

app.use(cors());


    app.get('/hello-world', function (req, res) {
      res.header('Content-type', 'text/html');
      return res.end('<h1>Hello, Secure World!</h1>');
    });

    app.get('/submit-contact-form', function (req, res) 
{
console.log("/submit-contact-form route");
      res.header('Content-type', 'text/html');
      res.send('<h1>Sending mail?</h1>');
console.log("before sending mail");

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});
return res.end();
    });

console.log("server initialized");
