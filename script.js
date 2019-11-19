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
computerSelect = document.getElementById("computerSelect");
mapSelect = document.getElementById("mapSelect");

function doAvatarSelect() {
    gameDiv.removeChild(bookSelect);
    gameDiv.removeChild(computerSelect);
    gameDiv.removeChild(mapSelect);
    charEu.style.opacity = 1;
    charEu.addEventListener("click", doRoom);
    charNonEu.style.opacity = 1;
    charCustom.style.opacity = 1;
    console.log("Doing Avatar Select");
    gameDiv.style.backgroundColor = "#E8B466";
}

let roomInit = false;
let outsideRoom = false;

function doRoom() {

    if (!roomInit) {
        gameDiv.removeChild(document.getElementById("myName"));
        gameDiv.removeChild(charNonEu);
        gameDiv.removeChild(charCustom);

        gameDiv.insertBefore(bookSelect, charEu);
        bookSelect.addEventListener("click", doBook);

        gameDiv.insertBefore(computerSelect, bookSelect);
        computerSelect.addEventListener("click", doComputer);

        gameDiv.insertBefore(mapSelect, computerSelect);
        mapSelect.addEventListener("click", doMap);

        gameDiv.style.backgroundImage = 'url(img/room-background-01.png)';

        charEu.removeEventListener("click", doRoom);
        charEu.style.marginTop = 155 + "px";
        console.log("Doing room");

        charEu.addEventListener("keypress", function (event) {
            const key = event.key;

        outsideRoom = false;
        })

        roomInit = true;
    } else {
        console.log("Doing room");
        charEu.style.opacity = 1;
        gameDiv.style.backgroundImage = 'url(img/room-background-01.png)';
        document.getElementById("backArrow").style.opacity = 0;

        bookSelect.addEventListener("click", doBook);
        computerSelect.addEventListener("click", doComputer);
        mapSelect.addEventListener("click", doMap);
        outsideRoom = false;
    }

}

document.onkeydown = checkKey;


function checkKey(e) {

    e = e || window.event;

    if (!outsideRoom) {
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

        glowItems();
    } else if (e.keyCode == '39') {

        if (parseInt(charEu.style.marginLeft, 10) < 870 || charEu.style.marginLeft == "") {
            let posChange = parseInt(charEu.style.marginLeft, 10);
            if (!posChange) {
                posChange = 100;
            }
            posChange += 10;
            charEu.style.marginLeft = posChange.toString() + "px";
            console.log("press key right");
            console.log(charEu.style.marginLeft);
            console.log(posChange);
        }

        glowItems();
    }

    }
}

function glowItems() {
    if ((parseInt(charEu.style.marginLeft, 10) > 300) && (parseInt(charEu.style.marginLeft, 10) < 530)) {
        bookSelect.style.boxShadow = '0 0 100px 60px #ffff00';
        console.log("Glow bookselect");
    } else {
        bookSelect.style.boxShadow = '0 0 0 0 #f0f';
    }

    if ((parseInt(charEu.style.marginLeft, 10) > 0) && (parseInt(charEu.style.marginLeft, 10) < 200)) {
        mapSelect.style.boxShadow = '0 0 100px 60px #ffff00';
        console.log("Glow mapselect");
    } else {
        mapSelect.style.boxShadow = '0 0 0 0 #f0f';
    }

    if ((parseInt(charEu.style.marginLeft, 10) > 570) && (parseInt(charEu.style.marginLeft, 10) < 850)) {
        computerSelect.style.boxShadow = '0 0 100px 60px #ffff00';
        console.log("Glow computerselect");
    } else {
        computerSelect.style.boxShadow = '0 0 0 0 #f0f';
    }
}

function doBook() {
    console.log("Doing book");
    gameDiv.style.backgroundImage = 'url(img/sprite-book-01.svg)';
    charEu.style.opacity = 0;
    charEu.style.marginLeft = 150 + "px";
    document.getElementById("backArrow").style.opacity = 1;
    document.getElementById("backArrow").addEventListener("click", doRoom);

    bookSelect.removeEventListener("click", doBook);
    bookSelect.style.boxShadow = '0 0 0 0 #ffff00';

    computerSelect.removeEventListener("click", doComputer);
    computerSelect.style.boxShadow = '0 0 0 0';

    outsideRoom = true;
}

function doComputer() {
    console.log("Doing computer");
    gameDiv.style.backgroundImage = 'url(img/laptop-3-01.svg)';
    charEu.style.opacity = 0;
    charEu.style.marginLeft = 150 + "px";
    document.getElementById("backArrow").style.opacity = 1;
    document.getElementById("backArrow").addEventListener("click", doRoom);

    bookSelect.removeEventListener("click", doBook);
    bookSelect.style.boxShadow = '0 0 0 0 #ffff00';

    computerSelect.removeEventListener("click", doComputer);
    computerSelect.style.boxShadow = '0 0 0 0';

    outsideRoom = true;

}

function doMap() {
    console.log("Doing map");
    gameDiv.style.backgroundImage = 'url(img/map.png)';
    charEu.style.opacity = 0;
    charEu.style.marginLeft = 150 + "px";
    document.getElementById("backArrow").style.opacity = 1;
    document.getElementById("backArrow").addEventListener("click", doRoom);

    bookSelect.removeEventListener("click", doBook);
    computerSelect.removeEventListener("click", doComputer);
    mapSelect.removeEventListener("click", doMap);

    mapSelect.style.boxShadow = '0 0 0 0 #f0f';

    outsideRoom = true;
}

function doFinish() {

}

function doEndInfo() {

}

badButton = document.getElementById("badbutton");
badButton.addEventListener("click", changeColor);

function changeColor() {
    this.style.backgroundColor = "red";


}


let gameState = "intro";
reset();
gameState = "intro";
main();
