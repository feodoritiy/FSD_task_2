let path = require('path');

module.exports = {
    entry: {
        main: 'src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
        open: 'opera',
        openPage: 'uikit/',
        hot: true,
        compress: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                template: /\.(scss|sass)$/,
                use: [
                    'css-loader',
                    'sass-loader',
                    'style-loader',
                ],
            },
        ],
    },
}