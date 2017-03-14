var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');

var config = {
    entry: {
        app: './src/markdown-toolbar.js'
    },
    output: {
        path: DIST_DIR,
        library: 'MarkdownToolbar',
        filename: 'markdown-toolbar.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // Turn 'production' env on when running `make build`
                // 'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};

module.exports = config;
