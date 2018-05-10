const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = [
    {
        entry: './src/main.ts',
        output: {
            path: __dirname + '/target/',
            filename: 'app.js'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.tag$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    use: 'riot-tag-loader'
                },
                {
                    test: /\.js|\.tag$/,
                    enforce: 'post',
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: `es2015-riot`
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.tag', '.ts']
        },
        plugins: [
            new webpack.ProvidePlugin({ riot: 'riot' }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html',
                inject: true
            })
        ],
        devServer: {
            clientLogLevel: 'warning',
            hot: true,
            compress: true,
            watchContentBase: true,
            contentBase: path.join(__dirname, '/'),
            open: true,
            overlay: true
        }
    }
]