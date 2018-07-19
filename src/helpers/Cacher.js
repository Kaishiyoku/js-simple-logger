// @flow

export default class Cacher {
    cache: any = null;

    constructor(initialValue: any) {
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

    set(value: any) {
        this.cache = value;
    }
}
