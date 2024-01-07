import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
				color1: '#664DA3',
        color2: '#621C8C',
        color3: '#C662A8',
        color4: '#A052A5',
        color5: '#482685',
        color6: '#F8408C',
        color7: '#4C49E5',
        color8: '#5882B8',
			},
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
			},
    },
  },
  plugins: [],
}
export default config
