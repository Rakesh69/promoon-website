import { url } from 'inspector';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '1px': '1px',
        '1.33px': '1.33px',
        '2px': '2px',
        '18px': '18px',
        '23px': '23px',
        '28px': '28px',
        '30px': '30px',
        '45px': '45px',
        '70px': '70px',
        '84px': '84px',
        '85px': '85px',
        '90px': '90px',
        '450px': '450px',
        '90%': '90%',
      },
      translate: {
        '100%': '100%',
      },
      opacity: {
        '20%': '20%',
      },
      lineHeight: {
        '1px': '1px',
        '24px': '24px',
        '30px': '30px',
        '45px': '45px',
        '48px': '48px',
      },
      letterSpacing: {
        '0.14px': '0.14px',
        '1%': '1%',
      },
      fontSize: {
        '28px': '28px',
        '32px': '32px',
      },
      boxShadow: {
        'custom-inner': 'inset 0 0 10px 5px rgba(255, 0, 0, 0.5)',
        customShadow: '0px 8px 26px -4px #14141426',
        solutionModelShadow:
          '0px 17.63719367980957px 25.77743911743164px 0px #00000012',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#27AAE1',
        blackBlue: '#3D3850',
        lightRose: '#FFEAEE',
        lightBackground: '#F3F4F6',
        textPrimary: '#252B42',
        textSecondary: '#737373',
        borderColor: '#D9D9D9',
        inputBorder: '#D2D6DA',
        requiredField: '#D21312',
        darkBlack: '#252F40',
        navbarBorder: '#E7E7E7',
        ourProcessBorder: '#CBCBCB',
        positionBgColor: '#EDEDF0',
        blue: '#27AAE1',
        darkbg: '#1D1E1E',
        darkText: '#949494',
        darkTextPrimary: '#C7C7C7',
        darkBorder: '#313131',
        textWhite: '#D4D4D4',
        inputColor: '#202020',
        bgColor: '#EDEDF0',
        lightBlack: '#515B6F',
        black: '#202430',
        borderBlack: '#111721',
        white: '#FFFFFF',
        borderbg: '#212121',
        shadow: '#000000',
      },

      borderRadius: {
        'rounded-10px': '10px',
        'rounded-13.33px': '13.33px',
      },

      gradientColor: {
        blue: '#27AAE1',
        darkblue: '#1C75BC',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'send-message-btn': ' linear-gradient(to right, #FF7494, #E82B59)',
        'send-bg-btn': ' linear-gradient(to right, #27AAE1, #1C75BC)',
        'bg-colors-background':
          ' linear-gradient(to right, #000000, #111827, #000000)',

        'bg-colors-header':
          ' linear-gradient(to right, #27AAE1, #27AAE1, #FFFFFF,#066A9D ,#1C75BC)',
        'header-background': "url('/assets/DarkHeader.png')",

        'dark-header-background': "url('/assets/hero-background-top.png')",
        'website-hero-imag': "url('/assets/webdevelopmentHero.png')",
        'mobile-hero-imag': "url('/assets/webdevelopmentHero.png')",
        'whychoose-hero-imag': "url('/assets/webdevelopmentHero.png')",
        'dark-header-waves': "url('/assets/darkWaves.png')",
        'footer-background': "url('/assets/footerBackground.png')",
        'ourProcess-topBackground':
          "url('/assets/ourProcessTopBackground.png')",
        'hero-pattern': "url('/assets/NewAboutImage.png')",
        'res-hero-pattern': "url('/assets/aboutus-promoon.jpg')",
        'leading-background': "url('/assets/Landingpage.png')",
        'hero-pattern1': "url('/assets/BlurImage.png')",
        'ourProcess-bottomBackground':
          "url('/assets/ourProcessBottomBackground.png')",
        'career-Background': "url('/assets/careerBackground.png')",
        'career-DarkBackground': "url('/assets/HeaderNew.png')",
        'our-Process-background': "url('/assets/ourProcess.png')",
        'hero-gradient':
          'linear-gradient(90deg, #000000 0%, #111827 50%, #000000 100%);',
      },
    },
  },

  plugins: [],
};
export default config;
