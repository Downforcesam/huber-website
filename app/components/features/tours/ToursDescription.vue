<template>
  <div>
    <div class="bg-white py-24 sm:py-32 overflow-hidden">
      <div class="container">
        <h2>Overview</h2>
        <div
          class="lg:items-start gap-x-8 gap-y-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-2"
        >
          <div class="px-6 md:px-0 lg:pt-4 lg:pr-4">
            <div class="">
              <p class="">
                Our classic Choquequirao package visits stunning archaeological
                sites and immerses travelers in the culture of Cusco and the
                Sacred Valley.
              </p>
              <p >
                {{ tour.description }}
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center sm:px-6 lg:px-0 h-full">
            
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
