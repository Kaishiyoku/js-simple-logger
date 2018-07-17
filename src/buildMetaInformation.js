export default function buildMetaInformation(minimumLogLevel, logLevel, dateFormat, context) {
    return {
        context,
        dateFormat,
        logLevel,
        minimumLogLevel,
    };
}
