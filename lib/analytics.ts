export const GOOGLE_ANALYTICS_ID = 'UA-168653140-1'

declare global {
  interface Window {
    gtag: any
  }
}

export const trackPageView = (url: string) => {
  try {
    window.gtag('config', 'UA-XXXXXXXX-X', {
      page_location: url,
    })
  } catch (error) {
    logError({ type: 'cannot track page view', err: error.message })
  }
}

export const logError = (properties: Object) => {
  trackEvent('error', properties)
}

export const trackEvent = (name: string, properties: Object) => {
  try {
    window.gtag('event', 'login', { method: 'Google' })
  } catch (error) {
    console.error('Error: ', error)
  }
}
