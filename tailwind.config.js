module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sea: {
          "50": "#f7f9f9",
          "100": "#e8f1f7",
          "200": "#ccdfee",
          "300": "#9fbed8",
          "400": "#6b98ba",
          "500": "#52759d",
          "600": "#425a80",
          "700": "#344361",
          "800": "#242d43",
          "900": "#151b2b",
        },
      },
    },
  },
  plugins: [],
};
