import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        headerDividerLineDark: "linear-gradient(to right,rgba(226,232,240,0),#1e3350 50%,rgba(226,232,240,0))",
      },
      colors: {
        aliceblue: 'rgb(240, 248, 255)',
        babyPowder: 'rgb(248, 230, 212)',
        midNightBlue: 'rgb(13, 18, 29)',
      },
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [],
};
export default config;
