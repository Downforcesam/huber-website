<template>
  <ContentList :path="`/${locale}/trekking`" v-slot="{ list }">
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <h2 class="text-black">Trekking Tours</h2>

        <div
          class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
        >
          <div
            v-for="tour in list"
            :key="tour.id"
            class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div
              class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96"
            >
              <NuxtImg
                :src="tour.thumbnail"
                :alt="tour.title"
                class="h-full w-full object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div class="flex flex-1 flex-col space-y-2 p-4">
              <h3 class="text-sm font-medium text-gray-900">
                <a :href="tour.slug">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ tour.title }}
                </a>
              </h3>
              <p class="text-sm text-gray-500">
                <span v-for="destination in tour.destinations" class="mr-1">
                  {{ destination }}
                </span>
              </p>
              <div class="flex flex-1 flex-col justify-end">
                <p class="text-sm italic text-gray-500">
                  Days: {{ tour.duration }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></ContentList
  >
</template>

<script setup>
const { locale } = useI18n();
</script>
