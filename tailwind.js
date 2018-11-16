/* Tailwind - https://tailwindcss.com */

const pxToRem = (px, base = 16) => `${px / base}rem`

const colors = {
  'transparent': 'transparent',
  'primary': 'var(--primary)',
}

const spacing = {
  1: pxToRem(5),
  2: pxToRem(15),
  3: pxToRem(30),
  4: pxToRem(45),
  5: pxToRem(60),
}

const lengths = {
  '0': '0',
  '10': '10px',
  '25': '25px',
  '50': '50px',
  '75': '75px',
  '1/2': '50%',
  '1/3': '33.33333%',
  '2/3': '66.66667%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.66667%',
  '5/6': '83.33333%',
  'full': '100%',
}

const heights = {
  ...lengths,
  screen: '100vh',
}

const widths = {
  ...lengths,
  screen: '100vw',
}

module.exports = {
  colors: colors,

  screens: {
    'md': '768px',
  },

  fonts: {
    'sans': [
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
  },

  textSizes: {
    'scale-n1': pxToRem(14),
    'scale-0': pxToRem(16),
    'scale-1': pxToRem(18),
    'scale-2': pxToRem(24),
    'scale-3': pxToRem(36),
  },

  fontWeights: {
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
  },

  leading: {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2,
  },

  tracking: {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em',
  },

  textColors: colors,

  backgroundColors: colors,

  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
  },

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },

  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),

  borderRadius: {
    'none': '0',
    'sm': '.125rem',
    default: '.25rem',
    'lg': '.5rem',
    'full': '9999px',
  },

  width: {
    ...widths,
    'auto': 'auto',
  },

  height: {
    ...heights,
    'auto': 'auto',
  },

  minWidth: {
    ...widths,
  },

  minHeight: {
    ...heights,
  },

  maxWidth: {
    ...widths,
  },

  maxHeight: {
    ...heights,
  },

  padding: {
    ...spacing,
  },

  margin: {
    'auto': 'auto',
    ...spacing,
  },

  negativeMargin: {
    ...spacing,
  },

  shadows: {
    'default': '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
    'none': 'none',
  },

  zIndex: {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },

  svgFill: {
    'current': 'currentColor',
  },

  svgStroke: {
    'current': 'currentColor',
  },

  modules: {
    appearance: [],
    backgroundAttachment: [],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: [],
    borderStyle: [],
    borderWidths: [],
    cursor: false,
    display: ['responsive'],
    flexbox: ['responsive'],
    float: false,
    fonts: ['responsive'],
    fontWeights: [],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: false,
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },

  plugins: [
    require('tailwindcss/plugins/container')({
      // center: true,
      // padding: '1rem',
    }),
  ],

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },

}
