import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary-selected": "#007D8E",
      "secondary-noneselected": "#56BAD1",
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
