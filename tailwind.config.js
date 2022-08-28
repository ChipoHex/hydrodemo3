const {colors} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      rotate: {
        '30': '30deg',
      },
    
      screens: { 'sm': { 'max': '640px' } },

      colors: {
        'primary': '#000000',
        'secondary': '#595423',
        'tertiary': '#9CAF23',
        'quaternary': '#847D7F',
        'regal-red': '#f84165',

      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'),
           require('tailwindcss-filters'),
           require('@tailwindcss/aspect-ratio')],



};
