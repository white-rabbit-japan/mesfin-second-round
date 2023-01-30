import { defineType, defineField } from 'sanity'
import { FaHome } from 'react-icons/fa'

export default defineType({
  title: 'Home',
  name: 'home',
  type: 'document',
  icon: FaHome,
  fields: [
    defineField({
      title: 'Hero',
      name: 'hero',
      type: 'hero',
    }),
  ],
})
