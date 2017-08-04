let UserException = require('../helper.js');

const DEFAULT_CURRENCY = "USD";
const DEFAULT_PRICE = 1;
const DEFAULT_QUANTITY = 0;
    
class Ticket {
    
    constructor(quantity, price, currency) {
        this.quantity = quantity >= 0 ? quantity : DEFAULT_QUANTITY;
        this.price = price > 0 ? price : DEFAULT_PRICE;
        this.currency = currency || DEFAULT_CURRENCY;
    }
    
    static get DEFAULT_CURRENCY() {
        return DEFAULT_CURRENCY;
    }

    sellTicket (numTickets) {
        if (numTickets <= this.quantity) {
            this.quantity -= numTickets;
            return this.quantity;
        } else {
            throw new UserException(`Only ${this.quantity} tickets are available`);
        }
    }
}

module.exports = Ticket;