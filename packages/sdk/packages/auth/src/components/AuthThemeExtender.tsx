import { ThemeOptions } from '@mui/material'
import { InvertableThemeProvider, useInvertableThemeProvider } from '@xylabs/react-invertable-theme'
import { WithChildren } from '@xylabs/react-shared'
import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'

export interface AuthThemeExtenderProps {
  themeOptions?: ThemeOptions
}

const AuthThemeExtender: React.FC<WithChildren<AuthThemeExtenderProps>> = ({ children, themeOptions = {} }) => {
  const { options } = useInvertableThemeProvider()

  const authThemeOptions: ThemeOptions = {
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 0,
            paddingBottom: theme.spacing(2),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(2),
            width: '100%',
          }),
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: ({ theme }) => ({
            marginBottom: theme.spacing(2),
          }),
        },
      },
      MuiTypography: {
        styleOverrides: {
          h3: ({ theme }) => ({
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
          }),
        },
      },
    },
  }

  const mergedThemeOptions = merge({}, cloneDeep(themeOptions), cloneDeep(options), authThemeOptions)

  return <InvertableThemeProvider options={mergedThemeOptions}>{children}</InvertableThemeProvider>
}

export { AuthThemeExtender }
