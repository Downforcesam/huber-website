<template>
  <Menu as="div" class="z-50 relative ml-1" v-slot="{ open }">
    <MenuButton
      class="relative flex bg-white hover:shadow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 text-gray-700 text-sm transition-all"
    >
      <span class="absolute -inset-1.5" />
      <span class="sr-only">Open user menu</span>
      <!-- <img class="rounded-full w-8 h-8" :src="`/${locale}.svg`" alt="" /> -->
      <span class="text-sm uppercase">{{ locale }}</span>
    </MenuButton>

    <MenuItems
      class="right-0 z-10 absolute bg-white ring-opacity-5 shadow-lg mt-2 py-1 rounded-md focus:outline-none ring-1 ring-black w-12 uppercase origin-top-right"
    >
      <MenuItem
        as="div"
        v-for="lang in availableLocales"
        :key="availableLocales[0]"
        v-slot="{ active }"
      >
        <a
          @click="setLocale(lang)"
          :class="[
            active ? 'bg-brand-teal text-white' : 'text-gray-700',
            'block px-4 py-2 text-sm rounded-md transition-colors',
            'cursor-pointer',
          ]"
        >
          {{ lang }}
        </a>
      </MenuItem>
    </MenuItems>
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
</script>
