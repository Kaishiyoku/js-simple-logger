// @flow

const not: Function = (predicate: Function) => (...args: any) => !predicate(...args);

export default not;
