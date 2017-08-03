const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Point = require('../app/models/point');
let point = new Point(4, 2);
let pointA = new Point(3, -7);
let pointB = new Point();

describe('Point', () => {
    
    describe('position on X axis', () => {
        it('shows x position', () => {
            expect(point.x_position).to.equal(4);
        });
        
        it('generate x position upto X_MAX', () => {
            expect(pointB.x_position).to.be.at.most(Point.X_MAX);
        });
                
        it('generate x position above X_MIN', () => {
            expect(pointB.x_position).to.be.at.least(Point.X_MIN);
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
        
        it('returns the distance between two points random generated', () => {
            expect(Point.manhattanDistance(pointA, pointB)).to.be.at.most(Point.DISTANCE_MAX);
        });
    })
    
    
})