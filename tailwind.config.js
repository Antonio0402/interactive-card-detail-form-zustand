/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'xl': '1440px',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)'
        },
        light: {
          DEFAULT: 'hsl(var(--light) / <alpha-value>)'
        },
        error: {
          DEFAULT: 'hsl(var(--error-input) / <alpha-value>)'
        },
        gradient: {
          from: 'hsl(var(--from-gradient) / <alpha-value>)',
          to: 'hsl(var(--to-gradient) / <alpha-value>)',
        }
      },
      letterSpacing: {
        label: 'var(--tracking-label)',
        "card-number": 'var(--tracking-card-number)',
        "card-name": 'var(--tracking-card-name)',
        "thank-you": 'var(--tracking-thank-you)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

