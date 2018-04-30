$(document).ready (function( ){
var timerInterval = 1000;
    var infLoop = 0;

var timer = window.setInterval(function() { ballTimer() }, 
                              timerInterval);  

$( "#go" ).click(function() {
   window.clearInterval(timer);
});

function ballTimer()
{
  moveBall($('.ball'));   
}

$("#ball").click(function() {
  alert( "Meow" );
    $("#ball").attr('src',"http://michaelpatrickblack.com/images/abeVigoda.jpg");
   return false;

});

function moveBall(obj)
{
    var left = obj.offset().left;
    var top = obj.offset().top;
    var moveDuration = 1000;
 //   $('#stats').html('left:' + left  + ' top:' + top);
    
var direction = Math.floor(Math.random() * 4);
    var topDifferential = 0;
    var leftDifferential = 0;
    
   
    
    // north
    if (direction == 0)
    {
    //   $('#dir').html("dir: " + direction);     
 left = Math.floor(Math.random() * 400);
        obj.animate({ top: "0px", left: left }, moveDuration ); 

    }
       
    // south
    if (direction == 1)
    {
      //         $('#dir').html("dir: " + direction);    
        left = Math.floor(Math.random() * 400);
        obj.animate({ top: "400px", left: left }, moveDuration ); 
    }
        // east
    if (direction == 2)
    {
      //         $('#dir').html("dir: " + direction);  
                top = Math.floor(Math.random() * 400);
        obj.animate({ top: top, left: "400px" }, moveDuration ); 

    }
    
        // west
    if (direction == 3)
    {
    //           $('#dir').html("dir: " + direction);    
                top = Math.floor(Math.random() * 400);
        obj.animate({ top: top, left: "0px" }, moveDuration ); 
    }
    
 
}
});
