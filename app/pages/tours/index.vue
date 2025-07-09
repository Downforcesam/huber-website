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
              <option
                v-for="category in availableCategories"
                :key="category.value"
                :value="category.value"
              >
                {{ category.label }}
              </option>
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
              <option
                v-for="duration in availableDurations"
                :key="duration.value"
                :value="duration.value"
              >
                {{ duration.label }}
              </option>
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
              <option
                v-for="difficulty in availableDifficulties"
                :key="difficulty.value"
                :value="difficulty.value"
              >
                {{ difficulty.label }}
              </option>
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
      <div
        class="gap-4 sm:gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="tour in filteredTours"
          :key="tour._id"
          class="group relative flex flex-col bg-white shadow-sm hover:shadow-md border border-gray-200 rounded-xl overflow-hidden transition-shadow duration-300"
        >
          <NuxtLink :to="localePath(`/tours/${tour.slug}`)" class="block">
            <!-- Mobile-optimized image container -->
            <div
              class="relative bg-gray-200 group-hover:opacity-90 h-48 sm:h-56 lg:h-64 transition-opacity duration-300"
            >
              <NuxtImg
                :src="tour.featuredImage || tour.thumbnail"
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
              <!-- Price badge -->
              <div class="top-2 right-2 absolute">
                <span
                  class="inline-flex items-center bg-green-100 px-2 py-1 rounded-full font-medium text-green-800 text-xs"
                >
                  ${{ tour.price }}
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

              <!-- Description -->
              <p class="mb-3 text-gray-600 text-sm line-clamp-2">
                {{ tour.description }}
              </p>

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
                    {{ tour.duration }}
                    {{ tour.duration === 1 ? $t('day') : $t('days') }}
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {{ tour.groupSize }}
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {{ tour.bestTime }}
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
      <div v-if="filteredTours.length === 0" class="py-12 text-center">
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
    </div>
  </div>
</template>

<script setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();

// Filter state
const selectedCategory = ref('');
const selectedDuration = ref('');
const selectedDifficulty = ref('');

// Reactive collection name based on current locale
const collectionName = computed(() =>
  locale.value === 'es' ? 'esTours' : 'enTours'
);

// Fetch tours using new Nuxt Content v3 API with unique cache key per language
const { data: tours } = await useAsyncData(
  () => `tours-${locale.value}`,
  () => queryCollection(collectionName.value).all()
);

// Dynamic filter options based on current data
const availableCategories = computed(() => {
  if (!tours.value) return [];

  // Normalize and map all possible variants to a single logical category key
  const categoryMap = {
    trekking: t('trekking'),
    senderismo: t('trekking'),
    'city tour': t('cityTour'),
    ciudad: t('cityTour'),
    'tour ciudad': t('cityTour'),
  };

  // Use a Set to deduplicate by logical key
  const seen = new Set();
  return tours.value
    .map((tour) => {
      // Normalize: lowercase, trim
      const raw = (tour.category || '').toLowerCase().trim();
      // Map to logical key
      let key = raw;
      if (raw === 'senderismo' || raw === 'trekking') key = 'trekking';
      if (raw === 'city tour' || raw === 'ciudad' || raw === 'tour ciudad')
        key = 'cityTour';
      return {
        value: key,
        label: categoryMap[key] || tour.category,
      };
    })
    .filter((cat) => {
      if (seen.has(cat.value)) return false;
      seen.add(cat.value);
      return true;
    });
});

const availableDurations = computed(() => [
  { value: '1', label: t('fullDay') },
  { value: '2-3', label: `2-3 ${t('days')}` },
  { value: '4-7', label: `4-7 ${t('days')}` },
  { value: '8+', label: `8+ ${t('days')}` },
]);

const availableDifficulties = computed(() => {
  if (!tours.value) return [];

  const difficulties = [...new Set(tours.value.map((tour) => tour.difficulty))];
  return difficulties.map((difficulty) => ({
    value: difficulty,
    label:
      difficulty === 'Easy' || difficulty === 'Fácil'
        ? t('easy')
        : difficulty === 'Moderate' || difficulty === 'Moderado'
          ? t('moderate')
          : difficulty === 'Challenging' || difficulty === 'Desafiante'
            ? t('challenging')
            : difficulty,
  }));
});

// Computed property for filtered tours
const filteredTours = computed(() => {
  if (!tours.value) return [];

  // Helper to normalize values
  const normalize = (val) => (val || '').toLowerCase().trim();

  // Use a Map to deduplicate by unique tour _id
  const uniqueTours = new Map();

  for (const tour of tours.value) {
    // Normalize tour fields
    const tourCategory = normalize(tour.category);
    const tourDifficulty = normalize(tour.difficulty);
    const tourDuration = tour.duration;

    // Normalize selected filters
    const selectedCat = normalize(selectedCategory.value);
    const selectedDiff = normalize(selectedDifficulty.value);
    const selectedDur = selectedDuration.value;

    // Category filter logic (empty means 'all')
    let categoryMatch = true;
    if (selectedCat) {
      if (selectedCat === 'trekking') {
        categoryMatch =
          tourCategory === 'trekking' || tourCategory === 'senderismo';
      } else if (selectedCat === 'citytour' || selectedCat === 'city tour') {
        categoryMatch = ['city tour', 'ciudad', 'tour ciudad'].includes(
          tourCategory
        );
      } else {
        categoryMatch = tourCategory === selectedCat;
      }
    }

    // Difficulty filter logic
    let difficultyMatch = true;
    if (selectedDiff) {
      if (selectedDiff === 'easy' || selectedDiff === 'fácil') {
        difficultyMatch =
          tourDifficulty === 'easy' || tourDifficulty === 'fácil';
      } else if (selectedDiff === 'moderate' || selectedDiff === 'moderado') {
        difficultyMatch =
          tourDifficulty === 'moderate' || tourDifficulty === 'moderado';
      } else if (
        selectedDiff === 'challenging' ||
        selectedDiff === 'desafiante'
      ) {
        difficultyMatch =
          tourDifficulty === 'challenging' || tourDifficulty === 'desafiante';
      } else {
        difficultyMatch = tourDifficulty === selectedDiff;
      }
    }

    // Duration filter logic
    let durationMatch = true;
    if (selectedDur) {
      if (selectedDur === '1') durationMatch = tourDuration === 1;
      else if (selectedDur === '2-3')
        durationMatch = tourDuration >= 2 && tourDuration <= 3;
      else if (selectedDur === '4-7')
        durationMatch = tourDuration >= 4 && tourDuration <= 7;
      else if (selectedDur === '8+') durationMatch = tourDuration >= 8;
    }

    // Only add if all filters match
    if (categoryMatch && difficultyMatch && durationMatch) {
      uniqueTours.set(tour._id || tour.slug, tour);
    }
  }

  return Array.from(uniqueTours.values());
});

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
