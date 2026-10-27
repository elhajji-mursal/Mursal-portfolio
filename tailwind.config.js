/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
          card: '#FFFFFF',
          inset: '#F1F5F9',
        },
        navy: {
          DEFAULT: '#0B192E',
          surface: '#132742',
          border: '#1E3A5F',
          muted: '#334E68',
        },
        accent: {
          DEFAULT: '#1D4ED8',
          hover: '#1E40AF',
          subtle: '#EFF6FF',
          light: '#60A5FA',
        },
        slate: {
          primary: '#0F172A',
          secondary: '#475569',
          muted: '#64748B',
          border: '#E2E8F0',
        },
        status: {
          completed: '#059669',
          progress: '#D97706',
          planned: '#4F46E5',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
