export default class Cacher {
    cache = null;

    constructor(initialValue) {
        this.cache = initialValue;
    }

    isFilled() {
        return this.cache !== null;
    }

    clear() {
        this.cache = null;
    }

    get() {
        return this.cache;
    }

    set(value) {
        this.cache = value;
    }
}
