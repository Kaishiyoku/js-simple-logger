import logLevelResolvers from './logLevelResolvers';
import prop from 'ramda/es/prop';

const getLogMethodFor = (formatterFn) => (metaInformation) => {
    const {logLevel} = metaInformation;

    const logLevelFn = prop(logLevel, logLevelResolvers);

    return logLevelFn(formatterFn)(metaInformation);
};

export default getLogMethodFor;
