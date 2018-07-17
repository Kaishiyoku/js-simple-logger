const consoleMock = (() => {
    return {
        debug: jest.fn(),
        error: jest.fn(),
        info: jest.fn(),
        log: jest.fn(),
        trace: jest.fn(),
        warn: jest.fn(),
    };
})();

Object.defineProperty(global, 'console', {value: consoleMock});
