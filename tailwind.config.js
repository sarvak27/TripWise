/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./landing.html','./home.html' , './itinerary.html' ,'./smartsuggest.html', './expenselog.html'],
  
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F8F6F2",
        secondary: "#2C3E50",
        highlight: "#8a735d", 
        
      },
    },
  },
  plugins: [],
}

