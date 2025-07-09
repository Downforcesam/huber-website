import { defineCollection, defineContentConfig } from '@nuxt/content';
import { TourSchema } from './app/shared/schemas/tour';
import { z } from 'zod';

// Define destination schema
const DestinationSchema = z.object({
  title: z.string(),
  slug: z.string(),
  featured: z.boolean().optional(),
  description: z.string(),
  longDescription: z.string(),
  location: z.string(),
  elevation: z.string(),
  climate: z.string(),
  bestTime: z.string(),
  thumbnail: z.string(),
  gallery: z.array(z.string()),
  highlights: z.array(z.string()),
  activities: z.array(z.string()),
  culturalSites: z.array(z.string()).optional(),
  travelTips: z.array(z.string()),
  gettingThere: z.object({
    fromCusco: z.string(),
    transportation: z.array(z.string()),
    duration: z.string(),
  }),
  accommodation: z.object({
    types: z.array(z.string()),
    recommendations: z.array(z.string()),
  }),
  additionalInfo: z.object({
    accessibility: z.string(),
    safety: z.string(),
    currency: z.string(),
    language: z.string(),
  }),
});

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
  },
});
