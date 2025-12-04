import { Minerva } from "./minerva.js";
import { Lillie } from "./lillie.js";
import { Gustav } from "./gustav.js"
import { Princeton } from "./princeton.js"
import { Winona } from "./winona.js"

// Get the canvas and drawing context
let canvas = document.getElementById("gameCanvas");
let pencil = canvas.getContext("2d");
pencil.imageSmoothingEnabled = false

//grab images
let minervaBack = document.getElementById("Minerva_back");
let minervaFront = document.getElementById("Minerva_front");
let minervaRight = document.getElementById("Minerva_right");
let minervaLeft = document.getElementById("Minerva_left");

let background = document.getElementById("Background");


//item image
let itemSprite = document.getElementById("Memory_flower");

// -----------------------------------------------

// characters array
let characters = [
    new Minerva(),
    new Lillie(),
    new Gustav(),
    new Princeton(),
    new Winona(),

]

// player controls
player1 = {
    x: 100,
    y: 150,
    width: 75,
    height: 75,
    speed: 10,
    upKey: "w",
    downKey: "s",
    leftKey: "a",
    rightKey: "d",
    sprite : this.sprite,
    draw: function() {
        pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    },
    move: function(keysPressed) {
        if(keysPressed.d) {
            this.sprite = minervaLeft
            this.x += 7;
        }
        else if(keysPressed.a) {
            this.sprite = minervaRight
            this.x -= 7;
        }
        else if(keysPressed.s) {
            this.sprite = minervaFront
            this.y += 7;
        }
        else if(keysPressed.w) {
            this.sprite = minervaBack
            this.y -= 7;
        }
    }
};

player2 = {
    x: 900,
    y: 150,
    width: 100,
    height: 100,
    speed: 10,
    upKey: "i",
    downKey: "k",
    leftKey: "j",
    rightKey: "l",
    sprite : festusFront,
    draw: function() {
        pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    },
    move: function(keysPressed) {
        if(keysPressed.l) {
            this.sprite = festusLeft
            this.x += 7;
        }
        else if(keysPressed.j) {
            this.sprite = festusRight
            this.x -= 7;
        }
        else if(keysPressed.k) {
            this.sprite = festusFront
            this.y += 7;
        }
        else if(keysPressed.i) {
            this.sprite = festusBack
            this.y -= 7;
        }
    }
};

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

score = 0

function addPoints(amount) {
    score += amount;
    raiseScore();
}
    function raiseScore() {
    score += 1;
    let scoreElement = document.getElementById("score1");
    scoreElement.innerHTML = "scoreDisplay1" + score;
}

    function raiseScore() {
    score += 1;
    let scoreElement = document.getElementById("score2");
    scoreElement.innerHTML = "scoreDisplay2" + score;
}

// -----------------------------------------------
// Game loop
function gameLoop() {
    // Draw background
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    pencil.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Move characters
    minerva.move(keysPressed);
    festus.move(keysPressed);

    // Draw characters
    minerva.draw();
    festus.draw(keysPressed);

    // Draw item
    flower.draw()

    if (getDistance(minerva, flower) < 30){
        flower.moveToARandomPlace();
    }
    if (getDistance(festus, flower) < 30){
        flower.moveToARandomPlace();
    }
    
};

setInterval(gameLoop, 50);