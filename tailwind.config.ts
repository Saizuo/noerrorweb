import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primarytext:"var(--primarytext)",
        secondarytext:"var(--secondarytext)",
        light:"var(--brightside)",
        dark:"var(--darkside)",
        accent:"var(--accent)"
      },
    },
  },
  plugins: [],
}
export default config
