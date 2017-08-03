const X_MIN = -10;
const X_MAX = 10;
const Y_MIN = -10;
const Y_MAX = 10;
const DISTANCE_MAX = X_MAX - X_MIN + Y_MAX - Y_MIN;
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

    static manhattanDistance(a, b) {
        const dx = a.x_position - b.x_position;
        const dy = a.y_position - b.y_position;
        
        return dx + Math.abs(dy);
    }
    
    static get DISTANCE_MAX() {
        return DISTANCE_MAX;
    }
}


module.exports=Point;