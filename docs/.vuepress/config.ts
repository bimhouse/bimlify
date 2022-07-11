import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { head, navbarEn, navbarFr } from './configs'

export default defineUserConfig({

  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Bimlify - English', // page title
      description: 'Bimlify - English', // description
      head, // extra tags in `<head>`
    },
    '/fr/': {
      lang: 'fr',
      title: 'Bimlify - French', // page title
      description: 'Bimlify - French', // description
      head, // extra tags in `<head>`
    }
  },

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
        // page meta
        editLinkText: 'Edit',
      },
      '/fr/': {
        navbar: navbarFr,
        // page meta
        editLinkText: 'Edit',
      }
    }
  })
})
