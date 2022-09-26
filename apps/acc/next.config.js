const withTM = require('next-transpile-modules')([
  'ui',
  'cnfg',
  'utils',
  'form',
  'acc',
  'loadings',
  'ctx',
  'gen-context',
  'fb',
  'translation',
])
const { i18n } = require('./next-i18next.config')

module.exports = withTM({ i18n, reactStrictMode: true })
