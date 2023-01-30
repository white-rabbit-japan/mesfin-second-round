import { defineType, defineField } from 'sanity'
import { FaStore } from 'react-icons/fa'

export default defineType({
  title: 'Shop',
  name: 'shop',
  type: 'document',
  icon: FaStore,
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
