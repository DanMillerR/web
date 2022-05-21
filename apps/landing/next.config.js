const withTM = require('next-transpile-modules')(['ui', 'cnfg', 'utils'])
const { i18n } = require('./next-i18next.config')

module.exports = withTM({
    reactStrictMode: true,
    i18n,
})
