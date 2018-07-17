import concat from 'ramda/es/concat';
import CONFIG from '../CONFIG';
import combineStr from '../helpers/combineStr';
import conditional from '../helpers/conditional';
import call from '../helpers/call';

const withContext = (metaInformation) => (messages) => {
    const {context} = metaInformation;
    const formattedContext = combineStr(CONFIG.prefix, context, CONFIG.suffix);
    const formatter = conditional(() => concat([formattedContext.padEnd(CONFIG.defaultMaxContextLength)], messages), () => messages);

    return call(formatter(context));
};

export default withContext;
