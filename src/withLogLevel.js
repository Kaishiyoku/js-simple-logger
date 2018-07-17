import concat from 'ramda/es/concat';
import formatLogLevel from './formatLogLevel';

const withLogLevel = (metaInformation) => (messages) => {
    const {logLevel} = metaInformation;

    return concat([`[${formatLogLevel(logLevel)}]`], (messages));
};

export default withLogLevel;
