/* eslint-disable fp/no-let,object-shorthand,fp/no-mutation */
import filter from 'ramda/es/filter';

const localStorageMock = (() => {
    let store = {};

    return {
        clear: function () {
            store = {};
        },
        getItem: function (key) {
            return store[key];
        },
        removeItem: function (key) {
            store = filter((storeKey) => storeKey !== key, store);
        },
        setItem: function (key, value) {
            store[key] = value.toString();
        },
    };
})();

Object.defineProperty(window, 'localStorage', {value: localStorageMock});
