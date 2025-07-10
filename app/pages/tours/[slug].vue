<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gray-900">
      <div class="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <NuxtImg
          :src="tour?.heroImage || tour?.thumbnail || '/landscape.jpeg'"
          :alt="tour?.title"
          class="w-full h-full object-cover"
        />
        <!-- Gradient overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        ></div>

        <!-- Hero content -->
        <div class="absolute inset-0 flex items-end">
          <div class="p-6 sm:p-8 lg:p-12 w-full">
            <div class="flex flex-wrap items-center gap-2 mb-4">
              <span
                class="inline-flex items-center bg-brand-teal/90 px-3 py-1 rounded-full font-medium text-white text-sm"
              >
                {{ tour?.category }}
              </span>
              <span
                class="inline-flex items-center bg-brand-gold/90 px-3 py-1 rounded-full font-medium text-white text-sm"
              >
                {{ tour?.duration }} {{ t('days') }}
              </span>
              <span
                class="inline-flex items-center bg-white/20 px-3 py-1 rounded-full font-medium text-white text-sm"
              >
                {{ t(tour?.difficulty?.toLowerCase()) }}
              </span>
            </div>
            <h1
              class="mb-4 font-bold text-white text-3xl sm:text-4xl lg:text-5xl"
            >
              {{ tour?.title }}
            </h1>
            <p class="max-w-2xl text-gray-200 text-lg leading-relaxed">
              {{ tour?.summary }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats Bar -->
    <section class="bg-white border-gray-200 border-b">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="gap-4 grid grid-cols-2 sm:grid-cols-4 py-4 text-center">
          <div>
            <div class="font-bold text-brand-teal text-2xl">
              {{ tour?.duration }}
            </div>
            <div class="text-gray-600 text-sm">{{ t('days') }}</div>
          </div>
          <div>
            <div class="font-bold text-brand-teal text-2xl">
              {{ tour?.groupSize }}
            </div>
            <div class="text-gray-600 text-sm">{{ t('groupSize') }}</div>
          </div>
          <div>
            <div class="font-bold text-brand-teal text-2xl">
              {{ tour?.price ? `$${tour.price}` : 'Contact' }}
            </div>
            <div class="text-gray-600 text-sm">{{ t('startingFrom') }}</div>
          </div>
          <div>
            <div class="font-bold text-brand-teal text-2xl">
              {{ tour?.difficulty }}
            </div>
            <div class="text-gray-600 text-sm">{{ t('difficulty') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="bg-gray-50">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div class="lg:gap-12 lg:grid lg:grid-cols-3">
          <!-- Main Content Column -->
          <div class="space-y-12 lg:col-span-2">
            <!-- Overview Section -->
            <section class="bg-white shadow-sm p-6 sm:p-8 rounded-xl">
              <h2 class="mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                {{ t('overview') }}
              </h2>
              <div class="max-w-none prose prose-lg">
                <p class="text-gray-600 leading-relaxed">
                  {{ tour?.description }}
                </p>
              </div>
            </section>

            <!-- Highlights Section -->
            <section
              v-if="tour?.highlights"
              class="bg-white shadow-sm p-6 sm:p-8 rounded-xl"
            >
              <h2 class="mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                {{ t('highlights') }}
              </h2>
              <div class="gap-4 grid sm:grid-cols-2">
                <div
                  v-for="highlight in tour.highlights"
                  :key="highlight"
                  class="flex items-start text-gray-700"
                >
                  <svg
                    class="flex-shrink-0 mt-1 mr-3 w-5 h-5 text-brand-teal"
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
                  <span>{{ highlight }}</span>
                </div>
              </div>
            </section>

            <!-- Map Section -->
            <section
              v-if="tour?.mapImage"
              class="bg-white shadow-sm p-6 sm:p-8 rounded-xl"
            >
              <h2 class="mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                {{ t('routeMap') }}
              </h2>
              <div class="relative">
                <NuxtImg
                  :src="tour.mapImage"
                  :alt="`${tour.title} route map`"
                  class="rounded-lg w-full h-auto"
                />
              </div>
            </section>

            <!-- Itinerary Section -->
            <section
              v-if="tour?.itinerary"
              class="bg-white shadow-sm p-6 sm:p-8 rounded-xl"
            >
              <h2 class="mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                {{ t('itinerary') }}
              </h2>

              <!-- Desktop: Tabs -->
              <div class="hidden lg:block">
                <UiTabs :items="itineraryTabs" class="w-full">
                  <template #item="{ item }">
                    <div class="p-6">
                      <div class="mb-6">
                        <h3 class="mb-2 font-bold text-gray-900 text-xl">
                          {{ item.title }}
                        </h3>
                        <p class="text-gray-600">{{ item.description }}</p>
                      </div>

                      <!-- Day Stats -->
                      <div class="gap-4 grid grid-cols-2 sm:grid-cols-4 mb-6">
                        <div
                          v-if="item.distance"
                          class="bg-gray-50 p-3 rounded-lg text-center"
                        >
                          <div class="text-gray-600 text-sm">
                            {{ t('distance') }}
                          </div>
                          <div class="font-semibold text-gray-900">
                            {{ item.distance }}
                          </div>
                        </div>
                        <div
                          v-if="item.duration"
                          class="bg-gray-50 p-3 rounded-lg text-center"
                        >
                          <div class="text-gray-600 text-sm">
                            {{ t('duration') }}
                          </div>
                          <div class="font-semibold text-gray-900">
                            {{ item.duration }}
                          </div>
                        </div>
                        <div
                          v-if="item.elevation"
                          class="bg-gray-50 p-3 rounded-lg text-center"
                        >
                          <div class="text-gray-600 text-sm">
                            {{ t('elevation') }}
                          </div>
                          <div class="font-semibold text-gray-900">
                            {{ item.elevation }}
                          </div>
                        </div>
                        <div
                          v-if="item.accommodation"
                          class="bg-gray-50 p-3 rounded-lg text-center"
                        >
                          <div class="text-gray-600 text-sm">
                            {{ t('accommodation') }}
                          </div>
                          <div class="font-semibold text-gray-900">
                            {{ item.accommodation }}
                          </div>
                        </div>
                      </div>

                      <!-- Activities -->
                      <div v-if="item.activities" class="mb-6">
                        <h4 class="mb-3 font-semibold text-gray-900">
                          {{ t('activities') }}
                        </h4>
                        <ul class="space-y-2">
                          <li
                            v-for="activity in item.activities"
                            :key="activity"
                            class="flex items-start text-gray-600"
                          >
                            <svg
                              class="flex-shrink-0 mt-1 mr-2 w-4 h-4 text-brand-teal"
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
                            {{ activity }}
                          </li>
                        </ul>
                      </div>

                      <!-- Meals -->
                      <div v-if="item.meals" class="mb-6">
                        <h4 class="mb-3 font-semibold text-gray-900">
                          {{ t('meals') }}
                        </h4>
                        <div class="flex flex-wrap gap-2">
                          <span
                            v-for="meal in item.meals"
                            :key="meal"
                            class="bg-brand-teal/10 px-3 py-1 rounded-full font-medium text-brand-teal text-sm"
                          >
                            {{ meal }}
                          </span>
                        </div>
                      </div>

                      <!-- Day Images -->
                      <div
                        v-if="item.images && item.images.length > 0"
                        class="gap-4 grid grid-cols-2"
                      >
                        <NuxtImg
                          v-for="image in item.images"
                          :key="image"
                          :src="image"
                          :alt="`${item.title} - Day ${item.day}`"
                          class="rounded-lg w-full h-32 object-cover"
                        />
                      </div>
                    </div>
                  </template>
                </UiTabs>
              </div>

              <!-- Mobile: Accordion -->
              <div class="lg:hidden">
                <UiAccordion :items="itineraryAccordionItems" />
              </div>
            </section>

            <!-- Gallery Section -->
            <section
              v-if="tour?.gallery && tour.gallery.length > 0"
              class="bg-white shadow-sm p-6 sm:p-8 rounded-xl"
            >
              <h2 class="mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                {{ t('gallery') }}
              </h2>
              <UiCarousel
                :items="tour.gallery"
                class="w-full"
                :options="{
                  slidesPerView: 1,
                  spaceBetween: 20,
                  breakpoints: {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  },
                }"
              >
                <template #item="{ item }">
                  <div class="relative h-64 sm:h-80">
                    <NuxtImg
                      :src="item"
                      :alt="tour.title"
                      class="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                </template>
              </UiCarousel>
            </section>

            <!-- What's Included/Not Included -->
            <div class="gap-6 grid sm:grid-cols-2">
              <section
                v-if="tour?.included"
                class="bg-white shadow-sm p-6 sm:p-8 rounded-xl"
              >
                <h2 class="mb-6 font-bold text-gray-900 text-xl sm:text-2xl">
                  {{ t('whatsIncluded') }}
                </h2>
                <ul class="space-y-3">
                  <li
                    v-for="item in tour.included"
                    :key="item"
                    class="flex items-start text-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 mt-1 mr-3 w-5 h-5 text-green-500"
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
                    {{ item }}
                  </li>
                </ul>
              </section>

              <section
                v-if="tour?.notIncluded"
                class="bg-white shadow-sm p-6 sm:p-8 rounded-xl"
              >
                <h2 class="mb-6 font-bold text-gray-900 text-xl sm:text-2xl">
                  {{ t('notIncluded') }}
                </h2>
                <ul class="space-y-3">
                  <li
                    v-for="item in tour.notIncluded"
                    :key="item"
                    class="flex items-start text-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 mt-1 mr-3 w-5 h-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {{ item }}
                  </li>
                </ul>
              </section>
            </div>

            <!-- What to Bring -->
            <section
              v-if="tour?.whatToBring"
              class="bg-white shadow-sm p-6 sm:p-8 rounded-xl"
            >
              <h2 class="mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                {{ t('whatToBring') }}
              </h2>
              <div class="gap-4 grid sm:grid-cols-2">
                <div
                  v-for="item in tour.whatToBring"
                  :key="item"
                  class="flex items-start text-gray-700"
                >
                  <svg
                    class="flex-shrink-0 mt-1 mr-3 w-5 h-5 text-brand-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  {{ item }}
                </div>
              </div>
            </section>

            <!-- Additional Information -->
            <section
              v-if="tour?.additionalInfo"
              class="bg-white shadow-sm p-6 sm:p-8 rounded-xl"
            >
              <h2 class="mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                {{ t('additionalInfo') }}
              </h2>
              <div class="space-y-6">
                <div
                  v-for="(value, key) in tour.additionalInfo"
                  :key="key"
                  class="pl-4 border-brand-teal border-l-4"
                >
                  <h3 class="mb-2 font-semibold text-gray-900 text-lg">
                    {{ t(key) }}
                  </h3>
                  <p class="text-gray-600">{{ value }}</p>
                </div>
              </div>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6 lg:col-span-1">
            <!-- Pricing Options -->
            <section
              v-if="tour?.pricingOptions"
              class="bg-white shadow-sm p-6 rounded-xl"
            >
              <h2 class="mb-6 font-bold text-gray-900 text-xl sm:text-2xl">
                {{ t('pricingOptions') }}
              </h2>
              <div class="space-y-4">
                <div
                  v-for="option in tour.pricingOptions"
                  :key="option.name"
                  class="relative p-4 border rounded-lg"
                  :class="
                    option.popular
                      ? 'border-brand-teal bg-brand-teal/5'
                      : 'border-gray-200'
                  "
                >
                  <div
                    v-if="option.popular"
                    class="-top-2 left-4 absolute bg-brand-teal px-3 py-1 rounded-full font-medium text-white text-xs"
                  >
                    {{ t('mostPopular') }}
                  </div>
                  <div class="mb-3">
                    <h3 class="font-semibold text-gray-900">
                      {{ option.name }}
                    </h3>
                    <div class="font-bold text-brand-teal text-2xl">
                      ${{ option.price }}
                    </div>
                    <p
                      v-if="option.description"
                      class="mt-1 text-gray-600 text-sm"
                    >
                      {{ option.description }}
                    </p>
                  </div>
                  <ul v-if="option.features" class="space-y-2 mb-4">
                    <li
                      v-for="feature in option.features"
                      :key="feature"
                      class="flex items-start text-gray-700 text-sm"
                    >
                      <svg
                        class="flex-shrink-0 mt-0.5 mr-2 w-4 h-4 text-brand-teal"
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
                      {{ feature }}
                    </li>
                  </ul>
                  <UButton
                    :to="`/custom-tour?tour=${tour.slug}&option=${option.name}`"
                    color="primary"
                    size="sm"
                    block
                  >
                    {{ t('selectOption') }}
                  </UButton>
                </div>
              </div>
            </section>

            <!-- Quick Info -->
            <section class="bg-white shadow-sm p-6 rounded-xl">
              <h2 class="mb-6 font-bold text-gray-900 text-xl sm:text-2xl">
                {{ t('quickInfo') }}
              </h2>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">{{ t('duration') }}</span>
                  <span class="font-semibold text-gray-900">
                    {{ tour?.duration }} {{ t('days') }}
                  </span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">{{ t('difficulty') }}</span>
                  <span class="font-semibold text-gray-900">
                    {{ t(tour?.difficulty?.toLowerCase()) }}
                  </span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">{{ t('groupSize') }}</span>
                  <span class="font-semibold text-gray-900">{{
                    tour?.groupSize
                  }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">{{ t('bestTime') }}</span>
                  <span class="font-semibold text-gray-900">{{
                    tour?.bestTime
                  }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">{{
                    t('physicalRequirement')
                  }}</span>
                  <span class="font-semibold text-gray-900">{{
                    tour?.physicalRequirement
                  }}</span>
                </div>
              </div>
            </section>

            <!-- CTA Section -->
            <section
              class="bg-gradient-to-r from-brand-teal to-brand-teal/80 shadow-sm p-6 rounded-xl text-white"
            >
              <h2 class="mb-4 font-bold text-xl">
                {{ t('readyToExplore') }}
              </h2>
              <p class="mb-6 text-brand-teal-100">
                {{ t('readyToExploreText') }}
              </p>
              <div class="space-y-3">
                <UButton
                  :to="`/custom-tour?tour=${tour?.slug}`"
                  color="white"
                  variant="solid"
                  size="lg"
                  block
                  icon="i-heroicons-paper-airplane"
                >
                  {{ t('createCustomTour') }}
                </UButton>
                <UButton
                  :to="`https://wa.me/your-number?text=${encodeURIComponent(`Hi! I'm interested in the ${tour?.title} tour. Can you help me plan this adventure?`)}`"
                  target="_blank"
                  color="white"
                  variant="outline"
                  size="lg"
                  block
                  icon="i-simple-icons-whatsapp"
                >
                  {{ t('whatsappContact') }}
                </UButton>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { slug } = useRoute().params;
const { t, locale } = useI18n();
const route = useRoute();

// Reactive collection name based on current locale
const collectionName = computed(() =>
  locale.value === 'es' ? 'esTours' : 'enTours'
);

// Fetch tour data using the same approach as destinations
const { data: tour } = await useAsyncData(
  () => `tour-${slug}-${locale.value}`,
  async () => {
    // First, let's see what's in the collection
    const allTours = await queryCollection(collectionName.value).all();

    // Check if our slug exists in the collection
    const slugExists = allTours.some((t) => t.slug === slug);

    if (slugExists) {
      const foundTour = allTours.find((t) => t.slug === slug);
      return foundTour;
    }

    // Fallback: try the specific query
    const result = await queryCollection(collectionName.value)
      .where({ slug: slug })
      .first();

    return result;
  }
);

// Handle 404
if (!tour.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Tour Not Found',
    fatal: true,
  });
}

