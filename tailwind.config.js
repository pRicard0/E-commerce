/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'header-title': '2rem',
        'h1': '1.75rem',
        'h1Desktop': '2.75rem',
        'h2': '0.7775rem',
        'priceDesktop': '1.875rem'
      },

      lineHeight: {
        'h1Leading': '2.9rem'
      },

      boxShadow: {
        'cartButton': '0px 20px 30px -10px'
      },

      spacing: {
        'imgThumbWidth': '27.975rem',
        'imgMobileHeight': '20.625rem',
        'imgTextAreaSpacing': '5.4rem',
        'imgModalContainer': '28.5rem',
        'productMarginTop': '5.75rem',
        'productMarginLeft': '4.25rem'
      },

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
          'Pale-orange': 'hsl(25, 100%, 94%)',
          'modal': 'hsl(0, 0%, 50%)'
        }
      },
      fontFamily: {
        'Kumbh': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

