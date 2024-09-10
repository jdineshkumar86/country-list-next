import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"dark-bg": "#202c37",
				"light-bg": "#fafafa",
				"dark-elements": "#2b3945",
				"light-elements": "#fff",
			},
			fontFamily: {
				nunito: ['"Nunito Sans"', "sans-serif"],
			},
		},
	},
  plugins: [],
};
export default config;
