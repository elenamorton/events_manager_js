const chai = require('chai');
const expect = chai.expect;

//Importing our places model for the unit test
const Point = require('../app/models/point');
let point = new Point(4, 2);

describe('Place', () => {
    
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
    
})