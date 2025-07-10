<template>
  <div class="bg-white">
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-2xl lg:max-w-7xl"
    >
      <h2 class="text-black">Trekking Tours</h2>

      <div
        class="gap-y-4 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <NuxtLink
          v-for="tour in trekkingTours"
          :key="tour._id"
          :to="localePath(`/tours/${tour.slug}`)"
          class="group relative flex flex-col bg-white hover:shadow-lg border border-gray-200 rounded-lg overflow-hidden transition-shadow"
        >
          <div
            class="bg-gray-200 group-hover:opacity-75 sm:h-96 aspect-h-4 aspect-w-3 sm:aspect-none"
          >
            <NuxtImg
              :src="tour.thumbnail || tour.featuredImage"
              :alt="tour.title"
              class="w-full sm:w-full h-full sm:h-full object-center object-cover"
            />
          </div>
          <div class="flex flex-col flex-1 space-y-2 p-4">
            <h3 class="font-medium text-gray-900 text-sm">
              {{ tour.title }}
            </h3>
            <p class="text-gray-500 text-sm">
              <span
                v-for="destination in tour.destinations"
                :key="destination"
                class="mr-1"
              >
                {{ destination }}
              </span>
            </p>
            <div class="flex flex-col flex-1 justify-end">
              <p class="text-gray-500 text-sm italic">
                Days: {{ tour.duration }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();

// Reactive collection name based on current locale
const collectionName = computed(() =>
  locale.value === 'es' ? 'esTours' : 'enTours'
);

// Fetch trekking tours using new Nuxt Content v3 API with unique cache key per language
const { data: allTours } = await useAsyncData(
  () => `home-trekking-tours-${locale.value}`,
  () => queryCollection(collectionName.value).all()
);

// Filter for trekking tours only
const trekkingTours = computed(() => {
  if (!allTours.value) return [];
  return allTours.value.filter(
    (tour) => tour.category === 'Trekking' || tour.category === 'Senderismo'
  );
});
</script>
