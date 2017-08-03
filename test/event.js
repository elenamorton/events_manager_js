const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Event = require('../app/models/event');
let event = new Event("005");

describe('Event', () => {
    
    describe('event has unique identifier', () => {
        it('gets the identifier as three digits', () => {
            expect(event.identifier).to.equal("005");
        })
    })
})