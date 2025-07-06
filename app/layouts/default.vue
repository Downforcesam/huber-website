<template>
  <div class="bg-white min-h-screen">
    <!-- Navigation -->
    <AppNavbar />

    <!-- Main content -->
    <main class="relative">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// Layout-specific logic can go here
</script>
