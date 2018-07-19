// @flow
import LOG_LEVEL from './LOG_LEVEL';

const CONFIG = {
    defaultDateFormat: 'HH:mm:ss.SSS',
    defaultMaxContextLength: 20,
    defaultMinimumLogLevel: LOG_LEVEL.DEBUG,
    localStorageKeys: {
        dateFormat: 'simple-logger.dateFormat',
        minimumLogLevel: 'simple-logger.minimumLogLevel',
    },
    prefix: '[',
    suffix: ']',
};

export default CONFIG;
