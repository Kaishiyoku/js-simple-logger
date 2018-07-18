import withMinimumLogLevel from './withMinimumLogLevel';
import logFormatter from './logFormatter';

const log = (handler) => (metaInformation) => (...messages) => {
    const addMeta = (fn) => fn(metaInformation);
    const withMinimumLogLevelAndMeta = addMeta(withMinimumLogLevel);
    const formatterFn = logFormatter(metaInformation);
    const handlerFn = () => handler(...formatterFn(messages));

    return withMinimumLogLevelAndMeta(handlerFn);
};

export default log;
