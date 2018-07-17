import concat from 'ramda/es/concat';
import formatLogLevel from '../helpers/formatLogLevel';
import _keys from 'ramda/es/keys';
import LOG_LEVEL from '../LOG_LEVEL';
import combineStr from '../helpers/combineStr';
import CONFIG from '../CONFIG';

const withLogLevel = (metaInformation) => (messages) => {
    const maxLength = combineStr(CONFIG.prefix, _keys(LOG_LEVEL).reduce((accum, value) => value.length > accum.length ? value : accum, ''), CONFIG.suffix).length;
    const {logLevel} = metaInformation;
    const formattedLogLevel = combineStr(CONFIG.prefix, formatLogLevel(logLevel), CONFIG.suffix);

    return concat([formattedLogLevel.padEnd(maxLength)], (messages));
};

export default withLogLevel;
