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
        // Reserve room for the fixed decorative pattern (xl+ only). The pattern is
        // 330px wide; 22.5rem (360px) clears it at the 1280px breakpoint with a ~30px
        // gap, while keeping the content/bullet column as wide as possible.
        90: '22.5rem',
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
