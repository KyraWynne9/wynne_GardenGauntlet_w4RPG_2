import { Minerva } from "./minerva.js";
import { Lillie } from "./lillie.js";
import { Gustav } from "./gustav.js"
import { Princeton } from "./princeton.js"
import { Winona } from "./winona.js"
import { Samuel } from "./samuel.js";
import { Eden } from "./eden.js";
import { Graham } from "./graham.js";
import { Toolbox } from "./toolbox.js";

// Get the canvas and drawing context
let canvas = document.getElementById("gameCanvas");
let pencil = canvas.getContext("2d");
pencil.imageSmoothingEnabled = false





//grab images

let startScreen = document.getElementById("Start_screen");
let background = document.getElementById("Background");


//item image
let itemSprite = document.getElementById("Memory_flower");

// -----------------------------------------------

// start screen
let state = "start"


// characters array
let characters1 = [
    new Minerva(),
    new Lillie(),
    new Gustav(),
    new Princeton(),
    new Winona(),
    new Samuel(),
    new Eden(),
    new Graham(),

]
let characters2 = [
    new Minerva(),
    new Lillie(),
    new Gustav(),
    new Princeton(),
    new Winona(),
    new Samuel(),
    new Eden(),
    new Graham(),

]

let toolbox = new Toolbox()
let player1 = toolbox.getRandomItem(characters1)
player1.setup(50, 100, "w", "s", "d", "a")

console.log(player1.name)

let player2 = toolbox.getRandomItem(characters2)
player2.setup(775, 100, "ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft")

console.log(player2.name)


// player controls
// let player1 = new Minerva(50, 50, "w", "s", "d", "a");


//let player2 = new Minerva(50, 150, "i", "k", "l", "j");

let flower = {
    x: 510,
    y: 320,
    width: 50,
    height: 50,
    speed: 5,
    upKey: "w",
    downKey: "s",
    leftKey: "a",
    rightKey: "d",
    sprite : itemSprite,
    moveToARandomPlace : function () {
        flower.x = Math.random() * canvas.width;
        flower.y = Math.random() * canvas.height;
    },
    draw: function() {
        pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    },
};





// -----------------------------------------------
// Track pressed keys
let keysPressed = {};
window.addEventListener("keydown", function(e) {
    keysPressed[e.key] = true;
});
window.addEventListener("keyup", function(e) {
    keysPressed[e.key] = false;
});


// -----------------------------------------------
// Utility function to check distance
function getDistance(a, b) {
    let dx = (a.x + a.width/2) - (b.x + b.width/2);
    let dy = (a.y + a.height/2) - (b.y + b.height/2);
    return Math.sqrt(dx*dx + dy*dy);
}

// points
let winner

let score1 = 0

function raiseScore() {
    score1 += 1;
    let scoreElement = document.getElementById("scoreDisplay1");
    scoreElement.innerHTML = "Player 1: " + score1;
    if (score1 == 7) {
        state = "win"
        winner = player1
    }
}
let score2 = 0

function raiseScore2() {
    score2 += 1;
    let scoreElement = document.getElementById("scoreDisplay2");
    scoreElement.innerHTML = "Player 2: " + score2;
        if (score2 == 7) {
        state = "win"
        winner = player2
    }
}



// -----------------------------------------------
// Game loop
function gameLoop() {

    pencil.clearRect(0, 0, canvas.width, canvas.height);

    if (state == "start") {

        pencil.drawImage(startScreen, 0, 0, canvas.width, canvas.height);
            if (keysPressed[" "]) {
                state = "inPlay"
            }
    }
    else if (state == "inPlay") {

        // Draw background
        
        pencil.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Move characters
        player1.move(keysPressed);
        player2.move(keysPressed);

        // Draw characters
        player1.draw();
        player2.draw(keysPressed);

        // Draw item
        flower.draw()

        if (getDistance(player1, flower) < 30){
            flower.moveToARandomPlace();
            raiseScore();
        }
        if (getDistance(player2, flower) < 30){
            flower.moveToARandomPlace();
            raiseScore2();
        }
    }

    else if (state == "win") {

        pencil.drawImage(winner.win, 0, 0, canvas.width, canvas.height);

            if (keysPressed["Enter"]) {
                state = "start"
                location.reload();
            }
    }
    
};

setInterval(gameLoop, 50);