const path = require('path');

let CONFIG = {
    mode: 'development',
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: './public/assets/js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
            Actions: path.resolve(__dirname, 'src/js/actions'),
            Components: path.resolve(__dirname, 'src/js/components'),
            Pages: path.resolve(__dirname, 'src/js/pages'),
            Routes: path.resolve(__dirname, 'src/js/routes'),
            Util: path.resolve(__dirname, 'src/js/util')
        }
    }
};

module.exports = CONFIG;