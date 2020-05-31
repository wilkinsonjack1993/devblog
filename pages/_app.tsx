import { AppProps } from 'next/app'
import '../styles/global.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import AppTemplate from '../components/AppTemplate'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AppTemplate>
        <Component {...pageProps} />
      </AppTemplate>
    </ThemeProvider>
  )
}

export default App
