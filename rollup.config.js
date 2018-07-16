/* eslint-disable sort-keys */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import flow from 'rollup-plugin-flow';
import pkg from './package.json';

export default [
    {
        input: 'src/main.js',
        output: {
            name: 'simple-logger',
            file: pkg.browser,
            format: 'umd',
        },
        plugins: [
            flow(),
            resolve(),
            commonjs(),
            terser(),
        ],
    },
    {
        input: 'src/main.js',
        external: ['ramda', 'lodash'],
        output: [
            {file: pkg.module, format: 'es'},
        ],
        plugins: [
            flow(),
        ],
    },
    {
        input: 'src/main.js',
        external: ['ramda', 'lodash'],
        output: [
            {file: pkg.main, format: 'cjs'},
        ],
        plugins: [
            flow(),
            terser(),
        ],
    },
];
