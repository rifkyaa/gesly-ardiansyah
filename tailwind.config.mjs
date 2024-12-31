/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#1DB954', 
        bgColor1: '#CFCDD2', 
        bgColor2: '#C1BFC3', 
        primaryLight: '#FFFFFF',
        primaryDark: '#282727',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
