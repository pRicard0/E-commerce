/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          'Very-dark-blue': 'hsl(220, 13%, 13%)',
          'Grayish-blue': 'hsl(220, 14%, 75%)',
          'Dark-grayish-blue': 'hsl(219, 9%, 45%)',
          'Light-grayish-blue': 'hsl(223, 64%, 98%)',
          'White': 'hsl(0, 0%, 100%)',
          'Black': 'hsl(0, 0%, 0%)'
        },
        primary: {
          'Orange': 'hsl(26, 100%, 55%)',
          'Pale orange': 'hsl(25, 100%, 94%)'
        }
      },
      fontFamily: {
        'Kumbh': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

