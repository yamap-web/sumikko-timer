import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      kiwiMaru: ['var(--font-kiwiMaru)'],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['synthwave'],
  },
} satisfies Config;
