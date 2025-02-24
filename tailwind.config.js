/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*'],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
    },
    extend: {},
  },
  plugins: [],
};
