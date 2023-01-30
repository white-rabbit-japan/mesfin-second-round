import { defineType, defineField } from 'sanity'
import { FaFile } from 'react-icons/fa'

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: FaFile,
  fields: [
    defineField({
      title: 'Body',
      name: 'body',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
