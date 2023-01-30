import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'List',
  name: 'list',
  type: 'object',
  fields: [
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      options: {
        sortable: true,
      },
      of: [
        {
          title: 'Product Genre',
          name: 'productGenre',
          type: 'reference',
          to: [{ type: 'productGenre' }],
        },
        {
          title: 'Shop',
          name: 'shop',
          type: 'reference',
          to: [{ type: 'shop' }],
        },
        {
          title: 'Competitor',
          name: 'competitor',
          type: 'reference',
          to: [{ type: 'competitor' }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
})
