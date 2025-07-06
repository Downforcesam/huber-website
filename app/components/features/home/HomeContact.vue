<template>
  <div id="contact" class="bg-white py-16 lg:py-24">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div class="mb-12 text-center">
        <UBadge color="primary" variant="soft" size="lg" class="mb-4">
          Get In Touch
        </UBadge>
        <h2
          class="mb-6 font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl"
        >
          Start Your Adventure Today
        </h2>
        <p class="mx-auto max-w-3xl text-gray-600 text-xl">
          Ready to explore Peru? Contact us to plan your perfect adventure. Our
          expert team is here to create unforgettable memories for you.
        </p>
      </div>

      <div class="items-start gap-12 grid grid-cols-1 lg:grid-cols-2">
        <!-- Contact Form -->
        <UCard class="shadow-lg">
          <template #header>
            <div class="text-center">
              <h3 class="mb-2 font-bold text-gray-900 text-2xl">
                Send us a message
              </h3>
              <p class="text-gray-600">We'll get back to you within 24 hours</p>
            </div>
          </template>

          <UForm
            :schema="schema"
            :state="state"
            class="space-y-6"
            @submit="onSubmit"
            :loading="loading"
          >
            <UFormField label="Name" name="senderName" required>
              <UInput
                v-model="state.senderName"
                placeholder="Enter your name"
                size="lg"
                icon="i-heroicons-user"
              />
            </UFormField>

            <UFormField label="Email" name="senderEmail" required>
              <UInput
                v-model="state.senderEmail"
                type="email"
                placeholder="Enter your email"
                size="lg"
                icon="i-heroicons-envelope"
              />
            </UFormField>

            <UFormField label="Subject" name="senderSubject" required>
              <UInput
                v-model="state.senderSubject"
                placeholder="What's this about?"
                size="lg"
                icon="i-heroicons-chat-bubble-left-right"
              />
            </UFormField>

            <UFormField label="Message" name="senderMessage" required>
              <UTextarea
                v-model="state.senderMessage"
                placeholder="Tell me about your dream adventure..."
                :rows="5"
                size="lg"
              />
            </UFormField>

            <div class="flex sm:flex-row flex-col gap-4">
              <UButton
                type="submit"
                size="lg"
                :loading="loading"
                class="flex-1"
                icon="i-heroicons-paper-airplane"
              >
                {{ t('send') }}
              </UButton>

              <UButton
                color="success"
                variant="outline"
                size="lg"
                :to="`https://wa.me/your-number?text=${encodeURIComponent('Hi! I\'m interested in a Peru adventure. Can you help me plan something amazing?')}`"
                target="_blank"
                icon="i-simple-icons-whatsapp"
                class="flex-1"
              >
                {{ t('whatsappContact') }}
              </UButton>
            </div>
          </UForm>
        </UCard>

        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="mb-6 font-bold text-gray-900 text-2xl">Get in touch</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <UIcon
                    name="i-heroicons-phone"
                    class="w-6 h-6 text-primary-600"
                  />
                </div>
                <div>
                  <p class="font-medium text-gray-900 text-lg">Phone</p>
                  <p class="text-gray-600">+51 123 456 789</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <UIcon
                    name="i-heroicons-envelope"
                    class="w-6 h-6 text-primary-600"
                  />
                </div>
                <div>
                  <p class="font-medium text-gray-900 text-lg">Email</p>
                  <p class="text-gray-600">info@peruadventures.com</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <UIcon
                    name="i-heroicons-map-pin"
                    class="w-6 h-6 text-primary-600"
                  />
                </div>
                <div>
                  <p class="font-medium text-gray-900 text-lg">Location</p>
                  <p class="text-gray-600">Cusco, Peru</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Contact Options -->
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="mb-4 font-semibold text-gray-900 text-lg">
              Quick Contact
            </h4>
            <div class="space-y-3">
              <UButton
                to="https://wa.me/your-number"
                target="_blank"
                color="success"
                variant="outline"
                icon="i-simple-icons-whatsapp"
                size="lg"
                block
              >
                WhatsApp Us
              </UButton>

              <UButton
                to="mailto:info@peruadventures.com"
                color="primary"
                variant="outline"
                icon="i-heroicons-envelope"
                size="lg"
                block
              >
                Send Email
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod';

const { t } = useI18n();
const toast = useToast();

// Form validation schema
const schema = z.object({
  senderName: z.string().min(2, 'Name must be at least 2 characters'),
  senderEmail: z.string().email('Please enter a valid email'),
  senderSubject: z.string().min(5, 'Subject must be at least 5 characters'),
  senderMessage: z.string().min(10, 'Message must be at least 10 characters'),
});

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
      icon: 'i-heroicons-check-circle',
      color: 'success',
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
