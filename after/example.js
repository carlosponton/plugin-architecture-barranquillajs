const fs = require('fs');
const factory = require('./game/factory.js');
const loader = require('./game/loeader.js');

const data = JSON.parse(fs.readFileSync('level.json', 'utf8'));
const characters = [];

loader.loadModule(data.modules);

for (let item of data.characters) {
    characters.push(factory.create(item));
}

for (let character of characters) {
    character.mankeANoise();
}