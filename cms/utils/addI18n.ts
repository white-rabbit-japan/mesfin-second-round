import { DocumentDefinition } from 'sanity'

export default (document: DocumentDefinition) => {
  document.i18n = true

  document.initialValue = {
    __i18n_lang: 'en_US',
  }

  return document
}
