module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 1rem rgba(0, 0, 0, 0.1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
