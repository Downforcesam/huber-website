<template>
  <section id="tours" class="bg-white py-16 sm:py-24">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-6 font-bold text-gray-900 text-3xl sm:text-4xl">
          {{ t('exploreTours') }}
        </h2>
        <p class="mx-auto max-w-3xl text-gray-600 text-xl">
          {{ t('ancientRuins') }}
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="!tours || tours.length === 0" class="py-12 text-center">
        <UIcon
          name="i-heroicons-arrow-path"
          class="mx-auto mb-4 w-8 h-8 animate-spin brand-teal"
        />
        <p class="text-gray-600">{{ t('loadingTours') }}</p>
      </div>

      <!-- Tours Grid -->
      <div
        v-else
        class="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <UCard
          v-for="tour in tours"
          :key="tour.slug"
          :to="localePath(`/tours/${tour.slug}`)"
          class="group cursor-pointer"
        >
          <!-- Tour image -->
          <div
            class="relative bg-gray-200 h-64 sm:h-72 overflow-hidden group-hover:scale-105 transition-transform duration-300"
          >
            <NuxtImg
              :src="tour.thumbnail || '/images/shared/landscape.jpg'"
              :alt="tour.title"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <!-- Gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            ></div>

            <!-- Tour info overlay -->
            <div class="bottom-4 left-4 absolute text-white">
              <h3 class="mb-1 font-bold text-xl sm:text-2xl">
                {{ tour.title }}
              </h3>
              <p class="text-gray-200 text-sm">
                {{
                  (tour.category as string) === 'City Tour' ||
                  (tour.category as string) === 'Tour Ciudad'
                    ? t('cityTour')
                    : (tour.category as string) === 'Trekking' ||
                        (tour.category as string) === 'Senderismo'
                      ? t('trekking')
                      : tour.category
                }}
              </p>
            </div>

            <!-- Price badge -->
            <div class="top-4 right-4 absolute">
              <span
                class="bg-white/95 shadow-lg px-3 py-1 border border-gray-200 rounded-full font-bold text-gray-900 text-sm"
              >
                ${{ tour.price }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <p class="mb-4 text-gray-600 text-sm line-clamp-3">
              {{ tour.summary }}
            </p>

            <!-- Key info -->
            <div class="gap-4 grid grid-cols-2 mb-4 text-sm">
              <div>
                <span class="text-gray-500">{{ t('duration') }}:</span>
                <span class="ml-1 font-medium"
                  >{{ tour.duration }} {{ t('days') }}</span
                >
              </div>
              <div>
                <span class="text-gray-500">{{ t('difficulty') }}:</span>
                <span class="ml-1 font-medium">{{
                  (tour.difficulty as string) === 'Easy' ||
                  (tour.difficulty as string) === 'Fácil'
                    ? t('easy')
                    : (tour.difficulty as string) === 'Moderate' ||
                        (tour.difficulty as string) === 'Moderado'
                      ? t('moderate')
                      : (tour.difficulty as string) === 'Challenging' ||
                          (tour.difficulty as string) === 'Desafiante'
                        ? t('challenging')
                        : (tour.difficulty as string) === 'Expert' ||
                            (tour.difficulty as string) === 'Experto'
                          ? t('expert')
                          : tour.difficulty
                }}</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center font-medium text-blue-600 group-hover:text-blue-700 text-sm"
            >
              {{ t('viewDetails') }}
              <svg
                class="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </UCard>
      </div>

      <!-- See All Tours Button -->
      <div class="mt-12 text-center">
        <UButton
          :to="localePath('/tours')"
          size="xl"
          color="primary"
          variant="solid"
          icon="i-heroicons-squares-2x2"
          class="min-w-[200px]"
        >
          {{ t('seeAllTours') }}
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const { locale } = useI18n();

// Reactive collection name based on current locale
const collectionName = computed(() =>
  locale.value === 'es' ? 'esTours' : 'enTours'
);

// Fetch featured tours using Nuxt Content v3 API
const { data: allTours } = await useAsyncData(
  () => `home-featured-tours-${locale.value}`,
  () => queryCollection(collectionName.value).all()
);

// Filter for featured tours only
const tours = computed(() => {
  if (!allTours.value) return [];
  return allTours.value.filter((tour) => tour.featured === true).slice(0, 3); // Limit to top 3
});

function navigateToTour(slug: string) {
  navigateTo(localePath(`/tours/${slug}`));
}

function getCategoryColor(category: string) {
  const colors = {
    trekking: 'success',
    cityTour: 'primary',
    cultural: 'warning',
    adventure: 'error',
  } as const;
  return colors[category as keyof typeof colors] || 'neutral';
}

function getDifficultyColor(difficulty: string) {
  const colors = {
    easy: 'success',
    moderate: 'warning',
    challenging: 'error',
    expert: 'error',
  } as const;
  return colors[difficulty as keyof typeof colors] || 'neutral';
}
</script>
