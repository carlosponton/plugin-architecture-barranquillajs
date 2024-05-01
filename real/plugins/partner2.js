const { default: axios } = require("axios");
const AbstractExternal = require("../common/abstract");
const factory = require('../common/factory');

class Partner2 extends AbstractExternal {
    async getTransactions() {
        return [{
            "id": "1",
            "fullName": "Carlos Ponton",
            "accountNumber": "1234567"
        },
        {
            "id": "2",
            "fullName": "Pepe Perez",
            "accountNumber": "7654321"
        }].map(data => ({ accountNumber: data.accountNumber }))
    }
}

function initialize() {
    factory.register('partner2', Partner2);
}
module.exports = {
    Partner2,
    initialize,
}