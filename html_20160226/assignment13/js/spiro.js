var t = 0;
var c = document.getElementById("myCanvas");
var R = c.width / 2;
var ctx = c.getContext("2d");


function doDrawing() {
    t = 0;


    // Clear the Canvas
    ctx.clear();

    // Create a random color
    var timesRun = 0;
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);


    // Initial x and y
    var x = R + R * Math.cos(0);
    var y = R + R * Math.sin(0);

    // Start the Drawing
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x, y);


    //Use the timer to create drawing
    var interval = setInterval(function () {
        timesRun += 1;
        if (timesRun === 65) {
            clearInterval(interval);
        }

        drawCircle();
    }, 20);

}

function drawCircle() {
    t += 0.1;
    r = 50;
   x = Math.floor(R + R * Math.cos(t));
y = Math.floor(R + R * Math.sin(t));

    ctx.beginPath();
    // ctx.moveTo(x,y);
    ctx.arc(x, y, 150, x, x + 2 * Math.PI);
    ctx.closePath();

    //ctx.lineTo(x, y);
    ctx.stroke();
}

CanvasRenderingContext2D.prototype.clear =
CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
        this.save();
        this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
        this.restore();
    }
};
