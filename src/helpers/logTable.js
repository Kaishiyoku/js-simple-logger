// @flow
import withMinimumLogLevel from './withMinimumLogLevel';
import compose from 'ramda/es/compose';
import type {MetaInformation} from '../types/MetaInformation';

const logTable: Function = (handler: Function) => (formatterFn: Function) => (metaInformation: MetaInformation) => (items: Array<any>) => {
    const fn: Function = compose(handler, withMinimumLogLevel(metaInformation));

    return fn(items);
};

export default logTable;
