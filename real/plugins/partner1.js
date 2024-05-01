const { default: axios } = require("axios");
const AbstractExternal = require("../common/abstract");
const factory = require('../common/factory');

class Partner1 extends AbstractExternal {
    async getTransactions() {
        const response = await axios.get('http://localhost:3100/api/partner1');
        return response.data.map(data => ({ accountNumber: data.account.number }));
    }
}

function initialize() {
    factory.register('partner1', Partner1);
}
module.exports = {
    Partner1,
    initialize,
}