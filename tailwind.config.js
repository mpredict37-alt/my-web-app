/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#4F46E5",       // Main blue
        secondary: "#3B82F6",     // Gradient blue
        green: "#10B981",         // Success
        purple: "#8B5CF6",        // Premium
        amber: "#F59E0B",         // Pending/highlight
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)',
      }
    },
  },
  plugins: [],
};