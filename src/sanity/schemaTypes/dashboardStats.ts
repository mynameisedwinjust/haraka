import { defineField, defineType } from 'sanity'

export const dashboardStatsType = defineType({
  name: 'dashboardStats',
  title: 'Dashboard Statistics',
  type: 'document',
  fields: [
    defineField({
      name: 'totalVisitors',
      title: 'Total website visitors',
      type: 'number',
      description: 'The number of total visitors shown on the site'
    }),
    defineField({
      name: 'newInquiries',
      title: 'New inquiries / leads',
      type: 'number'
    }),
    defineField({
      name: 'publishedInsights',
      title: 'Published insights',
      type: 'number'
    }),
    defineField({
      name: 'activePartners',
      title: 'Active partners',
      type: 'number'
    }),
    defineField({
      name: 'projects',
      title: 'Projects completed/active',
      type: 'number'
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials count',
      type: 'number'
    }),
  ]
})
