import setup from './setup'

const REFERRAL_COOKIE_AGE = 3 * 24 * 60 * 60 // three days
const REFERRAL_COOKIE_KEY = 'friend_referral_code'

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  const analytics = setup((track) => ({}), {
    segmentId: useRuntimeConfig().public.segmentKey,
    debug: false,
    redirectAnalytics: true,
  })

  // Set referral cookie if available
  router.beforeEach((to) => {
    const ref = to.query.ref

    if (ref) {
      const domain = useRuntimeConfig().public.isProduction
        ? 'domain=japanrabbit.com'
        : ''
      document.cookie = `${REFERRAL_COOKIE_KEY}=${ref}; max-age=${REFERRAL_COOKIE_AGE}; path=/; ${domain}`
    }
  })

  // Make a page call for each navigation event
  // Timeout fixes 'title' being empty for a first time route
  router.afterEach((to) => {
    setTimeout(() => {
      analytics.page(to.fullPath)
    })
  })

  return { provide: { analytics } }
})
