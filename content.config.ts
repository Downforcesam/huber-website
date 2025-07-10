import { defineCollection, defineContentConfig } from '@nuxt/content';
import { TourSchema } from './app/shared/schemas/tour';
import { GuideSchema, DestinationSchema } from './app/shared/schemas/content';

export default defineContentConfig({
  collections: {
    // English content
    enTours: defineCollection({
      source: {
        include: 'en/tours/**/*.json',
        exclude: [],
      },
      type: 'data',
      schema: TourSchema,
    }),
    enDestinations: defineCollection({
      source: {
        include: 'en/destinations/**/*.json',
        exclude: [],
      },
      type: 'data',
      schema: DestinationSchema,
    }),
    // Spanish content
    esTours: defineCollection({
      source: {
        include: 'es/tours/**/*.json',
        exclude: [],
      },
      type: 'data',
      schema: TourSchema,
    }),
    esDestinations: defineCollection({
      source: {
        include: 'es/destinations/**/*.json',
        exclude: [],
      },
      type: 'data',
      schema: DestinationSchema,
    }),
    // General content for both languages (markdown files)
    content: defineCollection({
      source: {
        include: '**/*.md',
        exclude: [],
      },
      type: 'page',
    }),
    // Guide content
    enGuide: defineCollection({
      source: {
        include: 'en/guide/**/*.json',
        exclude: [],
      },
      type: 'data',
      schema: GuideSchema,
    }),
    esGuide: defineCollection({
      source: {
        include: 'es/guide/**/*.json',
        exclude: [],
      },
      type: 'data',
      schema: GuideSchema,
    }),
  },
});
