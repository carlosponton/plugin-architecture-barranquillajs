class AbstractExternal {
    constructor() {
        if (this.constructor == AbstractExternal) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        if (this.getTransactions === undefined) {
            throw new Error("Method 'getTransactions()' must be implemented.");
        }
    }

    async saveTransactions() {
        console.log(await this.getTransactions());
        return this.getTransactions();
    }
}

module.exports = AbstractExternal;
