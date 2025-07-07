export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en', 'es'],
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
    useCookie: true,
    fallbackLocale: 'en',
  },
}));
