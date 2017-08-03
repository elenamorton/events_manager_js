const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Ticket = require('../app/models/ticket');
let ticket = new Ticket(20, 5);

describe('Ticket', () => {
    
        describe('ticket has a price', () => {
        it('get the ticket price', () => {
            expect(ticket.price).to.equal(5);
        });
    });
})