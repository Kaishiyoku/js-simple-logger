import concat from 'ramda/es/concat';
import CONFIG from '../CONFIG';
import combineStrings from '../helpers/string/combineStrings';
import conditional from '../helpers/fp/conditional';

const withContext = (metaInformation) => (messages) => {
    const {context} = metaInformation;
    const formattedContext = combineStrings(CONFIG.prefix, context, CONFIG.suffix);
    const formatter = conditional(() => concat([formattedContext.padEnd(CONFIG.defaultMaxContextLength)], messages), () => messages);

    return formatter(context);
};

export default withContext;
