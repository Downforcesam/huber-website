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
      <UBadge color="primary" variant="soft" size="lg" class="mb-6">
        Authentic Peru Adventures
      </UBadge>

      <h1
        class="mb-6 font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-tight"
      >
        Discover the Magic of
        <span class="block text-primary-400">Ancient Peru</span>
      </h1>

      <p
        class="mx-auto mb-8 max-w-3xl text-gray-200 text-xl sm:text-2xl leading-relaxed"
      >
        Experience breathtaking landscapes, rich culture, and unforgettable
        adventures with our expert local guides through the heart of the Andes.
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
          Explore Tours
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
          WhatsApp Us
        </UButton>
      </div>

      <!-- Features -->
      <div class="gap-6 grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-3xl">
        <div class="text-center">
          <UIcon
            name="i-heroicons-star"
            class="mx-auto mb-2 w-8 h-8 text-yellow-400"
          />
          <p class="font-semibold text-white">Expert Guides</p>
        </div>
        <div class="text-center">
          <UIcon
            name="i-heroicons-heart"
            class="mx-auto mb-2 w-8 h-8 text-red-400"
          />
          <p class="font-semibold text-white">Authentic Experiences</p>
        </div>
        <div class="text-center">
          <UIcon
            name="i-heroicons-shield-check"
            class="mx-auto mb-2 w-8 h-8 text-green-400"
          />
          <p class="font-semibold text-white">Safe Adventures</p>
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
          aria-label="Scroll to tours"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { scrollToAnchor } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    },
  },
});
</script>
