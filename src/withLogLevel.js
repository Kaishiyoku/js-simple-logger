import toUpper from 'ramda/es/toUpper';
import concat from 'ramda/es/concat';

const withLogLevel = (metaInformation) => (messages) => {
    const {logLevel} = metaInformation;

    return concat([`[${toUpper(logLevel)}]`], (messages));
};

export default withLogLevel;
