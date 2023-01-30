import { defineType, defineField } from 'sanity'
import { FaThumbsDown } from 'react-icons/fa'

export default defineType({
  title: 'Competitor',
  name: 'competitor',
  type: 'document',
  icon: FaThumbsDown,
  options: {
    // show language filter for this document type, regardless of how documentTypes for the plugin is configured
    languageFilter: true,
  },
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      description: 'Use a 1:1 ratio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
    }),
    defineField({
      title: 'Breadcrumb',
      name: 'breadcrumb',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Lede',
      name: 'lede',
      type: 'text',
      rows: 2,
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
