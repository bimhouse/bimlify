import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { head, navbarEn } from './configs'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  // page title
  title: 'Bimlify',

  // description
  description: 'Bimlify - Simple Process -> Continous Design',

  // configure default theme
  theme: defaultTheme({
    editLinkText: 'Edit',
    // logo: '/images/hero.png',
    repo: 'gregoiredechaine/vuepress-next',
    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // page meta
        editLinkText: 'Edit',
      }
    }
  })
})
