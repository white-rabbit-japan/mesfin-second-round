export const SUPPORTED_LANGUAGES = [
  {
    locale: 'en',
    code: 'en',
    file: 'en.yml',
    name: 'English',
    native: 'English',
    iso: 'en-US',
    flag: '🇺🇸',
  },
  {
    locale: 'es',
    code: 'es',
    file: 'es.yml',
    name: 'Spanish',
    native: 'Español',
    iso: 'es',
    flag: '🇪🇸',
  },
]

export const SUPPORTED_LOCALES = SUPPORTED_LANGUAGES.map((l) => l.locale)

export default {
  locales: SUPPORTED_LANGUAGES.map(({ code, iso, file }) => ({
    code,
    iso,
    file,
  })),
  langDir: './i18n/translations',
  defaultLocale: 'en',
}
