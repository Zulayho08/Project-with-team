/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        commonBg: "#00991C",
        greyy: "#EEEEEE",
        colorGrey: "#F4F4F4",
        colorLink: "#242424",
        textColor: "#333333",
      },
      fontFamily: {
        roboto: ["Roboto", "san-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        searchBg: "url(./Assets/Images/search.svg)",
        qrBg: "url(./Assets/Images/back.svg)",
        footerBg: "url(./Assets/Images/footer__bg.png)",
      },
      backgroundPosition: {
        qrBgPos: "95px 130px",
        qrBgPos2: "100px 500px",
        qrBgPos3: "370px 225px",
      },
    },
  },
  plugins: [],
};
