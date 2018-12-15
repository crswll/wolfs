const withCSS = require('@zeit/next-css')
const isLive = process.env.LIVE === 'true'

module.exports = withCSS({
  publicRuntimeConfig: {
    publicUrl: isLive ? 'https://wolfssuperiorsandwiches.com' : '',
    isLive,
  },
})
