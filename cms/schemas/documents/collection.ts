import { defineType, defineField } from 'sanity'
import { FaList } from 'react-icons/fa'

export default defineType({
  title: 'Collection',
  name: 'collection',
  type: 'document',
  icon: FaList,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
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
      title: 'Body 1',
      name: 'bodyBeforeList',
      type: 'richText',
      description: 'Appears before the list',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'List',
      name: 'list',
      type: 'list',
      validation: (Rule) => Rule.required().unique(),
    }),
    defineField({
      title: 'Body 2',
      name: 'bodyAfterList',
      type: 'richText',
      description: 'Appears after the list',
    }),
  ],
})
