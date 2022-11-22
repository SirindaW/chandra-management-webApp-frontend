/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx}'],
   mode: 'jit',
   theme: {
      extend: {
         colors: {
            primary: '#262626',
            primaryfade: '#484848',
            lightGray: '#D9D9D9',
            secondary: '#D4990D',
            secondaryfade: '#e3b549',
         },
         fontFamily: {
            tinos: ['Tinos', 'serif'],
         },
      },
      screens: {
         xs: '480px',
         ss: '620px',
         sm: '768px',
         md: '1060px',
         lg: '1200px',
         xl: '1700px',
      },
   },
   plugins: [
      require('tailwindcss-inner-border'), //npm install -D tailwindcss-inner-border
      require('tailwindcss-textshadow'),
   ],
};
