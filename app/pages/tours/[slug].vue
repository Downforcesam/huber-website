<template>
  <div>
    <!-- Hero Section with Tour Image -->
    <section class="relative bg-gray-900">
      <div class="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <NuxtImg
          :src="tour?.thumbnail || '/landscape.jpeg'"
          :alt="tour?.title"
          class="w-full h-full object-cover"
        />
        <!-- Gradient overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        ></div>

        <!-- Hero content -->
        <div class="right-6 bottom-6 left-6 absolute text-white">
          <div class="flex items-center gap-2 mb-2">
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
          </div>
          <h1 class="mb-2 font-bold text-3xl sm:text-4xl lg:text-5xl">
            {{ tour?.title }}
          </h1>
          <p class="max-w-2xl text-gray-200 text-lg">
            {{ tour?.summary }}
          </p>
        </div>
      </div>
    </section>

    <!-- Tour Overview -->
    <section class="bg-white py-12 sm:py-20">
      <div class="mx-auto px-4 max-w-7xl">
        <div class="lg:gap-8 lg:grid lg:grid-cols-3">
          <!-- Main content -->
          <div class="lg:col-span-2">
            <!-- Overview -->
            <div class="mb-12">
              <h2 class="mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                {{ t('overview') }}
              </h2>
              <div class="max-w-none prose prose-lg">
                <p class="text-gray-600 leading-relaxed">
                  {{ tour?.description }}
                </p>
              </div>
            </div>

            <!-- Highlights -->
            <div v-if="tour?.highlights" class="mb-12">
              <h3 class="mb-4 font-bold text-gray-900 text-xl">
                {{ t('highlights') }}
              </h3>
              <div class="gap-3 grid sm:grid-cols-2">
                <div
                  v-for="highlight in tour.highlights"
                  :key="highlight"
                  class="flex items-center text-gray-700"
                >
                  <svg
                    class="flex-shrink-0 mr-3 w-5 h-5 text-brand-teal"
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

            <!-- Itinerary -->
            <div v-if="tour?.itinerary" class="mb-12">
              <h3 class="mb-6 font-bold text-gray-900 text-xl">
                {{ t('itinerary') }}
              </h3>
              <div class="space-y-6">
                <div
                  v-for="day in tour.itinerary"
                  :key="day.day"
                  class="bg-gray-50 p-6 rounded-lg"
                >
                  <div class="flex justify-between items-center mb-4">
                    <h4 class="font-bold text-gray-900 text-lg">
                      {{ t('day') }} {{ day.day }}: {{ day.title }}
                    </h4>
                    <div class="text-gray-500 text-sm">
                      {{ day.duration }}
                    </div>
                  </div>

                  <div
                    class="gap-4 grid grid-cols-1 sm:grid-cols-3 mb-4 text-sm"
                  >
                    <div>
                      <span class="font-medium text-gray-700"
                        >{{ t('distance') }}:</span
                      >
                      <span class="text-gray-600">{{ day.distance }}</span>
                    </div>
                    <div>
                      <span class="font-medium text-gray-700"
                        >{{ t('elevation') }}:</span
                      >
                      <span class="text-gray-600">{{ day.elevation }}</span>
                    </div>
                    <div>
                      <span class="font-medium text-gray-700"
                        >{{ t('accommodation') }}:</span
                      >
                      <span class="text-gray-600">{{ day.accommodation }}</span>
                    </div>
                  </div>

                  <p class="mb-4 text-gray-600">{{ day.description }}</p>

                  <div v-if="day.activities" class="mb-4">
                    <h5 class="mb-2 font-medium text-gray-700 text-sm">
                      {{ t('activities') }}:
                    </h5>
                    <ul class="space-y-1 ml-4 text-gray-600 text-sm">
                      <li
                        v-for="activity in day.activities"
                        :key="activity"
                        class="list-disc"
                      >
                        {{ activity }}
                      </li>
                    </ul>
                  </div>

                  <div v-if="day.meals" class="flex items-center gap-2 text-sm">
                    <span class="font-medium text-gray-700"
                      >{{ t('meals') }}:</span
                    >
                    <div class="flex gap-2">
                      <span
                        v-for="meal in day.meals"
                        :key="meal"
                        class="bg-brand-teal/10 px-2 py-1 rounded text-brand-teal"
                      >
                        {{ meal }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- Quick info -->
            <div class="bg-gray-50 mb-6 p-6 rounded-lg">
              <h3 class="mb-4 font-bold text-gray-900 text-xl">
                {{ t('quickInfo') }}
              </h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">{{ t('duration') }}:</span>
                  <span class="font-medium"
                    >{{ tour?.duration }} {{ t('days') }}</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">{{ t('difficulty') }}:</span>
                  <span class="font-medium">{{
                    t(tour?.difficulty?.toLowerCase())
                  }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">{{ t('groupSize') }}:</span>
                  <span class="font-medium">{{ tour?.groupSize }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">{{ t('price') }}:</span>
                  <span class="font-medium text-brand-teal">
                    {{ tour?.price ? `$${tour.price}` : 'Contact us' }}
                  </span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">{{ t('category') }}:</span>
                  <span class="font-medium">{{ tour?.category }}</span>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="bg-gradient-to-r from-brand-teal to-brand-teal/80 p-6 rounded-lg text-white"
            >
              <h3 class="mb-3 font-bold text-xl">
                {{ t('readyToExplore') }}
              </h3>
              <p class="mb-4 text-brand-teal-100">
                {{ t('readyToExploreText') }}
              </p>
              <div class="space-y-3">
                <UButton
                  to="/custom-tour"
                  color="primary"
                  variant="solid"
                  size="lg"
                  block
                  icon="i-heroicons-paper-airplane"
                >
                  {{ t('createCustomTour') }}
                </UButton>
                <UButton
                  to="https://wa.me/your-number"
                  target="_blank"
                  color="primary"
                  variant="outline"
                  size="lg"
                  block
                  icon="i-simple-icons-whatsapp"
                >
                  {{ t('whatsappContact') }}
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Information -->
    <section v-if="tour?.additionalInfo" class="bg-white py-12 sm:py-20">
      <div class="mx-auto px-4 max-w-4xl">
        <h2
          class="mb-8 font-bold text-gray-900 text-2xl sm:text-3xl text-center"
        >
          {{ t('additionalInfo') }}
        </h2>
        <div class="space-y-6">
          <div
            v-for="(value, key) in tour.additionalInfo"
            :key="key"
            class="bg-gray-50 p-6 rounded-lg"
          >
            <h3 class="mb-3 font-bold text-gray-900 text-lg">
              {{ t(key) }}
            </h3>
            <p class="text-gray-600">{{ value }}</p>
          </div>
        </div>
      </div>
    </section>
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
  () => queryCollection(collectionName.value).where({ slug: slug }).first()
);

// Handle 404
if (!tour.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Tour Not Found',
    fatal: true,
  });
}

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
