export default defineNuxtPlugin(() => {
  const gtmId = useRuntimeConfig().public.gtmId

  window['dataLayer'] = window['dataLayer'] || []
  window['dataLayer'].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  })

  const script = document.createElement('script')

  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}&l=dataLayer`

  document.head.insertBefore(script, document.head.firstElementChild)

  // In case javascript is off
  const noscript = document.createElement('noscript')
  const iframe = document.createElement('iframe')

  iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`
  iframe.height = '0'
  iframe.width = '0'
  iframe.style.display = 'none'
  iframe.style.visibility = 'hidden'

  noscript.appendChild(iframe)
  document.body.insertBefore(noscript, document.body.firstElementChild)
})
