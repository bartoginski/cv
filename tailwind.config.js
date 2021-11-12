module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fire': '#F54748'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
