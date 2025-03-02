<template>
  <NuxtLoadingIndicator />

  <AppNavBar class="z-50 absolute w-full" />
  <NuxtErrorBoundary>
    <!-- You use the default slot to render your content -->
    <div class="flex flex-col items-center w-full">
      <NuxtPage class="container" />
    </div>
  </NuxtErrorBoundary>

  <AppFooter />
  <!-- <AppFooter /> -->
</template>
<script setup>
provideHeadlessUseId(() => useId());
</script>
