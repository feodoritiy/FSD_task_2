let path = require('path');

module.exports = {
    entry: {
        main: 'src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
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