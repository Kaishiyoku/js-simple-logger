// @flow
import type {MetaInformation} from '../types/MetaInformation';

const withMinimumLogLevel = (metaInformation: MetaInformation) => (fn: Function) => {
    const {minimumLogLevel, logLevel} = metaInformation;

    return logLevel >= minimumLogLevel ? fn : null;
};

export default withMinimumLogLevel;
