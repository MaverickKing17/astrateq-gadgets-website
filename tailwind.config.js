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
          950: '#070B12',
          900: '#0B111B',
          850: '#0E1620',
          800: '#101925',
          750: '#121B28',
          700: '#141F2D',
          650: '#18222F',
          600: '#1C2837',
          500: '#243044',
          400: '#34425A',
          300: '#4A5870',
        },
        cyan: {
          50: '#E6FCFF',
          100: '#CCF8FF',
          200: '#99F1FF',
          300: '#5FE9FF',
          400: '#00E5FF',
          500: '#00C8E0',
          600: '#00A1B8',
          700: '#007A8C',
          800: '#005C6B',
          900: '#003F4A',
        },
        amber: {
          400: '#F5B942',
          500: '#E0A535',
          600: '#C49028',
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
        'shimmer': 'shimmer 4s linear infinite',
        'blink': 'blink 2s steps(1) infinite',
        'data-flicker': 'dataFlicker 5s ease-in-out infinite',
        'bar-fill': 'barFill 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'flow-pulse': 'flowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        scanLine: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '50%': { transform: 'translateY(260px)', opacity: '0.3' },
          '90%': { opacity: '0.6' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
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
        flowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
