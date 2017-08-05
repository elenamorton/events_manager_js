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
        
        return Math.abs(dx) + Math.abs(dy);
    }
    
    static get DISTANCE_MAX() {
        return DISTANCE_MAX;
    }
    
    static get X_MAX() {
        return X_MAX;
    }
    
    static get X_MIN() {
        return X_MIN;
    }
        
    static get Y_MAX() {
        return Y_MAX;
    }
    
    static get Y_MIN() {
        return Y_MIN;
    }
}

module.exports=Point;