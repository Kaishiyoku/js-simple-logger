const conditional = (truthyFn, falsyFn) => (condition) => condition ? truthyFn() : falsyFn();

export default conditional;
