export class Eden {

    canvas = document.getElementById("gameCanvas");
    pencil = this.canvas.getContext("2d");
    edenBack = document.getElementById("Eden_back");
    edenFront = document.getElementById("Eden_front");
    edenRight = document.getElementById("Eden_right");
    edenLeft = document.getElementById("Eden_left");
    win = document.getElementById("Eden_win");
    name = "Eden"
    x = 100;   
    y = 150;
    width = 100;
    height = 100;
    speed = 10;
    sprite  = this.edenFront;
    draw () {
        this.pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    };
    move (keysPressed) {
        if(keysPressed[this.rightKey]) {
            this.sprite = this.edenRight
            this.x += 7;
        }
        else if(keysPressed[this.leftKey]) {
            this.sprite = this.edenLeft
            this.x -= 7;
        }
        else if(keysPressed[this.downKey]) {
            this.sprite = this.edenFront
            this.y += 7;
        }
        else if(keysPressed[this.upKey]) {
            this.sprite = this.edenBack
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