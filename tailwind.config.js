/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#0e8adf',
          200: '#6da9d3',
        },
      },
      zIndex: {
        '100': '100',
      },
      backgroundImage: {
        'greenit': "url('../public/images/bg-green.png')"
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["emerald"],
  },
  safelist: [
    'border-b',
    'bg-error', 'bg-primary', 'bg-secondary', 'bg-success', 'bg-warning',
    'badge-error', 'badge-primary', 'badge-secondary', 'badge-success', 'badge-warning',
    'basis-1/2', 'basis-1/4',
  ]
}

