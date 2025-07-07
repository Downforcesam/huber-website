<template>
  <section id="tours" class="bg-gray-50 py-16 lg:py-24">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2
          class="mb-6 font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl"
        >
          {{ t('toursTitle') }}
        </h2>
        <p class="mx-auto max-w-3xl text-gray-600 text-xl">
          {{ t('toursSubtitle') }}
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="!tours || tours.length === 0" class="py-12 text-center">
        <UIcon
          name="i-heroicons-arrow-path"
          class="mx-auto mb-4 w-8 h-8 text-primary-500 animate-spin"
        />
        <p class="text-gray-600">{{ t('loadingTours') }}</p>
      </div>

      <!-- Tours Grid -->
      <div v-else class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="tour in tours"
          :key="tour.id"
          class="group hover:shadow-xl transition-all hover:-translate-y-2 duration-300 transform"
        >
          <template #header>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="tour.thumbnail || '/placeholder-tour.jpg'"
                :alt="tour.title"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </template>

          <div class="p-6">
            <h3
              class="mb-3 font-bold text-gray-900 group-hover:text-primary-600 text-xl transition-colors"
            >
              {{ tour.title }}
            </h3>

            <p class="mb-4 text-gray-600 line-clamp-2">
              {{ tour.description }}
            </p>

            <!-- Tour Features -->
            <div class="flex items-center gap-4 mb-6 text-gray-500 text-sm">
              <div class="flex items-center gap-1">
                <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                <span>{{ tour.duration }} {{ t('days') }}</span>
              </div>
              <div class="flex items-center gap-1">
                <UIcon name="i-heroicons-signal" class="w-4 h-4" />
                <span>{{ formatDifficulty(tour.difficulty) }}</span>
              </div>
            </div>

            <div class="flex justify-between items-center">
              <div class="flex items-center gap-1">
                <UIcon
                  name="i-heroicons-star-solid"
                  class="w-4 h-4 text-yellow-400"
                />
                <UIcon
                  name="i-heroicons-star-solid"
                  class="w-4 h-4 text-yellow-400"
                />
                <UIcon
                  name="i-heroicons-star-solid"
                  class="w-4 h-4 text-yellow-400"
                />
                <UIcon
                  name="i-heroicons-star-solid"
                  class="w-4 h-4 text-yellow-400"
                />
                <UIcon
                  name="i-heroicons-star-solid"
                  class="w-4 h-4 text-yellow-400"
                />
                <span class="ml-1 text-gray-600 text-sm">5.0</span>
              </div>

              <UButton
                :to="localePath(`/tours/${tour.slug}`)"
                size="sm"
                color="primary"
                variant="outline"
                icon="i-heroicons-arrow-right"
                trailing
              >
                {{ t('viewDetails') }}
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <!-- View All Tours Button -->
      <div class="mt-12 text-center" v-if="tours && tours.length > 0">
        <UButton
          :to="localePath('/tours')"
          size="xl"
          color="primary"
          variant="solid"
          icon="i-heroicons-map"
        >
          {{ t('viewAllTours') }}
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

// Query tours using the new Nuxt Content v3 Collections API
const { data: tours } = await useAsyncData('tours', () =>
  queryCollection('tours').all()
);

// Helper functions for formatting
const getCategoryColor = (
  category: string
):
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'neutral' => {
  const colors: Record<
    string,
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'neutral'
  > = {
    trekking: 'success',
    cultural: 'warning',
    adventure: 'error',
    city: 'primary',
    nature: 'success',
  };
  return colors[category] || 'primary';
};

const formatCategory = (category: string) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

const formatDifficulty = (difficulty: string) => {
  const levels: Record<string, string> = {
    easy: t('easy'),
    moderate: t('moderate'),
    challenging: t('challenging'),
    expert: t('expert'),
  };
  return levels[difficulty] || difficulty;
};
</script>
