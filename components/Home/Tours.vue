<template>
  <ContentList :path="`/${locale}/tours`" v-slot="{ list }">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our tours
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Welcome to Cusco, the ancient capital of the mighty Inca Empire and
            a treasure trove of cultural wonders and natural beauty. Nestled
            high in the Andes Mountains of Peru, Cusco beckons adventurers from
            around the globe with its rich history, vibrant traditions, and
            stunning landscapes.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
          >
            <div v-for="tour in list" :key="tour.title" class="flex flex-col">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div
                  class="mb-6 flex h-60 items-center justify-center rounded-lg"
                >
                  <img
                    :src="tour.thumbnail"
                    :alt="tour.title"
                    class="h-full object-cover object-center w-full rounded-xl bg-gray-900/5 shadow-lg sm:h-full sm:w-full"
                  />
                </div>
                {{ tour.title }}
              </dt>
              <dd
                class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"
              >
                <p class="flex-auto">{{ tour.description }}</p>
                <p class="mt-6">
                  <NuxtLink
                    :to="`/${tour.slug}`"
                    class="text-sm font-semibold leading-6 text-indigo-600"
                    >Learn more <span aria-hidden="true">→</span></NuxtLink
                  >
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </ContentList>
</template>

<script setup>
const { locale } = useI18n();
</script>
