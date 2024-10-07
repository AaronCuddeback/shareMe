import {defineField, defineType} from 'sanity'

export const pin = defineType({
  name: 'pin',
  type: 'document',
  title: 'Pin',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'about',
      type: 'string',
      title: 'About',
    }),
    defineField({
      name: 'destination',
      type: 'url',
      title: 'Destination',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
        title: 'Image',
      },
    }),
    defineField({
      name: 'userId',
      type: 'string',
      title: 'UserID',
    }),
    defineField({
      name: 'postedBy',
      type: 'postedBy',
      title: 'PostedBy',
    }),
    defineField({
      name: 'save',
      type: 'array',
      of: [{type: 'save'}],
      title: 'Save',
    }),
    defineField({
      name: 'comments',
      type: 'array',
      of: [{type: 'comment'}],
      title: 'Comments',
    }),
  ],
})
