import concat from 'ramda/es/concat';

const withContext = (metaInformation) => (messages) => {
    const {context} = metaInformation;

    return context ? concat([`[${context}]`], messages) : messages;
};

export default withContext;
