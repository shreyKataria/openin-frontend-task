/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./mainpage/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "secondary-text": "#858585",
        white: "#fff",
        link: "#346bd4",
        "field-color-darker": "#eaeaea",
        background: "#f5f5f5",
        "light-grey": "#b0b0b0",
        cornflowerblue: "#6972c3",
        icon: "#999",
        dimgray: "#666",
        lightgreen: "#9bdd7c",
        lavender: "#dee0ef",
        mistyrose: "#efdada",
        honeydew: "#ddefe0",
        oldlace: "#f4ecdd",
      },
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "17xl": "36px",
      xs: "12px",
      sm: "14px",
      "5xl": "24px",
      lg: "18px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
