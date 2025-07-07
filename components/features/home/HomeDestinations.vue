<template>
  <section id="destinations" class="bg-gray-50 py-16 lg:py-24">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2
          class="mb-6 font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl"
        >
          {{ t('destinationsTitle') }}
          <span class="text-primary-600">{{
            t('destinationsTitleHighlight')
          }}</span>
        </h2>
        <p class="mx-auto max-w-3xl text-gray-600 text-xl">
          {{ t('destinationsSubtitle') }}
        </p>
      </div>

      <!-- Destinations Grid -->
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <UCard
          v-for="destination in destinations"
          :key="destination.name"
          class="group hover:shadow-xl transition-all hover:-translate-y-2 duration-300 transform"
        >
          <template #header>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="destination.image"
                :alt="destination.name"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </template>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <UIcon
                :name="destination.icon"
                class="w-5 h-5 text-primary-600"
              />
              <h3
                class="font-bold text-gray-900 group-hover:text-primary-600 text-xl transition-colors"
              >
                {{ destination.name }}
              </h3>
            </div>

            <p class="mb-4 text-gray-600 line-clamp-3">
              {{ destination.description }}
            </p>

            <div class="flex justify-between items-center">
              <div class="flex items-center gap-1 text-gray-500 text-sm">
                <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                <span>{{ destination.duration }}</span>
              </div>

              <UButton
                size="sm"
                color="primary"
                variant="outline"
                icon="i-heroicons-arrow-right"
                trailing
              >
                {{ t('learnMore') }}
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Additional Features -->
      <div class="bg-white shadow-lg p-8 lg:p-12 rounded-2xl">
        <div class="mb-12 text-center">
          <h3 class="mb-4 font-bold text-gray-900 text-2xl lg:text-3xl">
            {{ t('whyChooseOurTours') }}
          </h3>
          <p class="mx-auto max-w-2xl text-gray-600 text-lg">
            {{ t('whyChooseOurToursDesc') }}
          </p>
        </div>

        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="group text-center"
          >
            <div
              class="inline-flex justify-center items-center bg-primary-100 group-hover:bg-primary-200 mb-4 rounded-full w-16 h-16 transition-colors"
            >
              <UIcon :name="feature.icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h4 class="mb-2 font-semibold text-gray-900 text-lg">
              {{ feature.name }}
            </h4>
            <p class="text-gray-600 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const destinations = [
  {
    name: 'Machu Picchu',
    type: 'Archaeological',
    description: t('machuPicchuDesc'),
    image: '/machu-picchu.jpg',
    icon: 'i-heroicons-building-library',
    badgeColor: 'warning' as const,
    features: ['UNESCO Site', 'Inca Trail', 'Guided Tour'],
    duration: '1-4 days',
  },
  {
    name: 'Sacred Valley',
    type: 'Cultural',
    description: t('sacredValleyDesc'),
    image: '/sacred-valley.jpeg',
    icon: 'i-heroicons-photo',
    badgeColor: 'success' as const,
    features: ['Pisac Market', 'Ollantaytambo', 'Local Culture'],
    duration: '1-2 days',
  },
  {
    name: 'Rainbow Mountain',
    type: 'Adventure',
    description: t('rainbowMountainDesc'),
    image: '/rainbow-mountain.jpeg',
    icon: 'i-heroicons-photo',
    badgeColor: 'error' as const,
    features: ['High Altitude', 'Colorful Peaks', 'Photography'],
    duration: '1 day',
  },
  {
    name: 'Cusco City',
    type: 'Historical',
    description: t('cuscoCityDesc'),
    image: '/cusco-city.jpeg',
    icon: 'i-heroicons-building-office-2',
    badgeColor: 'primary' as const,
    features: ['Colonial Architecture', 'Inca Ruins', 'Museums'],
    duration: '1 day',
  },
  {
    name: 'Maras Salt Flats',
    type: 'Natural',
    description: t('marasSaltFlatsDesc'),
    image: '/maras-moray.jpeg',
    icon: 'i-heroicons-squares-plus',
    badgeColor: 'info' as const,
    features: ['Salt Mines', 'Terraces', 'Local Techniques'],
    duration: '1 day',
  },
  {
    name: 'Choquequirao',
    type: 'Trekking',
    description: t('choquequiraoDesc'),
    image: '/trekking.jpeg',
    icon: 'i-heroicons-map',
    badgeColor: 'warning' as const,
    features: ['Multi-day Trek', 'Remote Location', 'Archaeological Site'],
    duration: '4-7 days',
  },
];

const features = [
  {
    name: t('expertGuides'),
    description: t('expertGuidesDesc'),
    icon: 'i-heroicons-academic-cap',
  },
  {
    name: t('smallGroups'),
    description: t('smallGroupsDesc'),
    icon: 'i-heroicons-user-group',
  },
  {
    name: t('authenticExperiences'),
    description: t('authenticExperiencesDesc'),
    icon: 'i-heroicons-heart',
  },
  {
    name: t('safetyFirst'),
    description: t('safetyFirstDesc'),
    icon: 'i-heroicons-shield-check',
  },
];
</script>
