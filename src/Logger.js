/* eslint-disable sort-keys */
import getLogMethodFor from './helpers/getLogMethodFor';
import CONFIG from './data/CONFIG';
import LOG_LEVEL from './data/LOG_LEVEL';
import defaultTo from 'ramda/es/defaultTo';
import compose from 'ramda/es/compose';
import partialRight from 'ramda/es/partialRight';

export function setDateFormat(format) {
    localStorage.setItem(CONFIG.localStorageKeys.dateFormat, format);
}

export function getDateFormat() {
    const defaultToDateFormat = defaultTo(CONFIG.defaultDateFormat);

    return defaultToDateFormat(localStorage.getItem(CONFIG.localStorageKeys.dateFormat));
}

export function setMinimumLogLevel(logLevel) {
    localStorage.setItem(CONFIG.localStorageKeys.minimumLogLevel, logLevel);
}

export function getMinimumLogLevel() {
    const defaultToMinimumLogLevel = defaultTo(CONFIG.defaultMinimumLogLevel);

    return defaultToMinimumLogLevel(localStorage.getItem(CONFIG.localStorageKeys.minimumLogLevel));
}

export const getLogLevels = () => LOG_LEVEL;

export const getMetaInformationFor = (logLevel, context) => {
    return {
        context,
        dateFormat: getDateFormat(),
        logLevel,
        minimumLogLevel: getMinimumLogLevel(),
    };
};

export const getLogger = (context = null) => {
    const getLogMethodWithMetaInformationFor = partialRight(compose(getLogMethodFor, getMetaInformationFor), [context]);

    return {
        trace: getLogMethodWithMetaInformationFor(LOG_LEVEL.TRACE),

        debug: getLogMethodWithMetaInformationFor(LOG_LEVEL.DEBUG),

        table: getLogMethodWithMetaInformationFor(LOG_LEVEL.TABLE),

        info: getLogMethodWithMetaInformationFor(LOG_LEVEL.INFO),

        log: getLogMethodWithMetaInformationFor(LOG_LEVEL.LOG),

        warn: getLogMethodWithMetaInformationFor(LOG_LEVEL.WARN),

        error: getLogMethodWithMetaInformationFor(LOG_LEVEL.ERROR),
    };
};
