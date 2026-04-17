import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base
        ink: '#0A0A0A',
        'off-white': '#FAFAF8',

        // Warm neutral scale
        neutral: {
          50: '#FAFAF8',
          100: '#F3F2EE',
          200: '#E7E5E0',
          300: '#D4D1CA',
          400: '#A8A39A',
          500: '#7A756B',
          600: '#5C5850',
          700: '#3F3C36',
          800: '#25231F',
          900: '#15140F',
          950: '#0A0A0A',
        },

        // Accents
        ember: {
          DEFAULT: '#D94F1E',
          soft: '#F4A988',
        },
        violet: {
          DEFAULT: '#6B4FD9',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid clamps applied per-component; these are the max sizes
        micro: ['11px', { lineHeight: '1.3', letterSpacing: '0.08em', fontWeight: '600' }],
        label: ['13px', { lineHeight: '1.3', letterSpacing: '0.08em', fontWeight: '500' }],
        'body-sm': ['15px', { lineHeight: '1.55', letterSpacing: '-0.005em', fontWeight: '400' }],
        body: ['17px', { lineHeight: '1.55', letterSpacing: '-0.005em', fontWeight: '400' }],
        'body-lg': ['20px', { lineHeight: '1.55', letterSpacing: '-0.01em', fontWeight: '400' }],
        'heading-md': ['24px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-lg': ['32px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['56px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-lg': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-xl': ['96px', { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '600' }],
      },
      borderRadius: {
        sm: '12px',
        md: '24px',
        lg: '32px',
      },
      spacing: {
        'section-sm': '96px',
        section: '128px',
        'section-lg': '160px',
        'section-xl': '192px',
      },
      maxWidth: {
        narrow: '720px',
        wide: '1280px',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.16, 1, 0.3, 1)',
        natural: 'cubic-bezier(0.4, 0, 0.2, 1)',
        physics: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        micro: '120ms',
        standard: '240ms',
        choreo: '480ms',
        hero: '800ms',
      },
      boxShadow: {
        'inset-hairline': 'inset 0 0 0 1px rgba(10, 10, 10, 0.06)',
        feature:
          '0 1px 2px rgba(10, 10, 10, 0.04), 0 12px 40px -8px rgba(10, 10, 10, 0.08)',
      },
      keyframes: {
        'stagger-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'stagger-in': 'stagger-in 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 240ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
