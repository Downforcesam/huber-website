<template>
  <footer class="bg-gray-900 text-white">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <p class="mb-6 max-w-md text-gray-300 text-lg">
            Discover the magic of Peru with authentic adventures through the
            Andes. Expert guides, small groups, and unforgettable experiences
            await you.
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
          <h3 class="mb-4 font-semibold text-lg">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                v-if="!link.href.startsWith('#')"
                :to="link.href"
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </NuxtLink>
              <button
                v-else
                @click="handleFooterAnchorClick(link.href)"
                class="bg-transparent border-none w-full text-gray-300 hover:text-white text-left transition-colors duration-200 cursor-pointer"
              >
                {{ link.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="mb-4 font-semibold text-lg">Contact</h3>
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
              <span class="text-gray-300">Cusco, Peru</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-8 pt-6 border-gray-800 border-t">
        <div class="flex md:flex-row flex-col justify-between items-center">
          <div class="mb-4 md:mb-0 text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Peru Excursions. All rights
            reserved.
          </div>

          <div class="flex space-x-6">
            <span class="text-gray-400 text-sm cursor-not-allowed">
              Privacy Policy
            </span>
            <span class="text-gray-400 text-sm cursor-not-allowed">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tours', href: '/tours' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '#contact' },
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

function handleFooterAnchorClick(anchor: string) {
  if (!anchor || typeof anchor !== 'string' || anchor.trim() === '') {
    return;
  }

  const element = document.querySelector(anchor);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
