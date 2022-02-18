module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 1rem rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
