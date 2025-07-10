<template>
  <section
    id="contact"
    class="bg-gradient-to-r from-blue-900 to-teal-800 py-16 sm:py-24"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-6 font-bold text-white text-3xl sm:text-4xl">
          {{ t('getInTouch') }}
        </h2>
        <p class="mx-auto max-w-3xl text-white/90 text-xl">
          Ready to explore Peru? Contact us to plan your perfect adventure. Our
          expert team is here to create unforgettable memories for you.
        </p>
      </div>

      <div class="mx-auto max-w-lg">
        <!-- Contact Form -->
        <UCard class="shadow-lg">
          <div class="p-6 pb-2 text-center">
            <h3 class="mb-1 font-bold text-gray-900 text-2xl">
              Send us a message
            </h3>
            <p class="text-gray-600 text-base">
              We'll get back to you within 24 hours
            </p>
          </div>

          <div class="px-6 pb-6">
            <UForm
              :schema="schema"
              :state="state"
              class="space-y-4"
              @submit="onSubmit"
              :loading="loading"
            >
              <UFormField :label="t('name')" name="senderName" required>
                <UInput
                  v-model="state.senderName"
                  :placeholder="t('enterName')"
                  size="lg"
                  icon="i-heroicons-user"
                  class="mx-auto w-full max-w-sm"
                />
              </UFormField>

              <UFormField :label="t('email')" name="senderEmail" required>
                <UInput
                  v-model="state.senderEmail"
                  type="email"
                  :placeholder="t('enterEmail')"
                  size="lg"
                  icon="i-heroicons-envelope"
                  class="mx-auto w-full max-w-sm"
                />
              </UFormField>

              <UFormField :label="t('subject')" name="senderSubject" required>
                <UInput
                  v-model="state.senderSubject"
                  :placeholder="t('enterSubject')"
                  size="lg"
                  icon="i-heroicons-chat-bubble-left-right"
                  class="mx-auto w-full max-w-sm"
                />
              </UFormField>

              <UFormField :label="t('message')" name="senderMessage" required>
                <UTextarea
                  v-model="state.senderMessage"
                  :placeholder="t('enterMessage')"
                  :rows="7"
                  size="lg"
                  class="mx-auto w-full max-w-md min-h-[140px]"
                />
              </UFormField>

              <div
                class="flex sm:flex-row flex-col justify-center gap-3 mx-auto pt-2 max-w-md"
              >
                <UButton
                  type="submit"
                  size="lg"
                  color="primary"
                  :loading="loading"
                  icon="i-heroicons-paper-airplane"
                  class="w-full sm:w-auto"
                >
                  {{ t('send') }}
                </UButton>

                <UButton
                  variant="outline"
                  size="lg"
                  color="secondary"
                  :to="`https://wa.me/your-number?text=${encodeURIComponent('Hi! I\'m interested in a Peru adventure. Can you help me plan something amazing?')}`"
                  target="_blank"
                  icon="i-simple-icons-whatsapp"
                  class="w-full sm:w-auto"
                >
                  {{ t('whatsappContact') }}
                </UButton>
              </div>
            </UForm>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SimpleContactFormSchema } from '../../../shared/schemas/contact';

const { t } = useI18n();
const toast = useToast();

// Form validation schema
const schema = SimpleContactFormSchema;

// Form state
const state = reactive({
  senderName: '',
  senderEmail: '',
  senderSubject: '',
  senderMessage: '',
});

const loading = ref(false);

async function onSubmit(event: any) {
  loading.value = true;

  const endpoint =
    'https://vd9abjq4o5.execute-api.eu-central-1.amazonaws.com/peru-excursion';

  try {
    await $fetch(endpoint, {
      method: 'POST',
      body: event.data,
    });

    // Success notification
    toast.add({
      title: t('emailSuccess'),
      description: t('emailSuccessDescription'),
      color: 'primary',
    });

    // Reset form
    Object.assign(state, {
      senderName: '',
      senderEmail: '',
      senderSubject: '',
      senderMessage: '',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);

    // Error notification
    toast.add({
      title: t('emailError'),
      description: t('emailErrorDescription'),
      icon: 'i-heroicons-exclamation-triangle',
      color: 'error',
    });
  } finally {
    loading.value = false;
  }
}
</script>
