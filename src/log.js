const log = (handler) => (...messages) => {
    return handler(...messages);
};

export default log;
