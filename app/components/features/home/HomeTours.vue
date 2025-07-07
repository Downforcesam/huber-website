<template>
  <section id="tours" class="bg-gray-50 py-16 lg:py-24">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <UBadge color="primary" variant="soft" size="lg" class="mb-4">
          {{ t('ourAdventures') }}
        </UBadge>
        <h2
          class="mb-6 font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl"
        >
          {{ t('discoverWonders') }}
        </h2>
        <p class="mx-auto max-w-3xl text-gray-600 text-xl">
          {{ t('ancientRuins') }}
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
          v-for="tour in tours.slice(0, 6)"
          :key="tour._path"
          class="group hover:shadow-xl overflow-hidden transition-all duration-300 cursor-pointer"
          @click="navigateToTour(tour._path)"
        >
          <template #header>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="tour.featuredImage || '/machu-picchu.jpg'"
                :alt="tour.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <!-- Category Badge -->
              <div class="top-4 left-4 absolute">
                <UBadge
                  :color="getCategoryColor(tour.category)"
                  variant="solid"
                  size="sm"
                >
                  {{ t(tour.category) }}
                </UBadge>
              </div>
              <!-- Difficulty Badge -->
              <div class="top-4 right-4 absolute">
                <UBadge
                  :color="getDifficultyColor(tour.difficulty)"
                  variant="outline"
                  size="sm"
                >
                  {{ t(tour.difficulty) }}
                </UBadge>
              </div>
            </div>
          </template>

          <div class="p-6">
            <h3
              class="mb-3 font-bold text-gray-900 group-hover:text-primary-600 text-xl transition-colors"
            >
              {{ tour.title }}
            </h3>

            <p class="mb-4 text-gray-600 line-clamp-2">
              {{ tour.shortDescription }}
            </p>

            <!-- Tour Details -->
            <div class="space-y-2 mb-4 text-gray-500 text-sm">
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                <span>{{ tour.duration }} {{ t('days') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-signal" class="w-4 h-4" />
                <span>{{ t('difficulty') }}: {{ t(tour.difficulty) }}</span>
              </div>
            </div>

            <!-- Action Button -->
            <UButton
              variant="ghost"
              size="sm"
              icon="i-heroicons-arrow-right"
              trailing
              block
              class="group-hover:bg-primary-50"
            >
              {{ t('viewDetails') }}
            </UButton>
          </div>
        </UCard>
      </div>

      <!-- View All Tours Button -->
      <div v-if="tours && tours.length > 6" class="mt-12 text-center">
        <UButton
          :to="localePath('/tours')"
          size="lg"
          color="primary"
          variant="outline"
          icon="i-heroicons-squares-2x2"
        >
          {{ t('browseTours') }}
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

// Mock tours data for demonstration (in production this would come from Nuxt Content)
const tours = [
  {
    _path: '/en/tours/machu-picchu',
    title: 'Classic Machu Picchu Trek',
    shortDescription:
      'Experience the iconic Inca Trail to Machu Picchu with expert guides.',
    featuredImage: '/machu-picchu.jpg',
    category: 'trekking',
    difficulty: 'moderate',
    duration: 4,
  },
  {
    _path: '/en/tours/sacred-valley',
    title: 'Sacred Valley Explorer',
    shortDescription:
      'Discover ancient ruins and local markets in the Sacred Valley.',
    featuredImage: '/sacred-valley.jpeg',
    category: 'cityTour',
    difficulty: 'easy',
    duration: 2,
  },
  {
    _path: '/en/tours/rainbow-mountain',
    title: 'Rainbow Mountain Adventure',
    shortDescription: 'Hike to the stunning colorful peaks of Vinicunca.',
    featuredImage: '/rainbow-mountain.jpeg',
    category: 'trekking',
    difficulty: 'challenging',
    duration: 1,
  },
];

function navigateToTour(path: string) {
  const tourSlug = path.split('/').pop();
  navigateTo(localePath(`/tours/${tourSlug}`));
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
