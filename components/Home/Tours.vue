<template>
  <ContentList :path="`/${locale}/tours`" v-slot="{ list }">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our tours
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Welcome to Cusco, the ancient capital of the mighty Inca Empire and
            a treasure trove of cultural wonders and natural beauty. Nestled
            high in the Andes Mountains of Peru, Cusco beckons adventurers from
            around the globe with its rich history, vibrant traditions, and
            stunning landscapes.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
          >
            <div v-for="tour in list" :key="tour.title" class="flex flex-col">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div
                  class="mb-6 flex h-60 items-center justify-center rounded-lg"
                >
                  <img
                    :src="tour.thumbnail"
                    :alt="tour.title"
                    class="h-full object-cover object-center w-full rounded-xl bg-gray-900/5 shadow-lg sm:h-full sm:w-full"
                  />
                </div>
                {{ tour.title }}
              </dt>
              <dd
                class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"
              >
                <p class="flex-auto">{{ tour.description }}</p>
                <p class="mt-6">
                  <a
                    :href="tour.href"
                    class="text-sm font-semibold leading-6 text-indigo-600"
                    >Learn more <span aria-hidden="true">→</span></a
                  >
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </ContentList>
</template>

<script setup>
const { locale } = useI18n();
const tours = [
  {
    name: 'Cusco City Tour',
    description:
      'Embark on a journey through time as you explore the cobblestone streets and majestic plazas of Cusco on our City Tour. Discover architectural marvels like the imposing Cathedral and the ancient Inca fortress of Sacsayhuamán, while soaking in the vibrant atmosphere of this charming city.',
    href: '#',
    imageSrc: '/cusco-city.jpeg',
    imageAlt: 'Cusco City Tour',
  },
  {
    name: 'Sacred Valley',
    description:
      'Venture into the Sacred Valley of the Incas, where ancient ruins, bustling markets, and breathtaking scenery await. Marvel at the agricultural terraces of Pisac, wander through the ruins of Ollantaytambo, and immerse yourself in the rich culture of indigenous communities.',
    href: '#',
    imageSrc: '/sacred-valley.jpeg',
    imageAlt: 'Sacred Valley Tour',
  },
  {
    name: 'Machu Picchu',
    description:
      'No visit to Cusco is complete without a pilgrimage to the iconic Machu Picchu. Trek through lush cloud forests, traverse ancient Inca trails, and behold the awe-inspiring beauty of this UNESCO World Heritage Site. Let the magic of Machu Picchu transport you to a bygone era of Inca civilization.',
    href: '#',
    imageSrc: '/machu-picchu-lama.jpeg',
    imageAlt: 'Machu Picchu Tour',
  },
  {
    name: 'Maras Moray',
    description:
      'Discover the fascinating agricultural terraces of Maras and the enigmatic circular depressions of Moray. Learn about ancient Inca farming techniques and marvel at the stunning panoramic views of the Andean landscape.',
    href: '#',
    imageSrc: '/maras-moray.jpeg',
    imageAlt: 'Maras Moray Tour',
  },
  {
    name: 'Alpaca Ceremony in Patacancha',
    description:
      'Experience the mystical connection between Andean communities and their beloved alpacas with a traditional ceremony in Patacancha. Witness colorful rituals, learn about the importance of alpacas in Andean culture, and even participate in weaving demonstrations.',
    href: '#',
    imageSrc: '/quechua.jpeg',
    imageAlt: 'Alpaca Ceremony in Patacancha Tour',
  },
  {
    name: 'Rainbow Mountain (Vinicunca) and Palcoyo',
    description:
      'Embark on an unforgettable adventure to the breathtaking Rainbow Mountain and Palcoyo. Hike through rugged terrain, surrounded by stunning vistas of snow-capped peaks and vibrant mineral deposits, as you reach the surreal landscapes of Vinicunca and Palcoyo.',
    href: '#',
    imageSrc: '/rainbow-mountain.jpeg',
    imageAlt: 'Rainbow Mountain Tour',
  },
  {
    name: 'Trekking Adventures',
    description:
      'For the intrepid explorer, Cusco offers a plethora of trekking opportunities. From the challenging trails of Choquequirao and Salkantay to the off-the-beaten-path routes of Lares and Inca Jungle, immerse yourself in the raw beauty of the Andean wilderness.',
    href: '#',
    imageSrc: '/trekking.jpeg',
    imageAlt: 'Trekking Tour',
  },
];
</script>
