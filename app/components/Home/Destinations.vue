<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto px-6 lg:px-8 max-w-7xl">
      <div
        class="gap-x-8 gap-y-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
      >
        <div>
          <h2 class="font-semibold text-base text-indigo-600 leading-7">
            Customized Tours for Every Adventurer
          </h2>

          <p class="mt-6 text-base text-gray-600 leading-7">
            Whether you're an intrepid hiker seeking to conquer the Inca Trail
            or a culture enthusiast eager to immerse yourself in the traditions
            of indigenous communities, I'll tailor a tour to suit your interests
            and preferences.
          </p>
        </div>
        <dl
          class="gap-x-8 gap-y-10 lg:gap-y-16 grid grid-cols-1 sm:grid-cols-2 col-span-2 text-base text-gray-600 leading-7"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-9"
          >
            <dt class="font-semibold text-gray-900">
              <CheckIcon
                class="top-1 left-0 absolute w-5 h-5 text-indigo-500"
                aria-hidden="true"
              />
              {{ feature.name }}
            </dt>
            <dd class="mt-2">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid';

const features = [
  {
    name: 'Cusco City Tour',
    description:
      'Embark on a journey through time as you explore the cobblestone streets and majestic plazas of Cusco on our City Tour. Discover architectural marvels like the imposing Cathedral and the ancient Inca fortress of Sacsayhuamán, while soaking in the vibrant atmosphere of this charming city.',
  },
  {
    name: 'Sacred Valley Tour',
    description:
      'Venture into the Sacred Valley of the Incas, where ancient ruins, bustling markets, and breathtaking scenery await. Marvel at the agricultural terraces of Pisac, wander through the ruins of Ollantaytambo, and immerse yourself in the rich culture of indigenous communities.',
  },
  {
    name: 'Machu Picchu Tour',
    description:
      'No visit to Cusco is complete without a pilgrimage to the iconic Machu Picchu. Trek through lush cloud forests, traverse ancient Inca trails, and behold the awe-inspiring beauty of this UNESCO World Heritage Site. Let the magic of Machu Picchu transport you to a bygone era of Inca civilization.',
  },
  {
    name: 'Maras Moray Tour',
    description:
      'Discover the fascinating agricultural terraces of Maras and the enigmatic circular depressions of Moray. Learn about ancient Inca farming techniques and marvel at the stunning panoramic views of the Andean landscape.',
  },
  {
    name: 'Alpaca Ceremony in Patacancha',
    description:
      'Experience the mystical connection between Andean communities and their beloved alpacas with a traditional ceremony in Patacancha. Witness colorful rituals, learn about the importance of alpacas in Andean culture, and even participate in weaving demonstrations.',
  },
  {
    name: 'Rainbow Mountain (Vinicunca) and Palcoyo',
    description:
      'Embark on an unforgettable adventure to the breathtaking Rainbow Mountain and Palcoyo. Hike through rugged terrain, surrounded by stunning vistas of snow-capped peaks and vibrant mineral deposits, as you reach the surreal landscapes of Vinicunca and Palcoyo.',
  },
  {
    name: 'Trekking Adventures',
    description:
      'For the intrepid explorer, Cusco offers a plethora of trekking opportunities. From the challenging trails of Choquequirao and Salkantay to the off-the-beaten-path routes of Lares and Inca Jungle, immerse yourself in the raw beauty of the Andean wilderness.',
  },
];
</script>
