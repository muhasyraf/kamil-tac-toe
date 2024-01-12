// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#29201b",
        "fun-gray-light": "#c0daed",
        "fun-gray": "#7b89a8",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        "fun-pink": "#7fd1eb",
        "fun-pink-darker": "#0f1b1f",
        "fun-pink-darkest": "#080f12",
        "fun-pink-dark": "#246c82",
        "fun-pink-light": "#c7f2ff",
      },
      fontFamily: {
        display: ["Rowdies", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
