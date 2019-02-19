const Dinosaur = require('./dinosaur.js');

const troodon = new Dinosaur('troodon', 'carnivore', 40);
const trex = new Dinosaur('t-rex', 'herbivore', 30);
const dino = new Dinosaur('dino', 'omnivore', 20);

const dinos = [troodon, trex, dino];

const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
}

Park.prototype.countDinosaurs = function() {
  return dinos.length;
}

Park.prototype.addDinosaur = function() {
  dinos.push(dinos);
}

Park.prototype.removeDinosaur = function() {
  dinos.splice(-1);
}

// Park.prototype.countGuestsPerDay = function() {
//   Math.max(dinos.guestsAttractedPerDay)();
//   return dinos.species;
// }

// Park.prototype.findBySpecies = function(dino) {
//   const indexOfDinos = dinos.indexOf(dino);
//   dinos.species.find(indexOfDinos, dinos.species)
// }

// Park.prototype.removeBySpecies = function(dino) {
//   const indexOfDinos = dinos.species.indexOf(dino);
//   dinos.splice(indexOfDinos, 1);
// }

module.exports = Park;
