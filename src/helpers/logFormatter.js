import concat from 'ramda/es/concat';
import combineStrings from './string/combineStrings';
import CONFIG from '../data/CONFIG';
import _keys from 'ramda/es/keys';
import LOG_LEVEL from '../data/LOG_LEVEL';
import formatLogLevel from './formatLogLevel';
import format from 'date-fns/format';

const logFormatter = (metaInformation = {}) => (messages) => {
    const {dateFormat, logLevel, context} = metaInformation;
    const logLevelMaxLength = combineStrings(CONFIG.prefix, _keys(LOG_LEVEL).reduce((accum, value) => value.length > accum.length ? value : accum, ''), CONFIG.suffix).length;
    const currentDate = new Date();

    const additions = [
        format(currentDate, dateFormat),
        combineStrings(CONFIG.prefix, formatLogLevel(logLevel), CONFIG.suffix).padEnd(logLevelMaxLength),
        context ? combineStrings(CONFIG.prefix, context, CONFIG.suffix).padEnd(CONFIG.defaultMaxContextLength) : '',
    ].join(' ');

    return concat([additions], messages);
};

export default logFormatter;
