import { defineType, defineField } from 'sanity'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default defineType({
  title: 'External link',
  name: 'externalLink',
  type: 'object',
  icon: FaExternalLinkAlt,
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
    }),
    defineField({
      title: 'Open in new tab',
      name: 'blank',
      description: 'Read https://css-tricks.com/use-target_blank',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
