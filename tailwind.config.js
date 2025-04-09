/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-1': "url('/assets/card1.jpg')",
        'card-2': "url('/assets/card2.jpg')",
        'card-3': "url('/assets/card3.jpg')",
        'card-4': "url('/assets/card4.jpg')",
        'card-5': "url('/assets/card5.jpg')",
        'card-6': "url('/assets/card6.jpg')",
      },
      colors: {
        yinmnBlue: '#3A506B',
        oxfordBlue: '#0B132B',
        verdegris: '#5BC0BE',
        spaceCadet: '#1C2541',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

