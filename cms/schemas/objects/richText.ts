import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'externalLink',
          },
          // TODO: add this back when we have more pages
          // {
          //   title: 'Internal Link',
          //   name: 'internalLink',
          //   type: 'internalLink',
          // },
          // TODO: add this back when user can record these types
          // {
          //   title: 'Product Genre',
          //   name: 'productGenre',
          //   type: 'reference',
          //   to: [{ type: 'productGenre' }],
          // },
          // {
          //   title: 'Shop',
          //   name: 'shop',
          //   type: 'reference',
          //   to: [{ type: 'shop' }],
          // },
          // {
          //   title: 'Competitor',
          //   name: 'competitor',
          //   type: 'reference',
          //   to: [{ type: 'competitor' }],
          // },
        ],
      },
    },
    {
      title: 'Figure',
      name: 'figure',
      type: 'object',
      fields: [
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
          options: {
            metadata: ['blurhash', 'lqip'],
          },
        }),
        defineField({ title: 'Caption', name: 'caption', type: 'string' }),
        defineField({ title: 'Alt Text', name: 'altText', type: 'string' }),
      ],
    },
  ],
})
