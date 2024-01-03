/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.09em',
    },
    container: {
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
      },
    },
  },
<<<<<<< HEAD
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
=======
  plugins: [require("flowbite/plugin")],
>>>>>>> 7ed05ba9f4bce7732b4ccd0d79207d67806273f8
};
