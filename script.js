let gameState = "none";
gameDiv = document.getElementById("gameDiv");
gameDiv.addEventListener("click", doIntro);

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
        gameDiv.addEventListener("animationend", function() {
                             gameState="room";
                             console.log("Anim Finished");
                             doRoom();
                             });
}

function doAvatarSelect() {
    console.log("Doing Avatar Select");

}

function doRoom() {
    console.log("Doing room");
    roomBg = document.getElementById("roomBg");
    roomBg.style.opacity = 1;
    roomBg.style.width= 1050;
    roomBg.style.height= 550;
}

function doBook() {

}

function doComputer() {

}

function doMap() {

}

function doFinish() {

}

function doEndInfo() {

}

reset();
main();
