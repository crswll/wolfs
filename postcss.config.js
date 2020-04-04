
const plugins = {
  'postcss-import': {},
  'tailwindcss': {},
  'postcss-preset-env': {}
}

if (process.env.NODE_ENV === 'production') {
  plugins['@fullhuman/postcss-purgecss'] = {
    content: [
      './pages/**/*.js',
      './components/**/*.js',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  }

  plugins['cssnano'] = {
    preset: ['default', {
      discardComments: {
        removeAll: true
      },
    }],
  }
}

module.exports = {
  plugins,
}
