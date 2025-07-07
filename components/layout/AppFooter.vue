<template>
  <footer class="bg-gray-900 text-white">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-7xl">
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="flex items-center mb-6">
            <NuxtImg
              class="w-auto h-16"
              src="/peru-excursion-logo.png"
              alt="Peru Excursions - Authentic Andes Adventures"
            />
          </div>
          <p class="mb-6 max-w-md text-gray-300 text-lg">
            {{ t('footerDescription') }}
          </p>

          <!-- Social Links -->
          <div class="flex space-x-4">
            <UButton
              v-for="social in socialLinks"
              :key="social.name"
              :to="social.href"
              target="_blank"
              color="neutral"
              variant="ghost"
              size="sm"
              :icon="social.icon"
              square
            />
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 font-semibold text-lg">{{ t('quickLinks') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ t(link.name) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="mb-4 font-semibold text-lg">{{ t('contact') }}</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <UIcon
                name="i-heroicons-phone"
                class="w-5 h-5 text-primary-400"
              />
              <span class="text-gray-300">+51 123 456 789</span>
            </div>
            <div class="flex items-center space-x-3">
              <UIcon
                name="i-heroicons-envelope"
                class="w-5 h-5 text-primary-400"
              />
              <span class="text-gray-300">info@peruadventures.com</span>
            </div>
            <div class="flex items-center space-x-3">
              <UIcon
                name="i-heroicons-map-pin"
                class="w-5 h-5 text-primary-400"
              />
              <span class="text-gray-300">{{ t('footerLocation') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-12 pt-8 border-gray-800 border-t">
        <div class="flex md:flex-row flex-col justify-between items-center">
          <div class="mb-4 md:mb-0 text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} {{ t('footerCopyright') }}
          </div>

          <div class="flex space-x-6">
            <a
              href="#"
              class="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              {{ t('privacyPolicy') }}
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              {{ t('termsOfService') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n();

const quickLinks = [
  { name: 'home', href: '/' },
  { name: 'tours', href: '/tours' },
  { name: 'destinations', href: '#destinations' },
  { name: 'about', href: '#about' },
  { name: 'contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: 'i-simple-icons-facebook',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: 'i-simple-icons-instagram',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: 'i-simple-icons-x',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: 'i-simple-icons-youtube',
  },
];
</script>
