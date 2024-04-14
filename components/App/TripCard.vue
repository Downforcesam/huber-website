<template>
  <div
    class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96"
  >
    <img
      :src="trip.imageSrc"
      :alt="trip.imageAlt"
      class="h-full w-full object-cover object-center sm:h-full sm:w-full"
    />
  </div>
  <div class="flex flex-1 flex-col space-y-2 p-4">
    <h3 class="text-sm font-medium text-gray-900">
      <a :href="trip.href">
        <span aria-hidden="true" class="absolute inset-0" />
        {{ trip.name }}
      </a>
    </h3>
    <p class="text-sm text-gray-500">{{ trip.description }}</p>
    <div class="flex flex-1 flex-col justify-end">
      <p class="text-sm italic text-gray-500">{{ trip.options }}</p>
      <p class="text-base font-medium text-gray-900">
        {{ trip.price }}
      </p>
    </div>
  </div>
</template>

<script setup>
// const { product } = defineProps(['product']);
const trip = {
  id: 1,
  title: 'Basic Tee 8-Pack',
  region: 'Cusco',
  'trip-type': 'Inca Trail',
  'trip-duration': '4 days',
  'trip-season': 'Spring',
  'trip-difficulty': 'Moderate',
  'trip-region': 'Peru',
  href: '#',
  price: '$256',
  description:
    'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',

  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
  imageAlt:
    'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
};
</script>
