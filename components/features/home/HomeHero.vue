<template>
  <section
    class="relative flex justify-center items-center min-h-screen overflow-hidden"
  >
    <!-- Background image -->
    <NuxtImg
      src="/machu-picchu.jpg"
      alt="Machu Picchu - Peru Excursions"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />

    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
    />

    <!-- Content -->
    <div
      class="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center"
    >
      <h1
        class="mb-6 font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-tight"
      >
        {{ t('heroTitle') }}
      </h1>

      <p
        class="mx-auto mb-8 max-w-3xl text-gray-200 text-xl sm:text-2xl leading-relaxed"
      >
        {{ t('heroSubtitle') }}
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex sm:flex-row flex-col justify-center items-center gap-4 mb-12"
      >
        <UButton
          @click="scrollToAnchor('tours')"
          size="xl"
          color="primary"
          variant="solid"
          icon="i-heroicons-map"
          class="min-w-[200px]"
        >
          {{ t('heroButton') }}
        </UButton>

        <UButton
          to="https://wa.me/your-number"
          target="_blank"
          size="xl"
          color="success"
          variant="outline"
          icon="i-simple-icons-whatsapp"
          class="border-white min-w-[200px] text-white hover:text-white"
        >
          {{ t('whatsappContact') }}
        </UButton>
      </div>

      <!-- Features -->
      <div class="gap-6 grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-3xl">
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
            class="mx-auto mb-2 w-8 h-8 text-primary-400"
          />
          <p class="font-semibold text-white">{{ t('safeAdventures') }}</p>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="bottom-8 left-1/2 absolute -translate-x-1/2 animate-bounce transform"
      >
        <UButton
          @click="scrollToAnchor('tours')"
          variant="ghost"
          size="sm"
          icon="i-heroicons-chevron-down"
          class="text-white hover:text-primary-400"
          :aria-label="t('scrollToTours')"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const { scrollToAnchor } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    },
  },
});
</script>
