import logLevelResolvers from './logLevelResolvers';
import buildMetaInformation from './buildMetaInformation';
import prop from 'ramda/es/prop';

export default function getLogMethodFor(context, dateFormat, minimumLogLevel, logLevel) {
    const logLevelFn = prop(logLevel, logLevelResolvers);

    return logLevelFn(buildMetaInformation(minimumLogLevel, logLevel, dateFormat, context));
}
