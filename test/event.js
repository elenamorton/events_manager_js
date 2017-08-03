const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Event = require('../app/models/event');
let event = new Event(5);
let eventA = new Event(83);
let eventB = new Event(345);
let eventC = new Event(9999);
let eventD = new Event(0);

describe('Event', () => {
    
    describe('event has unique identifier', () => {
        it('gets the identifier as three digits string from one digit number', () => {
            expect(event.identifier).to.equal("005");
        })
        
        it('gets the identifier as three digits string from two digit number', () => {
            expect(eventA.identifier).to.equal("083");
        })
        
        it('gets the identifier as three digits string from three digit number', () => {
            expect(eventB.identifier).to.equal("345");
        })
        
        it('gets "000" if identifier is more than three digit number', () => {
            expect(eventC.identifier).to.equal("000");
        })
        
        it('gets "000" if identifier is less than 1', () => {
            expect(eventD.identifier).to.equal("000");
        })
        
        // it('throws error if identifier is more than three digit number', () => {
        //     expect(eventC.formattedIdentifier).to.throw('Only identifier with three digits are allowed');
        // })
    })
})