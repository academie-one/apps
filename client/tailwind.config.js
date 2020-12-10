module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './pages/**/*.jsx',
    './components/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkMatter: '#101820',
      blueOne: '#B7DDE1',
      greyMatter: '#A7A8A9',
      white: '#FFFFFF',
    },
    fontFamily: {


    },
    fontSize: {
      h1: [
        '4rem',
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
      h3: [
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
      body: [
        '1rem',
        {
          lineHeight: '165%',
        },
      ],
      caption: [
        '0.875rem',
        {
          lineHeight: '140%',
        },
      ],
      nav: [
        '0.875rem',
        {
          lineHeight: '140%',
        },
      ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
