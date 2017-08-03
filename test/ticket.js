const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Ticket = require('../app/models/ticket');
let ticket = new Ticket(20, 5);
let ticketA = new Ticket(1, 25, "GBP");

describe('Ticket', () => {
    
    describe('ticket has', () => {
        it('get the number of tickets', () => {
            expect(ticket.quantity).to.equal(20);
        });
        
        it('get the ticket price value', () => {
            expect(ticket.price).to.equal(5);
        });
        
        it('get the ticket default price currency', () => {
            expect(ticket.currency).to.equal(Ticket.DEFAULT_CURRENCY);
        });
                
        it('get the ticket price currency', () => {
            expect(ticketA.currency).to.equal("GBP");
        });
        
    });
})