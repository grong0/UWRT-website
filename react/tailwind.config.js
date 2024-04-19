/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/modules/*.js"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
