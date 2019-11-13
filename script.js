var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1050;
canvas.height = 550;
document.body.insertBefore(canvas, document.body.childNodes[3]);

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
}
bgImage.src = "img/bg.jpg";

var reset = function(){

}

var update = function(modifier) {

}

var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    ctx.fillStyle = "rgb(250, 250, 250)";
ctx.font = "24px Helvetica";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillText("Daniele: ");
ctx.fillText("Grigaite: ");
}


setInterval(counter, 1000);
var main = function(){
    update(0.02);
    render();
    requestAnimationFrame(main);
}

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

reset();
main();
