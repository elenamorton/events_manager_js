const X_MIN = -10;
const X_MAX = 10;
const Y_MIN = -10;
const Y_MAX = 10;
const SEED = 1;

const chance = require('chance').Chance(SEED);

class Point {
    
    constructor(x, y) {
        this.x_position = x || this.getRandomPositionX();
        this.y_position = y || this.getRandomPositionY();
    }
    
    getRandomPositionX() {
        return chance.integer({ min: X_MIN, max: X_MAX });
    }
    
    getRandomPositionY() {
        return chance.integer({ min: Y_MIN, max: Y_MAX });
    }

    
}


module.exports=Point;