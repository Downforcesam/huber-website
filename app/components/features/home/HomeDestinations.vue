<template>
  <section class="bg-gray-50 py-16 sm:py-24">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-6 font-bold text-gray-900 text-3xl sm:text-4xl">
          {{ t('exploreDestinations') }}
        </h2>
        <p class="mx-auto max-w-3xl text-gray-600 text-xl">
          {{ t('ancientCitadels') }}
        </p>
      </div>

      <!-- Destinations Grid -->
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <UCard
          v-for="destination in destinations.slice(0, 3)"
          :key="destination.name"
          class="group hover:shadow-xl overflow-hidden transition-all duration-300 cursor-pointer"
        >
          <template #header>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="destination.image"
                :alt="destination.name"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </template>

          <div class="p-6">
            <h3
              class="mb-3 font-bold text-gray-900 text-xl transition-colors group-hover:brand-teal"
            >
              {{ destination.name }}
            </h3>

            <p class="mb-4 text-gray-600 text-sm line-clamp-2">
              {{ destination.description }}
            </p>

            <!-- Destination Details -->
            <div class="space-y-2 mb-4 text-gray-500 text-sm">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                  <span>{{ destination.duration }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
                  <span>Peru</span>
                </div>
              </div>
            </div>

            <!-- Action Button -->
            <UButton
              color="primary"
              variant="outline"
              size="sm"
              icon="i-heroicons-arrow-right"
              trailing
              block
              class="mt-4"
            >
              Learn More
            </UButton>
          </div>
        </UCard>
      </div>

      <!-- See all destinations button -->
      <div class="flex justify-center mb-16">
        <NuxtLink
          to="/destinations"
          class="inline-flex items-center bg-brand-teal hover:bg-brand-teal-dark shadow px-6 py-3 rounded-lg font-semibold text-white transition-colors"
        >
          {{ t('seeAllDestinations') }}
          <UIcon name="i-heroicons-arrow-right" class="ml-2 w-5 h-5" />
        </NuxtLink>
      </div>

      <!-- Call to Action -->
      <div class="bg-white shadow-lg p-8 lg:p-12 rounded-2xl">
        <div class="mb-12 text-center">
          <h3 class="mb-4 font-bold text-gray-900 text-2xl lg:text-3xl">
            {{ t('whyChooseTours') }}
          </h3>
          <p class="mx-auto max-w-2xl text-gray-600 text-lg">
            {{ t('personalizedExperiences') }}
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
              <UIcon :name="feature.icon" class="w-8 h-8 brand-teal" />
            </div>
            <h4 class="mb-2 font-semibold text-gray-900 text-lg">
              {{ t(feature.translationKey) }}
            </h4>
            <p class="text-gray-600 text-sm">{{ t(feature.descriptionKey) }}</p>
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
    description:
      'Experience the magic of this UNESCO World Heritage Site. Trek through cloud forests and ancient Inca trails to reach this iconic citadel.',
    image: '/machu-picchu.jpg',
    icon: 'i-heroicons-building-library',
    badgeColor: 'warning' as const,
    features: ['UNESCO Site', 'Inca Trail', 'Guided Tour'],
    duration: '1-4 days',
  },
  {
    name: 'Sacred Valley',
    type: 'Cultural',
    description:
      'Discover ancient ruins, bustling markets, and breathtaking scenery in the Sacred Valley of the Incas.',
    image: '/sacred-valley.jpeg',
    icon: 'i-heroicons-photo',
    badgeColor: 'primary' as const,
    features: ['Pisac Market', 'Ollantaytambo', 'Local Culture'],
    duration: '1-2 days',
  },
  {
    name: 'Rainbow Mountain',
    type: 'Adventure',
    description:
      'Hike to the stunning Rainbow Mountain (Vinicunca) and witness the incredible natural colors of the Andes.',
    image: '/rainbow-mountain.jpeg',
    icon: 'i-heroicons-photo',
    badgeColor: 'error' as const,
    features: ['High Altitude', 'Colorful Peaks', 'Photography'],
    duration: '1 day',
  },
  {
    name: 'Cusco City',
    type: 'Historical',
    description:
      'Explore the former capital of the Inca Empire with its colonial architecture and rich history.',
    image: '/cusco-city.jpeg',
    icon: 'i-heroicons-building-office-2',
    badgeColor: 'primary' as const,
    features: ['Colonial Architecture', 'Inca Ruins', 'Museums'],
    duration: '1 day',
  },
  {
    name: 'Maras Salt Flats',
    type: 'Natural',
    description:
      'Visit the ancient salt mines of Maras and the mysterious agricultural terraces of Moray.',
    image: '/maras-moray.jpeg',
    icon: 'i-heroicons-squares-plus',
    badgeColor: 'info' as const,
    features: ['Salt Mines', 'Terraces', 'Local Techniques'],
    duration: '1 day',
  },
  {
    name: 'Choquequirao',
    type: 'Trekking',
    description:
      'Embark on an challenging trek to the "sister city" of Machu Picchu, less crowded but equally spectacular.',
    image: '/trekking.jpeg',
    icon: 'i-heroicons-map',
    badgeColor: 'warning' as const,
    features: ['Multi-day Trek', 'Remote Location', 'Archaeological Site'],
    duration: '4-7 days',
  },
];

const features = [
  {
    name: 'Expert Guides',
    translationKey: 'expertGuides',
    descriptionKey: 'localKnowledge',
    icon: 'i-heroicons-academic-cap',
  },
  {
    name: 'Small Groups',
    translationKey: 'smallGroups',
    descriptionKey: 'intimateGroupSizes',
    icon: 'i-heroicons-user-group',
  },
  {
    name: 'Authentic Experiences',
    translationKey: 'authenticExperiences',
    descriptionKey: 'connectWithCommunities',
    icon: 'i-heroicons-heart',
  },
  {
    name: 'Safety First',
    translationKey: 'safetyFirst',
    descriptionKey: 'safetyCoverage',
    icon: 'i-heroicons-shield-check',
  },
];
</script>
