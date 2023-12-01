/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1280px',
        xxxl: '1600px',
      },
      width: {
        sm: '540px',
        md: '740px',
        lg: '960px',
        xl: '1140px',
        xxl: '1250px',
        xxxl: '1540px',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0, transform: 'translateY(100%)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        animateOpenCart: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0%)' },
        },
        animateCloseCart: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(100%)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 0.2s forwards',
        animateOpenCart: 'animateOpenCart 0.2s forwards',
        animateCloseCart: 'animateCloseCart 0.2s forwards',
      },
    },
  },
  plugins: [],
};
