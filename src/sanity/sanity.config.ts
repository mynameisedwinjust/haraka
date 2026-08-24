import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Haraka CMS',

  projectId: 'm55bojvx',
  dataset: 'production',

  basePath: '/admin',

  plugins: [
    structureTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
