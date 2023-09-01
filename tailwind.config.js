const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.svelte'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.trueGray,
        gray: {
          100: '#f2f3f5',
          200: '#ebedef',
          300: '#e3e5e8',
          400: '#d4d7dc',
          600: '#4f545c',
          700: '#36393f',
          800: '#2f3136',
          900: '#202225',
        },
      },
    },
  },
  plugins: []
};
