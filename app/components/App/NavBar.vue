<template>
  <header class="bg-[#0A0D0A] w-full text-white">
    <nav class="flex justify-between items-center px-3" aria-label="Global">
      <div class="flex">
        <NuxtLink :to="localePath('/')" class="">
          <span class="sr-only">Peru Excursions</span>
          <NuxtImg class="w-auto h-24" src="/peru-excursion.svg" alt="" />
        </NuxtLink>
      </div>
      <div></div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div class="lg:flex lg:gap-x-12 hidden">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="font-semibold text-gray-900 text-sm leading-6"
          >{{ item.name }}
        </NuxtLink>
      </div>
      <!-- <AppLangSwitcher class="max-lg:hidden" /> -->
      <AppLangSwitcher />
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="z-10 fixed inset-0" />
      <DialogPanel
        class="right-0 z-10 fixed inset-y-0 bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto"
      >
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <NuxtImg
              class="w-auto h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 p-2.5 rounded-md text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-base text-gray-900 leading-7"
                >{{ item.name }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
const localePath = useLocalePath();

const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'Destinations', href: '/destinations' },
  // { name: 'About', href: '/about' },
  // { name: 'Contact', href: '/contact' },
];

const mobileMenuOpen = ref(false);
</script>
