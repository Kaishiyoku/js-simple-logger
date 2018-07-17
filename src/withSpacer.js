import concat from 'ramda/es/concat';
import LOG_LEVEL from './LOG_LEVEL';

const withSpacer = (metaInformation) => (messages) => {
    const isSpacerNeeded = ![LOG_LEVEL.TRACE, LOG_LEVEL.WARN, LOG_LEVEL.ERROR].includes(metaInformation.logLevel);

    return isSpacerNeeded ? concat([''], messages) : messages;
};

export default withSpacer;
