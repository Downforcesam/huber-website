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
        {{ trip.title }}
      </a>
    </h3>
    <p class="text-sm text-gray-500">{{ trip.description }}</p>
    <div class="flex flex-1 flex-col justify-end">
      <p class="text-sm italic text-gray-500">{{ trip.options }}</p>
      <p class="text-base font-medium text-gray-900">
        {{ trip.price }}
      </p>
    </div>
    <div class="space-x-4">
      <span
        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
        >Moderate</span
      >
      <span
        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
        >4 Days</span
      >
      <span
        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
        >March - Janary</span
      >
    </div>
  </div>
</template>

<script setup>
const { trip } = defineProps(['trip']);
// const trip = {
//   id: 1,
//   title: 'Rainbow Mountain',
//   region: 'Cusco',
//   'trip-type': 'Inca Trail',
//   'trip-duration': '4 days',
//   'trip-season': 'Spring',
//   'trip-difficulty': 'Moderate',
//   'trip-region': 'Peru',
//   href: '#',
//   price: '$256',
//   description:
//     'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',

//   imageSrc: '/rainbow-mountain.jpeg',
//   imageAlt:
//     'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
// };
</script>
