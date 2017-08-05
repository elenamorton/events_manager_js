const Point = require('./models/point');
const Ticket = require('./models/ticket');
const Event = require('./models/event');
const Venues = require('./models/venues');
const UserException = require('./helper.js');

const MESSAGE = 'Please enter a position (x,y) or <ctrl>D to exit:\n';
const PROMPT = '> ';
const PROXIMITY_CRITERIA = 15;

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

let processCurrentPoint = point => {
    let pointsId = venuesDatabase.getPointsId();
    let pointsList = [];
    for (let i = 0; i < pointsId.length; i++) {
        pointsList.push(pointsDatabase[pointsId[i]]);
    }
    
    process.stdout.write('points dist: ' + `${pointsId}` + '\n');
    
    let distanceList = [];
    for (let i = 0; i < venuesDatabase.length; i++) {
        distanceList.push(Point.manhattanDistance(point, pointsList[i]));
    }
    process.stdout.write('points dist: ' + `${distanceList}` + '\n');
    return distanceList;
};

let printAllCloseEvents = list => {
   // while ();
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
                let outputList = processCurrentPoint(currentPoint);
                process.stdout.write('Closest events to (' + `${currentPoint.x_position}` + ',' + `${currentPoint.y_position}` + '\u0029\u003a\n');
                printAllCloseEvents(outputList);
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
    for (let i = 0; i < 30; i++) {
        db.push(new Point());
    }
};

let createTicketsDatabase = db => {
    for (let i = 0; i < 10; i++) {
        db.push(new Ticket(5, 30.29));
    }
};

let createEventsDatabase = db => {
    for (let i = 0; i < 10; i++) {
        db.push(new Event(i + 1, i + 1));
    }
};

let createVenuesDatabase = db => {
    db.addVenue(3, 8);
    db.addVenue(12, 4);
    db.addVenue(17, 1);
    db.addVenue(19, 6);
    db.addVenue(27, 3);
    db.addVenue(29, 2);
};

let pointsDatabase = [];
let ticketsDatabase = [];
let eventsDatabase = [];
let venuesDatabase = new Venues({});

createPointsDatabase(pointsDatabase);
createTicketsDatabase(ticketsDatabase);
createEventsDatabase(eventsDatabase);
createVenuesDatabase(venuesDatabase);

readInput();