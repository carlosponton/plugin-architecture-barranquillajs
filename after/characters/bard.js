const factory = require('../game/factory.js');

class Bard {
    name

    constructor(name) {
        this.name = name;
    }

    mankeANoise() {
        console.log('Toss a coin to your Withcer!');
    }
}

function initialize() {
    factory.register('bard', Bard);
}

module.exports = {
    Bard,
    initialize
}