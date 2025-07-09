<template>
  <div class="flex flex-col items-center bg-white py-10 lg:py-16 w-full">
    <div class="px-4 container">
      <div class="mx-auto divide-y divide-gray-900/10 max-w-4xl">
        <h2 class="font-bold text-gray-900 text-2xl leading-10 tracking-tight">
          {{ $t('additionalInfo') }}
        </h2>
        <dl class="space-y-2 mt-10 divide-y divide-gray-900/10">
          <Disclosure
            as="div"
            v-for="item in info"
            :key="item"
            class="py-2"
            v-slot="{ open }"
          >
            <dt>
              <DisclosureButton
                class="flex justify-between items-start w-full text-gray-900 text-left"
              >
                <div class="flex justify-center items-center">
                  <h3 class="ml-4 font-bold">
                    {{ $t(`${Object.keys(item)[0]}`) }}
                  </h3>
                </div>
                <span class="flex justify-center ml-6 h-7">
                  <PlusIcon v-if="!open" class="w-6 h-6" aria-hidden="true" />
                  <MinusIcon v-else class="w-6 h-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2">
              <ul class="">
                <li
                  v-for="value in Object.values(item)[0]"
                  :key="value"
                  class="pl-4 list-disc list-inside"
                >
                  {{ value }}
                </li>
              </ul>

              <p class="text-gray-600 text-base leading-7"></p>
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

const props = defineProps({
  info: Array,
});
</script>
