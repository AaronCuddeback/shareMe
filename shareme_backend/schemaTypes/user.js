import {defineField, defineType} from 'sanity'

export const user = defineType({
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    defineField({
      name: 'Username',
      type: 'string',
      title: 'username',
    }),
    defineField({
      name: 'image',
      type: 'string',
      title: 'Image',
    }),
  ],
})
