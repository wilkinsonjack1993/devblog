export const GOOGLE_ANALYTICS_ID = 'UA-168653140-1'

declare global {
  interface Window {
    gtag: any
  }
}

export const trackPageView = (url: string) => {
  try {
    console.log(process.env.NODE_ENV)
    window.gtag('config', GOOGLE_ANALYTICS_ID, {
      page_location: url,
    })
  } catch (error) {
    logError({ type: 'cannot track page view', page: url, err: error.message })
  }
}

export const logError = (properties: Object) => {
  trackEvent('error', properties)
}

export const trackEvent = (name: string, properties: Object) => {
  try {
    window.gtag('event', name, properties)
  } catch (error) {
    console.error('Error: ', error)
  }
}
