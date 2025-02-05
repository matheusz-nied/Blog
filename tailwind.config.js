/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        dark: "#000000",
        light: "#fff",
        accent: "#00A653",
        accentLight:"#01E123",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
      },
      screens: {
        sxl: "1180px",
        xs: "480px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
