import { defineType, defineField } from 'sanity'
import { FaExchangeAlt } from 'react-icons/fa'

import AllChangelogEntries from '../../components/all-changelog-entries'

export default defineType({
  title: 'Changelog',
  name: 'changelog',
  type: 'document',
  icon: FaExchangeAlt,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Entries',
      name: 'entries',
      type: 'string',
      description: 'These are automatically populated.',
      components: {
        input: AllChangelogEntries,
      },
    }),
  ],
})
