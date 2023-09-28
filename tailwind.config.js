/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'primary-100' : '#FEFEFE',
        'secondary-100' : '#0A0A0A',
      }
    },
  },
  plugins: [],
}

