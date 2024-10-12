/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue-elements":"#2b3945",
      "very-dark-blue-dark-mode":"#202c37",
      "very-dark-blue-light-mode":"#111517",
      "dark-gray-light-mode":"#858585",
      "very-light-gray-light-mode":"#fafafa",
      },
 
    }
  },
  plugins: [],
}

