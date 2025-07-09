<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero section with guide photo -->
    <div class="relative bg-gradient-to-r from-blue-900 to-teal-800 text-white">
      <div class="mx-auto px-4 py-16 sm:py-24 container">
        <div class="items-center gap-8 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 class="mb-6 font-bold text-3xl sm:text-4xl lg:text-5xl">
              {{ data?.title }}
            </h1>
            <p class="mb-8 text-blue-100 text-lg sm:text-xl">
              {{ data?.description }}
            </p>
            <div class="flex sm:flex-row flex-col gap-4">
              <a
                href="https://wa.me/your-number"
                target="_blank"
                class="inline-flex justify-center items-center bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
              >
                <svg
                  class="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                  />
                </svg>
                {{ $t('contactWhatsApp') }}
              </a>
              <NuxtLink
                to="#contact"
                class="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
              >
                {{ $t('getInTouch') }}
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <img
                :src="data?.image || '/guide-photo.jpg'"
                :alt="data?.title"
                class="shadow-2xl rounded-full w-80 h-80 object-cover"
              />
              <div
                class="-right-4 -bottom-4 absolute bg-yellow-400 px-4 py-2 rounded-full font-semibold text-gray-900"
              >
                10+ {{ $t('yearsExperience') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content section -->
    <div class="mx-auto px-4 py-12 sm:py-16 container">
      <div class="mx-auto max-w-4xl">
        <div class="max-w-none prose prose-lg">
          <ContentRenderer :value="data" />
        </div>
      </div>
    </div>

    <!-- CTA section -->
    <div class="bg-gray-900 text-white">
      <div class="mx-auto px-4 py-12 sm:py-16 container">
        <div class="text-center">
          <h2 class="mb-4 font-bold text-2xl sm:text-3xl">
            {{ $t('readyForAdventure') }}
          </h2>
          <p class="mx-auto mb-8 max-w-2xl text-gray-300 text-lg">
            {{ $t('readyForAdventureText') }}
          </p>
          <div class="flex sm:flex-row flex-col justify-center gap-4">
            <NuxtLink
              to="/custom-tour"
              class="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-white transition-colors"
            >
              {{ $t('createCustomTour') }}
            </NuxtLink>
            <NuxtLink
              to="/tours"
              class="inline-flex justify-center items-center hover:bg-white px-8 py-4 border border-white rounded-lg font-semibold text-white hover:text-gray-900 transition-colors"
            >
              {{ $t('browseTours') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const { data } = await useAsyncData('guide-about', () =>
  queryContent(`/${locale.value}/guide/about`).findOne()
);

// SEO
useHead({
  title: `${data.value?.title} - Peru Excursions`,
  meta: [{ name: 'description', content: data.value?.description }],
});
</script>
