function executeForm()
{
if (ValidateForm())
  {
  sendEmail();
  }
return true;
}

function ValidateForm()
{

  var Name = document.forms["form1"]["Name"].value;
  if (!ValidateNotBlank(Name, "name" ))  return false;

  var Email = document.forms["form1"]["Email"].value;
  if (!ValidateNotBlank(Email, "email address" ))  return false;

var Message = document.forms["form1"]["Message"].value;
  if (!ValidateNotBlank(Message,"message")) return false;

}


function ValidateNotBlank(val, message)
{
  if (val == null || val == "")
  {
   alert("Enter a " + message + ".");
   return false;
  }
  return true;
}

function sendEmail()
{
var Name = document.forms["form1"]["Name"].value;
var email = document.forms["form1"]["Email"].value;
var subject = document.forms["form1"]["Subject"].value;
var message = document.forms["form1"]["Message"].value;
var contents = ('Name: ' + Name + '%0D%0A%0D%0A' + 'Email: ' + email + '%0D%0A%0D%0A' + 'Message: ' + message)
var mailtoURL = ('mailto:mike@mikepblack.com' + '?subject=mikepblack.com Contact Form message: ' + subject + '&body=' + contents);

    var win = window.open(mailtoURL);
    //if (win && win.open && !win.closed) win.close();

}
