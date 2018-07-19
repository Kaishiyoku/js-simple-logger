import withMinimumLogLevel from './withMinimumLogLevel';
import logFormatter from './logFormatter';

const log = (handler) => (metaInformation) => (...messages) => {
    const formatterFn = logFormatter(metaInformation);
    const handlerFn = handler(...formatterFn(messages));

    return withMinimumLogLevel(metaInformation)(handlerFn);
};

export default log;
