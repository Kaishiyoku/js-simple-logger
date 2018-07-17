import getLogMethodFor from './getLogMethodFor';

class Logger {
    trace = getLogMethodFor('trace');

    debug = getLogMethodFor('debug');

    info = getLogMethodFor('info');

    log = getLogMethodFor('log');

    warn = getLogMethodFor('warn');

    error = getLogMethodFor('error');
}

export default Logger;
