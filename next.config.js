const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  publicRuntimeConfig: {
    publicUrl: process.env.LIVE === 'true'
      ? 'https://wolfssuperiorsandwiches.com'
      : '',
  },
})
