module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      hero:
        "url('https://html.creativegigstf.com/vCamp/vCamp/images/assets/bg_01.png')",
    },
    colors: {
      'green': '#A7CF5D',
      'brown': '#A97555',
      'light': '#F9EBC4',
      'dark': '#483D3C',
      'black': "#1F2611",
      "white": "#fff",
      'red': "#B23535"
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
        blob2: "blob2 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(0)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            filter: "blur(0px)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            filter: "blur(0)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(0)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "50%": {
            transform: "translate(20px, -20px) scale(1.1)",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '300px',
        '3/4': '75%',
        '60': '60%'
      }
    },
  },
  variants: {},
  plugins: [],
};
