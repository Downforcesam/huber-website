<template>
  <main>
    <pre>
    {{ data }}
  </pre
    >
  </main>
</template>
<script setup>
const { data } = await useAsyncData('all-articles', () =>
  queryContent('/en/blog').find()
);
console.log(data.value);
</script>
