<template>
  <Menu as="div" class="relative z-50 ml-1">
    <div>
      <MenuButton
        class="relative flex bg-gray-800 rounded-full focus:ring-offset-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-gray-800"
      >
        <span class="absolute -inset-1.5" />
        <span class="sr-only">Open user menu</span>
        <!-- <img class="rounded-full w-8 h-8" :src="`/${locale}.svg`" alt="" /> -->
        <span class="px-4 py-2 text-sm text-white uppercase">{{ locale }}</span>
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="right-0 z-10 absolute bg-white ring-opacity-5 shadow-lg mt-2 py-1 rounded-md ring-1 ring-black w-12 uppercase origin-top-right focus:outline-none"
      >
        <MenuItem
          v-for="lang in availableLocales"
          :key="availableLocales[0]"
          v-slot="{ active }"
        >
          <NuxtLink
            :to="switchLocalePath(lang)"
            :class="[
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm',
            ]"
          >
            {{ lang }}
          </NuxtLink>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  const lang = locales.value.map((locale) => locale.code);
  return lang.filter((i) => i.code !== locale.value);
});

console.log(availableLocales.value);
</script>
