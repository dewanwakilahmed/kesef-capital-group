import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#003366',
        'accent-green': '#4CAF50',

        'light-gray': '#F2F2F2',
        'medium-gray': '#D9D9D9',
        'dark-gray': '#707070',

        'info-blue': '#3178C6',
        'error-red': '#E57373',
      },
    },
  },
  plugins: [],
};
export default config;
