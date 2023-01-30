import { DocumentDefinition } from 'sanity'

export default (document: DocumentDefinition) => {
  const group = {
    name: 'seo',
    title: 'SEO',
  }

  document.groups ? document.groups?.push(group) : (document.groups = [group])

  document.fields = [
    ...document.fields,
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    },
  ]

  return document
}
