<template>
  <div>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="container">
        <div
          class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start"
        >
          <div class="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div class="">
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Our classic Choquequirao package visits stunning archaeological
                sites and immerses travelers in the culture of Cusco and the
                Sacred Valley.
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                {{ tour.description }}
              </p>
            </div>
          </div>
          <div class="sm:px-6 lg:px-0">
            
              <img src="/tours/choquequirao/choquequirao-map.svg" alt="" />
            </div
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['tour']);
</script>
