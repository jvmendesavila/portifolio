/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // colors: {
      //   'color': {
      //     'primary': '#09f45a',
      //     'secondary': '#7F57DF'
      //   },
      //   'bgLight': {
      //     'primary': '#FFF',
      //     'secondary': '#FFFF11'
      //   },
      //   'bgDark': {
      //     'primary': '#23272d',
      //     'secondary': '#131516'
      //   }
      // }
    },
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
  ],
}
