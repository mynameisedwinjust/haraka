import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from '@sanity/presentation'
import { schemaTypes } from './schemaTypes'
import { StudioLogo } from './components/StudioLogo'

export default defineConfig({
  name: 'default',
  title: 'Haraka CMS',

  projectId: 'm55bojvx',
  dataset: 'production',

  basePath: '/admin',

  studio: {
    components: {
      logo: StudioLogo,
    },
  },

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: '/',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
