const Point = require('./models/point');
const Ticket = require('./models/ticket');
const Event = require('./models/event');
const Venues = require('./models/venues');
const UserException = require('./helper.js');

const MESSAGE = 'Please Input Coordinates (x,y) or <ctrl>D to exit:\n';
const PROMPT = '> ';
const PROXIMITY_CRITERIA = 15;
const NUMBER_OF_CLOSEST_EVENTS = 5;

let parser = (input, point) => {
    input.replace(/\s+/g, ' ').trim();
    let arr = input.split(',');

    if (arr.length === 2) {    
        point.x_position = (isNaN(parseInt(arr[0], 10))) ? 0 : parseInt(arr[0], 10) % 10;
        point.y_position = (isNaN(parseInt(arr[1], 10))) ? 0 : parseInt(arr[1], 10) % 10;
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
    
    let distanceList = [];
    for (let i = 0; i < venuesDatabase.length; i++) {
        distanceList.push(Point.manhattanDistance(point, pointsList[i]));
    }
    
    let distancesWithPoints = {};
    for (let i = 0; i < pointsId.length; i++) {
        distancesWithPoints[distanceList[i]] = pointsId[i];
    }
    return distancesWithPoints;
};

let printAllCloseEvents = hash => {
    let keys = Object.keys(hash);
    let numberEvents = (keys.length < NUMBER_OF_CLOSEST_EVENTS) ? keys.length : NUMBER_OF_CLOSEST_EVENTS;
    for (let i = 0; i <numberEvents; i++) {
        
        if (keys[i] < PROXIMITY_CRITERIA) {
            let distance = keys[i];
            let pointId = hash[distance];
            let eventId = venuesDatabase.getEventId(pointId);
            let ticketId = eventsDatabase[eventId].ticketId;
            let price = ticketsDatabase[ticketId-1].price.toFixed(2);
            price = (price - 10 >= 0) ? price : ("0" + price).slice(-5);
            process.stdout.write('Event ' + `${eventsDatabase[eventId-1].identifier}` + ' - $' + `${price}` + ', Distance ' + `${distance}` + '\n');
        }
    }
    return;
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
    db[1].price = 35.20;
    db[6].price = 1.40;
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