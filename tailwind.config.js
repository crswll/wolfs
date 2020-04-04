/* Tailwind - https://tailwindcss.com */

const pxToRem = (px, base = 16) => `${px / base}rem`

module.exports = {
  theme: {
    colors: {
      'transparent': 'transparent',
      'primary': 'var(--primary)',
      'primary-darker': 'var(--primary-darker)',
      'primary-lighter': 'var(--primary-lighter)',
      'darkest': 'var(--darkest)',
      'darker': 'var(--darker)',
      'dark': 'var(--darke)',
      'neutral': 'var(--neutral)',
      'light': 'var(--light)',
      'lighter': 'var(--lighter)',
      'lightest': 'var(--lightest)',
      'veg-light': 'hsl(92, 100%, 95%)',
      'veg-dark': 'hsl(92, 100%, 22%)',
      'facebook': '#3b5998',
      'twitter': '#1da1f2',
    },

    screens: {
      narrow: '650px',
      wide: '800px',
    },

    fontFamily: {
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
      'serif': [
        'Maitree',
        'serif',
      ],
    },

    fontSize: {
      '14': '14px',
      '16': '16px',

      'scale-n1': pxToRem(14),
      'scale-0': pxToRem(16),
      'scale-1': pxToRem(18),
      'scale-2': pxToRem(20),
      'scale-3': pxToRem(24),
      'scale-4': pxToRem(28),
      'scale-5': pxToRem(32),
    },

    spacing: {
      0: 0,
      1: pxToRem(5),
      2: pxToRem(15),
      3: pxToRem(30),
      4: pxToRem(45),
      5: pxToRem(60),
    },

    fontWeight: {
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

    extend: {
      borderColor: theme => ({
        default: theme('colors.neutral')
      })
    },
  },
}
