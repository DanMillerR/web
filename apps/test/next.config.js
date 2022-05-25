const withTM = require('next-transpile-modules')(['gen-context'])

module.exports = withTM({
    reactStrictMode: true,
})
