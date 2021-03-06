/* eslint-disable global-require */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        orb: "'Orbitron', 'sans-serif'",
        exo: "'Exo 2', 'sans-serif'",
        starjedi: "Starjedi",
        galactic: "Galactic Basic",
      },
      keyframes: {
        modalSlideIn: {
          "0%": { transform: "translate(0px, -70px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
      animation: {
        modalSlideIn: "modalSlideIn 0.3s ease-out",
      },
    },
    screens: {
      bp1: { max: "1390px" },
      bp2: { max: "1000px" },
      bp2_1: { max: "800px" },
      bp3: { max: "600px" },
      bp4: { max: "500px" },
      bp5: { max: "400px" },
      uhd: { min: "2000px" },
      bp2inv: { min: "1000px" },
    },
    backgroundImage: {
      night: "url('/assets/images/bg-dark.jpg')",
      light: "url('/assets/images/bg-light.jpg')",
    },
  },
};
