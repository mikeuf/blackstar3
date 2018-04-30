$(document).ready(function() 

{
    // Global variables
    var a = 0;
    var b = 0;
    var n = 0;
    var x = new Array();
    var y = new Array(); 
    var v = new Array();

function calculateY(a, b, n) {
    b = 1 + b/100;
    var y = a * Math.pow(b,n); // calculate final value
    y = Math.round(100 * y)/100; // round to hundredths
    return y;

}

function calculate() {
    
    a = Number($('#p').val());
    b = Number($('#i').val());
    n = Number($('#y').val());
    var y = calculateY(a, b, n);
    var j = 0;
    var html = "";

    

    /*
    
    for (x = xmin; x <= xmax; x++) {
        y = calculateY(a, b, c, x);
        s += " X = " + x + " Y = " + y + "<br/>";
    }
    */

 html = "<br />Final Value: $" + f + "<br /><br />"

    output.innerHTML = html;
}

function displayValues()
{
   var s = "";
    
    s = "Y = " + a + " x<sup>2</sup> + ";
    s+= b + " x + " + c + "<br/><br/>";
    
    for (var i = 0; i <= n; i++)
    {
        s += " X = " + x[i] + " Y = " + y[i] + "<br/>";       
    }
    
    output.innerHTML = s;
}

function plotValues()
{

alert("plotValues()");

container.innerHTML = "plotting";

   calculate();
   chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: 'Quadratic Equation',
                x: -20 //center
            },
            xAxis: {
                title: {
                    text: 'X'
                }
            },
            yAxis: {
                title: {
                    text: 'Y'
                }   
            }, 
       
       plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    }
                }
            },
       
       series: [{
                name: 'Y Values',
                color: 'rgba(223, 83, 83, .5)',
                data: v
       }]                
   })   

}
          

$('#calculate').click( function() {
     calculate();
     displayValues();    
});

$('#plot').click( function() {
     calculate();
     plotValues();   
});

});

