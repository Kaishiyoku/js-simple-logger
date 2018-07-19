/* eslint-disable no-console */
import log from './log';
import LOG_LEVEL from '../data/LOG_LEVEL';
import withMinimumLogLevel from './withMinimumLogLevel';
import logTable from './logTable';

const logLevelResolvers = {
    [LOG_LEVEL.TRACE]: log(console.trace),
    [LOG_LEVEL.DEBUG]: log(console.debug),
    [LOG_LEVEL.TABLE]: logTable(console.table),
    [LOG_LEVEL.INFO]: log(console.info),
    [LOG_LEVEL.LOG]: log(console.log),
    [LOG_LEVEL.WARN]: log(console.warn),
    [LOG_LEVEL.ERROR]: log(console.error),
};

export default logLevelResolvers;
