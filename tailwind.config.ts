import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      light: "f4effa",
      black: "000000",
      lilacdarker: "2f184b",
      lilacnormal: "532b88",
      lilacmid: "9b72cf",
      lilaclight: "c8b1e4"
    },
    fontFamily: {
      sans: ['Georgia', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['Oswald'],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
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
        footer: "0px -7px 41px rgba(175, 175, 175, 0.25)",
       },
       backgroundImage: {
        hedaer: "linear-gradient(98.85deg, #557AFF 7.8%, rbga(239, 252, 255, 0) 100%)",
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
      
       screens: {
        sm: "640px",
        // => @media (min-width: 640px)
        md: "768px",
        // => @media (min-width: 768px)
        ld: "1024px",
        // => @media (min-width: 1024px)
        xl: "1280px",
        // => @media (min-width: 1280px)
        "2xl": "1536px",
        // => @media (min-width: 1536px)
       },
    },
  },
  plugins: [],
}
export default config
