/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-cream-50',
    'bg-cream-100',
    'bg-cream-200',
    'text-dental-gray',
    'text-dental-teal',
    'border-cream-200',
    'hover:text-dental-teal',
    'hover:bg-dental-teal/90',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAFAF9',
          100: '#F5F3EF',
          200: '#EDE9E3',
        },
        dental: {
          teal: '#0891B2',
          gray: '#5A5A5A',
        },
        coral: {
          400: '#F8AFA6',
          500: '#F69B8F',
        },
        beige: {
          400: '#D4B89C',
          500: '#C4A582',
        },
        sand: {
          400: '#C8B5A0',
          500: '#B5A08C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
