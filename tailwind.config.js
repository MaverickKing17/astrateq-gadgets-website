/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          900: '#07080C',
          850: '#0A0B11',
          800: '#0D0E15',
          700: '#13151D',
          600: '#1A1D28',
          500: '#232734',
          400: '#2E3342',
          300: '#3D4255',
        },
        teal: {
          50: '#E6FBFA',
          100: '#CCF7F5',
          200: '#99EFEF',
          300: '#5FE3E3',
          400: '#22D3CE',
          500: '#0DB5B0',
          600: '#0A8F8B',
          700: '#0A6E6B',
          800: '#0A5451',
          900: '#093D3B',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        success: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        danger: {
          400: '#F87171',
          500: '#EF4444',
        },
      },
      animation: {
        'scan-line': 'scanLine 4s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'blink': 'blink 2s steps(1) infinite',
        'data-flicker': 'dataFlicker 5s ease-in-out infinite',
        'bar-fill': 'barFill 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        scanLine: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '50%': { transform: 'translateY(220px)', opacity: '0.4' },
          '90%': { opacity: '0.8' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blink: {
          '0%, 60%': { opacity: '1' },
          '61%, 100%': { opacity: '0.3' },
        },
        dataFlicker: {
          '0%, 100%': { opacity: '1' },
          '48%': { opacity: '1' },
          '49%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        },
        barFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--fill, 50%)' },
        },
      },
    },
  },
  plugins: [],
};
