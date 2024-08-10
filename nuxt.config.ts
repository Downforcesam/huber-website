// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  ssr: false,

  modules: [
    '@nuxtjs/i18n',
    'vuetify-nuxt-module',
    'nuxt-headlessui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],

  content: {
    // locales: ['es', 'en'],
  },

  i18n: {
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    // strategy: 'prefix',
    langDir: 'locales/',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json',
      },
    ],
  },

  compatibilityDate: '2024-07-20',
});
