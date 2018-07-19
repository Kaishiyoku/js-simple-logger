import withMinimumLogLevel from './withMinimumLogLevel';
import compose from 'ramda/es/compose';

const logTable = (handler) => (formatterFn) => (metaInformation) => (items) => {
    const fn = compose(handler, withMinimumLogLevel(metaInformation));

    return fn(items);
};

export default logTable;
