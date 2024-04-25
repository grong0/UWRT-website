/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./components/*.html"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
