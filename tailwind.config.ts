import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // adjust this if your source is in a different folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin-sans)', 'sans-serif'],
        slab: ['var(--font-josefin-slab)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
