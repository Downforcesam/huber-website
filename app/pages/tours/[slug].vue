<template>
  <div>
    <ToursIntro :title="data?.title" />
    <ToursDescription :tour="data" />
    <ToursDetails :tour="data" />
    <UiAccordion :itinerary="data?.itinerary" />
    <UiAdditionalInfo :info="data?.additionalInfo" />
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
const { locale } = useI18n();
const { data } = await useAsyncData('tours', () =>
  queryContent(`/${locale.value}/tours`).where({ slug }).findOne()
);

provide('tour', data);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  });
}
</script>
