<template>
  <div>
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
          <v-tabs-window-item :value="item.value" class="pa-4">
            <v-img cover :src="item.img" aspect-ratio="4/3" height="600">
            </v-img>
            <div class="flex w-full">
              <div class="text-6xl flex p-3 items-center space-x-2">
                <span>{{ $t('day') }}</span>
                <span>{{ item.day }}</span>
              </div>
              <div class="flex p-3 line">
                {{ item.description }}
              </div>
            </div>
          </v-tabs-window-item>
        </template>
      </v-tabs>
    </v-sheet>
  </div>
</template>
<script setup>
inject('tour');
const tab = shallowRef('tab-1');
const tour = inject('tour');
const tabs = tour.value.itinerary.map((item, index) => ({
  icon: `mdi-numeric-${item.day}`,
  day: item.day,
  text: item.title,
  value: `tab-${item.day}`,
  img: item.image,
  description: item.activityDescription,
}));
</script>
