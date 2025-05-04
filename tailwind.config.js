/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5EB',
          100: '#FFEBD7',
          200: '#FFD7B0',
          300: '#FFC389',
          400: '#FFAF62',
          500: '#FF9933', // Deep Saffron
          600: '#E67300',
          700: '#CC6600',
          800: '#B35900',
          900: '#994D00',
          950: '#803300',
        },
        secondary: {
          50: '#F0F7FF',
          100: '#E6F0FF',
          200: '#B3D1FF',
          300: '#80B3FF',
          400: '#4D94FF',
          500: '#1A75FF', // Brighter blue for better readability
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
          950: '#000D1A',
        },
        accent: {
          50: '#E6FFE6',
          100: '#CCFFCC',
          200: '#99FF99',
          300: '#66FF66',
          400: '#33FF33',
          500: '#00FF00', // Brighter green for better visibility
          600: '#00CC00',
          700: '#009900',
          800: '#006600',
          900: '#003300',
          950: '#001A00',
        },
        success: {
          500: '#22C55E',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'india-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1578529/pexels-photo-1578529.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};