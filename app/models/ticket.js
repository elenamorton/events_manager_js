const DEFAULT_CURRENCY = "USD";

class Ticket {
    
    constructor(quantity, price, currency) {
        this.quantity = quantity;
        this.price = price;
        this.curency = currency || DEFAULT_CURRENCY;
    }
    

}

module.exports = Ticket