import { ThemeOptions } from '@mui/material'

import { fontFamilyHeadings, fontFamilyPrimary } from './fontFamily'

export const components: ThemeOptions['components'] = {
  MuiCardHeader: {
    styleOverrides: {
      content: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
    styleOverrides: {
      root: {
        '&:hover': {
          filter: 'brightness(75%)',
        },
      },
    },
  },
}

export const palette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: {
    main: '#1f1a66',
  },
  secondary: {
    main: '#ff722c',
  },
}

export const typography: ThemeOptions['typography'] = {
  button: {
    fontSize: '1rem',
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  fontFamily: fontFamilyPrimary,
  fontWeightBold: 700,
  fontWeightLight: 300,
  fontWeightMedium: 600,
  fontWeightRegular: 400,
  h1: {
    fontFamily: fontFamilyHeadings,
    fontSize: '4rem',
  },
  h2: {
    fontFamily: fontFamilyHeadings,
    fontSize: '2.4rem',
  },
  h3: {
    fontFamily: fontFamilyHeadings,
    fontSize: '2.24rem',
  },
  h4: {
    fontSize: '2rem',
  },
  h5: {
    fontSize: '1.5rem',
  },
  h6: {
    fontFamily: fontFamilyPrimary,
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  subtitle1: {
    opacity: '50%',
    textTransform: 'uppercase',
  },
  subtitle2: {
    opacity: '50%',
  },
}

export const themeOptions: ThemeOptions = {
  components,
  palette,
  shape: {
    borderRadius: 4,
  },
  spacing: 12,
  typography,
}