const not = (predicate) => (...args) => !predicate(...args);

export default not;