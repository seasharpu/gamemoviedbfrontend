/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        // this is a sample of how this can work
        "main-purple": "#B252F2",
        "blue-purple": "#44118C",
        "dark-purple": "#2E0F59",
        "black-purple": "#090626",
        "green": "#9CD9C8",
        "main-purple-accent": "#D5A2F7",
        "blue-purple-accent": "#5A3292",
        "dark-purple-accent": "#463064",
        "black-purple-accent": "#1E193F",
        "green-accent": "#D4E5E0",
      },
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  plugins: [],
}

