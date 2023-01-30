import svgLoader from 'vite-svg-loader'

import locales from './i18n/locales'
import numberFormats from './i18n/number-formats'
import datetimeFormats from './i18n/date-time-formats'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity',
    '~/modules/robots.ts',
  ],
  i18n: {
    ...locales,
    vueI18n: {
      numberFormats,
      datetimeFormats,
      legacy: false,
    },
  },
  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET,
    minimal: true,
    apiVersion: '2021-10-21',
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-pro',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/pro-duotone-svg-icons',
      '@fortawesome/pro-light-svg-icons',
      '@fortawesome/pro-regular-svg-icons',
      '@fortawesome/pro-solid-svg-icons',
    ],
  },
  alias: {
    // remove when fixed https://github.com/nuxt/framework/issues/4325
    '@vue/devtools-api': '@vue/devtools-api',
  },
  runtimeConfig: {
    public: {
      // see environment variables at https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables
      isProduction: process.env.CF_PAGES_BRANCH === 'master',
      segmentKey: '',
      gtmId: '',
      sanityProjectId: '',
      sanityDataset: '',
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
})
