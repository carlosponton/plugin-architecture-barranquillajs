const factory = require('../game/factory.js');

class Sorcerer {
    name

    constructor(name) {
        this.name = name;
    }

    mankeANoise() {
        console.log('Aaaargh');
    }
}

function initialize() {
    factory.register('sorcerer', Sorcerer);
}

module.exports = {
    Sorcerer,
    initialize
}