// @flow

const conditional: Function = (truthyFn: Function, falsyFn: Function) => (condition: boolean) => condition ? truthyFn() : falsyFn();

export default conditional;
