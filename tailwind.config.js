/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      nunitoLight: ["Nunito_Sans_Light"],
      nunitoMedium: ["Nunito_Sans_Medium"],
      nunitoExtraBold: ["Nunito_Sans_ExtraBold"],
    },
    extend: {},
  },
  plugins: [],
};
