const withContext = (context, messages) => {
    return context ? [`[${context}]`].concat(messages) : messages;
};

export default withContext;
