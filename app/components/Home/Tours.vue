<template>
  <div id="tours" class="mt-10 lg:mt-20 px-4 w-full b container">
    <ContentList :path="`/${locale}/tours`" v-slot="{ list }">
      <div class="w-full">
        
          <h2 class="p-4">{{ $t('tours') }}</h2>

          <d
            class="gap-y-4 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="tour in list"
              :key="tour.id"
              class="relative flex flex-col border-gray-200 bg-white border rounded-lg overflow-hidden group"
            >
              <div
                class="bg-gray-200 group-hover:opacity-75 aspect-w-3 aspect-h-4 sm:aspect-none sm:h-96"
              >
                <NuxtImg
                  :src="tour.thumbnail"
                  :alt="tour.title"
                  class="w-full sm:w-full h-full sm:h-full object-center object-cover"
                />
              </div>
              <div class="flex flex-col flex-1 space-y-2 p-4">
                <h3 class="font-medium text-gray-900 text-sm">
                  <NuxtLink :to="localePath(`/tours/${tour.slug}`)">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ tour.title }}
                  </NuxtLink>
                </h3>
                <p class="text-gray-500 text-sm">
                  <span v-for="destination in tour.destinations" class="mr-1">
                    {{ destination }}
                  </span>
                </p>
                <div
                  class="flex flex-col flex-1 justify-end italic tracking-wide"
                >
                  <div class="flex space-x-1">
                    <span>{{ $t('day') }}:</span>
                    <span> {{ tour.duration }}</span>
                  </div>
                  <div class="flex space-x-1">
                    <span>{{ $t('difficulty') }}:</span>
                    <span>{{ tour.difficulty }}</span>
                  </div>
                </div>
              </div>
            </div>
          </d


        </div>
      </div></ContentList
    >
  </div>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
</script>
