const headingSx = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'semi',
  // letterSpacing: 'heading',
  textTransform: 'uppercase',
  color: 'secondary',
};

export default {
  colors: {
    text: '#38465F',
    background: '#FFFFFF',
    white: '#FFFFFF',
    black: '#000000',
    primary: '#f65054',
    secondary: '#212169',
  },
  breakpoints: [
    "480px",
    "600px",
    "768px",
    "992px",
    "1280px",
    "1440px"
  ],
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'Barlow Condensed', sans-serif`,
  },
  fontWeights: {
    "thin": 100,
    "light": 300,
    "regular": 400,
    "mediuum": 500,
    "semi": 600,
    "bold": 700,
    "black": 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  letterSpacings: {
    body: 'normal',
    heading: '0.01em',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 56, 64, 76, 88
  ],
  text: {
    default: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'light',
      fontSize: 2,
      color: 'black',
    },
    h1: {
      ...headingSx,
      fontSize: [7, 8, 9, 10],
    },
    h2: {
      ...headingSx,
      fontSize: 6,
    },
    h3: {
      ...headingSx,
      fontSize: 5,
    },
    h4: {
      ...headingSx,
      fontSize: 4,
    },
    h5: {
      ...headingSx,
      fontSize: 3,
    },
    h6: {
      ...headingSx,
      fontSize: 2,
    },
  },
  buttons: {
    primary: {
      bg: 'transparent',
      border: '2px solid',
      borderColor: 'primary',
      p: 1,
      color: 'black',
      display: 'flex',
      cursor: 'pointer',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase',
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 1,
      letterSpacing: '.5px',
      outline: 'none',
      transition: 'all .15s ease-in',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      position: 'relative',
    },
    secondary: {
      color: 'text',
      // bg: 'secondary',
    },
    navbar: {
      fontFamily: 'heading',
      color: 'black',
      p: 1,
      fontSize: 2,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      transition: '0.2s',
      '&:hover': {
        color: 'secondary',
        transition: '0.2s',
      }
    }
  },
  space: [
    0, //0
    8,
    16,
    24,
    32,
    40, //5
    48,
    56,
    64,
    72,
    80, //10
    88,
    96,
  ],
}