/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Manual control instead of prefers-color-scheme only
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: [],
}
