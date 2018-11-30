window.onload = function() {
getRandomImage();
}

var exitLink = document.getElementById('exit-link');
exitLink.addEventListener('click', function() { modalWindowConfirmLeave(event); }, false);

var h1 = document.getElementById('heading1');
h1.addEventListener('click', function() { scrollWindowDown(event); }, false);

// Show a modal window confirming if the user wants to leave the page
function modalWindowConfirmLeave(event) {
    var isConfirmed = confirm('Are you sure you want to leave?');
    if (isConfirmed === false) {
        event.preventDefault();
        alert('OK. You can stay!');
    } 
}

// Scrolls window down when the h1 element is clicked
function scrollWindowDown(event) {
    window.scrollBy(0,200);
}

function getRandomImage() {
var images = ['images/tomatoes-caprese1.jpg', 'images/tomatoes-caprese2.jpg', 'images/tomatoes-caprese3.jpg'];
var randomNumber = Math.floor(Math.random() * 3);
document.getElementById('photo-tomatoes-caprese').src = images[randomNumber];
}