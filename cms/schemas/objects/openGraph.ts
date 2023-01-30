import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'Open Graph',
  name: 'openGraph',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      title: 'og:title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'og:description',
      name: 'description',
      type: 'string',
    }),
    defineField({
      title: 'og:type',
      name: 'type',
      type: 'string',
      description: 'website, article, etc.',
    }),
    defineField({
      title: 'og:image',
      name: 'image',
      type: 'image',
    }),
  ],
})
