/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 12s linear infinite', // faster than 15s
        'marquee-fast': 'marquee 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // assuming double content
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.marquee-wrapper': {
          overflow: 'hidden',
          position: 'relative',
        },
        '.marquee-content': {
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 12s linear infinite',
        },
        '@media (max-width: 768px)': {
          '.marquee-content': {
            animation: 'marquee-fast 8s linear infinite',
          },
        },
      });
    }),
  ],
};
