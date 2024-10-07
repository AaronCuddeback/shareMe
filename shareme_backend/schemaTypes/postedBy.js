import {defineType} from 'sanity'

export const postedBy = defineType({
  name: 'postedBy',
  type: 'reference',
  to: [{type: 'user'}],
  title: 'PostedBy',
})
