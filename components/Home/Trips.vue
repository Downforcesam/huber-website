<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Tours</h2>

      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="trip in trips"
          :key="trip.id"
          class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <AppTripCard :trip="trip" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const trips = [
  {
    id: 1,
    title: 'Rainbow Mountain',
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

    imageSrc: '/rainbow-mountain.jpeg',
    imageAlt:
      'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 1,
    title: 'Machu Picchu',
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

    imageSrc: '/machu-picchu-trip.jpeg',
    imageAlt:
      'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
];
</script>
