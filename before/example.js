const fs = require('fs');

class Sorcerer {
    name

    constructor(name) {
        this.name = name;
    }

    mankeANoise() {
        console.log('Aaaargh');
    }
}

class Wizard {
    name

    constructor(name) {
        this.name = name;
    }

    mankeANoise() {
        console.log('Boohhh');
    }
}

class Witcher {
    name

    constructor(name) {
        this.name = name;
    }

    mankeANoise() {
        console.log('Mmmmm');
    }
}


const data = JSON.parse(fs.readFileSync('level.json', 'utf8'));
const characters = [];

for (let character of data.characters) {
    const type = character.type;

    if (type === 'sorcerer') {
        characters.push(new Sorcerer(...Object.values(character)));
    } else if (type === 'wizard') {
        characters.push(new Wizard(...Object.values(character)));
    } else if (type === 'witcher') {
        characters.push(new Witcher(...Object.values(character)));
    }
}

for (let character of characters) {
    console.log(character);
    character.mankeANoise();
}