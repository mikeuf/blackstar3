// var http = require('http');
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

  console.log("Loaded vars");

  http.createServer(function(req, res) {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.write('Hello World!');
  // res.end();

  console.log("Creating server");
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}).listen(8080);


console.log("Listening");
});
