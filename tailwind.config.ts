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
        success: '#00FF66',
        'dark-gray': '#FAFAFA',
        'gray-light': '#F5F5F5'
      },
      width: {
        'card-sm': '270px',
        'cart-md': '470px',
        'card-about': '500px',
        'card-info': '370px',
        'avatar-sm': '40px',
        'avatar-md': '60px',
        'avatar-lg': '130px',
        form: '700px',
        'btn-sm': '143px',
        'btn-md': '240px',
      },
      height: {
        md: '440px',
        'card-sm': '230px',
        'card-md': '250px',
        'card-info-md': '430px',
        'card-info': '564px',
        'slide': '480px',
        'card-product': '350px',
        'avatar-sm': '40px',
        'avatar-md': '60px',
        'avatar-lg': '130px',
        'cart-md': '370px',
        'card-lg': '470px',

      },
      maxWidth: {
        'btn-size': '70px',

      },
      fontSize: {
        'heading-page': '110px'
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
        'card-hover': '0px 0px 0px 11px #E0E0E0',
        table: '0 4px 5px 9px #0000000D',
        contact: ' 0px 1px 13px 0px #0000000D'



      },
    }
  },
  plugins: []
};
export default config;
