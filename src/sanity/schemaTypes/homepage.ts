import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image / Video',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'primaryButtonLabel',
      title: 'Primary Button Label',
      type: 'string',
    }),
    defineField({
      name: 'primaryButtonUrl',
      title: 'Primary Button URL',
      type: 'string',
    }),
    defineField({
      name: 'servicesShown',
      title: 'Services Shown (Summarized)',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ],
})
