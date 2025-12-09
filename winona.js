export class Winona {

    canvas = document.getElementById("gameCanvas");
    pencil = this.canvas.getContext("2d");
    winonaBack = document.getElementById("Winona_back");
    winonaFront = document.getElementById("Winona_front");
    winonaRight = document.getElementById("Winona_right");
    winonaLeft = document.getElementById("Winona_left");
    win = document.getElementById("Winona_win");
    name = "Winona"
    
    x = 100;   
    y = 150;
    width = 100;
    height = 100;
    speed = 10;
    sprite  = this.winonaFront;
    draw () {
        this.pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    };
    move (keysPressed) {
        if(keysPressed[this.rightKey]) {
            this.sprite = this.winonaRight
            this.x += 7;
        }
        else if(keysPressed[this.leftKey]) {
            this.sprite = this.winonaLeft
            this.x -= 7;
        }
        else if(keysPressed[this.downKey]) {
            this.sprite = this.winonaFront
            this.y += 7;
        }
        else if(keysPressed[this.upKey]) {
            this.sprite = this.winonaBack
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