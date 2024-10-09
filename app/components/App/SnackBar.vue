<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    aria-live="assertive"
    class="fixed inset-0 flex items-end sm:items-start px-4 py-6 sm:p-6 pointer-events-none"
  >
    <div class="flex flex-col items-center sm:items-end space-y-4 w-full">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="bg-white ring-opacity-5 shadow-lg rounded-lg ring-1 ring-black w-full max-w-sm overflow-hidden pointer-events-auto"
        >
          <div class="p-2">
            <div class="flex items-center">
              <div class="">
                <CheckCircleIcon
                  class="w-8 h-8 text-green-400"
                  aria-hidden="true"
                  v-if="snackBarContent === 'emailSuccess'"
                />
                <XCircleIcon
                  class="w-8 h-8 text-red-400"
                  aria-hidden="true"
                  v-if="snackBarContent === 'emailError'"
                />
              </div>
              <div class="flex-1 ml-3 pt-0.5 w-0">
                <p class="font-medium text-gray-900 text-sm">
                  {{ $t(`${snackBarContent}`) }}
                </p>
              </div>
              <div class="flex flex-shrink-0 ml-4">
                <button
                  type="button"
                  @click="show = false"
                  class="inline-flex bg-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { XCircleIcon, CheckCircleIcon } from '@heroicons/vue/24/outline';
import { XMarkIcon } from '@heroicons/vue/20/solid';

const props = defineProps({
  show: Boolean,
  snackBarContent: String,
});
const show = ref(props.show);

watchEffect(() => {
  show.value = props.show;
});
</script>
