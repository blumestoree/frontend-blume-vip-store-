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
      boxShadow: {
        custom:
          'rgba(14, 30, 37, 0.12) 0px 2px 2px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;',
      },
    },
  },
  plugins: [],
};
