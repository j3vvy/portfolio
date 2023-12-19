/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        lightblack: '#1F1F1F'
      }
    },
  },
  plugins: [],
}

