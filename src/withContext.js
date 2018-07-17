import concat from 'ramda/es/concat';
import CONFIG from './CONFIG';

const withContext = (metaInformation) => (messages) => {
    const prefix = '[';
    const suffix = ']';
    const {context} = metaInformation;
    const formattedContext = `${prefix}${context}${suffix}`;

    return context ? concat([formattedContext.padEnd(CONFIG.defaultMaxContextLength)], messages) : messages;
};

export default withContext;
