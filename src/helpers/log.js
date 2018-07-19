// @flow
import withMinimumLogLevel from './withMinimumLogLevel';
import type {MetaInformation} from '../types/MetaInformation';

const log: Function = (handler: Function) => (formatterFn: Function) => (metaInformation: MetaInformation) => (...messages: Array<string>) => {
    const addMeta: Function = (fn: Function) => fn(metaInformation);
    const withMinimumLogLevelAndMeta: Function = addMeta(withMinimumLogLevel);
    const formatterFnWithMeta: Function = addMeta(formatterFn);
    const handlerFn: Function = handler(...formatterFnWithMeta(messages));

    return withMinimumLogLevelAndMeta(handlerFn);
};

export default log;
