/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(240, 28%, 20%)',
        'grayish-blue': 'hsl(240, 19%, 77%)',
      },
      fontSize: {
        main: '32px',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'] // 300, 500, 700
      }
    },
  },
  plugins: [],
}

