import withMinimumLogLevel from './withMinimumLogLevel';

const log = (handler) => (formatterFn) => (metaInformation) => (...messages) => {
    const addMeta = (fn) => fn(metaInformation);
    const withMinimumLogLevelAndMeta = addMeta(withMinimumLogLevel);
    const formatterFnWithMeta = addMeta(formatterFn);
    const handlerFn = handler(...formatterFnWithMeta(messages));

    return withMinimumLogLevelAndMeta(handlerFn);
};

export default log;
