const path = require('path')

module.exports = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  localePath: path.resolve(
    process.env.NODE_ENV == 'production' ? './locales' : './public/locales'
  ),
}
