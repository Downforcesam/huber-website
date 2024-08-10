<template>
  <NuxtLoadingIndicator />
  <AppNavBar class="fixed z-50" />

  <NuxtPage class="flex flex-col items-center" />
  <AppFooter />
</template>
<script setup>
provideHeadlessUseId(() => useId());
</script>
