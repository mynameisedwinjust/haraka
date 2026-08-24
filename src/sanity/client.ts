import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'm55bojvx',
  dataset: 'production',
  useCdn: true, // Use CDN for faster loading
  apiVersion: '2024-01-01', // API version
})
