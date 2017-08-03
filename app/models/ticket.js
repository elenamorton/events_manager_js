const DEFAULT_CURRENCY = "USD";
const TICKET_MIN_QUANTITY = 0;

function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}
    
class Ticket {
    
    constructor(quantity, price, currency) {
        this.quantity = quantity;
        this.price = price;
        this.currency = currency || DEFAULT_CURRENCY;
    }
    
    static get DEFAULT_CURRENCY() {
        return DEFAULT_CURRENCY;
    }

    sellTicket(numTickets) {
        if (numTickets <= this.quantity) {
            this.quantity -= numTickets;
            return this.quantity;
        } else {
            throw new UserException(`Only ${this.quantity} tickets are available`);
        }
    }
}

module.exports = Ticket