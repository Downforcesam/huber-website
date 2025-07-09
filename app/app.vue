<script setup lang="ts">
// Force light mode - no dark mode support
const color = '#4ca6a8'; // Use brand teal as theme color

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
  },
});

const title = 'Andes Adventures - Authentic Trekking & Cultural Tours in Peru';
const description =
  'Discover Peru with personalized trekking and cultural tours. Expert local guide offering Machu Picchu, Rainbow Mountain, Sacred Valley adventures and custom itineraries.';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/machu-picchu.jpg',
  twitterImage: '/machu-picchu.jpg',
  twitterCard: 'summary_large_image',
});

// Handle global errors
onErrorCaptured((error, instance, info) => {
  console.error('Global error captured:', error, instance, info);
  return false; // Prevent error from propagating
});
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
