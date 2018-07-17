import LOG_LEVEL from '../LOG_LEVEL';
import objSwitchKeysWithValues from './objSwitchKeysWithValues';

export default function formatLogLevel(logLevel) {
    return objSwitchKeysWithValues(LOG_LEVEL)[logLevel];
}
