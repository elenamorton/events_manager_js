const DEFAULT_CURRENCY = "USD";

class Ticket {
    
    constructor(quantity, price, currency) {
        
        this.quantity = quantity;
        this.price = price;
        this.currency = currency || DEFAULT_CURRENCY;
        process.stdout.write(this.currency);
    }
    
    static get DEFAULT_CURRENCY() {
        return DEFAULT_CURRENCY;
    }


}

module.exports = Ticket