/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        darumadrop: ["Darumadrop One", 'sans-serif'],
        titan: ["Titan One", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

