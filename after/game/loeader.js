class Loader {
    importModule(url) {
        return require(url);
    }

    loadModule(modules) {
        for (let moduleName of modules) {
            const module = this.importModule(`..${moduleName}`);
            module.initialize();
        }
    }
}


module.exports = new Loader();