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

        let uniqueEvents = [...new Set(events)];
        if (uniqueEvents.length === this.length) {
            return events;
        } else {
            throw new UserException(`There are duplicated events`);
        }
    }
    
    getPoints() {
        let points = [];
        for(let point in this.items) {
            if (this.hasVenue(point)) {
                points.push(point);
            }
        }

        if (points.length === this.length) {
            return points;
        } else {
            throw new UserException(`There are duplicated locations`);
        }
    }
    
    hasVenue(key) {
        return this.items.hasOwnProperty(key);
    }

    clearTable() {
        this.items = {};
        this.length = 0;
    }
        
    static get MAX_VENUES() {
        return MAX_VENUES;
    }
    
}

module.exports = Venues;