/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./imports/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'arvo': ['Arvo', 'serif'],
        'quantico': ['Quantico', 'sans-serif'],
      },
      colors: {
        'brand-green': '#c0d72e',
        'brand-green-dark': '#a8be26',
        'brand-green-darker': '#9aac23',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-delay': 'fadeIn 1s ease-out 0.2s both',
        'fade-in-delay-2': 'fadeIn 1s ease-out 0.4s both',
        'fade-in-delay-3': 'fadeIn 1s ease-out 0.6s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}