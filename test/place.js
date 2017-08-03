const chai = require('chai')
const expect = chai.expect

//Importing our places model for the unit test
const Place = require('../app/models/place')

describe('Place', () => {
    
    describe('position on X axis', () => {
        it('generate x position upto X_MAX', () => {
            expect(new Place(4, 2).x_position).to.equal(4);
        })
    })
    
    
    
})