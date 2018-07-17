const combineStrings = (...strings) => strings.reduce((accum, str) => `${accum}${str}`, '');

export default combineStrings;
