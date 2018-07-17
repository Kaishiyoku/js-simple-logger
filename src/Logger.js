import getLogMethodFor from './getLogMethodFor';
import partial from 'ramda/es/partial';
import CONFIG from './CONFIG';

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

    getLogMethodWithMetaInformationFor = partial(getLogMethodFor, [this.getContext(), Logger.getDateFormat()]);

    trace = this.getLogMethodWithMetaInformationFor('trace');

    debug = this.getLogMethodWithMetaInformationFor('debug');

    info = this.getLogMethodWithMetaInformationFor('info');

    log = this.getLogMethodWithMetaInformationFor('log');

    warn = this.getLogMethodWithMetaInformationFor('warn');

    error = this.getLogMethodWithMetaInformationFor('error');
};

export default Logger;
