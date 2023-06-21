/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {},
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',

      'desktop-hd': '1920px'
    },
  },
  plugins: [],
}
