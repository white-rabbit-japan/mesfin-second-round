import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    defineField({
      title: 'Page Title',
      name: 'pageTitle',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'string',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      title: 'Meta Keywords',
      name: 'metaKeywords',
      type: 'string',
      description: 'Comma separated',
    }),
    defineField({
      title: 'Open Graph',
      name: 'openGraph',
      type: 'openGraph',
    }),
  ],
})
