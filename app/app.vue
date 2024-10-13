<template>
  <NuxtLoadingIndicator />

  <AppNavBar class="z-50 absolute w-full" />

  <NuxtPage class="flex flex-col items-center" />
  <AppFooter />
  <!-- <AppFooter /> -->
</template>
<script setup>
provideHeadlessUseId(() => useId());
</script>
