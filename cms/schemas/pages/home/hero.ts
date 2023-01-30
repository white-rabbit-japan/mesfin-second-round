import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'Hero',
  name: 'hero',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      title: 'Sub Text',
      name: 'subText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Tag Line',
      name: 'tagLine',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Call To Action',
      name: 'cta',
      type: 'object',
      fields: [
        defineField({
          title: 'Text',
          name: 'text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Link',
          name: 'link',
          type: 'url',
          description: 'Links to the JPR App',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
