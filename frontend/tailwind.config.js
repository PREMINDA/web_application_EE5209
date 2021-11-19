module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"],
        cart: ["Meera Inimai"],
      },
      textColor: {
        pricingcolor: "#00F0FF",
        lightviolate: "#43479D",
        secondary: "#ffed4a",
        danger: "#e3342f",
        maincolor: "#080A31",
        avgreen: "#26ff00",
      },
      backgroundColor: (theme) => ({
        lightviolate: "#43479D",
        secondary: "#ffed4a",
        danger: "#e3342f",
        maincolor: "#080A31",
        lightBlue: "#191B43",
        pricingcolor: "#00F0FF",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
