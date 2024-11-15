const plugin = require("tailwindcss/plugin")
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {},
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("modal", "&:modal")
    })
  ]
}
