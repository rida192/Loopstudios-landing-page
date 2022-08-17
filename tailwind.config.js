/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        heroMobile: "url('../images/mobile/image-hero.jpg')",
        heroDeskotp: "url('../images/desktop/image-hero.jpg')",
      },
      colors: {
        darkGray: " hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
      boxShadow: {
        myInner: "inset 0 0 100vw  rgba(0,0,0,1)",
      },
    },
    container: {
      padding: "1.625rem",
      center: true,
      screens: {
        lg: "1114px",
        xl: "1114px",
        "2xl": "1114px",
      },
    },
  },
  plugins: [],
};