// Computed properties for itinerary tabs and accordion
const itineraryTabs = computed(() => {
  if (!tour.value?.itinerary) return [];

  return tour.value.itinerary.map((day) => ({
    label: `${t('day')} ${day.day}`,
    title: day.title,
    description: day.summary || day.description,
    ...day,
  }));
});

const itineraryAccordionItems = computed(() => {
  if (!tour.value?.itinerary) return [];

  return tour.value.itinerary.map((day) => ({
    title: `${t('day')} ${day.day}: ${day.title}`,
    content: `
      <div class="space-y-4">
        <p class="text-gray-600">${day.summary || day.description}</p>
        
        <div class="gap-4 grid grid-cols-2">
          ${day.distance ? `<div><span class="font-medium text-gray-700">${t('distance')}:</span> <span class="text-gray-600">${day.distance}</span></div>` : ''}
          ${day.duration ? `<div><span class="font-medium text-gray-700">${t('duration')}:</span> <span class="text-gray-600">${day.duration}</span></div>` : ''}
          ${day.elevation ? `<div><span class="font-medium text-gray-700">${t('elevation')}:</span> <span class="text-gray-600">${day.elevation}</span></div>` : ''}
          ${day.accommodation ? `<div><span class="font-medium text-gray-700">${t('accommodation')}:</span> <span class="text-gray-600">${day.accommodation}</span></div>` : ''}
        </div>
        
        ${
          day.activities
            ? `
          <div>
            <h4 class="mb-2 font-semibold text-gray-900">${t('activities')}</h4>
            <ul class="space-y-1">
              ${day.activities
                .map(
                  (activity) => `<li class="flex items-start text-gray-600">
                <svg class="flex-shrink-0 mt-1 mr-2 w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                ${activity}
              </li>`
                )
                .join('')}
            </ul>
          </div>
        `
            : ''
        }
        
        ${
          day.meals
            ? `
          <div>
            <h4 class="mb-2 font-semibold text-gray-900">${t('meals')}</h4>
            <div class="flex flex-wrap gap-2">
              ${day.meals.map((meal) => `<span class="bg-brand-teal/10 px-2 py-1 rounded text-brand-teal text-sm">${meal}</span>`).join('')}
            </div>
          </div>
        `
            : ''
        }
      </div>
    `,
  }));
});

// SEO
useHead({
  title: `${tour.value?.title || 'Tour'} - Peru Excursions`,
  meta: [
    {
      name: 'description',
      content:
        tour.value?.summary ||
        'Discover amazing tours in Peru with our expert guides.',
    },
  ],
});
</script>
