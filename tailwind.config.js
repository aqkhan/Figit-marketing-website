const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        superCharged: "linear-gradient(#7E22CE 0%, #18AFEC 100%)",
        gradient: "url('/images/pricingBgGradient.png')",
        "purple-gradient": "url('/images/priceCardGradient.png')",
      },
      width: {
        textWidth: "42%",
        imgWidth: "58%",
        textWidth2: "45%",
        imgWidth2: "55%",
        inputWidth: "445px",
        342: "342px",
        343: "343px",
        408: "408px",
        586: "586px",
        534: "534px",
        545: "545px",
        584: "584px",
        711: "711px",
        1029: "1029px",
        1046: "1046px",
        1427: "1427px",
      },
      inset: {
        "-104": "-32rem",
        298: "298px",
        448: "448px",
        862: "862px",
        403: "403px",
        30: "120px",
      },
      height: {
        262: "262px",
        449: "449px",
        684: "684px",
        740: "740px",
      },
      colors: {
        sky: colors.sky,
        purple: colors.purple,
        trueGray: colors.trueGray,
        primary: "#191919",
      },
      fontFamily: {
        "plus-jakarta-display": ["Plus Jakarta Display", "sans-serif"],
        "plus-jakarta-sans": ["Plus Jakarta Text", "sans-serif"],
        arvo: ["Arvo", "serif"],
      },
      fontSize: {
        80: "80px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
