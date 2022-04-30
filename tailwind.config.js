module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",

        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagram: {
          from: "hsl(37, 97%, 70%)",
          to: "hsl(329, 70%, 58%)",
        },
        youtube: "hsl(348, 97%, 39%)",

        darkTheme: {
          background: "hsl(230, 17%, 14%)",
          topBgPattern: "hsl(232, 19%, 15%)",
          cardBg: "hsl(228, 28%, 20%)",
          cardHoverBg: "hsl(228, 26%, 27%)",
          txt1: "hsl(0, 0%, 100%)",
          txt2: "hsl(228, 34%, 66%)",
          toggle: {
            from: "hsl(210, 78%, 56%)",
            to: "hsl(146, 68%, 55%)",
          },
        },

        lightTheme: {
          background: "hsl(0, 0%, 100%)",
          topBgPattern: "hsl(225, 100%, 98%)",
          cardBg: "hsl(227, 47%, 96%)",
          cardHoverBg: "hsl(232, 33%, 91%)",
          txt1: "hsl(230, 17%, 14%)",
          txt2: "hsl(228, 12%, 44%)",
          toggle: "hsl(230, 22%, 74%)",
        },
      },

      borderWidth: {
        1: "1px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
