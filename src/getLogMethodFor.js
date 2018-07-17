import logLevelResolvers from './logLevelResolvers';

export default function getLogMethodFor(context, logLevel) {
    return logLevelResolvers[logLevel](context);
}
