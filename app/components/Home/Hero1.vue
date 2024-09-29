<template>
  <div class="relative w-screen h-screen isolate overflow-hidden">
    <NuxtImg
      src="/machu-picchu.jpg"
      alt="machu picchu"
      class="absolute inset-0 -z-10 h-full w-full object-cover"
    />

    <div class="absolute inset-0 bg-black opacity-20 z-0"></div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Explore the majestic Peruvian Andes with Peru Excursions
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-100">
          Trek through ancient trails, uncover hidden gems, and immerse yourself
          in a journey of a lifetime. Start your adventure today.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 z-10">
          <a
            href="#"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >Discover our destinations</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
