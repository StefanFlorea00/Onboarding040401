gameDiv = document.getElementById("gameDiv");

//Main Game Loop
function main() {
    console.log("game State: " + gameState);
    if (gameState == "intro") {
        doIntro();
    } else if (gameState == "avatarSelect") {
        doAvatarSelect();
    } else if (gameState == "room") {
        doRoom();
    } else if (gameState == "book") {
        doBook();
    } else if (gameState == "computer") {
        doComputer();
    } else if (gameState == "map") {
        doMap();
    } else if (gameState == "finish") {
        doFinish();
    } else if (gameState == "endInfo") {
        doEndInfo();
    }
}

function reset() {
    gameState = "";
}

function doIntro() {
    console.log("Doing intro");
    gameDiv.style.animationName = "introAnim";
    gameDiv.addEventListener("animationend", function () {
        gameState = "room";
        console.log("Anim Finished");
        doAvatarSelect();
    });
}

charEu = document.getElementById("characterEu");
charNonEu = document.getElementById("characterNonEu");
charCustom = document.getElementById("characterCustom");

bookSelect = document.getElementById("bookSelect");

function doAvatarSelect() {
    gameDiv.removeChild(bookSelect);
    charEu.style.opacity = 1;
    charEu.addEventListener("click", doRoom);
    charNonEu.style.opacity = 1;
    charCustom.style.opacity = 1;
    console.log("Doing Avatar Select");
    gameDiv.style.backgroundColor = "blue";
    //    gameDiv.style.backgroundImage='url("img/room-background-01.svg")';
}

let roomInit = false;

function doRoom() {

    if (!roomInit) {
        gameDiv.removeChild(document.getElementById("myName"));
        gameDiv.removeChild(charNonEu);
        gameDiv.removeChild(charCustom);

        gameDiv.insertBefore(bookSelect, charEu);
        bookSelect.addEventListener("click", doBook);

        gameDiv.style.backgroundImage = 'url(img/room-background-01.svg)';

        charEu.removeEventListener("click", doRoom);
        charEu.style.marginTop = 155 + "px";
        console.log("Doing room");

        charEu.addEventListener("keypress", function (event) {
            const key = event.key;

        })

        roomInit = true;
    } else {
        console.log("Doing room");
        charEu.style.opacity = 1;
        gameDiv.style.backgroundImage = 'url(img/room-background-01.svg)';
        document.getElementById("backArrow").style.opacity = 0;
    }
}

document.onkeydown = checkKey;


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {


    } else if (e.keyCode == '40') {
        // down arrow
    } else if (e.keyCode == '37') {

        let posChange = parseInt(charEu.style.marginLeft, 10);
        if (!posChange) {
            posChange = 100;
        }
        posChange -= 10;
        charEu.style.marginLeft = posChange.toString() + "px";
        console.log("press key left");
        console.log(charEu.style.marginLeft);
        console.log(posChange);
    } else if (e.keyCode == '39') {

        if (parseInt(charEu.style.marginLeft, 10) < 870 || charEu.style.marginLeft == "") {
            let posChange = parseInt(charEu.style.marginLeft, 10);
            if (!posChange) {
                posChange = 100;
            }
            posChange += 10;
            charEu.style.marginLeft = posChange.toString() + "px";
            console.log("press key left");
            console.log(charEu.style.marginLeft);
            console.log(posChange);
        }
    }

}

function doBook() {
    console.log("Doing book");
    gameDiv.style.backgroundImage = 'url(img/sprite-book-01.svg)';
    charEu.style.opacity = 0;
    document.getElementById("backArrow").style.opacity = 1;
    document.getElementById("backArrow").addEventListener("click", doRoom);
}

function doComputer() {

}

function doMap() {

}

function doFinish() {

}

function doEndInfo() {

}

badButton = document.getElementById("badbutton");
badButton.addEventListener("click", changeColor);

function changeColor(){
    this.style.backgroundColor="red";


}


let gameState = "intro";
reset();
gameState = "intro";
main();
