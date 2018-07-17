import withContext from './withContext';

const log = (handler) => (context) => (...messages) => {
    return withContext(context)(handler)(...messages);
};

export default log;
