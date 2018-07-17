import logLevelResolvers from './logLevelResolvers';
import buildMetaInformation from './buildMetaInformation';

export default function getLogMethodFor(context, dateFormat, minimumLogLevel, logLevel) {
    return logLevelResolvers[logLevel](buildMetaInformation(minimumLogLevel, logLevel, dateFormat, context));
}
