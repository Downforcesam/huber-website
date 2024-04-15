<template>
  <main class="min-h-screen">
    <HomeHero />
    <HomeIntro />
    <!-- <HomeDestinations id="destinations" /> -->
    <HomeTrips />
    <HomeContact />
  </main>
</template>

<script setup>
const { locale } = useI18n();
</script>
