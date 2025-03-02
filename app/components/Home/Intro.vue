<template>
  <main class="bg-white">
    <div class="isolate relative">
      <svg
        class="top-0 -z-10 absolute inset-x-0 stroke-gray-200 w-full h-[64rem] [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="fill-gray-50 overflow-visible">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <div
        class="top-0 right-0 left-1/2 -z-10 absolute blur-3xl -ml-24 lg:ml-24 xl:ml-48 overflow-hidden transform-gpu"
        aria-hidden="true"
      >
        <!-- <div
          class="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[50.0625rem] aspect-[801/1036]"
          style="
            clip-path: polygon(
              63.1% 29.5%,
              100% 17.1%,
              76.6% 3%,
              48.4% 0%,
              44.6% 4.7%,
              54.5% 25.3%,
              59.8% 49%,
              55.2% 57.8%,
              44.4% 57.2%,
              27.8% 47.9%,
              35.1% 81.5%,
              0% 97.7%,
              39.2% 100%,
              35.2% 81.4%,
              97.2% 52.8%,
              63.1% 29.5%
            );
          "
        /> -->
      </div>
      <div class="overflow-hidden">
        <div
          class="mx-auto px-6 lg:px-8 pt-36 sm:pt-60 lg:pt-32 pb-32 max-w-7xl"
        >
          <div
            class="lg:flex lg:items-center gap-x-14 mx-auto lg:mx-0 lg:max-w-none max-w-2xl"
          >
            <div
              v-motion-fade
              :delay="200"
              :duration="500"
              class="relative w-full max-w-xl xl:max-w-2xl lg:shrink-0"
            >
              <h1
                class="font-bold text-gray-900 text-4xl sm:text-6xl tracking-tight"
              >
                Discover Your Andean Adventure.
              </h1>
              <p
                class="mt-6 lg:max-w-none sm:max-w-md text-gray-600 text-lg leading-8"
              >
                Prepare to embark on a transformative journey through the heart
                of the Peruvian Andes with Peru Excursions. Our meticulously
                curated trips promise a harmonious blend of exhilarating
                adventure, cultural immersion, and awe-inspiring natural beauty.
                From the rugged peaks of the Andes to the vibrant tapestry of
                local communities, each expedition offers a unique opportunity
                to connect with the soul of this legendary landscape. Get ready
                to discover unforgettable experiences, forge lasting
                connections, and create memories that will linger long after
                your return home
              </p>
            </div>
            <div
              class="flex justify-end sm:justify-start gap-8 mt-14 sm:-mt-44 lg:mt-0 sm:pl-20 lg:pl-0"
            >
              <div
                class="flex-none space-y-8 lg:order-last xl:order-none ml-auto sm:ml-0 pt-32 sm:pt-80 lg:pt-36 xl:pt-80 w-44"
              >
                <div class="relative">
                  <NuxtImg
                    src="/landscape.jpeg"
                    alt=""
                    class="bg-gray-900/5 shadow-lg rounded-xl w-full object-cover aspect-[2/3]"
                  />
                  <div
                    class="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none"
                  />
                </div>
              </div>
              <div
                class="flex-none space-y-8 mr-auto sm:mr-0 sm:pt-52 lg:pt-36 w-44"
              >
                <div class="relative">
                  <NuxtImg
                    src="/cusco-2.jpeg"
                    alt=""
                    class="bg-gray-900/5 shadow-lg rounded-xl w-full object-cover aspect-[2/3]"
                  />
                  <div
                    class="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none"
                  />
                </div>
                <div class="relative">
                  <NuxtImg
                    src="/maras.jpeg"
                    alt=""
                    class="bg-gray-900/5 shadow-lg rounded-xl w-full object-cover aspect-[2/3]"
                  />
                  <div
                    class="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none"
                  />
                </div>
              </div>
              <div class="flex-none space-y-8 pt-32 sm:pt-0 w-44">
                <div class="relative">
                  <NuxtImg
                    src="/home-stay.jpeg"
                    alt=""
                    class="bg-gray-900/5 shadow-lg rounded-xl w-full object-cover aspect-[2/3]"
                  />
                  <div
                    class="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none"
                  />
                </div>
                <div class="relative">
                  <NuxtImg
                    src="/machu-picchu-lama.jpeg"
                    alt=""
                    class="bg-gray-900/5 shadow-lg rounded-xl w-full object-cover aspect-[2/3]"
                  />
                  <div
                    class="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
