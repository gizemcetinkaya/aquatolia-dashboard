/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6176FE',
        borderColor: '#E2E7F1',
        green: '#09AD95',
        greenLight: '#09AD955C',
        white2: '#EBF0FF',
      },
      keyframes: {
        pulse: {
          '0%': {
            boxShadow: '0 0 0 0 #09AD95',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(247, 45, 102, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(247, 45, 102, 0)',
          },
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
};
