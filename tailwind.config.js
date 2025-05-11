/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '2%': { transform: 'translate(3px, 0)' },
          '4%': { transform: 'translate(-3px, 0)' },
          '6%': { transform: 'translate(0, 3px)' },
          '8%': { transform: 'translate(0, -3px)' },
          '10%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(0)' },
        }
      },
      boxShadow: {
        'neon': '0 0 5px rgba(16, 185, 129, 0.2), 0 0 20px rgba(16, 185, 129, 0.2)',
        'neon-lg': '0 0 10px rgba(16, 185, 129, 0.3), 0 0 30px rgba(16, 185, 129, 0.3)',
      },
    },
  },
  plugins: [],
};