/*
//Create the game canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1050;
const canvW = canvas.width;
canvas.height = 550;
const canvH = canvas.height;
document.body.insertBefore(canvas, document.body.childNodes[3]);

//Add background image
let bgReady = false;
let bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
}
bgImage.src = "img/bg.jpg";

//Reset the game
const reset = function(){

}

//Update the game
const update = function(modifier) {

}

//Render the game (load images etc)
const render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("Daniele ", canvW/2, 20);
    ctx.fillText("Grigaite ", canvW/2, 50);
    ctx.fillText("A game by Daniele Grigaite and some losers", canvW/2, 80);
}

//Main game loop
const main = function(){
    update(0.02);
    render();
    requestAnimationFrame(main);
}

//Cross browser support
const w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//Reset game and call game loop
reset();
main();
*/
