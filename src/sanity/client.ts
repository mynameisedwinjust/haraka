import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'm55bojvx',
  dataset: 'production',
  useCdn: false, // Must be false for Visual Editing live updates
  apiVersion: '2024-01-01', // API version
  stega: {
    enabled: true,
    studioUrl: '/admin',
  },
})
