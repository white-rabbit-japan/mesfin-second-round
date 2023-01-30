import { defineType, defineField } from 'sanity'
import { FaExchangeAlt } from 'react-icons/fa'

export default defineType({
  title: 'Changelog Entries',
  name: 'changelogEntry',
  type: 'document',
  icon: FaExchangeAlt,
  fields: [
    defineField({
      title: 'Date',
      name: 'date',
      type: 'date',
      initialValue: () => {
        const date = new Date()

        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
      },
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Is from webhook',
      name: 'isFromWebhook',
      description: 'When true, the webhook will append Released Linear issues',
      type: 'boolean',
      initialValue: false,
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'date',
    },
  },
})
