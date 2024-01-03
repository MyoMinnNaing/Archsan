/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
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
        icon: ["thermify"],
      },
      colors: {
        "theme-color": "#c6a37c",
      },
      transitionTimingFunction: {
        'img-out-expo': 'cubic-bezier(0.3, 0.1, 0.58, 1)',
        'out-expo': 'cubic-bezier(0.65, 0.05, 0.36, 1)',
      },
      boxShadow: {
        'poly': '0px 0px 0px 5px rgb(255 255 255 / 10%)',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
