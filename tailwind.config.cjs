/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif;'],
        heading: ['"Gloock", serif;'],
      },
      colors: {
        primary: "#ECECEC",
        accent: "#415C4F",
        darktext: "#191919",
        gray: "#EDF1F5",
        text: "#7B8EA1",
        arkokoColorOne: "#15181D",
        arkokoColorTwo: "#1C1F26",
        arkokoColorThree: "#C2C2CC",
        anifluxColorOne: "#15181D",
        anifluxColorTwo: "#1C1F26",
        anifluxColorThree: "#C2C2CC",
        snippitsColorOne: "#15181D",
        snippitsColorTwo: "#1C1F26",
        snippitsColorThree: "#C2C2CC",
      },
    },
  },
  plugins: [],
};
