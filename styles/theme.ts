import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.

function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options,
  })
}

export default createMyTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
    },
    secondary: {
      main: '#71DB77',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa',
    },
  },
})
