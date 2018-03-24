const path = require('path')
const globals = require('./globals')
const webpack = require('webpack')

let isProduction

module.exports = (env = {}) => {

    isProduction = env.production === true

    return {
        entry: {
            vendor: ['hyperapp'],
            app: ['./src/index.js'],
        },
        output: {
            filename: 'js/[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: globals.PP,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['env', { modules: false }],
                                'stage-0',
                            ]
                        }
                    }]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                PP: isProduction ? '' : '',
                SITE_TITLE: globals.SITE_TITLE,
                DESCRIPTION: globals.DESCRIPTION,
                SITE_URL: globals.SITE_URL,
                DEVELOPER_NAME: globals.DEVELOPER_NAME,
                DEVELOPER_URL: globals.DEVELOPER_URL,
                GOOGLE_ANALYTICS_ID: globals.GOOGLE_ANALYTICS_ID
            })
        ],
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src', 'components'),
                utils: path.resolve(__dirname, 'src', 'utils')
            }
        },
        devtool: isProduction ? '' : 'source-map'
    }
}
