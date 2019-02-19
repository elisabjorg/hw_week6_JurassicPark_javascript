const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('JurassicPark', 5)
  })

  it('should have a name', function() {
    const actual = park.name;
    const expected = 'JurassicPark';
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    const expected = 5;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.countDinosaurs();
    const expected = 3;
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur('Dumbo', 'herbivore', 10);
    const actual = park.countDinosaurs();
    const expected = 4;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur();
    const actual = park.countDinosaurs();
    const expected = 3;
    assert.strictEqual(actual, expected);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.countGuestsPerDay();
    const actual = park.guestsAttractedPerDay;
    const expected = 'troodon';
    assert.strictEqual(actual, expected);
  });

  xit('should be able to find all dinosaurs of a particular species', function() {
    park.findBySpecies('trex');
    const actual = park.findBySpecies;
    const expected = 'trex';
    assert.strictEqual(actual, expected);
  });

  xit('should be able to remove all dinosaurs of a particular species', function() {
    park.removeBySpecies();
    const actual = park.countDinosaurs();
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

});
