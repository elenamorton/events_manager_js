const X_MIN = -10;
const X_MAX = 10;
const Y_MIN = -10;
const Y_MAX = 10;

class Point {
    
    constructor(x, y) {
        this.x_position = x;
        this.y_position = y;
    }
    
    getRandomPositionX() {
        return Math.floor(Math.random() * (X_MAX - X_MIN + 1)) + X_MIN;
    }
    
    getRandomPositionY() {
        return Math.floor(Math.random() * (Y_MAX - Y_MIN + 1)) + Y_MIN;
    }

    
}


module.exports=Point;