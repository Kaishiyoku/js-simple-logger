import LOG_LEVEL from '../LOG_LEVEL';
import objSwitchKeysWithValues from './objSwitchKeysWithValues';
import prop from 'ramda/es/prop';

export default function formatLogLevel(logLevel) {
    return prop(logLevel, objSwitchKeysWithValues(LOG_LEVEL));
}
