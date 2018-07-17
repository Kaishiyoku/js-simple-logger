import logLevelResolvers from './logLevelResolvers';
import buildMetaInformation from './buildMetaInformation';

export default function getLogMethodFor(context, logLevel) {
    return logLevelResolvers[logLevel](buildMetaInformation(logLevel, context));
}
