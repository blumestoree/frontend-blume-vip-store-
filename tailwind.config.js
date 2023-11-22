/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    keyframes: {
      overlayShow: {
        from: { opacity: 0, transform: 'translateY(100%)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
    },
    animation: {
      overlayShow: 'overlayShow 0.2s forwards',
      contentShow: 'contentShow 3s cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  plugins: [],
};
