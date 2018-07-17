import logLevelResolvers from './logLevelResolvers';
import buildMetaInformation from './buildMetaInformation';

export default function getLogMethodFor(context, dateFormat, logLevel) {
    return logLevelResolvers[logLevel](buildMetaInformation(logLevel, dateFormat, context));
}
