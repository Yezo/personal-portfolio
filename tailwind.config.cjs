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
        darktext: "#191919",
        gray: "#EDF1F5",
        text: "#7B8EA1",
        sectionOneBG: "#122BC4",
        sectionOneText: "#F0EEF3",
        sectionTwoBG: "#EC0203",
        sectionTwoText: "#F0EEF3",
        sectionThreeBG: "#B606F6",
        sectionThreeText: "#191919",
      },
    },
  },
  plugins: [],
};
