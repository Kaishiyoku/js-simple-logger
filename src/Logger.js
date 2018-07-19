// @flow
/* eslint-disable sort-keys */
import getLogMethodFor from './helpers/getLogMethodFor';
import CONFIG from './data/CONFIG';
import LOG_LEVEL from './data/LOG_LEVEL';
import defaultTo from 'ramda/es/defaultTo';
import compose from 'ramda/es/compose';
import partialRight from 'ramda/es/partialRight';
import logFormatter from './helpers/logFormatter';
import Cacher from './helpers/Cacher';

const formatterFnCache: Cacher = new Cacher(logFormatter);

export function setDateFormat(format: string) {
    localStorage.setItem(CONFIG.localStorageKeys.dateFormat, format);
}

export function getDateFormat(): string {
    const defaultToDateFormat: Function = defaultTo(CONFIG.defaultDateFormat);

    return defaultToDateFormat(localStorage.getItem(CONFIG.localStorageKeys.dateFormat));
}

export function setMinimumLogLevel(logLevel: LOG_LEVEL) {
    localStorage.setItem(CONFIG.localStorageKeys.minimumLogLevel, logLevel);
}

export function getMinimumLogLevel(): LOG_LEVEL {
    const defaultToMinimumLogLevel: Function = defaultTo(CONFIG.defaultMinimumLogLevel);

    return defaultToMinimumLogLevel(parseInt(localStorage.getItem(CONFIG.localStorageKeys.minimumLogLevel), 10));
}

export const getLogLevels = () => LOG_LEVEL;

export const getMetaInformationFor = (logLevel: LOG_LEVEL, context: string|null) => {
    return {
        context,
        dateFormat: getDateFormat(),
        logLevel,
        minimumLogLevel: getMinimumLogLevel(),
    };
};

export const setFormatter = (fn: Function) => {
    formatterFnCache.set(fn);
};

export const getLogger = (context: string|null = null) => {
    const getLogMethodWithMetaInformationFor = partialRight(compose(getLogMethodFor(formatterFnCache.get()), getMetaInformationFor), [context]);

    return {
        trace: getLogMethodWithMetaInformationFor(LOG_LEVEL.TRACE),

        debug: getLogMethodWithMetaInformationFor(LOG_LEVEL.DEBUG),

        table: getLogMethodWithMetaInformationFor(LOG_LEVEL.TABLE),

        info: getLogMethodWithMetaInformationFor(LOG_LEVEL.INFO),

        log: getLogMethodWithMetaInformationFor(LOG_LEVEL.LOG),

        warn: getLogMethodWithMetaInformationFor(LOG_LEVEL.WARN),

        error: getLogMethodWithMetaInformationFor(LOG_LEVEL.ERROR),

        getContext(): string|null {
            return context;
        },
    };
};
