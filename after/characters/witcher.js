const factory = require('../game/factory.js');

class Witcher {
    name

    constructor(name) {
        this.name = name;
    }

    mankeANoise() {
        console.log('Mmmmm');
    }
}

function initialize() {
    factory.register('witcher', Witcher);
}

module.exports = {
    Witcher,
    initialize
}