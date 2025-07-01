/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
      'fade-right': {
        '0%': { opacity: '0', transform: 'translateX(-20px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      'fade-left': {
        '0%': { opacity: '0', transform: 'translateX(20px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      }
      },
      animation: {
        'fade-right-1s': 'fade-right 1s ease-out',
        'fade-right-2s': 'fade-right 2s ease-out',
        'fade-right-3s': 'fade-right 3s ease-out',
        'fade-left-2s': 'fade-left 1s ease-out'
      },},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#D6EFD8',
          'primary-focus': '#6E3DDE',
          'primary-content': '#ffffff',
          'secondary': '#570df8',
          'secondary-focus': '#6E3DDE',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#80AF81',
          'base-200': '#508D4E',
          'base-300': '#1A5319',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  }
}

