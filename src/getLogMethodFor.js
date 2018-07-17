import logLevelResolvers from './logLevelResolvers';

export default function getLogMethodFor(logLevel) {
    return logLevelResolvers[logLevel];
}
