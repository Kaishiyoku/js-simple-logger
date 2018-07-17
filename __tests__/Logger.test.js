/* eslint-disable no-console */
import Logger from '../src/Logger';

describe('Logger', () => {
    it('should log a simple message properly', () => {
        const logger = Logger();
        logger.debug('Debug message');
        logger.error('Error message');
        logger.info('Info message');
        logger.log('Log message');
        logger.trace('Trace message');
        logger.warn('Warn message');

        expect(console.debug).toHaveBeenCalledWith('[DEBUG]', 'Debug message');
        expect(console.error).toHaveBeenCalledWith('[ERROR]', 'Error message');
        expect(console.info).toHaveBeenCalledWith('[INFO]', 'Info message');
        expect(console.log).toHaveBeenCalledWith('[LOG]', 'Log message');
        expect(console.trace).toHaveBeenCalledWith('[TRACE]', 'Trace message');
        expect(console.warn).toHaveBeenCalledWith('[WARN]', 'Warn message');
    });

    it('should log with a context', () => {
        const logger = Logger('main');
        logger.debug('Test message');

        expect(console.debug).toHaveBeenCalledWith('[DEBUG]', '[main]', 'Test message');
    });
});
