/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      // sans: ["roboto", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      righteous: ["Righteous", "sans-serif"],
      vidaloka: ["Vidaloka", "sans-serif"],
      orbitron: ["Orbitron", "sans-serif"],
      oswald: ["Oswald", 'sans-serif']
    },
    extend: {
      colors: {
        navColor: "rgba(255, 255, 255, 0.5)",
        main: "#00154e",
        secondMain: "#df9b0b",
      },
    },
  },
  plugins: [require("daisyui")],
}
