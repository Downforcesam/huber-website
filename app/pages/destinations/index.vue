<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Page header -->
    <div class="bg-white shadow-sm border-b">
      <div class="mx-auto px-4 py-8 sm:py-12 container">
        <div class="text-center">
          <h1
            class="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl"
          >
            {{ $t('destinations') }}
          </h1>
          <p class="mx-auto max-w-3xl text-gray-600 text-lg sm:text-xl">
            {{ $t('destinationsDescription') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Destinations grid -->
    <div class="mx-auto px-4 py-12 sm:py-16 container">
      <div
        class="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="destination in destinations"
          :key="destination._id"
          class="group relative bg-white shadow-sm hover:shadow-lg rounded-xl overflow-hidden transition-shadow duration-300"
        >
          <NuxtLink
            :to="localePath(`/destinations/${destination.slug}`)"
            class="block"
          >
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
                <p class="text-gray-200 text-sm">
                  {{ destination.location?.region
                  }}<span v-if="destination.location?.country"
                    >, {{ destination.location.country }}</span
                  >
                </p>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <p class="mb-4 text-gray-600 text-sm sm:text-base line-clamp-3">
                {{ destination.description }}
              </p>

              <!-- Key info -->
              <div class="gap-4 grid grid-cols-2 mb-4 text-sm">
                <div>
                  <span class="text-gray-500">{{ $t('elevation') }}:</span>
                  <span class="ml-1 font-medium">{{
                    destination.elevation
                  }}</span>
                </div>
                <div>
                  <span class="text-gray-500">{{ $t('bestTime') }}:</span>
                  <span class="ml-1 font-medium">{{
                    destination.bestTimeToVisit || destination.bestTime
                  }}</span>
                </div>
              </div>

              <!-- Highlights -->
              <div class="mb-4">
                <h4 class="mb-2 font-semibold text-gray-700 text-sm">
                  {{ $t('highlights') }}:
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
                    +{{ destination.highlights.length - 3 }} {{ $t('more') }}
                  </span>
                </div>
              </div>

              <!-- Activities -->
              <div class="mb-4">
                <h4 class="mb-2 font-semibold text-gray-700 text-sm">
                  {{ $t('activities') }}:
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
                    +{{ destination.activities.length - 2 }} {{ $t('more') }}
                  </span>
                </div>
              </div>

              <!-- CTA -->
              <div
                class="flex items-center font-medium text-blue-600 group-hover:text-blue-700 text-sm"
              >
                {{ $t('exploreDestination') }}
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
          </NuxtLink>
        </div>
      </div>

      <!-- Empty state -->
      <div
        v-if="!destinations || destinations.length === 0"
        class="py-12 text-center"
      >
        <div class="mb-4 text-gray-400">
          <svg
            class="mx-auto w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h3 class="mb-2 font-medium text-gray-900 text-lg">
          {{ $t('noDestinationsFound') }}
        </h3>
        <p class="text-gray-600">{{ $t('destinationsComingSoon') }}</p>
      </div>
    </div>

    <!-- CTA section -->
    <div class="bg-gradient-to-r from-blue-900 to-teal-800 text-white">
      <div class="mx-auto px-4 py-12 sm:py-16 container">
        <div class="text-center">
          <h2 class="mb-4 font-bold text-2xl sm:text-3xl">
            {{ $t('planYourJourney') }}
          </h2>
          <p class="mx-auto mb-8 max-w-2xl text-blue-100 text-lg">
            {{ $t('planYourJourneyText') }}
          </p>
          <div class="flex sm:flex-row flex-col justify-center gap-4">
            <NuxtLink
              to="/custom-tour"
              class="inline-flex justify-center items-center bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-lg font-semibold text-gray-900 transition-colors"
            >
              {{ $t('createCustomTour') }}
            </NuxtLink>
            <NuxtLink
              to="/tours"
              class="inline-flex justify-center items-center hover:bg-white px-8 py-4 border border-white rounded-lg font-semibold text-white hover:text-gray-900 transition-colors"
            >
              {{ $t('browseTours') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();

// Reactive collection name based on current locale
const collectionName = computed(() =>
  locale.value === 'es' ? 'esDestinations' : 'enDestinations'
);

// Fetch destinations using new Nuxt Content v3 API with unique cache key per language
const { data: destinations } = await useAsyncData(
  () => `destinations-${locale.value}`,
  () => queryCollection(collectionName.value).all()
);

// SEO
useHead({
  title: 'Destinations - Peru Excursions',
  meta: [
    {
      name: 'description',
      content:
        'Discover the most beautiful destinations in Peru. From the ancient citadel of Machu Picchu to the colorful Rainbow Mountain, explore the wonders of the Andes.',
    },
  ],
});
</script>
