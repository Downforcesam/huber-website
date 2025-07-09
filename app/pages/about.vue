<template>
  <div>
    <section
      class="relative bg-gradient-to-br from-brand-teal to-brand-gold text-white"
    >
      <div class="absolute inset-0 bg-black/20"></div>
      <div
        class="relative flex flex-col items-center mx-auto px-4 py-20 sm:py-32 text-center container"
      >
        <!-- Guide Image or Fallback -->
        <div v-if="guideData?.image" class="relative mb-6">
          <NuxtImg
            :src="guideData.image"
            :alt="guideData.title"
            class="shadow-xl mx-auto rounded-full w-40 h-40 object-cover"
          />
          <div
            v-if="guideData.experience?.years"
            class="right-2 bottom-2 absolute bg-yellow-400 shadow px-4 py-1 rounded-full font-semibold text-gray-900 text-sm"
          >
            {{ guideData.experience.years }}+ {{ t('yearsExperience') }}
          </div>
        </div>
        <div v-else class="mb-6">
          <div
            class="flex justify-center items-center bg-gray-200 mx-auto rounded-full w-40 h-40 text-brand-teal text-6xl"
          >
            👨‍🦱
          </div>
        </div>
        <h1 class="mb-2 font-bold text-3xl sm:text-4xl lg:text-5xl">
          {{ guideData?.title || t('aboutGuideName') }}
        </h1>
        <p class="opacity-90 mb-4 text-lg">
          {{ guideData?.subtitle || t('aboutGuideTitle') }}
        </p>
        <p class="mx-auto mb-8 max-w-2xl text-white/90 text-xl sm:text-2xl">
          {{ guideData?.description || t('aboutHeroSubtitle') }}
        </p>
      </div>
    </section>

    <section class="bg-white py-12 sm:py-20">
      <div class="mx-auto px-4 max-w-3xl">
        <div v-if="guideData">
          <!-- Intro -->
          <p v-if="guideData.intro" class="mb-8 text-gray-700 text-lg">
            {{ guideData.intro }}
          </p>

          <!-- Why Choose Me -->
          <div v-if="guideData.whyChooseMe" class="mb-12">
            <h2 class="mb-4 font-bold text-brand-teal text-2xl">
              {{ t('whyChooseTours') }}
            </h2>
            <div class="gap-6 grid md:grid-cols-2 mb-8">
              <div
                v-for="(feature, key) in guideData.whyChooseMe"
                :key="key"
                class="bg-gray-50 p-4 rounded-lg"
              >
                <h4 class="mb-2 font-semibold text-brand-teal">
                  {{ feature.title }}
                </h4>
                <p class="text-gray-700 text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <!-- Specialties -->
          <div v-if="guideData.specialties">
            <h2 class="mb-4 font-bold text-brand-teal text-2xl">
              {{ t('specialties') }}
            </h2>
            <div v-if="guideData.specialties.multiDayTrekking" class="mb-8">
              <h3 class="mb-2 font-bold text-brand-teal text-xl">
                {{ guideData.specialties.multiDayTrekking.title }}
              </h3>
              <ul class="ml-6 text-gray-700 list-disc">
                <li
                  v-for="item in guideData.specialties.multiDayTrekking.tours"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
            <div v-if="guideData.specialties.dayAdventures" class="mb-8">
              <h3 class="mb-2 font-bold text-brand-teal text-xl">
                {{ guideData.specialties.dayAdventures.title }}
              </h3>
              <ul class="ml-6 text-gray-700 list-disc">
                <li
                  v-for="item in guideData.specialties.dayAdventures.tours"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
            <div v-if="guideData.specialties.culturalImmersion" class="mb-8">
              <h3 class="mb-2 font-bold text-brand-teal text-xl">
                {{ guideData.specialties.culturalImmersion.title }}
              </h3>
              <ul class="ml-6 text-gray-700 list-disc">
                <li
                  v-for="item in guideData.specialties.culturalImmersion.tours"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Testimonials -->
          <div
            v-if="guideData.testimonials && guideData.testimonials.length"
            class="mb-12"
          >
            <h2 class="mb-4 font-bold text-brand-teal text-2xl">
              {{ t('testimonials') }}
            </h2>
            <div
              v-for="testimonial in guideData.testimonials"
              :key="testimonial.text"
              class="bg-gray-50 mb-4 p-4 rounded-lg"
            >
              <p class="text-gray-700 italic">"{{ testimonial.text }}"</p>
              <p class="mt-2 text-gray-500 text-sm">
                - {{ testimonial.author }}, {{ testimonial.country }}
              </p>
            </div>
          </div>

          <!-- Certifications -->
          <div
            v-if="guideData.certifications && guideData.certifications.length"
            class="mb-12"
          >
            <h2 class="mb-4 font-bold text-brand-teal text-2xl">
              {{ t('certifications') }}
            </h2>
            <ul class="ml-6 text-gray-700 list-disc">
              <li v-for="item in guideData.certifications" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <p class="text-gray-700">{{ t('aboutGuideIntro') }}</p>
        </div>
        <!-- Contact Buttons -->
        <div class="flex sm:flex-row flex-col justify-center gap-4 mt-10">
          <a
            v-if="guideData?.contact?.whatsapp"
            :href="`https://wa.me/${guideData.contact.whatsapp.replace(/\D/g, '')}`"
            target="_blank"
            class="inline-flex justify-center items-center bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
          >
            <UIcon name="i-simple-icons-whatsapp" class="mr-2 w-5 h-5" />
            WhatsApp Me
          </a>
          <a
            v-if="guideData?.contact?.email"
            :href="`mailto:${guideData.contact.email}`"
            class="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
          >
            {{ t('getInTouch') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();

const guideCollectionName = computed(() =>
  locale.value === 'es' ? 'esGuide' : 'enGuide'
);

const { data: guideData } = await useAsyncData(
  () => `guide-${locale.value}-about`,
  () => queryCollection(guideCollectionName.value).first()
);

// SEO
useHead({
  title: guideData.value?.title || 'About Huber - Your Adventure Guide in Peru',
  meta: [
    {
      name: 'description',
      content:
        guideData.value?.description ||
        'Meet Huber Huillca Diaz, your expert adventure guide in Peru since 2005. Discover personalized tours to Machu Picchu, Sacred Valley, Rainbow Mountain and more.',
    },
  ],
});

useSeoMeta({
  title: guideData.value?.title || 'About Huber - Your Adventure Guide in Peru',
  description:
    guideData.value?.description ||
    'Meet Huber Huillca Diaz, your expert adventure guide in Peru since 2005. Discover personalized tours to Machu Picchu, Sacred Valley, Rainbow Mountain and more.',
  ogTitle:
    guideData.value?.title || 'About Huber - Your Adventure Guide in Peru',
  ogDescription:
    guideData.value?.description ||
    'Meet Huber Huillca Diaz, your expert adventure guide in Peru since 2005. Discover personalized tours to Machu Picchu, Sacred Valley, Rainbow Mountain and more.',
  ogImage: guideData.value?.image || '/machu-picchu.jpg',
  twitterImage: guideData.value?.image || '/machu-picchu.jpg',
  twitterCard: 'summary_large_image',
});
</script>
