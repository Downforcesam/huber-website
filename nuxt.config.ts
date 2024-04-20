// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  modules: ['@nuxtjs/i18n', '@nuxt/ui', 'nuxt-anchorscroll', '@nuxt/content'],
  content: {
    // locales: ['es', 'en'],
  },
  i18n: {
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
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
});
