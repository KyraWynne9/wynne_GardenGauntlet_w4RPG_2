export class Minerva {

    minerva = {
        
    sprite : minervaFront,
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
}