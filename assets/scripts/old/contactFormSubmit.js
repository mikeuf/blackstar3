function contactFormSubmit() { 
 
  if (grecaptcha.getResponse() == ""){ 
    alert("Complete the reCAPTCHA verification before submitting."); 
  } else { 
 
 
    var formName = document.getElementById("Name").value; 
    var formEmail = document.getElementById("Email").value; 
    var formMessage = document.getElementById("Message").value; 
    var data = JSON.stringify({ 'name' : formName, 'email' : formEmail, 'message' : formMessage }); 
    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() { 
      if (this.readyState == 4 && this.status == 200) { 
        document.getElementById('contact-form').innerHTML = this.responseText; 
      } 
    }; 
    xhttp.open("POST", "https://www.mikepblack.com:8080/submit-contact-form", true); 
    xhttp.setRequestHeader("Content-Type", "application/json"); 
    xhttp.send(data); 
 
  }  
}
