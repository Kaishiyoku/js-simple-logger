/* eslint-disable no-console */
import Logger from '../src/Logger';

describe('Logger', () => {
    it('should log a simple message properly', () => {
        const logger = Logger();
        logger.debug('debug message');
        logger.error('error message');
        logger.info('info message');
        logger.log('log message');
        logger.trace('trace message');
        logger.warn('warn message');

        expect(console.debug).toHaveBeenCalledWith('debug message');
        expect(console.error).toHaveBeenCalledWith('error message');
        expect(console.info).toHaveBeenCalledWith('info message');
        expect(console.log).toHaveBeenCalledWith('log message');
        expect(console.trace).toHaveBeenCalledWith('trace message');
        expect(console.warn).toHaveBeenCalledWith('warn message');
    });

    it('should log with a context', () => {
        const logger = Logger('main');
        logger.debug('Test message');

        expect(console.debug).toHaveBeenCalledWith('[main]', 'Test message');
    });
});
