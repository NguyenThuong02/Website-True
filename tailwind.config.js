/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'be': 'rgba(249, 240, 236, 1)',
        'primary': 'var(--Primary)',
        'secondary': 'var(--Secondary)',
        'text1': 'var(--text-color2)',
        'text2': 'var(--text-color)',
        'black': 'var(--color-black)'
      },
      boxShadow: {
        'input': '-16px 16px 56px -8px rgba(145, 158, 171, 0.16)',
        'itemBody1': '0px 10px 20px 0px rgba(0, 95, 183, 0.15)'
      },
    },
    fontFamily: {
      'pop' : ['Poppins', 'sans-serif'],
      'lora' : ['Lora', 'serif'],
      'lex': ['Lexend', 'sans-serif']
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

