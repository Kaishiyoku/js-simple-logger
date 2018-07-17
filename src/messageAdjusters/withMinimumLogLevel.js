import conditional from '../helpers/conditional';
import call from '../helpers/call';

const withMinimumLogLevel = (metaInformation) => (fn) => {
    const {minimumLogLevel, logLevel} = metaInformation;

    const formatter = conditional(fn, () => null);

    return call(formatter(logLevel >= minimumLogLevel));
};

export default withMinimumLogLevel;
