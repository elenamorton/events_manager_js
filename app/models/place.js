"use strict";

const Document = require('camo').Document;
const X_MIN = -10;
const X_MAX = 10;
const Y_MIN = -10;
const Y_MAX = 10;

class Place extends Document {
    constructor() {
        super();
        
        this.x_position = {
            type: Number,
            min: X_MIN,
            max: X_MAX
        };
            
        this.y_position = {
            type: Number,
            min: Y_MIN,
            max: Y_MAX
        };
    }
    
    static collectionName() {
        return 'places';
    }
}
module.exports=Place;