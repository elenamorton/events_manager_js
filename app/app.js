const Point = require('./models/point');
const Ticket = require('./models/ticket');
const Event = require('./models/event');
const Venues = require('./models/venues');

const UserException = require('./helper.js');
const MESSAGE = 'Please enter a position (x,y) or <ctrl>D to exit:\n';
const PROMPT = '> ';

let parser = input => {
    return input;
}

let readInput = () => {
    let positionString;
 
    process.stdin.setEncoding('utf8');
    process.stdout.write(MESSAGE);
    process.stdout.write(PROMPT);
    
    process.stdin.on('readable', () => {

        positionString = process.stdin.read();
        
        if (positionString !== null) {
            if (parser(positionString.trim()) !== undefined) {
                process.stdout.write('Closest events to: (' + `${positionString.trim()}` + '\u0029\n');
            }
            process.stdout.write(PROMPT);
        }
    });

    process.stdin.on('end', () => {
        process.stdout.write('end\n');
    }); 
    return;
}

readInput();