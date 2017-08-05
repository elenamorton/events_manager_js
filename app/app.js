const Point = require('./models/point');
const Ticket = require('./models/ticket');
const Event = require('./models/event');
const Venues = require('./models/venues');

const UserException = require('./helper.js');
const MESSAGE = 'Please enter a position (x,y) or <ctrl>D to exit:\n';
const PROMPT = '> ';

let parser = (input, point) => {
    
    input.replace(/\s+/g, ' ').trim();
    let arr = input.split(',');

    if (arr.length === 2) {    
        point.x_position = (isNaN(parseInt(arr[0]))) ? 0 : parseInt(arr[0]) % 10;
        point.y_position = (isNaN(parseInt(arr[1]))) ? 0 : parseInt(arr[1]) % 10;
        return true;
    }
    return false;
};

let readInput = () => {
    let currentPointString;
    let currentPoint = new Point(0,0);
    
    process.stdin.setEncoding('utf8');
    process.stdout.write(MESSAGE);
    process.stdout.write(PROMPT);
    
    process.stdin.on('readable', () => {

        currentPointString = process.stdin.read();
        
        if (currentPointString !== null) {
            
            if (parser(currentPointString, currentPoint)) {
                process.stdout.write('Closest events to: (' + `${currentPoint.x_position}` + ',' + `${currentPoint.y_position}` + '\u0029\n');
                
            }
            process.stdout.write(PROMPT);
        }
    });

    process.stdin.on('end', () => {
        process.stdout.write('end\n');
    }); 
    return;
};

let createPointsDatabase = db => {
    for (let i = 0; i < Point.DISTANCE_MAX / 2; i++) {
        db.push(new Point());
    }
};

let createTicketsDatabase = db => {
    for (let i = 0; i < 10; i++) {
        db.push(new Ticket(5, 30.29));
    }
};

let pointsDatabase = [];
let ticketsDatabase = [];
createPointsDatabase(pointsDatabase);
createTicketsDatabase(ticketsDatabase);
readInput();