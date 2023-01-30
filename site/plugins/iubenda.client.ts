export default defineNuxtPlugin((nuxtApp) => {
  // Cookie solution (slides in on the left from bottom)
  window.consentReadPromise = new Promise((resolve) => {
    window._iub = window._iub || []
    window._iub.csConfiguration = {
      gdprAppliesGlobally: false,
      consentOnContinuedBrowsing: false,
      lang: 'en',
      siteId: 2325704,
      floatingPreferencesButtonDisplay: false,
      cookiePolicyId: 52539869,
      banner: {
        position: 'float-bottom-left',
        textColor: '#000000',
        backgroundColor: '#ffffff',
        acceptButtonDisplay: true,
        acceptButtonColor: '#e32c1b',
        acceptButtonCaptionColor: 'white',
        customizeButtonDisplay: false,
        customizeButtonColor: '#212121',
        customizeButtonCaptionColor: 'white',
        closeButtonDisplay: false,
        content:
          '<div id="iubenda-cs-title">Cookie mumbo jumbo</div><div id="iubenda-cs-paragraph"><p class="iub-p">To enjoy this website, you agree we can store cookies on your device and disclose information per our <a href="/privacy-policy/52539869/cookie-policy?an=no&s_ck=false&newmarkup=yes" class="iubenda-cs-cookie-policy-lnk">cookie policy</a>.</p></div>',
        acceptButtonCaption: 'OK, Got it',
      },
      callback: {
        onConsentRead: resolve,
      },
    }
  })

  const script = document.createElement('script')

  script.id = 'iubenda-cs'
  script.src = 'https://cdn.iubenda.com/cs/iubenda_cs.js'

  document.head.appendChild(script)
})
