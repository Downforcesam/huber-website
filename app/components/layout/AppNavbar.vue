<template>
  <header
    class="top-0 z-50 sticky bg-white shadow-sm backdrop-blur-md border-gray-200 border-b"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex justify-between items-center h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink :to="localePath('/')" class="flex items-center">
            <span class="sr-only">Peru Excursions</span>
            <NuxtImg
              class="w-auto h-10 lg:h-12"
              src="/images/shared/logo.png"
              alt="Peru Excursions"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <template v-for="item in navigation" :key="item.name">
            <NuxtLink
              v-if="!item.isAnchor"
              :to="localePath(item.href)"
              class="group relative font-medium text-gray-700 hover:text-brand-teal text-sm transition-colors duration-200"
            >
              {{ t(item.name) }}
              <span
                class="-bottom-1 left-0 absolute bg-brand-teal w-0 group-hover:w-full h-0.5 transition-all duration-200"
              ></span>
            </NuxtLink>
            <button
              v-else
              @click="handleAnchorClick(item.href)"
              class="group relative font-medium text-gray-700 hover:text-brand-teal text-sm transition-colors duration-200 cursor-pointer"
            >
              {{ t(item.name) }}
              <span
                class="-bottom-1 left-0 absolute bg-brand-teal w-0 group-hover:w-full h-0.5 transition-all duration-200"
              ></span>
            </button>
          </template>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center space-x-4">
          <AppLangSwitcher />
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden flex items-center space-x-3">
          <AppLangSwitcher />
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex justify-center items-center hover:bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset text-gray-700 hover:text-primary-600 transition-colors"
          >
            <span class="sr-only">Open main menu</span>
            <UIcon
              :name="
                mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'
              "
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden top-full right-0 left-0 z-50 absolute bg-white shadow-lg border-gray-200 border-b"
      >
        <div class="space-y-4 px-4 py-6">
          <!-- Navigation Links -->
          <div class="space-y-2">
            <h3
              class="mb-4 font-semibold text-gray-500 text-sm uppercase tracking-wide"
            >
              Navigation
            </h3>
            <template v-for="item in navigation" :key="item.name">
              <NuxtLink
                v-if="!item.isAnchor"
                :to="localePath(item.href)"
                @click="mobileMenuOpen = false"
                class="block hover:bg-gray-50 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-brand-teal text-base transition-colors"
              >
                {{ t(item.name) }}
              </NuxtLink>
              <button
                v-else
                @click="
                  handleAnchorClick(item.href);
                  mobileMenuOpen = false;
                "
                class="block hover:bg-gray-50 px-3 py-2 rounded-md w-full font-medium text-gray-700 hover:text-brand-teal text-base text-left transition-colors cursor-pointer"
              >
                {{ t(item.name) }}
              </button>
            </template>
          </div>

          <!-- Quick Actions -->
          <div class="space-y-3 pt-4 border-gray-200 border-t">
            <h3
              class="mb-4 font-semibold text-gray-500 text-sm uppercase tracking-wide"
            >
              Quick Actions
            </h3>

            <UButton
              @click="
                handleAnchorClick('#contact');
                mobileMenuOpen = false;
              "
              color="primary"
              variant="solid"
              size="lg"
              block
              icon="i-heroicons-envelope"
            >
              {{ t('contactUs') }}
            </UButton>

            <UButton
              to="https://wa.me/your-number"
              target="_blank"
              color="secondary"
              variant="outline"
              size="lg"
              block
              icon="i-simple-icons-whatsapp"
              @click="mobileMenuOpen = false"
            >
              WhatsApp
            </UButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const router = useRouter();

const navigation = [
  { name: 'home', href: '/', isAnchor: false },
  { name: 'tours', href: '/tours', isAnchor: false },
  { name: 'destinations', href: '/destinations', isAnchor: false },
  { name: 'about', href: '/about', isAnchor: false },
  { name: 'contact', href: '#contact', isAnchor: true },
];

const mobileMenuOpen = ref(false);

// Handle anchor link clicks with proper navigation
function handleAnchorClick(anchor: string) {
  // Validate anchor parameter
  if (!anchor || typeof anchor !== 'string' || anchor.trim() === '') {
    console.warn('Invalid anchor provided to handleAnchorClick:', anchor);
    return;
  }

  if (route.path === '/') {
    // Already on home page, just scroll
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Navigate to home page first, then scroll after navigation
    router.push('/').then(() => {
      // Wait for the page to load, then scroll
      nextTick(() => {
        setTimeout(() => {
          const element = document.querySelector(anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    });
  }
}

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement;
    if (mobileMenuOpen.value && !target.closest('header')) {
      mobileMenuOpen.value = false;
    }
  };

  document.addEventListener('click', handleClickOutside);

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
});
</script>
