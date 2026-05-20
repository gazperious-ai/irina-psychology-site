/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        stone: {
          950: '#0c0a09',
        },
        cream: {
          50: '#faf7f2',
          100: '#f5efe4',
          200: '#ecddd0',
        },
        sage: {
          300: '#b7c4b1',
          400: '#9aae91',
          500: '#7d9474',
        },
        warm: {
          100: '#f0ebe3',
          200: '#e5ddd4',
          300: '#d4c8bc',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
