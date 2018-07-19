// @flow
import logLevelResolvers from './logLevelResolvers';
import prop from 'ramda/es/prop';
import type {MetaInformation} from '../types/MetaInformation';

const getLogMethodFor: Function = (formatterFn: Function) => (metaInformation: MetaInformation) => {
    const {logLevel} = metaInformation;

    const logLevelFn: Function = prop(logLevel, logLevelResolvers);

    return logLevelFn(formatterFn)(metaInformation);
};

export default getLogMethodFor;
