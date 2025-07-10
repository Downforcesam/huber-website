<template>
  <section class="relative bg-white py-16 lg:py-24 overflow-hidden">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-50"
    />

    <div class="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div
        class="items-center gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-2"
      >
        <!-- Content Section -->
        <div class="space-y-8">
          <div>
            <h2
              class="mb-6 font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight"
            >
              {{ t('introTitle') }}
            </h2>

            <p class="mb-8 text-gray-600 text-xl leading-relaxed">
              {{ t('transformativeJourney') }}
            </p>
          </div>

          <!-- Features Grid -->
          <div class="gap-6 grid grid-cols-1 sm:grid-cols-2">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <UIcon name="i-heroicons-photo" class="w-8 h-8 brand-teal" />
              </div>
              <div>
                <h3 class="mb-2 font-semibold text-gray-900 text-lg">
                  {{ t('epicLandscapes') }}
                </h3>
                <p class="text-gray-600">
                  {{ t('ruggedAndeanPeaks') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <UIcon name="i-heroicons-users" class="w-8 h-8 brand-teal" />
              </div>
              <div>
                <h3 class="mb-2 font-semibold text-gray-900 text-lg">
                  {{ t('culturalImmersion') }}
                </h3>
                <p class="text-gray-600">
                  {{ t('vibrantCommunities') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <UIcon name="i-heroicons-camera" class="w-8 h-8 brand-teal" />
              </div>
              <div>
                <h3 class="mb-2 font-semibold text-gray-900 text-lg">
                  {{ t('unforgettableMoments') }}
                </h3>
                <p class="text-gray-600">
                  {{ t('memoriesLastLifetime') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <UIcon
                  name="i-heroicons-shield-check"
                  class="w-8 h-8 brand-teal"
                />
              </div>
              <div>
                <h3 class="mb-2 font-semibold text-gray-900 text-lg">
                  {{ t('expertGuides') }}
                </h3>
                <p class="text-gray-600">
                  {{ t('localKnowledgeTrust') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="gap-8 grid grid-cols-3 pt-8 border-gray-200 border-t">
            <div class="text-center">
              <div class="mb-2 font-bold text-3xl brand-teal">500+</div>
              <div class="text-gray-600 text-sm">{{ t('happyTravelers') }}</div>
            </div>
            <div class="text-center">
              <div class="mb-2 font-bold text-3xl brand-teal">15+</div>
              <div class="text-gray-600 text-sm">{{ t('tourOptions') }}</div>
            </div>
            <div class="text-center">
              <div class="mb-2 font-bold text-3xl brand-teal">10</div>
              <div class="text-gray-600 text-sm">
                {{ t('yearsExperience') }}
              </div>
            </div>
          </div>
        </div>

        <!-- Image Gallery -->
        <div class="relative">
          <div class="gap-4 grid grid-cols-2">
            <!-- Large image -->
            <div class="col-span-2">
              <div
                class="bg-white shadow-sm hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300"
              >
                <NuxtImg
                  src="/images/landing/gallery-landscape.jpeg"
                  alt="Peruvian Landscape"
                  class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <!-- Two smaller images -->
            <div
              class="bg-white shadow-sm hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300"
            >
              <NuxtImg
                src="/images/landing/gallery-cusco-architecture.jpeg"
                alt="Cusco Architecture"
                class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div
              class="bg-white shadow-sm hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300"
            >
              <NuxtImg
                src="/images/landing/gallery-maras-salt-flats.jpeg"
                alt="Maras Salt Flats"
                class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Bottom row -->
            <div
              class="bg-white shadow-sm hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300"
            >
              <NuxtImg
                src="/images/landing/gallery-home-stay.jpeg"
                alt="Local Home Stay"
                class="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div
              class="bg-white shadow-sm hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300"
            >
              <NuxtImg
                src="/images/landing/gallery-machu-picchu-llama.jpeg"
                alt="Machu Picchu Llama"
                class="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
