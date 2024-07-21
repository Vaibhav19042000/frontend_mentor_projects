/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "hsl(216, 12%, 8%)",
        "white": "hsl(0, 0%, 100%)",
 "light-grey": "hsl(217, 12%, 63%)",
 "dark-blue": "hsl(213, 19%, 18%)",
 "very-dark-blue": "hsl(216, 12%, 8%)",
 "orange": "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};

