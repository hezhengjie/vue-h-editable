var path = require('path');
const webpack = require('webpack');
const package = require('./package.json');

module.exports = {
    entry: './src/vue-h-editable.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'vue-h-editable.js',
        library: 'VueEditable',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"production"'
            }
          }),
         new webpack.optimize.UglifyJsPlugin({
            minimize: false,
            sourceMap: false,
            mangle: false,
            compress: {
                warnings: false
            },
            output: {
                comments: true
            }
        })
    ]
};
