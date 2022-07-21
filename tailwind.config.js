/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0)' },
        },
        animation: {
          wiggle: 'wiggle .2s [ease-in-out]',
        },
        transitionProperty: {
          'transition1': '0.6s cubic-bezier(0.83, 0, 0.17, 1)'
        },
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
