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
    
    getEvents() {
        let events = [];
        for(let ev in this.items) {
            if (this.hasVenue(ev)) {
                events.push(this.items[ev]);
            }
        }
        return events;
    }
    
    getPoints() {
        let points = [];
        for(let point in this.items) {
            if (this.hasVenue(point)) {
                points.push(point);
            }
        }
        return points;
    }
    
    hasVenue(key) {
        return this.items.hasOwnProperty(key);
    }
    
}

module.exports = Venues;