// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  ssr: false,

  css: ['~/assets/css/main.css'],

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
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/ui-pro',
    '@nuxt/icon',
    'nuxt-headlessui',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-anchorscroll',
    '@vueuse/motion/nuxt',
  ],

  // Configure component auto-imports for new structure
  components: [
    {
      path: '~/components/features',
      pattern: '**/*.vue',
      pathPrefix: false,
    },
    {
      path: '~/components/layout',
      pattern: '**/*.vue',
      pathPrefix: false,
    },
    {
      path: '~/components/ui',
      pattern: '**/*.vue',
      pathPrefix: false,
    },
  ],

  content: {
    // Basic content configuration
  },

  image: {
    // Disable image optimization in development to avoid _ipx errors
    provider: 'none',
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
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.json',
      },
    ],
  },

  // TypeScript configuration
  typescript: {
    strict: false,
    typeCheck: false,
  },

  // Path aliases for better imports
  alias: {
    '@shared': '~/shared',
    '@components': '~/components',
    '@features': '~/features',
  },

  compatibilityDate: '2024-07-20',
});
