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
      <div
        class="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8"
      >
        <NuxtLink
          v-for="destination in props.destinations"
          :key="destination.slug"
          :to="localePath(`/destinations/${destination.slug}`)"
          class="group flex flex-col h-full cursor-pointer"
        >
          <UCard class="flex flex-col h-full">
            <template #header>
              <!-- Destination image -->
              <div
                class="relative bg-gray-200 h-64 sm:h-72 overflow-hidden group-hover:scale-105 transition-transform duration-300"
              >
                <NuxtImg
                  :src="destination.thumbnail"
                  :alt="destination.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <!-- Gradient overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                ></div>

                <!-- Destination info overlay -->
                <div class="bottom-4 left-4 absolute text-white">
                  <h3 class="mb-1 font-bold text-xl sm:text-2xl">
                    {{ destination.title }}
                  </h3>
                  <p class="text-gray-200 text-sm">Peru</p>
                </div>
              </div>
            </template>

            <!-- Content -->
            <div class="flex flex-col flex-1 p-6">
              <p class="mb-4 text-gray-600 text-sm line-clamp-3">
                {{ destination.summary }}
              </p>

              <!-- Key info -->
              <div class="gap-4 grid grid-cols-2 mb-4 text-sm">
                <div>
                  <span class="text-gray-500">{{ t('elevation') }}:</span>
                  <span class="ml-1 font-medium">{{
                    destination.elevation
                  }}</span>
                </div>
                <div>
                  <span class="text-gray-500">{{ t('region') }}:</span>
                  <span class="ml-1 font-medium">Peru</span>
                </div>
              </div>

              <!-- Highlights -->
              <div v-if="destination.highlights" class="mb-4">
                <h4 class="mb-2 font-semibold text-gray-700 text-sm">
                  {{ t('highlights') }}:
                </h4>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="highlight in destination.highlights?.slice(0, 3)"
                    :key="highlight"
                    class="inline-block bg-blue-100 px-2 py-1 rounded-full text-blue-800 text-xs"
                  >
                    {{ highlight }}
                  </span>
                  <span
                    v-if="destination.highlights?.length > 3"
                    class="inline-block bg-gray-100 px-2 py-1 rounded-full text-gray-600 text-xs"
                  >
                    +{{ destination.highlights.length - 3 }} {{ t('more') }}
                  </span>
                </div>
              </div>

              <!-- Activities -->
              <div v-if="destination.activities" class="mb-4">
                <h4 class="mb-2 font-semibold text-gray-700 text-sm">
                  {{ t('activities') }}:
                </h4>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="activity in destination.activities?.slice(0, 2)"
                    :key="activity"
                    class="inline-block bg-green-100 px-2 py-1 rounded-full text-green-800 text-xs"
                  >
                    {{ activity }}
                  </span>
                  <span
                    v-if="destination.activities?.length > 2"
                    class="inline-block bg-gray-100 px-2 py-1 rounded-full text-gray-600 text-xs"
                  >
                    +{{ destination.activities.length - 2 }} {{ t('more') }}
                  </span>
                </div>
              </div>

              <!-- CTA -->
              <div
                class="flex items-center mt-auto font-medium text-blue-600 group-hover:text-blue-700 text-sm"
              >
                {{ t('exploreDestination') }}
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
        </NuxtLink>
      </div>

      <!-- See all destinations button -->
      <div class="flex justify-center mb-16">
        <NuxtLink
          to="/destinations"
          class="inline-flex items-center bg-brand-teal hover:bg-brand-teal/80 shadow px-6 py-3 rounded-lg font-semibold text-white transition-colors"
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
const localePath = useLocalePath();

// Accept destinations as prop instead of fetching internally
interface Props {
  destinations?: any[];
}

const props = withDefaults(defineProps<Props>(), {
  destinations: () => [],
});

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
