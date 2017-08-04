let UserException = require('../helper.js');
const Point = require('./point');

const MAX_VENUES = Point.DISTANCE_MAX;

class Venues {
    
    constructor(venuesObj) {
        this.length = 0;
        this.items = {};
        for (let venue in venuesObj) {
            if (venuesObj.hasOwnProperty(venue)) {
                this.items[venue] = venuesObj[venue];
                this.length++;
            }
        }
    }
    
    getEventId(key) {
        return this.hasVenue(key) ? this.items[key] : undefined;
    }
    
    hasVenue(key) {
        return this.items.hasOwnProperty(key);
    }
    
}

module.exports = Venues;