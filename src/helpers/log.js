import withMinimumLogLevel from './withMinimumLogLevel';
import logFormatter from './logFormatter';

const log = (handler) => (metaInformation) => (...messages) => {
    const withMinimumLogLevelAndMeta = withMinimumLogLevel(metaInformation);
    const formatterFn = logFormatter(metaInformation);
    const handlerFn = handler(...formatterFn(messages));

    return withMinimumLogLevelAndMeta(handlerFn);
};

export default log;
