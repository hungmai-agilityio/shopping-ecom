import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DB4444',
        second: '#00FF66',
        dark: '#0D0D0D',
        'dark-gray': '#FAFAFA'
      },
      height: {
        md: '440px'
      },
      maxWidth: {
        'btn-sm': '143px',
        'btn-md': '240px'
      },
      container: {
        screens: {
          mobile: '600px',
          tablet: '900px',
          desktop: '1536px'
        },
        center: true,
        padding: '16px'
      },
    }
  },
  plugins: []
};
export default config;
