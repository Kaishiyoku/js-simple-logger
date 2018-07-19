/* eslint-disable no-console */
import MockDate from 'mockdate';
import {getLogLevels, getLogger, setMinimumLogLevel} from '../src/Logger';

describe('Logger', () => {
    MockDate.set('3/10/2017 15:05:20.389');

    const sampleData = [
        {name: 'A', value: 1},
        {name: 'B', value: 2},
        {name: 'C', value: 3},
        {name: 'D', value: 4},
        {name: 'E', value: 5},
    ];

    it('should log a simple message properly', () => {
        setMinimumLogLevel(getLogLevels().TRACE);
        const logger = getLogger();

        expect(logger.trace('Trace message')).toMatchSnapshot();
        expect(logger.debug('Debug message')).toMatchSnapshot();
        expect(logger.table(sampleData)).toEqual(sampleData);
        expect(logger.info('Info message')).toMatchSnapshot();
        expect(logger.log('Log message')).toMatchSnapshot();
        expect(logger.warn('Warn message')).toMatchSnapshot();
        expect(logger.error('Error message')).toMatchSnapshot();
    });

    it('should log with a context', () => {
        const logger = getLogger('main');

        expect(logger.trace('Trace message')).toMatchSnapshot();
        expect(logger.debug('Debug message')).toMatchSnapshot();
        expect(logger.table(sampleData)).toEqual(sampleData);
        expect(logger.info('Info message')).toMatchSnapshot();
        expect(logger.log('Log message')).toMatchSnapshot();
        expect(logger.warn('Warn message')).toMatchSnapshot();
        expect(logger.error('Error message')).toMatchSnapshot();
    });
});
