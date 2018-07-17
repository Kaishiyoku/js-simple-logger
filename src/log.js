import withContext from './withContext';
import withLogLevel from './withLogLevel';
import compose from 'ramda/es/compose';
import withTimestamp from './withTimestamp';

const log = (handler) => (metaInformation) => (...messages) => {
    const withLogLevelAndContext = compose(withTimestamp(metaInformation), withLogLevel(metaInformation), withContext(metaInformation));

    return handler(...withLogLevelAndContext(messages));
};

export default log;
