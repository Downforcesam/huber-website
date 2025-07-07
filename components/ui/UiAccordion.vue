<template>
  <div class="flex flex-col items-center lg:hidden bg-white w-full">
    <div class="px-4 container">
      <div class="mx-auto divide-y divide-gray-900/10 max-w-4xl">
        <h2 class="font-bold text-2xl text-gray-900 leading-10 tracking-tight">
          {{ t('itinerary') }}
        </h2>
        <dl class="space-y-2 mt-10 divide-y divide-gray-900/10">
          <Disclosure
            as="div"
            v-for="day in itinerary"
            :key="day"
            class="py-2"
            v-slot="{ open }"
          >
            <dt>
              <DisclosureButton
                class="flex justify-between items-start w-full text-gray-900 text-left"
              >
                <div class="flex justify-center items-center">
                  <div class="flex flex-col justify-center items-center">
                    <span>
                      {{ t('day') }}
                    </span>
                    <span class="font-semibold text-base leading-7">{{
                      day.day
                    }}</span>
                  </div>
                  <h3 class="ml-4 font-bold">
                    {{ day.title }}
                  </h3>
                </div>
                <span class="flex justify-center ml-6 h-7">
                  <PlusIcon v-if="!open" class="w-6 h-6" aria-hidden="true" />
                  <MinusIcon v-else class="w-6 h-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2">
              <NuxtImg :src="day.image" class="rounded"> </NuxtImg>
              <p class="">
                {{ day.activityDescription }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline';

const { t } = useI18n();

const props = defineProps({
  itinerary: Object,
});
</script>
