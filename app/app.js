const Point = require('./models/point');
const Ticket = require('./models/ticket');
const Event = require('./models/event');
const Venues = require('./models/venues');

const UserException = require('./helper.js');

let parser = input => {
    return input;
}

let readInput = () => {
    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', () => {
        let position = process.stdin.read();
        if (position !== null) {
            parser(position);
            process.stdout.write(`data: ${position}`);
        }
    });

    process.stdin.on('end', () => {
        process.stdout.write('end\n');
    }); 
    return;
}

readInput();