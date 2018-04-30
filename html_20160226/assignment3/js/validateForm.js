// This is based on Dr. Eaglin's example at:
// https://cop4813eaglin.pbworks.com/w/page/69307547/Lecture%20-%20Basics%20-%20Functions%20and%20Form%20Validation

function ValidateForm()
{

  var FirstName = document.forms["form1"]["FirstName"].value;
  if (!ValidateNotBlank(FirstName, "first name" ))  return false;

  var LastName = document.forms["form1"]["LastName"].value;
  if (!ValidateNotBlank(LastName, "last name" ))  return false;

  var Email = document.forms["form1"]["Email"].value;
  if (!ValidateNotBlank(Email, "email address" ))  return false;
 
 
  var AreaCode = document.forms["form1"]["AreaCode"].value;
  if (!ValidateNotBlank(AreaCode, "area code" ))  return false;

  if (!ValidateAreaCodeLength(AreaCode)) return false;

  var Phone = document.forms["form1"]["Phone"].value;
  if (!ValidateNotBlank(Phone, "remaining phone number" ))  return false;

  if (!ValidatePhoneNumLength(Phone)) return false;

  var BirthMonth = document.forms["form1"]["BirthMonth"].value;
  if (!ValidateNotBlank(BirthMonth, "birth month" ))  return false;

  var BirthDay = document.forms["form1"]["BirthDay"].value;
  if (!ValidateNotBlank(BirthDay, "birth day" ))  return false;

  var BirthYear = document.forms["form1"]["BirthYear"].value;
  if (!ValidateNotBlank(BirthYear, "birth year" ))  return false;

  if (!ValidateDate(BirthMonth, BirthDay, BirthYear)) return false; 

  var StreetNum = document.forms["form1"]["StreetNum"].value;
  if (!ValidateNotBlank(StreetNum, "street number" ))  return false;

  var Street = document.forms["form1"]["Street"].value;
  if (!ValidateNotBlank(Street, "street name" ))  return false;

  var City = document.forms["form1"]["City"].value;
  if (!ValidateNotBlank(City, "city" ))  return false;

  var State = document.forms["form1"]["State"].value;
  if (!ValidateNotBlank(State, "state" ))  return false;

  var Zip = document.forms["form1"]["Zip"].value;
  if (!ValidateNotBlank(Zip, "zip code" ))  return false;

  if (!ValidateZipCodeLength(Zip)) return false;

  var LastFour = document.forms["form1"]["LastFour"].value;

  if (!ValidateLastFourLength(LastFour)) return false;

 var Message = document.forms["form1"]["Message"].value;
  if (!ValidateNotBlank(Message,"message")) return false;

  return true;
}


function ValidateAreaCodeLength(val)
{
  if (val.length != 3)
  {
  alert("Area code must be exactly 3 digits.");
  return false;
  }
  return true;
}

function ValidatePhoneNumLength(val)
{
  if (val.length != 7)
  {
  alert("Remainder of phone number must be exactly 7 digits.");
  return false;
  }
  return true;
}


function ValidateZipCodeLength(val)
{
  if (val.length != 5)
  {
  alert("A first portion of a zip code must be exactly 5 digits.");
  return false;
  }
  return true;
}


function ValidateLastFourLength(val)
{
  if (val.length != 4 && val.length != 0)
  {
    alert("The 4 digit extension must be either 4 digits or omitted entirely.");
    return false;
  }
  return true;
}



function ValidateNotBlank(val, message)
{
  if (val == null || val == "") 
  {
   alert("Enter your " + message + ".");
   return false;
  }
  return true;
}



function ValidateDate(month, day, year)
{
  var getDate = month + "/" + day + "/" + year; 
  var d_as_date = Date.parse(getDate);
  var today = new Date();
  var datediff = Math.abs(today - d_as_date);

  if ((datediff < 410240000000) && (d_as_date < today))
  {
  alert("You must be at least 13 years of age to use this form.");
  return false;
  }

  if (d_as_date > today)
  {
  alert("Your birth date should not be in the future.");
  return false;
  }
return true;
}

