/* eslint-disable sort-keys */
import deepFreeze from 'deep-freeze-node';

const LOG_LEVEL = deepFreeze({
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    LOG: 3,
    WARN: 4,
    ERROR: 5,
});

export default LOG_LEVEL;
