const withTM = require('next-transpile-modules')([
  'ui',
  'cnfg',
  'utils',
  'gen-context',
  'acc',
  'ctx',
  'form',
  'loadings',
  'fb',
])
const { i18n } = require('./next-i18next.config')

module.exports = withTM({
  i18n,
  outputFileTracing: true,
  reactStrictMode: true,
})
