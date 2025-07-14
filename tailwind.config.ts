const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-white', 'bg-black',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--tw-color-white)',
        black: 'var(--tw-color-black)',
        primary: 'var(--tw-color-primary)',
        secondary: 'var(--tw-color-secondary)',
        accent: 'var(--tw-color-accent)',
        border: 'var(--tw-color-border)',
        muted: 'var(--tw-color-muted)',
        error: 'var(--tw-color-error)',
        success: 'var(--tw-color-success)',
        warning: 'var(--tw-color-warning)',
      },
    },
  },
  plugins: [],
};

export default config;
