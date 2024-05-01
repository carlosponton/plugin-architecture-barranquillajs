class Factory {
    characterCreationFuncs = {};

    register(characterType, creationFunction) {
        this.characterCreationFuncs[characterType] = creationFunction;
    }

    unresgiter(characterType) {
        delete this.characterCreationFuncs[characterType];
    }

    create(params) {
        const characterType = params.type;

        const creationFunc = this.characterCreationFuncs[characterType];

        return new creationFunc(...Object.values(params));
    }
}


module.exports = new Factory();