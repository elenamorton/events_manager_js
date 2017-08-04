const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Venues = require('../app/models/venues');
let venues = new Venues({1: 20, 2: 15, 3: 12});
let venuesA = new Venues({3: 20, 2: 12, 3: 12, 1: 7});

describe('Venues', () => {
    describe('venues keep', () => {
        it('only one event on a point', () => {
            expect(venues.getEventId(3)).to.equal(12);
        });
        
        it('unique points', () => {
            let uniquePoints = [...new Set(venues.getPoints())];
            expect(uniquePoints).to.have.lengthOf(3);
        });
        
        it('unique events', () => {
            let uniqueEvents = [...new Set(venues.getEvents())];
            expect(uniqueEvents).to.have.lengthOf(3);
        });
    
        it('maximum of Venues.MAX_VENUES entries', () => {
            expect(venues.length).to.be.at.most(Venues.MAX_VENUES)
        });

        it('clears the venues table', () => {
            venuesA.clearTable();
            expect(venuesA.items).to.be.empty
        });
    });
    
    describe('user exceptions', () => {
        it.skip('throws error if duplicated locations', () => {
            expect(() => venuesA.getPoints).to.throw('There are duplicated locations');
        });
        
        it.skip('throws error if duplicated events', (done) => {
            expect(venuesA.getEvents).to.throw('There are duplicated events');
            done();
        });
    })

})