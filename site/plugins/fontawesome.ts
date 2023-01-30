import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faUserShield,
  faCookieBite,
  faFileAlt,
  faExternalLink,
} from '@fortawesome/pro-light-svg-icons'

config.autoAddCss = false

library.add(
  faFacebookSquare,
  faTwitter,
  faUserShield,
  faCookieBite,
  faFileAlt,
  faExternalLink
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FA', FontAwesomeIcon)
})
