const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        'we-teal': {
          200: '#EDF7F5',
          400: '#B6DFD2',
          600: '#C8D8DA',
          700: '#94c4bc',
          800: '#82B3AB',
          900: '#46605c',
        },
        'we-blue': {
          200: '#d8e4f6',
          600: '#6D7D98',
          800: '#4C5B73',
        }
      },
      backgroundImage: {
        '404': "url('/images/backgrounds/404.png')",
        'hero-sky-register': "url('~/assets/img/wip/sky-002.jpg')",
      }
    },
  },
  plugins: [],
}

