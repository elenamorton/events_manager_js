const EVENT_DEFAULT_IDENTIFIER = 0;

function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

class Event {
    constructor(identifier, ticketId) {
        this.identifier = this.formattedIdentifier(identifier || EVENT_DEFAULT_IDENTIFIER);
        this.ticketId = ticketId;
    }
    
    formattedIdentifier (num) {
        return ("00" + num).slice(-3);
    }
    
}

module.exports=Event;