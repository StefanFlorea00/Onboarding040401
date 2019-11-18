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
    gameDiv.addEventListener("animationend", function () {
        gameState = "room";
        console.log("Anim Finished");
        doAvatarSelect();
    });
}

charEu = document.getElementById("characterEu");
charNonEu = document.getElementById("characterNonEu");
charCustom = document.getElementById("characterCustom");

function doAvatarSelect() {
    charEu.style.opacity = 1;
    charEu.addEventListener("click", doRoom);
    charNonEu.style.opacity = 1;
    charCustom.style.opacity = 1;
    console.log("Doing Avatar Select");
    gameDiv.style.backgroundColor = "blue";
    //    gameDiv.style.backgroundImage='url("img/room-background-01.svg")';
}

function doRoom() {
    charEu.removeEventListener("click", doRoom);
    charEu.style.marginTop=155 + "px";
    gameDiv.removeChild(document.getElementById("myName"));
    gameDiv.removeChild(charNonEu);
    gameDiv.removeChild(charCustom);
    console.log("Doing room");
    gameDiv.style.backgroundImage = 'url(img/room-background-01.svg)';
    charNonEu.style.opacity = 0;
    charCustom.style.opacity = 0;

    charEu.addEventListener("keypress", function(event){
                           const key = event.key;
                            })
}

document.onkeydown = checkKey;


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {


    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {

        let posChange = parseInt(charEu.style.marginLeft, 10);
        if(!posChange){
            posChange=20;
        }
        posChange -= 10;
        charEu.style.marginLeft = posChange.toString() + "px";
        console.log("press key left");
        console.log(charEu.style.marginLeft);
        console.log(posChange);
        }


    }
    else if (e.keyCode == '39') {


        if(charEu.style.marginLeft > 10 && charEu.style.marginLeft < 870) {
        let posChange = parseInt(charEu.style.marginLeft, 10);
        if(!posChange){
            posChange=0;
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
