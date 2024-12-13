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
      backgroundImage: {
        'gradient-overlay':
          'linear-gradient(157deg, #A8BFFF, #884D80)'
      },


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
        'card-detail': '500px',
        'avatar-sm': '40px',
        'avatar-md': '60px',
        'avatar-lg': '130px',
        form: '700px',
        'btn-sm': '143px',
        'btn-md': '240px'
      },
      height: {
        md: '440px',
        'card-sm': '230px',
        'card-md': '250px',
        'card-info-md': '430px',
        'card-info': '564px',
        'card-detail': '600px',
        slide: '480px',
        'card-product': '350px',
        'avatar-sm': '40px',
        'avatar-md': '60px',
        'avatar-lg': '130px',
        'cart-md': '370px',
        'card-lg': '470px',
        table: '700px'
      },
      maxWidth: {
        'btn-size': '70px',
        'card-md': '470px'
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
        table: '0 4px 5px 2px #0000000D',
        contact: ' 0px 1px 13px 0px #0000000D'
      }
    }
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.scrollbar::-webkit-scrollbar': {
          width: '4px',
          height: '4px'
        },
        '.scrollbar::-webkit-scrollbar-track': {
          borderRadius: '3px'
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#4d4d4d',
          borderRadius: '3px'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};
export default config;
