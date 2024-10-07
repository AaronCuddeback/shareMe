import {defineField, defineType} from 'sanity'

export const comment = defineType({
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    defineField({
      name: 'postedBy',
      type: 'postedBy',
      title: 'PostedBy',
    }),
    defineField({
      name: 'comment',
      type: 'string',
      title: 'Comment',
    }),
  ],
})
