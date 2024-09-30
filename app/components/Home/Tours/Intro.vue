<template>
  <div
    class="py-24 sm:py-32 isolate relative w-screen h-screen flex items-center justify-center"
  >
    <NuxtImg
      src="/cusco.jpeg"
      :alt="title"
      class="object-cover absolute -z-10 h-full w-full"
    >
    </NuxtImg>
    <div class="absolute inset-0 bg-black opacity-20 z-0"></div>
    <div class="mx-auto max-w-2xl text-center z-10">
      <h2
        class="text-4xl font-bold tracking-tight text-white sm:text-6xl shadow-md"
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>
