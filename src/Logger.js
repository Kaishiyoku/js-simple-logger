import getLogMethodFor from './getLogMethodFor';
import partial from 'ramda/es/partial';
import CONFIG from './CONFIG';
import LOG_LEVEL from './LOG_LEVEL';
import withMinimumLogLevel from './withMinimumLogLevel';
import buildMetaInformation from './buildMetaInformation';

const Logger = class {
    context = null;

    constructor(context = null) {
        this.context = context;
    }

    getContext() {
        return this.context;
    }

    static setDateFormat(format) {
        localStorage.setItem(CONFIG.localStorageKeys.dateFormat, format);
    }

    static getDateFormat() {
        return localStorage.getItem(CONFIG.localStorageKeys.dateFormat) || CONFIG.defaultDateFormat;
    }

    static setMinimumLogLevel(logLevel) {
        localStorage.setItem(CONFIG.localStorageKeys.minimumLogLevel, logLevel);
    }

    static getMinimumLogLevel() {
        return localStorage.getItem(CONFIG.localStorageKeys.minimumLogLevel) || CONFIG.defaultMinimumLogLevel;
    }

    static getLogLevels = () => LOG_LEVEL;

    getLogMethodWithMetaInformationFor = () => partial(getLogMethodFor, [this.getContext(), Logger.getDateFormat(), Logger.getMinimumLogLevel()]);

    trace = (...messages) => this.getLogMethodWithMetaInformationFor()(LOG_LEVEL.TRACE)(...messages);

    debug = (...messages) => this.getLogMethodWithMetaInformationFor()(LOG_LEVEL.DEBUG)(...messages);

    table = (list) => withMinimumLogLevel(buildMetaInformation(Logger.getMinimumLogLevel(), LOG_LEVEL.TABLE, null, null))(() => console.table(list));

    info = (...messages) => this.getLogMethodWithMetaInformationFor()(LOG_LEVEL.INFO)(...messages);

    log = (...messages) => this.getLogMethodWithMetaInformationFor()(LOG_LEVEL.LOG)(...messages);

    warn = (...messages) => this.getLogMethodWithMetaInformationFor()(LOG_LEVEL.WARN)(...messages);

    error = (...messages) => this.getLogMethodWithMetaInformationFor()(LOG_LEVEL.ERROR)(...messages);
};

export default Logger;
