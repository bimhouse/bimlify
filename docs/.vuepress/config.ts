import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Bimlify',
  description: 'Bimlify - Simple Process -> Continous Design',
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: 'Edit',
    lastUpdated: false,
    logo: '/assets/img/bimlify_logo.png',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Revit Config',
        link: '/revit_config/'
      },
      {
        text: 'Autodesk Docs',
        link: 'https://acc.autodesk.com'
      },
      {
        text: 'Knowledge Network',
        link: 'https://knowledge.autodesk.com'
      }
    ],
    sidebar: 'auto',
  },
})
