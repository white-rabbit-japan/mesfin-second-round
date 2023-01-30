import { defineConfig } from 'sanity'
import { withDocumentI18nPlugin } from '@sanity/document-internationalization'
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
} from '@sanity/dashboard'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
import { media } from 'sanity-plugin-media'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { structure } from './structure'
import { schemaTypes } from './schemas'

import Icon from './utils/icon'

const supportedLanguages = [
  { id: 'en_US', title: 'English' },
  { id: 'fr', title: 'French' },
]

export default defineConfig([
  {
    basePath: '/production',
    name: 'production',
    title: 'japanrabbitcom',
    projectId: 'bmtkrwbn',
    dataset: 'production',
    icon: Icon,
    plugins: withDocumentI18nPlugin(
      [
        dashboardTool({
          widgets: [
            documentListWidget({}),
            projectUsersWidget(),
            projectInfoWidget(),
          ],
        }),
        deskTool({ structure }),
        media(),
        visionTool(),
      ],
      {
        includeDeskTool: false,
        languages: supportedLanguages,
      }
    ),
    schema: { types: schemaTypes },
  },
  {
    basePath: '/test',
    name: 'test',
    title: 'japanrabbitcom-test',
    projectId: 'bmtkrwbn',
    dataset: 'test',
    plugins: withDocumentI18nPlugin(
      [
        dashboardTool({
          widgets: [
            documentListWidget({}),
            projectUsersWidget(),
            projectInfoWidget(),
          ],
        }),
        deskTool({ structure }),
        media(),
        visionTool(),
      ],
      {
        includeDeskTool: false,
        languages: supportedLanguages,
      }
    ),
    schema: { types: schemaTypes },
  },
])
