import type { Config } from 'tailwindcss'

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    colors: {
      light: "#f4effa",
      black: "#000000",
      lilacdarker: "#2f184b",
      lilacnormal: "#532b88",
      lilacmid: "#9b72cf",
      lilaclight: "#c8b1e4"
    },
		fontFamily: {
			sans: ["Georgia", "sans-serif"],
			serif: ["Merriweather", "serif"],
			display: ["Montserrat", "sans-serif"],
		},
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			lg: "1.15rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"5xl": "3.052rem",
			"6xl": "3.5rem",
		},
		minWidth: {
			0: "0",
			100: "100px",
		},
		extend: {
			width: {
				"1/3-g": "30%",
			},
			minHeight: {
				50: "55px",
			},
			boxShadow: {
				footer: "0px -7px 41px 3px rgba(175, 175, 175, 0.25)",
			},
			backgroundImage: {
				header:
					"linear-gradient(98.85deg, #532b88 7.8%, rgba(239, 252, 255, 0) 139.35%);",
			},
			spacing: {
				"8xl": "96rem",
				"9xl": "128rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			flexBasis: {
				"4/5": "66%",
			},
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
