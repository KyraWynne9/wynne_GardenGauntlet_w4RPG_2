export class Princeton {

    canvas = document.getElementById("gameCanvas");
    pencil = this.canvas.getContext("2d");
    princetonBack = document.getElementById("Princeton_back");
    princetonFront = document.getElementById("Princeton_front");
    princetonRight = document.getElementById("Princeton_right");
    princetonLeft = document.getElementById("Princeton_left");
    name = "Princeton"
    x = 100;   
    y = 150;
    width = 130;
    height = 130;
    speed = 6;
    sprite  = this.princetonFront;
    draw () {
        this.pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    };
    move (keysPressed) {
        if(keysPressed[this.rightKey]) {
            this.sprite = this.princetonRight
            this.x += 7;
        }
        else if(keysPressed[this.leftKey]) {
            this.sprite = this.princetonLeft
            this.x -= 7;
        }
        else if(keysPressed[this.downKey]) {
            this.sprite = this.princetonFront
            this.y += 7;
        }
        else if(keysPressed[this.upKey]) {
            this.sprite = this.princetonBack
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