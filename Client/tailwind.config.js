/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 12s linear infinite',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif' ],
        playfair: ['Playfair Display', 'serif'],
        playwrite :['Playwrite'] , 
        dancing: ['"Dancing Script"', 'cursive'],
        jakarta :[' Plus Jakarta Sans', 'sans-serif'],
        lato : ['Lato','sans-serif'],
        marcellus :['Marcellus','serif'],
        inter :['Inter','sans-serif']
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
