/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'translate': "translate",
        'display': "display",
      },
    },
  },
  plugins: [],
};
