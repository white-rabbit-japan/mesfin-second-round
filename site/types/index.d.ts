export {}

declare global {
  interface Window {
    analytics: any
    FrontChat: any
    consentReadPromise: any
    _iub: any
    dataLayer: any
  }
}
