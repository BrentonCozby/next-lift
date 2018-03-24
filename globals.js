const path = require('path')

export const DEV_PATH = __dirname
export const PP = isProduction ? '' : ''
export const SITE_TITLE = 'Next Lift'
export const DESCRIPTION = 'What\'s my next lift? It\'s calculated based on your previous lifts.'
export const SITE_URL = 'https://brentoncozby.com'
export const DEVELOPER_NAME = 'Brenton Cozby'
export const DEVELOPER_URL = 'https://brentoncozby.com'
export const GOOGLE_ANALYTICS_ID = ''

export const Dir = {
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    components: path.resolve(__dirname, 'src', 'components'),
    static: path.resolve(__dirname, 'src', 'static'),
    ejs: path.resolve(__dirname, 'src', 'ejs'),
    pages: path.resolve(__dirname, 'src', 'ejs', 'pages'),
    partials: path.resolve(__dirname, 'src', 'ejs', 'partials'),
    scss: path.resolve(__dirname, 'src', 'scss')
}