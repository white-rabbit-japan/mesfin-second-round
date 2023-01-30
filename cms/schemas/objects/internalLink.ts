import { defineType, defineField } from 'sanity'
import { FaLink } from 'react-icons/fa'

export default defineType({
  title: 'Internal link',
  name: 'internalLink',
  type: 'object',
  icon: FaLink,
  fields: [
    defineField({
      title: 'Reference',
      name: 'reference',
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [
        { type: 'page' },
        { type: 'changelog' },
        // { type: 'productGenre' },
        // { type: 'shop' },
        // { type: 'competitor' },
      ],
    }),
  ],
})
