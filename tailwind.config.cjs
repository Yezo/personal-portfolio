/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif;'],
        urban: ['"Urbanist", sans-serif;'],
        faustina: ['"Faustina", serif;'],
      },
      colors: {
        primary: "#F5F5F5",
        accent: "#415C4F",
        darktext: "#2d2d2d",
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
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        test: {
          from: {
            transform: "translateX(-52%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        text: "text 5s ease infinite",
        test: "25s ease-in-out infinite alternate",
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
    },
  },
  plugins: [],
}
