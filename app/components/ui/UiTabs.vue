<template>
  <div class="w-full">
    <UTabs
      :items="items"
      class="w-full"
      :ui="{
        wrapper: 'w-full',
        container: 'w-full',
        list: 'w-full',
        tab: { base: 'w-full', active: 'bg-blue-500 text-white' },
      }"
    >
      <template #item="{ item }">
        <div class="p-4">
          <div class="flex lg:flex-row flex-col gap-6">
            <!-- Image -->
            <div class="lg:w-1/2" v-if="item.images && item.images.length > 0">
              <img
                :src="item.images[0]"
                :alt="item.title"
                class="rounded-lg w-full h-64 lg:h-96 object-cover"
              />
            </div>

            <!-- Content -->
            <div
              :class="
                item.images && item.images.length > 0 ? 'lg:w-1/2' : 'w-full'
              "
              class="flex flex-col"
            >
              <div class="flex items-center space-x-2 mb-4">
                <span class="font-bold text-gray-600 text-2xl">{{
                  t('day')
                }}</span>
                <span class="font-bold text-blue-600 text-3xl">{{
                  item.day
                }}</span>
              </div>

              <h3 class="mb-3 font-semibold text-gray-900 text-xl">
                {{ item.title }}
              </h3>

              <div class="flex-1">
                <p class="mb-4 text-gray-700 leading-relaxed">
                  {{ item.description }}
                </p>

                <!-- Day Stats -->
                <div
                  class="gap-4 grid grid-cols-2 sm:grid-cols-4 mb-6"
                  v-if="
                    item.distance ||
                    item.duration ||
                    item.elevation ||
                    item.accommodation
                  "
                >
                  <div
                    v-if="item.distance"
                    class="bg-gray-50 p-3 rounded-lg text-center"
                  >
                    <div class="text-gray-600 text-sm">
                      {{ t('distance') }}
                    </div>
                    <div class="font-semibold text-gray-900">
                      {{ item.distance }}
                    </div>
                  </div>
                  <div
                    v-if="item.duration"
                    class="bg-gray-50 p-3 rounded-lg text-center"
                  >
                    <div class="text-gray-600 text-sm">
                      {{ t('duration') }}
                    </div>
                    <div class="font-semibold text-gray-900">
                      {{ item.duration }}
                    </div>
                  </div>
                  <div
                    v-if="item.elevation"
                    class="bg-gray-50 p-3 rounded-lg text-center"
                  >
                    <div class="text-gray-600 text-sm">
                      {{ t('elevation') }}
                    </div>
                    <div class="font-semibold text-gray-900">
                      {{ item.elevation }}
                    </div>
                  </div>
                  <div
                    v-if="item.accommodation"
                    class="bg-gray-50 p-3 rounded-lg text-center"
                  >
                    <div class="text-gray-600 text-sm">
                      {{ t('accommodation') }}
                    </div>
                    <div class="font-semibold text-gray-900">
                      {{ item.accommodation }}
                    </div>
                  </div>
                </div>

                <!-- Activities -->
                <div v-if="item.activities" class="mb-6">
                  <h4 class="mb-3 font-semibold text-gray-900">
                    {{ t('activities') }}
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="activity in item.activities"
                      :key="activity"
                      class="flex items-start text-gray-600"
                    >
                      <svg
                        class="flex-shrink-0 mt-1 mr-2 w-4 h-4 text-brand-teal"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {{ activity }}
                    </li>
                  </ul>
                </div>

                <!-- Meals -->
                <div v-if="item.meals" class="mb-6">
                  <h4 class="mb-3 font-semibold text-gray-900">
                    {{ t('meals') }}
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="meal in item.meals"
                      :key="meal"
                      class="bg-brand-teal/10 px-3 py-1 rounded-full font-medium text-brand-teal text-sm"
                    >
                      {{ meal }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup>
const { t } = useI18n();

// Props
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
