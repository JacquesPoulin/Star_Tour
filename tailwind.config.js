module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orb: "'Orbitron', 'sans-serif'",
        exo: "'Exo 2', 'sans-serif'",
        starjedi: "Starjedi",
        galactic: "Galactic Basic",
      },
    },
    screens: {
      'bp1': {'max':'1390px'},
      'bp2': {'max':'1000px'},
      'bp3': {'max':'600px'}
    }
  },
};
