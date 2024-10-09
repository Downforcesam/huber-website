<template>
  <div class="flex flex-col items-center p-10 container">
    <div class="w-full">
      <h2>Contact</h2>
      <FormKit
        type="form"
        :submit-label="$t('send')"
        @submit="send"
        id="contactForm"
        class="w-full"
      >
        <FormKit
          type="text"
          name="senderName"
          id="name"
          validation="required"
          label="Name"
          placeholder="Enter your name"
          help="Please enter your name"
        />
        <FormKit
          type="email"
          name="senderEmail"
          id="email"
          validation="email | required"
          label="Email"
          placeholder="Enter your email"
        />
        <FormKit
          type="text"
          name="senderSubject"
          id="subject"
          validation="required"
          label="Subject"
          placeholder="Subject"
        />
        <FormKit
          type="textarea"
          name="senderMessage"
          id="message"
          label="Message"
          placeholder="Enter your message"
        />
      </FormKit>
    </div>

    <AppSnackBar
      :show="show"
      :snackBarContent="snackbarMessage"
      ref="snackBarCompRef"
    />
  </div>
</template>

<script setup>
import { reset } from '@formkit/core';

const snackbarMessage = ref('emailSuccess');
const show = ref(false);
async function send(body) {
  const endpoint =
    'https://vd9abjq4o5.execute-api.eu-central-1.amazonaws.com/peru-excursion';

  try {
    await $fetch(endpoint, {
      method: 'POST',
      body,

      async onResponse({ request, response, options }) {
        // Log response
        snackbarMessage.value = response._data.message;
        hideSnackbar();
        show.value = true;
      },
    });
  } catch (error) {
    snackbarMessage.value = 'emailError';
  }

  async function hideSnackbar() {
    setTimeout(() => {
      show.value = false;
    }, 3000);
  }
  reset('contactForm');
}
</script>
