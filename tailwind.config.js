/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#121014',
        surface: '#1c1922',
        surfaceHover: '#241f2c',
        line: '#322c3a',
        ink: '#f5f3f0',
        muted: '#9c93a6',
        neon: '#d4ff3d',
        pink: '#ff3b7f',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(212,255,61,0.4), 0 0 18px rgba(212,255,61,0.35)',
        neonSm: '0 0 0 1px rgba(212,255,61,0.5), 0 0 8px rgba(212,255,61,0.4)',
        pink: '0 0 0 1px rgba(255,59,127,0.4), 0 0 18px rgba(255,59,127,0.35)',
      },
    },
  },
  plugins: [],
};
