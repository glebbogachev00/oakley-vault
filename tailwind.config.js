/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vault-black': '#000000',
        'vault-white': '#ffffff',
        'vault-gray-dark': '#1a1a1a',
        'vault-gray-medium': '#666666',
        'vault-gray-light': '#cccccc',
        'vault-silver': '#c0c0c0',
        'vault-red': '#ff0000',
      },
      fontFamily: {
        'display': ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
        'body': ['Times New Roman', 'serif'],
        'tech': ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
    },
  },
  plugins: [],
}