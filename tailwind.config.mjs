// movexos.com/tailwind.config.mjs

import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
};

export default tailwindConfig;
