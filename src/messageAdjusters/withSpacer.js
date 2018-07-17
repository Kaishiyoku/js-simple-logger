import concat from 'ramda/es/concat';
import LOG_LEVEL from '../LOG_LEVEL';
import conditional from '../helpers/conditional';
import call from '../helpers/call';

const withSpacer = (metaInformation) => (messages) => {
    const isSpacerNeeded = ![LOG_LEVEL.TRACE, LOG_LEVEL.WARN, LOG_LEVEL.ERROR].includes(metaInformation.logLevel);

    const formatter = conditional(() => concat([''], messages), () => messages);

    return call(formatter(isSpacerNeeded));
};

export default withSpacer;
