/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{js,jsx}"],
  safelist: ["swiper-pagination-bullet", "swiper-pagination-bullet-active"],
  theme: {
    extend: {
      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "tablet-pattern": 'url("images/bg-tablet-pattern.svg")',
        "simplify-mobile": 'url("images/bg-simplify-section-mobile.svg")',
        "simplify-desktop": 'url("images/bg-simplify-section-desktop.svg")',
      },
      screens: {
        ml: "990px",
      },
    },
  },
  plugins: [],
};
