let UserException = require('../helper.js');
const Point = require('./point');

const MAX_VENUES = Point.DISTANCE_MAX;

class Venues {
    
    constructor(venuesObj) {
        this.length = 0;
        this.items = {};
        for (let venue in venuesObj) {
            this.items[venue] = venuesObj[venue];
            this.length++;

        }
    }
    
    getEventId(key) {
        return this.items[key];
    }
    
}

module.exports = Venues;