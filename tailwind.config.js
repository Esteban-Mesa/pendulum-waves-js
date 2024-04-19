/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				caAccent: "#46b0b0",
				caGray: {
					10: "#efefef",
					30: "#b0b0b0",
					60: "#4c4c4c",
					90: "#121212",
				},
			},
		},
	},
	plugins: [],
};
