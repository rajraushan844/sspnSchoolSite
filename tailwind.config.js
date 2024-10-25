module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 10s linear infinite',
        marquee: 'marquee 20s linear infinite',  // Adjust speed to your preference
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' }, // Adjust this based on the total height of your duplicated content
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
