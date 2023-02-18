import {defineConfig, StudioNavbar} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from 'theme'
import Studionavbar from './components/StudioNavbar'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'QUASI_Content_Studio',
  title: 'QUASI Content Studio',

  projectId, //'1hqkorwm'
  dataset, //'production'

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio:{
    components:{
      //logo: Logo,
      navbar: Studionavbar
    }
  },
  theme: myTheme
})
