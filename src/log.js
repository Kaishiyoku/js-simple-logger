import withContext from './withContext';
import withLogLevel from './withLogLevel';
import compose from 'ramda/es/compose';

const log = (handler) => (metaInformation) => (...messages) => {
    const withLogLevelAndContext = compose(withLogLevel(metaInformation), withContext(metaInformation));

    return handler(...withLogLevelAndContext(messages));
};

export default log;
