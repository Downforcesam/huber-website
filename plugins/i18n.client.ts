import { createI18n } from 'vue-i18n'
import enMessages from '~/locales/en.json'
import esMessages from '~/locales/es.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: enMessages,
      es: esMessages,
    },
  })

  nuxtApp.vueApp.use(i18n)

  // Make i18n available globally
  return {
    provide: {
      i18n: i18n.global,
    },
  }
})