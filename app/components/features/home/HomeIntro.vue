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
            <UBadge color="primary" variant="soft" size="lg" class="mb-6">
              About Peru Adventures
            </UBadge>

            <h2
              class="mb-6 font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight"
            >
              Discover Your
              <span class="text-primary-600">Andean Adventure</span>
            </h2>

            <p class="mb-8 text-gray-600 text-xl leading-relaxed">
              Embark on a transformative journey through the heart of the
              Peruvian Andes. Our meticulously curated trips promise a
              harmonious blend of exhilarating adventure, cultural immersion,
              and awe-inspiring natural beauty.
            </p>
          </div>

          <!-- Features Grid -->
          <div class="gap-6 grid grid-cols-1 sm:grid-cols-2">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <UIcon
                  name="i-heroicons-photo"
                  class="w-8 h-8 text-primary-600"
                />
              </div>
              <div>
                <h3 class="mb-2 font-semibold text-gray-900 text-lg">
                  Epic Landscapes
                </h3>
                <p class="text-gray-600">
                  From rugged Andean peaks to mystical cloud forests
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <UIcon
                  name="i-heroicons-users"
                  class="w-8 h-8 text-primary-600"
                />
              </div>
              <div>
                <h3 class="mb-2 font-semibold text-gray-900 text-lg">
                  Cultural Immersion
                </h3>
                <p class="text-gray-600">
                  Connect with vibrant local communities and traditions
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <UIcon
                  name="i-heroicons-camera"
                  class="w-8 h-8 text-primary-600"
                />
              </div>
              <div>
                <h3 class="mb-2 font-semibold text-gray-900 text-lg">
                  Unforgettable Moments
                </h3>
                <p class="text-gray-600">
                  Create memories that will last a lifetime
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <UIcon
                  name="i-heroicons-shield-check"
                  class="w-8 h-8 text-primary-600"
                />
              </div>
              <div>
                <h3 class="mb-2 font-semibold text-gray-900 text-lg">
                  Expert Guides
                </h3>
                <p class="text-gray-600">
                  Local knowledge and safety you can trust
                </p>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="gap-8 grid grid-cols-3 pt-8 border-gray-200 border-t">
            <div class="text-center">
              <div class="mb-2 font-bold text-primary-600 text-3xl">500+</div>
              <div class="text-gray-600 text-sm">Happy Travelers</div>
            </div>
            <div class="text-center">
              <div class="mb-2 font-bold text-primary-600 text-3xl">15+</div>
              <div class="text-gray-600 text-sm">Tour Options</div>
            </div>
            <div class="text-center">
              <div class="mb-2 font-bold text-primary-600 text-3xl">10</div>
              <div class="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        <!-- Image Gallery -->
        <div class="relative">
          <div class="gap-4 grid grid-cols-2">
            <!-- Large image -->
            <div class="col-span-2">
              <UCard class="overflow-hidden">
                <NuxtImg
                  src="/landscape.jpeg"
                  alt="Peruvian Landscape"
                  class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </UCard>
            </div>

            <!-- Two smaller images -->
            <UCard class="overflow-hidden">
              <NuxtImg
                src="/cusco-2.jpeg"
                alt="Cusco Architecture"
                class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </UCard>

            <UCard class="overflow-hidden">
              <NuxtImg
                src="/maras.jpeg"
                alt="Maras Salt Flats"
                class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </UCard>

            <!-- Bottom row -->
            <UCard class="overflow-hidden">
              <NuxtImg
                src="/home-stay.jpeg"
                alt="Local Home Stay"
                class="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </UCard>

            <UCard class="overflow-hidden">
              <NuxtImg
                src="/machu-picchu-lama.jpeg"
                alt="Machu Picchu Llama"
                class="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </UCard>
          </div>

          <!-- Floating badge -->
          <div class="-top-4 -right-4 absolute">
            <UBadge color="success" variant="solid" size="lg" class="shadow-lg">
              <UIcon name="i-heroicons-star-solid" class="mr-1 w-4 h-4" />
              5.0 Rating
            </UBadge>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>
