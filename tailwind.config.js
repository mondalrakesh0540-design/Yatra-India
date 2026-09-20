/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060a14',
          900: '#0b1326',
          800: '#111d38',
          700: '#1b2d56',
          600: '#274179',
          500: '#385ba3',
        },
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          accent: '#d4af37',
        },
        emerald: {
          800: '#064e3b',
          900: '#022c22',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf6f0',
          200: '#f4ece1',
          300: '#e8dbca',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        display: ['Cinzel', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-saffron': '0 0 25px -5px rgba(249, 115, 22, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
}
