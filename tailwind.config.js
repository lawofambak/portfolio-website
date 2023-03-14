/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "dark-blue": "#001934",
        "slate-blue": "#6A93CB",
        blue: "#0070ff",
        red: "#DC4492",
        pink: "#F77FBE",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sourcecodepro: ["Source Code pro", "monospace"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
