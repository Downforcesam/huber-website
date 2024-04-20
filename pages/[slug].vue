<template>
  <article
    class="min-h-screen bg-white flex flex-col items-center justify-center"
  >
    <h1 class="text-black text-2xl font-semibold">{{ slug }}</h1>
  </article>
</template>
<script setup>
const { slug } = useRoute().params;
</script>
