/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#121211',
          darker: '#0B0B0A',
          card: '#1A1918',
          cardLight: '#FFFFFF',
          gold: {
            light: '#EAD7B5',
            DEFAULT: '#C5A880',
            dark: '#9E7E56',
            hover: '#D4BC96',
          },
          cream: '#FDFBF7',
          surface: '#F6F3EE',
          sand: '#ECE6DC',
          charcoal: '#222120',
          muted: '#736F6A',
          sage: {
            light: '#EDF2EE',
            DEFAULT: '#6B8772',
            dark: '#45594A',
          }
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.2em',
        'loose-luxury': '0.25em',
        'widest-luxury': '0.3em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'luxury-hover': '0 30px 60px -15px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 35px -5px rgba(197, 168, 128, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
