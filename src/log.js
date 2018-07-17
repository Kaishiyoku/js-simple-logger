import withContext from './messageAdjusters/withContext';
import withLogLevel from './messageAdjusters/withLogLevel';
import compose from 'ramda/es/compose';
import withTimestamp from './messageAdjusters/withTimestamp';
import withMinimumLogLevel from './messageAdjusters/withMinimumLogLevel';
import withSpacer from './messageAdjusters/withSpacer';

const log = (handler) => (metaInformation) => (...messages) => {
    const addMeta = (fn) => fn(metaInformation);
    const withMetaInformation = compose(addMeta(withSpacer), addMeta(withTimestamp), addMeta(withLogLevel), addMeta(withContext));
    const withMinimumLogLevelAndMeta = addMeta(withMinimumLogLevel);
    const handlerFn = () => handler(...withMetaInformation(messages));

    return withMinimumLogLevelAndMeta(handlerFn);
};

export default log;
