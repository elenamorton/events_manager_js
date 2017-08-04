let UserException = require('../helper.js');

const EVENT_DEFAULT_IDENTIFIER = 0;

class Event {
    constructor(identifier, ticketId) {
        this.identifier = this.formattedIdentifier(identifier || EVENT_DEFAULT_IDENTIFIER);
        this.ticketId = ticketId;
    }
    
    formattedIdentifier (num) {
        if (num <= 999 && num >= 1) {
            return ("00" + num).slice(-3);
        } else {
            return "000";
            //throw new UserException('Only identifier with three digits are allowed');
        }
    }
    
}

module.exports=Event;