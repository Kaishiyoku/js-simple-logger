const consoleMock = (() => {
    return {
        debug: (...messages) => messages.join(' '),
        error: (...messages) => messages.join(' '),
        info: (...messages) => messages.join(' '),
        log: (...messages) => messages.join(' '),
        table: (data) => data,
        trace: (...messages) => messages.join(' '),
        warn: (...messages) => messages.join(' '),
    };
})();

Object.defineProperty(global, 'console', {value: consoleMock});
