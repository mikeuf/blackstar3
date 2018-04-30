function calculateF(p, i, y) {
    i = 1 + i/100;
    var f = p * Math.pow(i,y); // calculate final value
    f = Math.round(100 * f)/100; // round to hundredths
    return f;

}

function calculate() {
    
    var p = Number($('#p').val());
    var i = Number($('#i').val());
    var y = Number($('#y').val());
    var f = calculateF(p, i, y);
    var j = 0;

alert("hello");    

    /*
    
    for (x = xmin; x <= xmax; x++) {
        y = calculateY(a, b, c, x);
        s += " X = " + x + " Y = " + y + "<br/>";
    }
    */


    output.innerHTML = "Final Value: $" + f + "<br /><br />";
}

$('#calculate').click( function() {
     calculate();  
});

