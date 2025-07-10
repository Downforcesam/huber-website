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
        class="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="tour in filteredTours"
          :key="tour._id"
          class="group relative bg-white shadow-sm hover:shadow-lg rounded-xl overflow-hidden transition-shadow duration-300"
        >
          <NuxtLink :to="localePath(`/tours/${tour.slug}`)" class="block">
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
                    tour.category === 'City Tour' ||
                    tour.category === 'Tour Ciudad'
                      ? t('cityTour')
                      : tour.category === 'Trekking' ||
                          tour.category === 'Senderismo'
                        ? t('trekking')
                        : tour.category
                  }}
                </p>
              </div>

              <!-- Price badge -->
              <div class="top-4 right-4 absolute">
                <span
                  class="bg-brand-teal/90 backdrop-blur-sm px-3 py-1 rounded-full font-medium text-white text-sm"
                >
                  ${{ tour.price }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <p class="mb-4 text-gray-600 text-sm sm:text-base line-clamp-3">
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
                    tour.difficulty === 'Easy' || tour.difficulty === 'Fácil'
                      ? t('easy')
                      : tour.difficulty === 'Moderate' ||
                          tour.difficulty === 'Moderado'
                        ? t('moderate')
                        : tour.difficulty === 'Challenging' ||
                            tour.difficulty === 'Desafiante'
                          ? t('challenging')
                          : tour.difficulty === 'Expert' ||
                              tour.difficulty === 'Experto'
                            ? t('expert')
                            : tour.difficulty
                  }}</span>
                </div>
              </div>

              <!-- Tour details -->
              <div class="mb-4">
                <h4 class="mb-2 font-semibold text-gray-700 text-sm">
                  {{ t('groupSize') }}:
                </h4>
                <div class="flex flex-wrap gap-1">
                  <span
                    class="inline-block bg-blue-100 px-2 py-1 rounded-full text-blue-800 text-xs"
                  >
                    {{ tour.groupSize }}
                  </span>
                </div>
              </div>

              <!-- Best time -->
              <div class="mb-4">
                <h4 class="mb-2 font-semibold text-gray-700 text-sm">
                  {{ t('bestTime') }}:
                </h4>
                <div class="flex flex-wrap gap-1">
                  <span
                    class="inline-block bg-green-100 px-2 py-1 rounded-full text-green-800 text-xs"
                  >
                    {{ tour.bestTime }}
                  </span>
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
            : difficulty === 'Expert' || difficulty === 'Experto'
              ? t('expert')
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
