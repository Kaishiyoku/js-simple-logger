import withContext from './withContext';
import withLogLevel from './withLogLevel';
import compose from 'ramda/es/compose';
import withTimestamp from './withTimestamp';
import withMinimumLogLevel from './withMinimumLogLevel';
import withSpacer from './withSpacer';

const log = (handler) => (metaInformation) => (...messages) => {
    const withMetaInformation = compose(withSpacer(metaInformation), withTimestamp(metaInformation), withLogLevel(metaInformation), withContext(metaInformation));

    return withMinimumLogLevel(metaInformation)(() => handler(...withMetaInformation(messages)));
};

export default log;
