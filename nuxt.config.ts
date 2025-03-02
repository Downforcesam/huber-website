// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        { rel: 'icon', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
      ],
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    'nuxt-headlessui',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-anchorscroll',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@vueuse/motion/nuxt',
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },

  content: {
    // locales: ['es', 'en'],
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
  i18n: {
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    strategy: 'prefix_except_default',
    // strategy: 'prefix',
    langDir: '../app/locales/',
    locales: [
      {
        code: 'en',
        Name: 'English',
        language: 'en-US',
        file: 'en.json',
      },
      {
        code: 'es',
        Name: 'Español',
        language: 'es-ES',
        file: 'es.json',
      },
    ],
  },

  compatibilityDate: '2024-07-20',
});
