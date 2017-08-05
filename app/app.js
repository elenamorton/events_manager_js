const Point = require('./models/point');
const Ticket = require('./models/ticket');
const Event = require('./models/event');
const Venues = require('./models/venues');

const UserException = require('./helper.js');
const MESSAGE = 'Please enter a position (x,y) or <ctrl>D to exit:> ';

let parser = input => {
    return input;
}

let readInput = () => {
    process.stdin.setEncoding('utf8');
    process.stdout.write(MESSAGE);
    process.stdin.on('readable', () => {

        let position = process.stdin.read();
        if (position !== null) {
            if (parser(position) !== undefined) {
            
                process.stdout.write(`data: ${position}`);
            }
            process.stdout.write(MESSAGE);
        }
    });

    process.stdin.on('end', () => {
        process.stdout.write('end\n');
    }); 
    return;
}

readInput();