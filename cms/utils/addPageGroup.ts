import { DocumentDefinition } from 'sanity'

export default (document: DocumentDefinition) => {
  const group = {
    name: 'page',
    title: 'Page',
  }

  document.groups ? document.groups?.push(group) : (document.groups = [group])

  document.fields.filter((f) => !f.group).forEach((f) => (f.group = 'page'))

  return document
}
