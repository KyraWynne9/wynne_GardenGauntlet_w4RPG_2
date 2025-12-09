export class Minerva {

    canvas = document.getElementById("gameCanvas");
    pencil = this.canvas.getContext("2d");
    minervaBack = document.getElementById("Minerva_back");
    minervaFront = document.getElementById("Minerva_front");
    minervaRight = document.getElementById("Minerva_right");
    minervaLeft = document.getElementById("Minerva_left");
    win = document.getElementById("Minerva_win");
    name = "Minerva"
    x = 100;   
    y = 150;
    width = 60;
    height = 60;
    speed = 16;
    sprite  = this.minervaFront;
    draw () {
        this.pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    };
    move (keysPressed) {
        if(keysPressed[this.rightKey]) {
            this.sprite = this.minervaRight
            this.x += 7;
        }
        else if(keysPressed[this.leftKey]) {
            this.sprite = this.minervaLeft
            this.x -= 7;
        }
        else if(keysPressed[this.downKey]) {
            this.sprite = this.minervaFront
            this.y += 7;
        }
        else if(keysPressed[this.upKey]) {
            this.sprite = this.minervaBack
            this.y -= 7;
        }
    }
    setup(x, y, upKey, downKey, rightKey, leftKey) {
        this.x = x
        this.y = y
        this.upKey = upKey
        this.downKey = downKey
        this.rightKey = rightKey
        this.leftKey = leftKey
    }

 
};