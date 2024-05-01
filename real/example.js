const fs = require('fs');
const factory = require('./common/factory.js');
const loader = require('./common/loeader.js');

const data = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const externals = [];

loader.loadModule(data.modules);

for (let item of data.externals) {
    externals.push(factory.create(item));
}

for (let external of externals) {
    console.log(external.saveTransactions());
}