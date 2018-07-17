const combineStr = (...strings) => strings.reduce((accum, str) => `${accum}${str}`, '');

export default combineStr;
