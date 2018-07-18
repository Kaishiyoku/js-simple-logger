import conditional from './fp/conditional';

const withMinimumLogLevel = (metaInformation) => (fn) => {
    const {minimumLogLevel, logLevel} = metaInformation;

    const formatter = conditional(fn, () => null);

    return formatter(logLevel >= minimumLogLevel);
};

export default withMinimumLogLevel;
