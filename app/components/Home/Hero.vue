<template>
  <div class="relative w-screen h-screen overflow-hidden isolate">
    <NuxtImg
      src="/machu-picchu.jpg"
      alt="machu picchu"
      class="-z-10 absolute inset-0 w-full h-full object-cover"
    />
    <div class="-z-10 absolute inset-0 bg-black opacity-20"></div>
    <div class="mx-auto py-32 sm:py-48 lg:py-56 max-w-2xl">
      <div class="text-center">
        <h1 class="font-bold text-4xl text-white sm:text-6xl tracking-tight">
          {{ $t('heroTitle') }}
        </h1>
        <p class="mt-6 text-gray-100 text-lg leading-8">
          {{ $t('heroSubtitle') }}
        </p>
        <div class="flex justify-center items-center gap-x-6 mt-10">
          <NuxtLink
            @click="scrollToAnchor('tours')"
            class="bg-indigo-500 hover:bg-indigo-400 shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 cursor-pointer"
            >{{ $t('heroButton') }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    },
  },
});
</script>
