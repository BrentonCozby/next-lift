const path = require('path')
const globals = require('./globals')
const webpack = require('webpack')

let isProduction

module.exports = (env = {}) => {

    isProduction = env.production === true

    return {
        entry: {
            vendor: ['hyperapp'],
            app: ['./src/index.js']
        },
        output: {
            filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
            chunkFilename: isProduction ? '[name].[chunkhash].js' : '[name].js',
            path: path.resolve(__dirname, 'dist', 'js'),
            publicPath: `${globals.PP}/js/`
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
                                'stage-0'
                            ]
                        }
                    }],
                    parser: {
                        system: true
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                PP: JSON.stringify(''),
                SITE_TITLE: JSON.stringify(globals.SITE_TITLE),
                DESCRIPTION: JSON.stringify(globals.DESCRIPTION),
                SITE_URL: JSON.stringify(globals.SITE_URL),
                DEVELOPER_NAME: JSON.stringify(globals.DEVELOPER_NAME),
                DEVELOPER_URL: JSON.stringify(globals.DEVELOPER_URL),
                GOOGLE_ANALYTICS_ID: JSON.stringify(globals.GOOGLE_ANALYTICS_ID)
            })
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all'
                    }
                }
            }
        },
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src', 'components'),
                utils: path.resolve(__dirname, 'src', 'utils')
            },
            symlinks: false
        },
        devtool: isProduction ? '' : 'source-map'
    }
}
