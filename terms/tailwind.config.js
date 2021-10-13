module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      extralight:
        'TTInterfaces-ExtraLight, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      bold:
        'TTInterfaces-Bold, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      normal:
        'TTInterfaces-Regular, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
    fontSize: {
      h1: [
        '4rem',
        {
          lineHeight: '115%',
        },
      ],
      'h1-mobile': [
        '2.875rem',
        {
          lineHeight: '115%',
        },
      ],
      h2: [
        '3rem',
        {
          lineHeight: '110%',
        },
      ],
      'h2-mobile': [
        '2.5rem',
        {
          lineHeight: '110%',
        },
      ],
      h3: [
        '2rem',
        {
          lineHeight: '125%',
        },
      ],
      'h3-mobile': [
        '1.875rem',
        {
          lineHeight: '125%',
        },
      ],
      h4: [
        '1.5rem',
        {
          lineHeight: '120%',
        },
      ],
      'h4-mobile': [
        '1.25rem',
        {
          lineHeight: '120%',
        },
      ],
      menu: [
        '1.3rem',
        {
          lineHeight: '110%',
        },
      ],
      footer: [
        '0.7rem',
        {
          lineHeight: '120%',
        },
      ],
      body: [
        '1rem',
        {
          lineHeight: '120%',
        },
      ],
      caption: [
        '0.875rem',
        {
          lineHeight: '140%',
        },
      ],
    },
    extend: {
      colors: {
        darkMatter: '#101820',
        darkMatterDarker: '#0d131a',
        blueOne: '#B7DDE1',
        greyMatter: '#A7A8A9',
        white: '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
