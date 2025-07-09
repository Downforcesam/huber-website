<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero section -->
    <div class="bg-gradient-to-r from-blue-900 to-teal-800 text-white">
      <div class="mx-auto px-4 py-16 sm:py-24 container">
        <div class="text-center">
          <h1 class="mb-6 font-bold text-3xl sm:text-4xl lg:text-5xl">
            {{ $t('createCustomTour') }}
          </h1>
          <p class="mx-auto max-w-3xl text-blue-100 text-lg sm:text-xl">
            {{ $t('customTourDescription') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Form section -->
    <div class="mx-auto px-4 py-12 sm:py-16 container">
      <div class="mx-auto max-w-4xl">
        <div class="bg-white shadow-sm p-6 sm:p-8 rounded-xl">
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-8"
            @submit="onSubmit"
            :loading="loading"
          >
            <!-- Personal Information -->
            <div class="gap-6 grid grid-cols-1 md:grid-cols-2">
              <UFormGroup label="Your Name" name="name" required>
                <UInput
                  v-model="state.name"
                  placeholder="Enter your full name"
                  size="lg"
                  icon="i-heroicons-user"
                />
              </UFormGroup>

              <UFormGroup label="Email Address" name="email" required>
                <UInput
                  v-model="state.email"
                  type="email"
                  placeholder="your@email.com"
                  size="lg"
                  icon="i-heroicons-envelope"
                />
              </UFormGroup>
            </div>

            <div class="gap-6 grid grid-cols-1 md:grid-cols-2">
              <UFormGroup label="Phone Number" name="phone">
                <UInput
                  v-model="state.phone"
                  placeholder="+1 (555) 123-4567"
                  size="lg"
                  icon="i-heroicons-phone"
                />
              </UFormGroup>

              <UFormGroup label="Country" name="country" required>
                <UInput
                  v-model="state.country"
                  placeholder="Where are you from?"
                  size="lg"
                  icon="i-heroicons-flag"
                />
              </UFormGroup>
            </div>

            <!-- Trip Details -->
            <div class="pt-8 border-t">
              <h3 class="mb-6 font-semibold text-gray-900 text-xl">
                {{ $t('tripDetails') }}
              </h3>

              <div class="gap-6 grid grid-cols-1 md:grid-cols-3">
                <UFormGroup label="Preferred Dates" name="dates">
                  <UInput
                    v-model="state.dates"
                    placeholder="e.g., June 2024"
                    size="lg"
                    icon="i-heroicons-calendar-days"
                  />
                </UFormGroup>

                <UFormGroup label="Duration" name="duration" required>
                  <USelect
                    v-model="state.duration"
                    :options="durationOptions"
                    placeholder="How many days?"
                    size="lg"
                  />
                </UFormGroup>

                <UFormGroup label="Group Size" name="groupSize" required>
                  <USelect
                    v-model="state.groupSize"
                    :options="groupSizeOptions"
                    placeholder="Number of people"
                    size="lg"
                  />
                </UFormGroup>
              </div>

              <div class="gap-6 grid grid-cols-1 md:grid-cols-2 mt-6">
                <UFormGroup label="Budget Range (USD)" name="budget">
                  <USelect
                    v-model="state.budget"
                    :options="budgetOptions"
                    placeholder="Select your budget"
                    size="lg"
                  />
                </UFormGroup>

                <UFormGroup label="Fitness Level" name="fitnessLevel" required>
                  <USelect
                    v-model="state.fitnessLevel"
                    :options="fitnessOptions"
                    placeholder="Your fitness level"
                    size="lg"
                  />
                </UFormGroup>
              </div>
            </div>

            <!-- Interests -->
            <div class="pt-8 border-t">
              <h3 class="mb-6 font-semibold text-gray-900 text-xl">
                {{ $t('interests') }}
              </h3>

              <UFormGroup label="What interests you most?" name="interests">
                <div class="gap-4 grid grid-cols-2 md:grid-cols-3">
                  <UCheckbox
                    v-for="interest in interestOptions"
                    :key="interest.value"
                    v-model="state.interests"
                    :value="interest.value"
                    :label="interest.label"
                  />
                </div>
              </UFormGroup>

              <UFormGroup
                label="Must-see destinations"
                name="destinations"
                class="mt-6"
              >
                <UTextarea
                  v-model="state.destinations"
                  placeholder="e.g., Machu Picchu, Rainbow Mountain, local villages..."
                  rows="3"
                  size="lg"
                />
              </UFormGroup>
            </div>

            <!-- Special Requirements -->
            <div class="pt-8 border-t">
              <h3 class="mb-6 font-semibold text-gray-900 text-xl">
                {{ $t('specialRequirements') }}
              </h3>

              <UFormGroup
                label="Dietary restrictions or allergies"
                name="dietary"
              >
                <UInput
                  v-model="state.dietary"
                  placeholder="e.g., vegetarian, gluten-free, allergies..."
                  size="lg"
                />
              </UFormGroup>

              <UFormGroup
                label="Any health conditions or mobility concerns?"
                name="health"
                class="mt-6"
              >
                <UTextarea
                  v-model="state.health"
                  placeholder="Please share anything I should know to plan the perfect trip for you..."
                  rows="3"
                  size="lg"
                />
              </UFormGroup>
            </div>

            <!-- Additional Message -->
            <div class="pt-8 border-t">
              <UFormGroup
                label="Tell me about your dream adventure"
                name="message"
                required
              >
                <UTextarea
                  v-model="state.message"
                  placeholder="Describe your ideal Peru experience. What's on your bucket list? What kind of memories do you want to create?"
                  rows="5"
                  size="lg"
                />
              </UFormGroup>
            </div>

            <!-- Submit -->
            <div class="pt-8 border-t">
              <div class="flex sm:flex-row flex-col gap-4">
                <UButton
                  type="submit"
                  size="xl"
                  :loading="loading"
                  class="flex-1 bg-brand-teal hover:bg-brand-teal/80 border-brand-teal hover:border-brand-teal/80 text-white"
                  icon="i-heroicons-paper-airplane"
                >
                  {{ $t('sendCustomRequest') }}
                </UButton>

                <UButton
                  variant="outline"
                  size="xl"
                  :to="whatsappLink"
                  target="_blank"
                  icon="i-simple-icons-whatsapp"
                  class="flex-1 hover:bg-brand-gold border-brand-gold text-brand-gold hover:text-white"
                >
                  {{ $t('discussOnWhatsapp') }}
                </UButton>
              </div>

              <p class="mt-4 text-gray-500 text-sm text-center">
                {{ $t('responseTime') }}
              </p>
            </div>
          </UForm>
        </div>
      </div>
    </div>

    <!-- Success/Error notifications -->
    <UNotifications />
  </div>
</template>

<script setup>
import { z } from 'zod';

const { $t } = useI18n();
const toast = useToast();

// Form validation schema
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  country: z.string().min(2, 'Please enter your country'),
  dates: z.string().optional(),
  duration: z.string().min(1, 'Please select duration'),
  groupSize: z.string().min(1, 'Please select group size'),
  budget: z.string().optional(),
  fitnessLevel: z.string().min(1, 'Please select fitness level'),
  interests: z.array(z.string()).optional(),
  destinations: z.string().optional(),
  dietary: z.string().optional(),
  health: z.string().optional(),
  message: z
    .string()
    .min(
      20,
      'Please tell me more about your dream adventure (at least 20 characters)'
    ),
});

