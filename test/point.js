const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Point = require('../app/models/point');
let point = new Point(4, 2);
let pointA = new Point(3, -7);
let pointB = new Point();


describe('Point', () => {
    
    describe('position on X axis', () => {
        it('generate x position upto X_MAX', () => {
            expect(point.x_position).to.equal(4);
        });
    });
    
    describe('position on Y axis', () => {
        it('generate y position upto Y_MAX', () => {
            expect(point.y_position).to.equal(2);
        });
    });
    
    describe('calculate the Manhattan distance', () => {
        it('returns the distance between two fixed points', () => {
            expect(Point.manhattanDistance(point, pointA)).to.equal(10);
        });
    })
    
    
})