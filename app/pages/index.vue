<template>
  <main>
    <HomeHero />
    <HomeIntro />
    <HomeDestinations :destinations="destinations" />
    <HomeTours :tours="tours" />
    <HomeContact />
  </main>
</template>

<script setup>
const { locale } = useI18n();

// Load all content in a single query to avoid multiple SQLite WASM initializations
const { data: allContent } = await useAsyncData(
  () => `home-content-${locale.value}`,
  async () => {
    const destinationsCollection =
      locale.value === 'es' ? 'esDestinations' : 'enDestinations';
    const toursCollection = locale.value === 'es' ? 'esTours' : 'enTours';

    const [destinations, tours] = await Promise.all([
      queryCollection(destinationsCollection).all(),
      queryCollection(toursCollection).all(),
    ]);

    return { destinations, tours };
  }
);

// Filter destinations for featured ones
const destinations = computed(() => {
  if (!allContent.value?.destinations) return [];
  return allContent.value.destinations
    .filter((destination) => destination.featured === true)
    .slice(0, 3);
});

// Filter tours for featured ones
const tours = computed(() => {
  if (!allContent.value?.tours) return [];
  return allContent.value.tours
    .filter((tour) => tour.featured === true)
    .slice(0, 3);
});
</script>
