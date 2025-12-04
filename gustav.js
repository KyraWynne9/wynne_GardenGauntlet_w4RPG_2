export class Gustav {

    canvas = document.getElementById("gameCanvas");
    pencil = this.canvas.getContext("2d");
    gustavBack = document.getElementById("Gustav_back");
    gustavFront = document.getElementById("Gustav_front");
    gustavRight = document.getElementById("Gustav_right");
    gustavLeft = document.getElementById("Gustav_left");
    name = "Gustav"
    
    x = 100;   
    y = 150;
    width = 110;
    height = 110;
    speed = 7;
    sprite  = this.gustavFront;
    draw () {
        this.pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    };
    move (keysPressed) {
        if(keysPressed[this.rightKey]) {
            this.sprite = this.gustavRight
            this.x += 7;
        }
        else if(keysPressed[this.leftKey]) {
            this.sprite = this.gustavLeft
            this.x -= 7;
        }
        else if(keysPressed[this.downKey]) {
            this.sprite = this.gustavFront
            this.y += 7;
        }
        else if(keysPressed[this.upKey]) {
            this.sprite = this.gustavBack
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