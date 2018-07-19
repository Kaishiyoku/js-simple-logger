import logLevelResolvers from './logLevelResolvers';
import prop from 'ramda/es/prop';

const getLogMethodFor = (metaInformation) => {
    const {logLevel} = metaInformation;

    const logLevelFn = prop(logLevel, logLevelResolvers);

    return logLevelFn(metaInformation);
};

export default getLogMethodFor;
