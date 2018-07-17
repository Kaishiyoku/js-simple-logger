import concat from 'ramda/es/concat';
import formatLogLevel from './formatLogLevel';
import _keys from 'ramda/es/keys';
import LOG_LEVEL from './LOG_LEVEL';

const withLogLevel = (metaInformation) => (messages) => {
    const prefix = '[';
    const suffix = ']';
    const maxLength = `${prefix}${_keys(LOG_LEVEL).reduce((accum, value) => value.length > accum.length ? value : accum, '')}${suffix}`.length;
    const {logLevel} = metaInformation;
    const formattedLogLevel = `${prefix}${formatLogLevel(logLevel)}${suffix}`;

    return concat([formattedLogLevel.padEnd(maxLength)], (messages));
};

export default withLogLevel;
