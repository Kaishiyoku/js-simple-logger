// @flow
import LOG_LEVEL from '../data/LOG_LEVEL';
import objSwitchKeysWithValues from './objSwitchKeysWithValues';
import prop from 'ramda/es/prop';

export default function formatLogLevel(logLevel: LOG_LEVEL): string {
    return prop(logLevel, objSwitchKeysWithValues(LOG_LEVEL));
}
