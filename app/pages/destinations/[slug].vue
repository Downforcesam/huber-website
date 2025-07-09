<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero section -->
    <div class="relative bg-white">
      <div class="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <NuxtImg
          :src="destination?.featuredImage"
          :alt="destination?.title"
          class="w-full h-full object-cover"
        />
        <!-- Gradient overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        ></div>

        <!-- Hero content -->
        <div class="right-6 bottom-6 left-6 absolute text-white">
          <div class="mb-2">
            <span
              class="inline-flex items-center bg-blue-100 px-3 py-1 rounded-full font-medium text-blue-800 text-sm"
            >
              {{ destination?.location }}
            </span>
          </div>
          <h1 class="mb-2 font-bold text-3xl sm:text-4xl lg:text-5xl">
            {{ destination?.title }}
          </h1>
          <p class="text-gray-200 text-lg">
            {{ destination?.location }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="mx-auto px-4 py-8 container">
      <div class="lg:gap-8 lg:grid lg:grid-cols-3">
        <!-- Main content -->
        <div class="lg:col-span-2">
          <!-- Description -->
          <div class="bg-white shadow-sm mb-6 p-6 rounded-lg">
            <h2 class="mb-4 font-bold text-gray-900 text-2xl">
              {{ $t('about') }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ destination?.longDescription }}
            </p>
          </div>

          <!-- Highlights -->
          <div class="bg-white shadow-sm mb-6 p-6 rounded-lg">
            <h2 class="mb-4 font-bold text-gray-900 text-2xl">
              {{ $t('highlights') }}
            </h2>
            <div class="gap-3 grid sm:grid-cols-2">
              <div
                v-for="highlight in destination?.highlights"
                :key="highlight"
                class="flex items-center text-gray-700"
              >
                <svg
                  class="flex-shrink-0 mr-3 w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {{ highlight }}
              </div>
            </div>
          </div>

          <!-- Activities -->
          <div class="bg-white shadow-sm mb-6 p-6 rounded-lg">
            <h2 class="mb-4 font-bold text-gray-900 text-2xl">
              {{ $t('activities') }}
            </h2>
            <div class="gap-3 grid sm:grid-cols-2">
              <div
                v-for="activity in destination?.activities"
                :key="activity"
                class="flex items-center text-gray-700"
              >
                <svg
                  class="flex-shrink-0 mr-3 w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {{ activity }}
              </div>
            </div>
          </div>

          <!-- Cultural Sites -->
          <div
            v-if="destination?.culturalSites"
            class="bg-white shadow-sm mb-6 p-6 rounded-lg"
          >
            <h2 class="mb-4 font-bold text-gray-900 text-2xl">
              {{ $t('culturalSites') }}
            </h2>
            <div class="gap-3 grid sm:grid-cols-2">
              <div
                v-for="site in destination.culturalSites"
                :key="site"
                class="flex items-center text-gray-700"
              >
                <svg
                  class="flex-shrink-0 mr-3 w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                {{ site }}
              </div>
            </div>
          </div>

          <!-- Travel Tips -->
          <div class="bg-white shadow-sm mb-6 p-6 rounded-lg">
            <h2 class="mb-4 font-bold text-gray-900 text-2xl">
              {{ $t('travelTips') }}
            </h2>
            <div class="space-y-3">
              <div
                v-for="tip in destination?.travelTips"
                :key="tip"
                class="flex items-start text-gray-700"
              >
                <svg
                  class="flex-shrink-0 mt-0.5 mr-3 w-5 h-5 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {{ tip }}
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Quick info -->
          <div class="bg-white shadow-sm mb-6 p-6 rounded-lg">
            <h3 class="mb-4 font-bold text-gray-900 text-xl">
              {{ $t('quickInfo') }}
            </h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">{{ $t('elevation') }}:</span>
                <span class="font-medium">{{ destination?.elevation }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">{{ $t('climate') }}:</span>
                <span class="font-medium">{{ destination?.climate }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">{{ $t('bestTime') }}:</span>
                <span class="font-medium">{{ destination?.bestTime }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">{{ $t('accessibility') }}:</span>
                <span class="font-medium">{{
                  destination?.additionalInfo?.accessibility
                }}</span>
              </div>
            </div>
          </div>

          <!-- Getting There -->
          <div
            v-if="destination?.gettingThere"
            class="bg-white shadow-sm mb-6 p-6 rounded-lg"
          >
            <h3 class="mb-4 font-bold text-gray-900 text-xl">
              {{ $t('gettingThere') }}
            </h3>
            <div class="space-y-3">
              <div>
                <span class="text-gray-600">{{ $t('fromCusco') }}:</span>
                <p class="font-medium">
                  {{ destination.gettingThere.fromCusco }}
                </p>
              </div>
              <div>
                <span class="text-gray-600">{{ $t('duration') }}:</span>
                <p class="font-medium">
                  {{ destination.gettingThere.duration }}
                </p>
              </div>
              <div>
                <span class="text-gray-600">{{ $t('transportation') }}:</span>
                <ul class="mt-1">
                  <li
                    v-for="transport in destination.gettingThere.transportation"
                    :key="transport"
                    class="text-sm"
                  >
                    • {{ transport }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Related tours -->
          <div class="bg-white shadow-sm mb-6 p-6 rounded-lg">
            <h3 class="mb-4 font-bold text-gray-900 text-xl">
              {{ $t('relatedTours') }}
            </h3>
            <div class="space-y-3">
              <NuxtLink
                v-for="tour in relatedTours"
                :key="tour._id"
                :to="localePath(`/tours/${tour.slug}`)"
                class="block hover:bg-blue-50 p-3 border border-gray-200 hover:border-blue-300 rounded-lg transition-colors"
              >
                <h4 class="mb-1 font-medium text-gray-900">
                  {{ tour.title }}
                </h4>
                <div class="flex justify-between text-gray-600 text-sm">
                  <span
                    >{{ tour.duration }}
                    {{ tour.duration === 1 ? $t('day') : $t('days') }}</span
                  >
                  <span>${{ tour.price }}</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- CTA -->
          <div
            class="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white"
          >
            <h3 class="mb-3 font-bold text-xl">
              {{ $t('readyToExplore') }}
            </h3>
            <p class="mb-4 text-blue-100">
              {{ $t('readyToExploreText') }}
            </p>
            <div class="space-y-3">
              <NuxtLink
                to="/tours"
                class="block bg-white hover:bg-gray-100 px-4 py-3 rounded-lg w-full font-semibold text-blue-600 text-center transition-colors"
              >
                {{ $t('browseTours') }}
              </NuxtLink>
              <NuxtLink
                to="/custom-tour"
                class="block hover:bg-white px-4 py-3 border border-white rounded-lg w-full font-semibold text-white hover:text-blue-600 text-center transition-colors"
              >
                {{ $t('createCustomTour') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { slug } = useRoute().params;
const { locale } = useI18n();
const localePath = useLocalePath();

// Reactive collection names based on current locale
const destinationCollectionName = computed(() =>
  locale.value === 'es' ? 'esDestinations' : 'enDestinations'
);
const toursCollectionName = computed(() =>
  locale.value === 'es' ? 'esTours' : 'enTours'
);

// Get destination data using new Nuxt Content v3 API with unique cache key per language
const { data: destination } = await useAsyncData(
  () => `destination-${slug}-${locale.value}`,
  () =>
    queryCollection(destinationCollectionName.value)
      .where('slug', '==', slug)
      .first()
);

// Get related tours using new Nuxt Content v3 API with unique cache key per language
const { data: allTours } = await useAsyncData(
  () => `tours-for-destination-${locale.value}`,
  () => queryCollection(toursCollectionName.value).all()
);

// Get related tours
const relatedTours = computed(() => {
  if (!destination.value || !allTours.value) return [];
  return allTours.value
    .filter((tour) => tour.destinations?.includes(destination.value.slug))
    .slice(0, 3);
});

// Handle 404
if (!destination.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Destination Not Found',
    fatal: true,
  });
}

// SEO
useHead({
  title: `${destination.value.title} - Peru Excursions`,
  meta: [
    {
      name: 'description',
      content: destination.value.description,
    },
  ],
});
</script>
