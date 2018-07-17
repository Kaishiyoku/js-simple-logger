/* eslint-disable no-console */
import log from '../log';
import LOG_LEVEL from '../LOG_LEVEL';
import withMinimumLogLevel from '../messageAdjusters/withMinimumLogLevel';

const logLevelResolvers = {
    [LOG_LEVEL.TRACE]: log(console.trace),
    [LOG_LEVEL.DEBUG]: log(console.debug),
    [LOG_LEVEL.INFO]: log(console.info),
    [LOG_LEVEL.LOG]: log(console.log),
    [LOG_LEVEL.WARN]: log(console.warn),
    [LOG_LEVEL.ERROR]: log(console.error),
};

export default logLevelResolvers;
