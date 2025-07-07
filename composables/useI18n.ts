import { useRouter, useRoute } from 'vue-router'

export const useI18n = () => {
  const { $i18n } = useNuxtApp()
  const router = useRouter()
  const route = useRoute()

  // Get current locale from route or default to 'en'
  const locale = computed(() => {
    const pathLocale = route.path.split('/')[1]
    return ['en', 'es'].includes(pathLocale) ? pathLocale : 'en'
  })

  // Reactive translation function
  const t = (key: string, values?: Record<string, any>) => {
    if (!$i18n) return key
    return $i18n.t(key, values)
  }

  // Switch locale and update route
  const switchLocale = async (newLocale: 'en' | 'es') => {
    if (!$i18n) return

    $i18n.locale.value = newLocale
    
    // Store locale preference
    const localeCookie = useCookie('locale', {
      default: () => 'en',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })
    localeCookie.value = newLocale

    // Update route based on locale
    const currentPath = route.path
    let newPath = ''

    if (newLocale === 'en') {
      // Remove /es prefix for English
      newPath = currentPath.replace(/^\/es/, '') || '/'
    } else {
      // Add /es prefix for Spanish
      if (currentPath.startsWith('/es')) {
        newPath = currentPath
      } else {
        newPath = `/es${currentPath === '/' ? '' : currentPath}`
      }
    }

    if (newPath !== currentPath) {
      await router.push(newPath)
    }
  }

  // Initialize locale from cookie or route
  const initializeLocale = () => {
    if (!$i18n) return

    const localeCookie = useCookie('locale', { default: () => 'en' })
    const routeLocale = locale.value
    const preferredLocale = routeLocale || localeCookie.value || 'en'

    $i18n.locale.value = preferredLocale as 'en' | 'es'
  }

  // Available locales
  const locales = [
    { code: 'en', name: 'English', iso: 'en-US' },
    { code: 'es', name: 'Español', iso: 'es-ES' },
  ]

  return {
    locale: readonly(locale),
    t,
    switchLocale,
    initializeLocale,
    locales,
  }
}