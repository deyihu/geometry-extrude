import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: __dirname + '/src/main.js',
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            exclude: ['node_modules/**']
        })
    ],
    output: [
        {
            format: 'umd',
            sourcemap: true,
            name: 'geometryExtrude',
            file: 'dist/geometry-extrude.js'
        }
    ]
};