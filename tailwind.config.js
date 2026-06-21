module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      spacing: {
        // Reserve room for the fixed 404px-wide decorative pattern (xl+ only)
        112: '28rem',
      },
      colors: {
        brand: {
          navy: '#091540',
          blue: '#1b2cc1',
          indigo: '#3d518c',
          periwinkle: '#7692ff',
          sky: '#abd2fa',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
