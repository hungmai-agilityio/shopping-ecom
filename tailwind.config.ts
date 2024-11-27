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
      width: {
        'card-sm': '270px',
      },
      height: {
        md: '440px',
        'card-sm': '230px',

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
      boxShadow: {
        card: '0px 0px 0px 11px #ADADAD',
        'card-hover': '0px 0px 0px 11px #E0E0E0'

      },
    }
  },
  plugins: []
};
export default config;
