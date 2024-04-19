/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgCounter: "url('/public/car1.jpg')",
      },
    },
  },
  plugins: [],
};
