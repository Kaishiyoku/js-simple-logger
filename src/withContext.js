const withContext = (context) => (fn) => (...messages) => {
    return context ? fn(`[${context}]`, ...messages) : fn(...messages);
};

export default withContext;
