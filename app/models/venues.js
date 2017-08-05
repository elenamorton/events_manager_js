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
    
    getEventsId() {
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
    
    getPointsId() {
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
    
    addVenue(pointId, eventId) {
        if (!this.hasVenue(pointId)) {
            this.length++;
        }
        this.items[pointId] = eventId;
        return this.items[pointId];
    }

    removeVenue(pointId) {
        let current;
        if (this.hasVenue(pointId)) {
            current = this.items[pointId];
            this.length--;
            delete this.items(pointId);
        }
        return current;
    }

    hasVenue(key) {
        return this.items.hasOwnProperty(key);
    }
    
    eachVenue(fn) {
        for (let pointId in this.items) {
            if (this.hasVenue(pointId)) {
                fn(pointId, this.items[pointId]);
            }
        }
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