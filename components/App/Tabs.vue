<script setup lang="ts">
const items = [
  {
    slot: 'day1',
    label: 'Day 1',
  },
  {
    slot: 'day2',
    label: 'Day 2',
  },
];

const accountForm = reactive({ name: 'Benjamin', username: 'benjamincanac' });
const passwordForm = reactive({ currentPassword: '', newPassword: '' });

function onSubmitAccount() {
  console.log('Submitted form:', accountForm);
}

function onSubmitPassword() {
  console.log('Submitted form:', passwordForm);
}
</script>

<template>
  <UTabs
    :items="items"
    orientation="vertical"
    :ui="{ wrapper: 'flex items-start gap-4', list: { width: 'w-48' } }"
    class="bg-white"
  >
    <template #day1="{ item }">
      <UCard @submit.prevent="onSubmitAccount">
        <template #header>
          <p
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            {{ item.label }}
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Make changes to your account here. Click save when you're done.
          </p>
        </template>
        <UContainer>
          <img src="/public/cusco-2.jpeg" alt="" />
        </UContainer>
      </UCard>
    </template>

    <template #day2="{ item }">
      <UCard @submit.prevent="onSubmitAccount">
        <template #header>
          <p
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            {{ item.label }}
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Make changes to your account here. Click save when you're done.
          </p>
        </template>
        <UContainer>
          <img src="/public/cusco-city.jpeg" alt="" />
        </UContainer>
      </UCard>
    </template>
  </UTabs>
</template>
