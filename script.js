gameDiv = document.getElementById("gameDiv");
startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", reset);
let gameState = "";

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
    document.getElementById("tutorial").style.opacity =  0;
    gameState = "intro";
    main();
}

function doIntro() {

    badgeDiv.style.opacity = 0;
    document.getElementById("myName").style.opacity = 0;
    console.log("Doing intro");
    gameDiv.style.animationName = "startGame";
    gameDiv.addEventListener("animationend", function () {
        gameDiv.style.animationName = "introAnim";
        gameDiv.style.height = 550 + "px";
        console.log("Gamediv height" + gameDiv.style.height);
        setTimeout(function(){
                    gameState = "room";
                    console.log("Anim Finished");
                    doAvatarSelect();
                             }, 3000);
    });

    document.getElementById("booktextp1").style.opacity = 0;
    document.getElementById("booktextp2").style.opacity = 0;
    document.getElementById("laptoptext").style.opacity = 0;
    document.getElementById("booktextp3").style.opacity = 0;
    document.getElementById("booktextp4").style.opacity = 0;
}

charEu = document.getElementById("characterEu");
charNonEu = document.getElementById("characterNonEu");
charCustom = document.getElementById("characterCustom");

bookSelect = document.getElementById("bookSelect");
computerSelect = document.getElementById("computerSelect");
mapSelect = document.getElementById("mapSelect");

badgeDiv = document.getElementById("badgeDiv");
bookBadge = document.getElementById("bookBadge");
laptopBadge = document.getElementById("laptopBadge");
mapBadge = document.getElementById("mapBadge");

function doAvatarSelect() {
    document.getElementById("myName").style.opacity = 1;
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

        badgeDiv.style.opacity = 1;

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

        badgeDiv.style.opacity = 1;

        console.log("Doing room");
        charEu.style.opacity = 1;
        gameDiv.style.backgroundImage = 'url(img/room-background-01.png)';
        document.getElementById("backArrow").style.opacity = 0;
        document.getElementById("nextArrow").style.opacity = 0;
        document.getElementById("prevArrow").style.opacity = 0;

        bookSelect.addEventListener("click", doBook);
        computerSelect.addEventListener("click", doComputer);
        mapSelect.addEventListener("click", doMap);
        outsideRoom = false;

        document.getElementById("booktextp1").style.opacity = 0;
        document.getElementById("booktextp2").style.opacity = 0;
        document.getElementById("booktextp3").style.opacity = 0;
        document.getElementById("booktextp4").style.opacity = 0;
        document.getElementById("laptoptext").style.opacity = 0;

        if(bookBadge.style.opacity == 1 && laptopBadge.style.opacity == 1 && mapBadge.style.opacity == 1 ) {
            doFinish();


        }
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

let bookPages = 0;

function doBook() {

            badgeDiv.style.opacity = 0;
    bookBadge.style.opacity = 1;
    console.log("Doing book, page " + bookPages);
    gameDiv.style.backgroundImage = 'url(img/sprite-book-01.svg)';
    charEu.style.opacity = 0;

    document.getElementById("backArrow").style.opacity = 1;
    document.getElementById("backArrow").addEventListener("click", doRoom);


    bookSelect.removeEventListener("click", doBook);
    bookSelect.style.boxShadow = '0 0 0 0 #ffff00';

    computerSelect.removeEventListener("click", doComputer);
    computerSelect.style.boxShadow = '0 0 0 0';

    document.getElementById("prevArrow").style.opacity = 1;
    document.getElementById("nextArrow").style.opacity = 1;
    document.getElementById("prevArrow").addEventListener("click", pagePrev);
    document.getElementById("nextArrow").addEventListener("click", pageNext);

    document.getElementById("booktextp1").style.opacity = 1;
    document.getElementById("booktextp2").style.opacity = 1;

    outsideRoom = true;
}

function pagePrev() {
    gameDiv.style.backgroundPositionX = -1050 + "px";
    setTimeout(function () {
        gameDiv.style.backgroundPositionX = 0 + "px";
        console.log("Changed page, bgposX " + gameDiv.style.backgroundPositionX + " bookpage:" + bookPages);

    }, 1000);
    bookPages--;
    changeBookText();
}

function pageNext() {
    gameDiv.style.backgroundPositionX = -1050 + "px";
    setTimeout(function () {
        gameDiv.style.backgroundPositionX = -2100 + "px";
        console.log("Changed page, bgposX " + gameDiv.style.backgroundPositionX + " bookpage:" + bookPages);

    }, 1000);
    bookPages++;
    changeBookText();
}

function changeBookText() {
    if (bookPages == 0) {
        console.log("Show text");
        document.getElementById("booktextp1").style.opacity = 1;
        document.getElementById("booktextp2").style.opacity = 1;
        document.getElementById("booktextp3").style.opacity = 0;
        document.getElementById("booktextp4").style.opacity = 0;

    } else if (bookPages == 1) {
        document.getElementById("booktextp3").style.opacity = 1;
        document.getElementById("booktextp4").style.opacity = 1;
        document.getElementById("booktextp1").style.opacity = 0;
        document.getElementById("booktextp2").style.opacity = 0;
    } else {
        console.log("Hide text");

        document.getElementById("booktextp1").style.opacity = 0;
        document.getElementById("booktextp2").style.opacity = 0;
        document.getElementById("booktextp3").style.opacity = 0;
        document.getElementById("booktextp4").style.opacity = 0;
    }
}

function doComputer() {
            badgeDiv.style.opacity = 0;
    laptopBadge.style.opacity = 1;

    console.log("Doing computer");
    gameDiv.style.backgroundImage = 'url(img/laptop-3-01.svg)';
    charEu.style.opacity = 0;
    document.getElementById("backArrow").style.opacity = 1;
    document.getElementById("backArrow").addEventListener("click", doRoom);

    bookSelect.removeEventListener("click", doBook);
    bookSelect.style.boxShadow = '0 0 0 0 #ffff00';

    document.getElementById("laptoptext").focus();

    computerSelect.removeEventListener("click", doComputer);
    computerSelect.style.boxShadow = '0 0 0 0';

    document.getElementById("laptoptext").style.opacity = 1;

    outsideRoom = true;

}

function doMap() {
            badgeDiv.style.opacity = 0;
    mapBadge.style.opacity = 1;
    console.log("Doing map");
    gameDiv.style.backgroundImage = 'url(img/map.png)';
    charEu.style.opacity = 0;
    document.getElementById("backArrow").style.opacity = 1;
    document.getElementById("backArrow").addEventListener("click", doRoom);

    bookSelect.removeEventListener("click", doBook);
    computerSelect.removeEventListener("click", doComputer);
    mapSelect.removeEventListener("click", doMap);

    mapSelect.style.boxShadow = '0 0 0 0 #f0f';

    outsideRoom = true;
}

function doFinish() {
    outsideRoom = true;
    gameDiv.removeChild(bookSelect);
    gameDiv.removeChild(mapSelect);
    gameDiv.removeChild(computerSelect);
    gameDiv.removeChild(badgeDiv);
    gameDiv.removeChild(charEu);
    gameDiv.style.backgroundImage = 'url(img/congratulation-page-1-01.svg)';

}

function doEndInfo() {

}

