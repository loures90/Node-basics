class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `Hey! My name is ${this.name}!`;
    }
}

module.exports = { Person };