// Form state
const state = reactive({
  name: '',
  email: '',
  phone: '',
  country: '',
  dates: '',
  duration: '',
  groupSize: '',
  budget: '',
  fitnessLevel: '',
  interests: [],
  destinations: '',
  dietary: '',
  health: '',
  message: '',
});

const loading = ref(false);

// Options for select fields
const durationOptions = [
  { label: '1 day', value: '1' },
  { label: '2-3 days', value: '2-3' },
  { label: '4-7 days', value: '4-7' },
  { label: '1-2 weeks', value: '7-14' },
  { label: '2+ weeks', value: '14+' },
];

const groupSizeOptions = [
  { label: 'Solo (1 person)', value: '1' },
  { label: 'Couple (2 people)', value: '2' },
  { label: 'Small group (3-6)', value: '3-6' },
  { label: 'Large group (7+)', value: '7+' },
];

const budgetOptions = [
  { label: 'Budget ($50-100/day)', value: 'budget' },
  { label: 'Mid-range ($100-200/day)', value: 'mid-range' },
  { label: 'Luxury ($200+/day)', value: 'luxury' },
  { label: "I'm flexible", value: 'flexible' },
];

const fitnessOptions = [
  { label: 'Low - Prefer easy walks', value: 'low' },
  { label: 'Moderate - Can handle some hiking', value: 'moderate' },
  { label: 'High - Love challenging treks', value: 'high' },
  { label: 'Expert - Bring on the adventure!', value: 'expert' },
];

const interestOptions = [
  { label: 'Ancient History & Archaeology', value: 'history' },
  { label: 'Mountain Trekking', value: 'trekking' },
  { label: 'Local Culture & Communities', value: 'culture' },
  { label: 'Photography', value: 'photography' },
  { label: 'Wildlife & Nature', value: 'wildlife' },
  { label: 'Culinary Experiences', value: 'culinary' },
  { label: 'Spiritual Journey', value: 'spiritual' },
  { label: 'Adventure Sports', value: 'adventure' },
];

// WhatsApp link with pre-filled message
const whatsappLink = computed(() => {
  const message = `Hi! I'm interested in creating a custom Peru tour. Here are my details:
  
Name: ${state.name || 'Not provided'}
Email: ${state.email || 'Not provided'}
Duration: ${state.duration || 'Not specified'}
Group Size: ${state.groupSize || 'Not specified'}
Fitness Level: ${state.fitnessLevel || 'Not specified'}

${state.message || "I'd love to discuss my dream Peru adventure with you!"}`;

  return `https://wa.me/your-number?text=${encodeURIComponent(message)}`;
});

async function onSubmit(event) {
  loading.value = true;

  const endpoint =
    'https://vd9abjq4o5.execute-api.eu-central-1.amazonaws.com/peru-excursion';

  try {
    await $fetch(endpoint, {
      method: 'POST',
      body: {
        ...event.data,
        type: 'custom-tour-request',
        interests: event.data.interests?.join(', ') || '',
      },
    });

    // Success notification
    toast.add({
      title: $t('customRequestSent'),
      description: $t('customRequestSuccess'),
      color: 'primary',
    });

    // Reset form
    Object.keys(state).forEach((key) => {
      if (Array.isArray(state[key])) {
        state[key] = [];
      } else {
        state[key] = '';
      }
    });
  } catch (error) {
    // Error notification
    toast.add({
      title: $t('customRequestError'),
      description: $t('customRequestErrorDescription'),
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red',
    });
  } finally {
    loading.value = false;
  }
}

// SEO
useHead({
  title: 'Create Custom Tour - Peru Excursions',
  meta: [
    {
      name: 'description',
      content:
        'Design your perfect Peru adventure with a local expert guide. Custom tours tailored to your interests, fitness level, and budget.',
    },
  ],
});
</script>
