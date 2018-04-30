$(document).ready(function() 

    {
    // Global variables
    var a = 0;
    var increment = 0;
    var x = new Array();
    var y = new Array(); 
    var v = new Array();

    function calculateF(p, b, n) {
    // var n = 0;
    // var p = 0;

    var b = 1 + b/100;
    var f = p * Math.pow(b,n); // calculate final value
    f = Math.round(100 * f)/100; // round to hundredths
    return f;

    }

    function calculateY(p, b, n, increment) {
      // var n = 0; // years
      // var p = 0; // principal

      // var b = b/100; // interest
      //alert("interest: " + b);
       // alert("p: " + p);
        p = p * (1 + (b/100));
       // alert("new p: " + p);
        p = Math.round(100 * p)/100; // round to hundredths

      return p;

    }

    function calculate() {

      var p = Number($('#p').val());
      var b = Number($('#i').val());
      var n = Number($('#y').val());
      var f = calculateF(p, b, n);
      var j = 0;
      var i = 0;    
      var html = "";

      y[i] = p;
      x[i] = x; 
        v[i] = [x[i], y[i]];

      for (x = 0; x < n; ++x) {
        ++i;
        x[i] = x;    
        y[i] = calculateY(p, b, n, increment);
        v[i] = [x[i], y[i]];
        p = y[i];
      }

      html = "<br />Final Balance: $" + f + "<br /><br />";
/*      html = "<br />Final Value: $" + f + "<br /><br />y[0]:" + y[0] + "<br />y[1]:"
        + y[1] + "<br />y[2]:" + y[2] + "<br />y[29]:" + y[29];
*/
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

      //alert("plotValues()");

      //container.innerHTML = "plotting";

      calculate();
      chart = new Highcharts.Chart({
chart: {
renderTo: 'container',
type: 'line',
marginRight: 100,
marginBottom: 100
},
title: {
text: 'Compound Interest Calculator',
x: -20 //center
},
xAxis: {
title: {
text: 'Time (in years)'
}
},
yAxis: {
title: {
text: 'Balance'
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
name: 'Balance',
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

