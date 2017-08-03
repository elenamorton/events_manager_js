const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Ticket = require('../app/models/ticket');
let ticket = new Ticket(20, 5);

describe('Ticket', () => {
    
    describe('ticket has', () => {
        it('get the number of tickets', () => {
            expect(ticket.quantity).to.equal(20);
        });
    });
})