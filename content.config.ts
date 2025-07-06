import { defineCollection, defineContentConfig } from '@nuxt/content';
import { TourSchema } from './app/shared/schemas/tour';

export default defineContentConfig({
  collections: {
    tours: defineCollection({
      source: {
        include: 'en/tours/**/*.json',
        exclude: [],
      },
      type: 'data',
      schema: TourSchema,
    }),
  },
});
