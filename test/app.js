const chai = require('chai');
const expect = chai.expect;

const Point = require('../app/models/point');
const Ticket = require('../app/models/ticket');
const Event = require('../app/models/event');
const Venues = require('../app/models/venues');

const App = require('../app/app');

let pointsTestDatabase = [];
let ticketsTestDatabase = [];
let eventsTestDatabase = [];
let venuesTestDatabase = new Venues({});
let currentPoint = new Point(4,2);

describe('App', () => {
    describe('full scenario with reference point 4,2', () => {
        it('successfully generates closest points list', () => {
            App.createPointsDatabase(pointsTestDatabase);
            App.createTicketsDatabase(ticketsTestDatabase);
            App.createEventsDatabase(eventsTestDatabase);
            App.createVenuesDatabase(venuesTestDatabase);
            
            
        });
    });
})