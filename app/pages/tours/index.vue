<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Mobile-first page header -->
    <div class="bg-white shadow-sm border-b">
      <div class="mx-auto px-4 py-6 sm:py-8 container">
        <div class="text-center">
          <h1
            class="mb-2 font-bold text-gray-900 text-2xl sm:text-3xl lg:text-4xl"
          >
            {{ $t('tours') }}
          </h1>
          <p class="mx-auto max-w-2xl text-gray-600 text-sm sm:text-base">
            {{ $t('toursDescription') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Mobile-first filter section -->
    <div class="mx-auto px-4 py-6 container">
      <div class="bg-white shadow-sm mb-6 p-4 rounded-lg">
        <div class="flex sm:flex-row flex-col gap-4">
          <!-- Category filter -->
          <div class="flex-1">
            <label class="block mb-2 font-medium text-gray-700 text-sm">
              {{ $t('category') }}
            </label>
            <select
              v-model="selectedCategory"
              class="px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">{{ $t('allCategories') }}</option>
              <option value="Trekking">{{ $t('trekking') }}</option>
              <option value="City Tour">{{ $t('cityTour') }}</option>
            </select>
          </div>

          <!-- Duration filter -->
          <div class="flex-1">
            <label class="block mb-2 font-medium text-gray-700 text-sm">
              {{ $t('duration') }}
            </label>
            <select
              v-model="selectedDuration"
              class="px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">{{ $t('allDurations') }}</option>
              <option value="1">{{ $t('halfDay') }}</option>
              <option value="1">{{ $t('fullDay') }}</option>
              <option value="2-3">2-3 {{ $t('days') }}</option>
              <option value="4-7">4-7 {{ $t('days') }}</option>
              <option value="8+">8+ {{ $t('days') }}</option>
            </select>
          </div>

          <!-- Difficulty filter -->
          <div class="flex-1">
            <label class="block mb-2 font-medium text-gray-700 text-sm">
              {{ $t('difficulty') }}
            </label>
            <select
              v-model="selectedDifficulty"
              class="px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">{{ $t('allDifficulties') }}</option>
              <option value="easy">{{ $t('easy') }}</option>
              <option value="moderate">{{ $t('moderate') }}</option>
              <option value="challenging">{{ $t('challenging') }}</option>
              <option value="expert">{{ $t('expert') }}</option>
            </select>
          </div>
        </div>

        <!-- Clear filters button -->
        <div class="flex justify-center mt-4">
          <button
            @click="clearFilters"
            class="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm transition-colors"
          >
            {{ $t('clearFilters') }}
          </button>
        </div>
      </div>

      <!-- Tours grid -->
      <ContentList :path="`/${locale}/tours`" v-slot="{ list }" :deep="true">
        <div
          class="gap-4 sm:gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="tour in filteredTours(list)"
            :key="tour.id"
            class="group relative flex flex-col bg-white shadow-sm hover:shadow-md border border-gray-200 rounded-xl overflow-hidden transition-shadow duration-300"
          >
            <NuxtLink :to="localePath(`/tours/${tour.slug}`)" class="block">
              <!-- Mobile-optimized image container -->
              <div
                class="relative bg-gray-200 group-hover:opacity-90 h-48 sm:h-56 lg:h-64 transition-opacity duration-300"
              >
                <NuxtImg
                  :src="tour.thumbnail"
                  :alt="tour.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <!-- Mobile-friendly overlay with category -->
                <div class="top-2 left-2 absolute">
                  <span
                    class="inline-flex items-center bg-blue-100 px-2 py-1 rounded-full font-medium text-blue-800 text-xs"
                  >
                    {{ tour.category }}
                  </span>
                </div>
              </div>

              <!-- Mobile-optimized content -->
              <div class="flex flex-col flex-1 p-4 sm:p-5">
                <h3
                  class="mb-2 font-semibold text-gray-900 text-lg sm:text-xl line-clamp-2"
                >
                  {{ tour.title }}
                </h3>

                <!-- Mobile-friendly tour details -->
                <div class="flex flex-col space-y-2 mb-3 text-gray-600 text-sm">
                  <div class="flex justify-between items-center">
                    <span class="flex items-center">
                      <svg
                        class="mr-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {{ tour.duration }} {{ $t('days') }}
                    </span>
                    <span class="flex items-center">
                      <svg
                        class="mr-1 w-4 h-4"
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
                      {{ tour.difficulty }}
                    </span>
                  </div>
                </div>

                <!-- Mobile-friendly CTA -->
                <div class="mt-auto">
                  <span
                    class="inline-flex items-center font-medium text-blue-600 group-hover:text-blue-700 text-sm"
                  >
                    {{ $t('viewDetails') }}
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
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredTours(list).length === 0" class="py-12 text-center">
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
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 class="mb-2 font-medium text-gray-900 text-lg">
            {{ $t('noToursFound') }}
          </h3>
          <p class="text-gray-600">{{ $t('tryDifferentFilters') }}</p>
        </div>
      </ContentList>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();

// Filter state
const selectedCategory = ref('');
const selectedDuration = ref('');
const selectedDifficulty = ref('');

// Filter function
const filteredTours = (tours) => {
  return tours.filter((tour) => {
    if (selectedCategory.value && tour.category !== selectedCategory.value)
      return false;
    if (
      selectedDuration.value &&
      !matchesDuration(tour.duration, selectedDuration.value)
    )
      return false;
    if (
      selectedDifficulty.value &&
      tour.difficulty.toLowerCase() !== selectedDifficulty.value
    )
      return false;
    return true;
  });
};

// Helper function to match duration ranges
const matchesDuration = (tourDuration, filterDuration) => {
  if (filterDuration === '1') return tourDuration === 1;
  if (filterDuration === '2-3') return tourDuration >= 2 && tourDuration <= 3;
  if (filterDuration === '4-7') return tourDuration >= 4 && tourDuration <= 7;
  if (filterDuration === '8+') return tourDuration >= 8;
  return true;
};

// Clear all filters
const clearFilters = () => {
  selectedCategory.value = '';
  selectedDuration.value = '';
  selectedDifficulty.value = '';
};

// SEO
useHead({
  title: 'Tours - Peru Excursions',
  meta: [
    {
      name: 'description',
      content:
        'Discover our amazing tours in Peru. From trekking adventures to cultural experiences, find the perfect tour for your next adventure.',
    },
  ],
});
</script>
