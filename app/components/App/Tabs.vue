<template>
  <v-sheet
    color="#fff"
    rounded="lg"
    class="d-flex flex-row container pa-10 border"
  >
    <v-tabs
      v-model="tab"
      :items="tabs"
      align-tabs="start"
      direction="vertical"
      color="green"
      slider-color="green"
    >
      <template v-slot:tab="{ item }">
        <v-tab
          :prepend-icon="item.icon"
          :text="item.text"
          :value="item.value"
          class="text-none bg-blue-500"
        ></v-tab>
      </template>

      <template v-slot:item="{ item }">
        <v-tabs-window-item :value="item.value" class="pa-4 w-screen">
          <v-img cover :src="item.img" aspect-ratio="4/3" height="600"> </v-img>
          <div>Day</div>
          <div>description</div>
        </v-tabs-window-item>
      </template>
    </v-tabs>
  </v-sheet>
</template>
<script setup>
const tab = shallowRef('tab-1');
const tabs = [
  {
    icon: 'mdi-numeric-1',
    text: 'Day',
    value: 'tab-1',
    img: '/cusco-2.jpeg',
    label: 'Day',
    description: 'Day description',
    name: 'Day name',
  },
  {
    icon: 'mdi-numeric-2',
    text: 'Code of Conduct',
    value: 'tab-2',
    img: '/img/day.png',
    label: 'Day',
  },

  {
    icon: 'mdi-numeric-3',
    text: 'MIT License',
    value: 'tab-3',
    img: '/img/day.png',
    label: 'Day',
  },

  {
    icon: 'mdi-numeric-4',
    text: 'Security',
    value: 'tab-4',
    img: '/img/day.png',
    label: 'Day',
  },
];
</script>
