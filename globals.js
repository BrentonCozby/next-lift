const path = require('path')

module.exports.DEV_PATH = __dirname
module.exports.PP = ''
module.exports.SITE_TITLE = 'Next Lift'
module.exports.DESCRIPTION = 'What\'s my next lift? It\'s calculated based on your previous lifts.'
module.exports.SITE_URL = 'https://brentoncozby.com'
module.exports.DEVELOPER_NAME = 'Brenton Cozby'
module.exports.DEVELOPER_URL = 'https://brentoncozby.com'
module.exports.GOOGLE_ANALYTICS_ID = ''

module.exports.Dir = {
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    components: path.resolve(__dirname, 'src', 'components'),
    static: path.resolve(__dirname, 'src', 'static'),
    ejs: path.resolve(__dirname, 'src', 'ejs'),
    pages: path.resolve(__dirname, 'src', 'ejs', 'pages'),
    partials: path.resolve(__dirname, 'src', 'ejs', 'partials'),
    scss: path.resolve(__dirname, 'src', 'scss')
}
