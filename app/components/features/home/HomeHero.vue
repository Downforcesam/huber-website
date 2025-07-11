<template>
  <section
    class="relative flex justify-center items-center min-h-screen overflow-hidden"
  >
    <!-- Background image -->
    <NuxtImg
      src="/images/landing/hero-machu-picchu.jpg"
      alt="Machu Picchu - Peru Excursions"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />

    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
    />

    <!-- Hero Content -->
    <div class="z-10 relative text-center">
      <h1
        class="drop-shadow-2xl mb-6 font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight"
      >
        {{ t('discoverMagic') }}
        <span class="block brand-teal">{{ t('ancientPeru') }}</span>
      </h1>

      <p
        class="mx-auto mb-8 max-w-3xl text-gray-200 text-xl sm:text-2xl leading-relaxed"
      >
        {{ t('experienceBreathtaking') }}
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex sm:flex-row flex-col justify-center items-center gap-4 mb-12"
      >
        <UButton
          @click="scrollToTours"
          size="xl"
          color="primary"
          variant="solid"
          icon="i-heroicons-map"
          class="min-w-[200px]"
        >
          {{ t('exploreTours') }}
        </UButton>

        <UButton
          to="https://wa.me/your-number"
          target="_blank"
          size="xl"
          color="secondary"
          variant="outline"
          icon="i-simple-icons-whatsapp"
          class="hover:bg-white/10 border-white min-w-[200px] text-white hover:text-white"
        >
          {{ t('whatsappContact') }}
        </UButton>
      </div>

      <!-- Features -->
      <div
        class="gap-6 grid grid-cols-1 sm:grid-cols-3 mx-auto mb-16 max-w-3xl"
      >
        <div class="text-center">
          <UIcon
            name="i-heroicons-star"
            class="mx-auto mb-2 w-8 h-8 text-yellow-400"
          />
          <p class="font-semibold text-white">{{ t('expertGuides') }}</p>
        </div>
        <div class="text-center">
          <UIcon
            name="i-heroicons-heart"
            class="mx-auto mb-2 w-8 h-8 text-red-400"
          />
          <p class="font-semibold text-white">
            {{ t('authenticExperiences') }}
          </p>
        </div>
        <div class="text-center">
          <UIcon
            name="i-heroicons-shield-check"
            class="mx-auto mb-2 w-8 h-8 brand-teal"
          />
          <p class="font-semibold text-white">{{ t('safeAdventures') }}</p>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="bottom-2 left-1/2 absolute -translate-x-1/2 animate-bounce transform"
      >
        <UButton
          @click="scrollToTours"
          variant="ghost"
          size="lg"
          icon="i-heroicons-chevron-down"
          class="text-white hover:text-brand-teal cursor-pointer"
          aria-label="Scroll to tours"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

function scrollToTours() {
  // Wait for next tick to ensure DOM is ready
  nextTick(() => {
    try {
      const toursSection = document.getElementById('tours');
      if (toursSection && toursSection.offsetTop !== undefined) {
        const headerHeight = 80; // Approximate header height
        const elementTop = toursSection.offsetTop - headerHeight;

        window.scrollTo({
          top: elementTop,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      console.warn('Error scrolling to tours section:', error);
    }
  });
}
</script>
