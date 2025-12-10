export class Graham {

    canvas = document.getElementById("gameCanvas");
    pencil = this.canvas.getContext("2d");
    grahamBack = document.getElementById("Graham_back");
    grahamFront = document.getElementById("Graham_front");
    grahamRight = document.getElementById("Graham_right");
    grahamLeft = document.getElementById("Graham_left");
    win = document.getElementById("Graham_win");
    name = "Graham"
    x = 100;   
    y = 150;
    width = 110;
    height = 110;
    speed = 6;
    sprite  = this.grahamFront;
    draw () {
        this.pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    };
    move (keysPressed) {
        if(keysPressed[this.rightKey]) {
            this.sprite = this.grahamRight
            this.x += 7;
        }
        else if(keysPressed[this.leftKey]) {
            this.sprite = this.grahamLeft
            this.x -= 7;
        }
        else if(keysPressed[this.downKey]) {
            this.sprite = this.grahamFront
            this.y += 7;
        }
        else if(keysPressed[this.upKey]) {
            this.sprite = this.grahamBack
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