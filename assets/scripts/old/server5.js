var https = require("https");
var fs = require('fs');
var url = require('url');
var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
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

 var transporter = nodemailer.createTransport(
{
        service: 'Gmail',
        auth: {
            user: 'mikepblack.com.contact.form@gmail.com', // Your email id
            pass: 'gMonster$2g' // Your password
        }
    });
// END nodemailer variables

// SSL keys
    https.createServer({
 key: fs.readFileSync("/etc/nginx/ssl/mikepblack_com/mikepblack.com.key"),
 cert: fs.readFileSync("/etc/nginx/ssl/mikepblack_com/mikepblack.com.crt")
    }, app).listen(8080);

// need for "Cross-Origin Resource Sharing" (different ports)
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
 app.use(bodyParser.json())

    app.get('/hello-world', function (req, res) {
      res.header('Content-type', 'text/html');
      return res.end('<h1>Hello, Secure World!</h1>');
    });

    app.post('/submit-contact-form', function (req, res) 
{

      res.header('Content-type', 'text/html');
      res.send('<p>Your message has been submitted.</p>');
data = req.body;


var mailOptions = {
  from: 'mikepblack.com.contact.form@gmail.com',
  to: 'mike@mikepblack.com',
  subject: 'Contact Form Submission from mikepblack.com',
  text: ("NAME:\n" + data.name + "\n\nEMAIL:\n" + data.email + "\n\nMESSAGE:\n" + data.message)
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
res.send(error);
        //res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.send('<p>Message sent: ' + info.response + '</p>');
        // res.json({yo: info.response});
    };
});

return res.end();
    });

console.log("server initialized");
