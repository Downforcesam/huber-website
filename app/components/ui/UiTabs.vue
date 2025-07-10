<template>
  <div>
    <v-sheet
      color="#fff"
      rounded="lg"
      class="d-flex flex-row border container pa-10"
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
            class="bg-blue-500 text-none"
          ></v-tab>
        </template>

        <template v-slot:item="{ item }">
          <v-tabs-window-item :value="item.value" class="pa-4">
            <v-img cover :src="item.img" aspect-ratio="4/3" height="600">
            </v-img>
            <div class="flex flex-col w-full">
              <div class="flex items-center space-x-2 pt-2 text-5xl">
                <span>{{ t('day') }}</span>
                <span>{{ item.day }}</span>
              </div>
              <div class="flex">
                <p>
                  {{ item.description }}
                </p>
              </div>
            </div>
          </v-tabs-window-item>
        </template>
      </v-tabs>
    </v-sheet>
  </div>
</template>
<script setup>
const { t } = useI18n();
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
