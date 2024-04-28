<script setup lang="ts">
const items = [
  {
    label: 'Day 1',
    content: 'This is the content shown for Tab1',
    img: '/cusco-city.jpeg',
  },
  {
    label: 'Day 2',

    content: 'And, this is the content for Tab2',
  },
  {
    label: 'Day 3',
    content: 'Finally, this is the content for Tab3',
  },
];
</script>

<template>
  <UTabs
    :items="items"
    class="text-gray-700"
    orientation="vertical"
    :ui="{ wrapper: 'flex items-start gap-4', list: { width: 'w-48' } }"
  >
    <template #item="{ item }">
      <div class="p-4 bg-gray-100 h-full">
        {{ item.label }}
        <AppTabContent :day="item" />
      </div>
    </template>
  </UTabs>
</template>
