/* eslint-disable sort-keys */
import deepFreeze from 'deep-freeze-node';

const LOG_LEVEL = deepFreeze({
    OFF: -1,
    TRACE: 0,
    DEBUG: 1,
    TABLE: 2,
    INFO: 3,
    LOG: 4,
    WARN: 5,
    ERROR: 6,
});

export default LOG_LEVEL;
