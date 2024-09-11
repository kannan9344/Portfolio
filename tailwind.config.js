/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        'mobile': 'repeat(6, minmax(200px, 1fr))',
        'mobile-skills': 'repeat(6, minmax(150px, 1fr))',
      }
    },
  },
  plugins: [],
}