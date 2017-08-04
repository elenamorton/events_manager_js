const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Venues = require('../app/models/venues');
let venues = new Venues({1: 20}, {2: 15}, {3: 12});

describe('Venues', () => {
    
    it('keeps only one event on a point', () => {
        expect(venues.getEventId(3)).to.equal(20);
    });
        
    it('keeps unique point and event pairs', () => {
        expect(venues.getEventId(3)).to.have.lengthOf(1);
    });
    
    it('keeps maximum of Point.DISTANCE_MAX entries', () => {
        
    });
})