/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      DMsans: "var(--DMsans)",
    },
    extend: {
      colors: {
        main_bg_color: "var(--main_bg_color)",
        secondary_bg_color: "var(--secondary_bg_color)",
        main_font_color: "var(--main_font_color)",
        secondary_font_color: "var(--secondary_font_color)",
        footer_text_color: "var(--footer_text_color)",
      },
    },
  },
  plugins: [],
};
