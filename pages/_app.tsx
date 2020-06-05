import { AppProps } from 'next/app'
import '../styles/global.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import AppTemplate from '../components/AppTemplate'
import { useEffect } from 'react'
import Router from 'next/router'
import { trackPageView } from '../lib/analytics'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    trackPageView(Router.pathname)

    const handleRouteChange = (url: string) => {
      trackPageView(url)
    }

    Router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

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
