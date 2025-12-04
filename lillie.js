export class Lillie {

    canvas = document.getElementById("gameCanvas");
    pencil = this.canvas.getContext("2d");
    lillieBack = document.getElementById("Lillie_back");
    lillieFront = document.getElementById("Lillie_front");
    lillieRight = document.getElementById("Lillie_right");
    lillieLeft = document.getElementById("Lillie_left");
    name = "Lillie"
    
    x = 100;   
    y = 150;
    width = 75;
    height = 75;
    speed = 12;
    sprite  = this.lillieFront;
    draw () {
        this.pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    };
    move (keysPressed) {
        if(keysPressed[this.rightKey]) {
            this.sprite = this.lillieRight
            this.x += 7;
        }
        else if(keysPressed[this.leftKey]) {
            this.sprite = this.lillieLeft
            this.x -= 7;
        }
        else if(keysPressed[this.downKey]) {
            this.sprite = this.lillieFront
            this.y += 7;
        }
        else if(keysPressed[this.upKey]) {
            this.sprite = this.lillieBack
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