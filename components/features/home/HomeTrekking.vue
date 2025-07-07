<template>
  <ContentList :path="`/${locale}/trekking`" v-slot="{ list }">
    <div class="bg-white">
      <div
        class="mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-2xl lg:max-w-7xl"
      >
        <h2 class="text-black">{{ t('trekkingTours') }}</h2>

        <div
          class="gap-y-4 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="tour in list"
            :key="tour.id"
            class="group relative flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <div
              class="bg-gray-200 group-hover:opacity-75 sm:h-96 aspect-h-4 aspect-w-3 sm:aspect-none"
            >
              <NuxtImg
                :src="tour.thumbnail"
                :alt="tour.title"
                class="w-full sm:w-full h-full sm:h-full object-center object-cover"
              />
            </div>
            <div class="flex flex-col flex-1 space-y-2 p-4">
              <h3 class="font-medium text-gray-900 text-sm">
                <a :href="tour.slug">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ tour.title }}
                </a>
              </h3>
              <p class="text-gray-500 text-sm">
                <span v-for="destination in tour.destinations" class="mr-1">
                  {{ destination }}
                </span>
              </p>
              <div class="flex flex-col flex-1 justify-end">
                <p class="text-gray-500 text-sm italic">
                  {{ t('days') }}: {{ tour.duration }}
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
const { locale, t } = useI18n();
</script>
