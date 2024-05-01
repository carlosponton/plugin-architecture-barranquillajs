const factory = require('../game/factory.js');

class Wizard {
    name

    constructor(name) {
        this.name = name;
    }

    mankeANoise() {
        console.log('Boohhh');
    }
}

function initialize() {
    factory.register('wizard', Wizard);
}

module.exports = {
    Wizard,
    initialize
}