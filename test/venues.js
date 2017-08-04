const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Venues = require('../app/models/venues');
let venues = new Venues({1: 20, 2: 15, 3: 12});
let venuesA = new Venues({3: 20, 2: 12, 3: 12});

describe('Venues', () => {
    describe('venues have', () => {
        it('keeps only one event on a point', () => {
            expect(venues.getEventId(3)).to.equal(12);
        });
        
        it('keeps unique points', () => {
            expect(venues.items).to.include.all.keys(1, 2, 3);
        });
        
        it('keeps unique events', () => {
            let uniqueEvents = [...new Set(venues.getEvents())];
            expect(uniqueEvents).to.have.lengthOf(3);
        });
    
        it('keeps maximum of Point.DISTANCE_MAX entries', () => {
        
        });
        
    });
    
    describe('user exceptions', () => {
        
        
        
    })

})