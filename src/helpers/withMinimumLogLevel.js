const withMinimumLogLevel = (metaInformation) => (fn) => {
    const {minimumLogLevel, logLevel} = metaInformation;

    return logLevel >= minimumLogLevel ? fn : null;
};

export default withMinimumLogLevel;
