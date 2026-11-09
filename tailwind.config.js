/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101D2B',
          deep: '#0B1520',
          soft: '#1C2B39',
        },
        orange: {
          DEFAULT: '#F28C28',
          dark: '#D9741A',
          light: '#FBEAD8',
        },
        steel: {
          DEFAULT: '#DCE7F0',
          light: '#EEF4F9',
        },
        warm: '#F8FAFC',
        grey: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16, 29, 43, 0.04), 0 12px 32px -12px rgba(16, 29, 43, 0.14)',
        card: '0 1px 3px rgba(16, 29, 43, 0.05), 0 24px 48px -24px rgba(16, 29, 43, 0.22)',
        lift: '0 2px 6px rgba(16, 29, 43, 0.06), 0 32px 60px -24px rgba(16, 29, 43, 0.28)',
        glow: '0 0 0 1px rgba(242, 140, 40, 0.16), 0 20px 48px -20px rgba(242, 140, 40, 0.5)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 70% 60% at 85% 15%, rgba(242, 140, 40, 0.14), transparent 70%), radial-gradient(ellipse 60% 70% at 0% 80%, rgba(220, 231, 240, 0.8), transparent 65%)',
        'dark-glow':
          'radial-gradient(ellipse 60% 80% at 85% 0%, rgba(242, 140, 40, 0.2), transparent 60%), radial-gradient(ellipse 70% 70% at 10% 100%, rgba(28, 43, 57, 0.9), transparent 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'soft-pulse': 'soft-pulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
