setTimeout (function () {
var stay = confirm("Do you want to continue using this web site?");
if (stay === false) {
    window.location = "http://www.google.com";
}
}, 20000);