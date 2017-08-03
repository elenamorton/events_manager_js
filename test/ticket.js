const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Ticket = require('../app/models/ticket');
let ticket = new Ticket(20, 5);
let ticketA = new Ticket(2, 25, "GBP");

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
        
        it('sells less tickets than available', () => {
            expect(ticket.sellTicket(5)).to.equal(15);
        });
        
        it('number of tickets must be minimum 0', () => {
            expect(ticket.sellTicket(15)).to.equal(0);
        });
    });
    
    describe('user exceptions', () => {
        it('do not sells more tickets than available', () => {
            expect(() => ticketA.sellTicket(3)).to.throw('Only 2 tickets are available');
        });
    });
})