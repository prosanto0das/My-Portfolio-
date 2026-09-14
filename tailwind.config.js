/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#07183D',
        'navy-light': '#0F2A5C',
        accent: '#FF6B00',
        interactive: '#3420B8',
        'interactive-hover': '#2A1A96',
        'gray-soft': '#F5F6F8',
        line: '#E7EAF0',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px rgba(7, 24, 61, 0.08)',
        'soft-lg': '0 16px 48px rgba(7, 24, 61, 0.12)',
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
}
