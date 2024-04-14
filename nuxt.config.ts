// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  colorMode: {
    preference: 'light',
  },
  modules: ['@nuxtjs/i18n', '@nuxt/ui', '@nuxt/content'],
  i18n: {
    baseUrl: 'http://localhost:3000',
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
