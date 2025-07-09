<template>
  <div class="relative flex flex-col items-center h-full container">
    <NuxtImg
      src="/images/destinations/cusco/main.jpg"
      :alt="title"
      class="rounded-md object-cover container"
    >
    </NuxtImg>
    <!-- <div class="z-0 absolute inset-0 bg-black opacity-20 container"></div> -->
    <div
      class="top-1/3 z-10 absolute bg-slate-50/70 mx-auto p-4 rounded-md max-w-2xl text-center"
    >
      <h2 class="shadow-md font-bold text-4xl sm:text-6xl tracking-tight">
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
