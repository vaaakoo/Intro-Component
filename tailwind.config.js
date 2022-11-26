module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(0, 100%, 74%)",
        Green: "hsl(154, 59%, 51%)",
        Blue: "hsl(248, 32%, 49%)",
        DarkBlue: "hsl(249, 10%, 26%)",
        GrayishBlue: "hsl(246, 25%, 77%)",
      },
      backgroundImage: {
        desktop: "url('../images/bg-intro-desktop.png')",
        mobile: "url('../images/bg-intro-mobile.png')",
      },
    },
    fontFamily: {
      body: ["Gentium Plus", "serif"],
    },
  },
  plugins: [],
};
