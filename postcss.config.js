
const plugins = [
  require('postcss-import'),
  require('tailwindcss')('tailwind.js'),
  require('postcss-preset-env'),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('@fullhuman/postcss-purgecss')({
    content: ['./pages/**/*.js']
  }))
}

module.exports = {
  plugins,
}
