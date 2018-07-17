import withContext from './withContext';

const log = (handler) => (context) => (...messages) => {
    return handler(...withContext(context, messages));
};

export default log;
