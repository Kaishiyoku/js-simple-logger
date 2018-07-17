/* eslint-disable no-console */
import log from 'log';

const logLevelResolvers = {
    debug: log(console.debug),
    error: log(console.error),
    info: log(console.info),
    log: log(console.log),
    trace: log(console.trace),
    warn: log(console.warn),
};

export default logLevelResolvers;
