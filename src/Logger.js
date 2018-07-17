import getLogMethodFor from './getLogMethodFor';
import partial from 'ramda/es/partial';

const Logger = (context = null) => {
    const getLogMethodWithContextFor = partial(getLogMethodFor, [context]);

    return new class {
        trace = getLogMethodWithContextFor('trace');

        debug = getLogMethodWithContextFor('debug');

        info = getLogMethodWithContextFor('info');

        log = getLogMethodWithContextFor('log');

        warn = getLogMethodWithContextFor('warn');

        error = getLogMethodWithContextFor('error');
    };
};

export default Logger;
