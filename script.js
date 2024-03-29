//Window for the game
gameDiv = document.getElementById("gameDiv");

startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", nextInfo);

startBtn2 = document.getElementById("startBtn2");
startBtn2.addEventListener("click", reset);

let gameState = "";

function nextInfo() {

    document.getElementById("tutorial").style.opacity = 0;
    document.getElementById("tutorial2").style.opacity = 1;
    document.getElementById("tutorial2").style.width = 700 + "px";
    document.getElementById("tutorial2").style.height = 370 + "px";
}



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
    document.getElementById("Keabtn").disabled = true;
    document.getElementById("intBtn").disabled = true;
    document.getElementById("bankBtn").disabled = true;
    document.getElementById("tutorial").style.opacity = 0;
    document.getElementById("tutorial2").style.opacity = 0;
    gameState = "intro";
    main();
}

function doIntro() {

    badgeDiv.style.opacity = 0;
    document.getElementById("myName").style.opacity = 0;
    console.log("Doing intro");
    //Make gameDiv big
    gameDiv.style.animationName = "startGame";
    gameDiv.addEventListener("animationend", function () {
        //Show splash screen
        gameDiv.style.animationName = "introAnim";
        gameDiv.style.height = 550 + "px";
        console.log("Gamediv height" + gameDiv.style.height);
        setTimeout(function () {
            //Move to avatarselect
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

//Divs for clicking on book;laptop;map
bookSelect = document.getElementById("bookSelect");
computerSelect = document.getElementById("computerSelect");
mapSelect = document.getElementById("mapSelect");

//Badges
badgeDiv = document.getElementById("badgeDiv");
bookBadge = document.getElementById("bookBadge");
laptopBadge = document.getElementById("laptopBadge");
mapBadge = document.getElementById("mapBadge");

function doAvatarSelect() {
    charEu.style.opacity = 1;
    charEu.addEventListener("click", doRoom);

    charNonEu.style.opacity = 1;
    charCustom.style.opacity = 1;
    console.log("Doing Avatar Select");
    gameDiv.style.backgroundColor = "#E8B466";
}

//roomInit: true if room has been initialized // outsideRoom: true if in book/laptop/map (so character doesn't move)
//allbadges: true if collected all badges
let roomInit = false;
let outsideRoom = false;
let allBadges = false;

function doRoom() {

    if (!roomInit) {

        charEu.style.boxShadow = '0 0 0 0 #ffff00';

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

        //Check for left/right arrow press
        charEu.addEventListener("keypress", function (event) {
            const key = event.key;

            outsideRoom = false;
        })

        roomInit = true;
    }
    // if room has been initialized already
    else {

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
        document.getElementById("laptoptext").style.width = 0;
        document.getElementById("laptoptext").style.height = 0;


        //condition for winning
        if (bookBadge.style.opacity == 1 && laptopBadge.style.opacity == 1 && mapBadge.style.opacity == 1) {
            document.getElementById("finishArrow").style.opacity = 1;
            allBadges = true;
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
            console.log("press key left " + charEu.style.marginLeft);

            glowItems();
        } else if (e.keyCode == '39') {

            if (parseInt(charEu.style.marginLeft, 10) < 870 || charEu.style.marginLeft == "") {
                let posChange = parseInt(charEu.style.marginLeft, 10);
                if (!posChange) {
                    posChange = 100;
                }
                posChange += 10;
                charEu.style.marginLeft = posChange.toString() + "px";
                console.log("press key right " + charEu.style.marginLeft);

                if (allBadges && parseInt(charEu.style.marginLeft, 10) > 850) {
                    doFinish();
                }
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
    document.getElementById("finishArrow").style.opacity = 0;

    bookSelect.removeEventListener("click", doBook);
    bookSelect.style.boxShadow = '0 0 0 0 #ffff00';

    computerSelect.removeEventListener("click", doComputer);
    computerSelect.style.boxShadow = '0 0 0 0';

    document.getElementById("prevArrow").style.opacity = 0;
    document.getElementById("nextArrow").style.opacity = 1;
    document.getElementById("prevArrow").addEventListener("click", pagePrev);
    document.getElementById("nextArrow").addEventListener("click", pageNext);

    document.getElementById("booktextp1").style.opacity = 1;
    document.getElementById("booktextp2").style.opacity = 1;

    outsideRoom = true;
}

//when left arrow is pressed
function pagePrev() {
    gameDiv.style.backgroundPositionX = -1050 + "px";
    setTimeout(function () {
        gameDiv.style.backgroundPositionX = 0 + "px";
        console.log("Changed page, bgposX " + gameDiv.style.backgroundPositionX + " bookpage:" + bookPages);

    }, 1000);
    bookPages--;
    changeBookText();
}

//when right arrow is pressed
function pageNext() {
    gameDiv.style.backgroundPositionX = -1050 + "px";
    setTimeout(function () {
        gameDiv.style.backgroundPositionX = -2100 + "px";
        console.log("Changed page, bgposX " + gameDiv.style.backgroundPositionX + " bookpage:" + bookPages);

    }, 1000);
    bookPages++;
    changeBookText();
}

//change book text depending on page
function changeBookText() {
    if (bookPages == 0) {
        document.getElementById("prevArrow").style.opacity = 0;
        document.getElementById("prevArrow").removeEventListener("click", pagePrev);
        document.getElementById("nextArrow").style.opacity = 1;
        document.getElementById("nextArrow").addEventListener("click", pageNext);


        console.log("Show text");
        document.getElementById("booktextp1").style.opacity = 1;
        document.getElementById("booktextp2").style.opacity = 1;
        document.getElementById("booktextp3").style.opacity = 0;
        document.getElementById("booktextp4").style.opacity = 0;



    } else if (bookPages == 1) {
        document.getElementById("prevArrow").style.opacity = 1;
        document.getElementById("prevArrow").addEventListener("click", pagePrev);
        document.getElementById("nextArrow").style.opacity = 0;
        document.getElementById("nextArrow").removeEventListener("click", pageNext);


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

//computer menu
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
    document.getElementById("laptoptext").style.opacity = 1;
    document.getElementById("laptoptext").style.width = 700 + "px";
    document.getElementById("laptoptext").style.height = 370 + "px";
    document.getElementById("finishArrow").style.opacity = 0;


    computerSelect.removeEventListener("click", doComputer);
    computerSelect.style.boxShadow = '0 0 0 0 #ffff00';


    outsideRoom = true;

}

//map menu
function doMap() {
    badgeDiv.style.opacity = 0;
    mapBadge.style.opacity = 1;
    console.log("Doing map");
    gameDiv.style.backgroundImage = 'url(img/map.png)';
    charEu.style.opacity = 0;
    document.getElementById("backArrow").style.opacity = 1;
    document.getElementById("backArrow").addEventListener("click", doRoom);
    document.getElementById("finishArrow").style.opacity = 1;

    bookSelect.removeEventListener("click", doBook);
    computerSelect.removeEventListener("click", doComputer);
    mapSelect.removeEventListener("click", doMap);

    mapSelect.style.boxShadow = '0 0 0 0 #f0f';

    outsideRoom = true;
}

//show congratulations
function doFinish() {
    outsideRoom = true;

    const audio = new Audio('congratssound.mp3');
    audio.play();
    gameDiv.removeChild(bookSelect);
    gameDiv.removeChild(mapSelect);
    gameDiv.removeChild(computerSelect);
    gameDiv.removeChild(badgeDiv);
    gameDiv.removeChild(charEu);
    gameDiv.removeChild(document.getElementById("finishArrow"));
    gameDiv.style.backgroundImage = 'url(img/congratulation-page-2-01.svg)';
    setTimeout(doEndInfo, 3000);

}

function doEndInfo() {
    gameDiv.style.backgroundImage = '';
    document.getElementById("kea-pages").style.opacity = 1;
    document.getElementById("kea-page-text").style.opacity = 1;
    document.getElementById("kea-page-text").style.width = 700 + "px";
    document.getElementById("kea-page-text").style.height = 370 + "px";

    document.getElementById("Keabtn").disabled = false;
    document.getElementById("intBtn").disabled = false;
    document.getElementById("bankBtn").disabled = false;

    document.getElementById("Keabtn").addEventListener("click", newKeaTab);
    document.getElementById("intBtn").addEventListener("click", newIntTab);
    document.getElementById("bankBtn").addEventListener("click", newBankTab);

}

function newKeaTab() {
    window.open(
        "https://www.kea.dk", "_blank");
}

function newIntTab() {
    window.open(
        "https://kea.dk/en/programmes/", "_blank");
}

function newBankTab() {
    window.open(
        "https://kea.dk/en/programmes/application-and-admission", "_blank");
}
