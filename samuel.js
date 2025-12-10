export class Samuel {

    canvas = document.getElementById("gameCanvas");
    pencil = this.canvas.getContext("2d");
    samuelBack = document.getElementById("Samuel_back");
    samuelFront = document.getElementById("Samuel_front");
    samuelRight = document.getElementById("Samuel_right");
    samuelLeft = document.getElementById("Samuel_left");
    win = document.getElementById("Samuel_win");
    name = "Samuel"
    x = 100;   
    y = 150;
    width = 60;
    height = 60;
    speed = 15;
    sprite  = this.samuelFront;
    draw () {
        this.pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    };
    move (keysPressed) {
        if(keysPressed[this.rightKey]) {
            this.sprite = this.samuelRight
            this.x += 7;
        }
        else if(keysPressed[this.leftKey]) {
            this.sprite = this.samuelLeft
            this.x -= 7;
        }
        else if(keysPressed[this.downKey]) {
            this.sprite = this.samuelFront
            this.y += 7;
        }
        else if(keysPressed[this.upKey]) {
            this.sprite = this.samuelBack
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