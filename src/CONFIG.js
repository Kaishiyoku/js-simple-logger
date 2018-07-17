import LOG_LEVEL from './LOG_LEVEL';

const CONFIG = {
    defaultDateFormat: 'HH:mm:ss.SSS',
    defaultMinimumLogLevel: LOG_LEVEL.DEBUG,
    localStorageKeys: {
        dateFormat: 'simple-logger.dateFormat',
        minimumLogLevel: 'simple-logger.minimumLogLevel',
    },
};

export default CONFIG;
