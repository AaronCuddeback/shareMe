import {defineField, defineType} from 'sanity'

export const save = defineType({
  name: 'save',
  type: 'document',
  title: 'Save',
  fields: [
    defineField({
      name: 'postedBy',
      type: 'postedBy',
      title: 'PostedBy',
    }),
    defineField({
      name: 'userId',
      type: 'string',
      title: 'UserId',
    }),
  ],
})
