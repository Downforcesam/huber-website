import { defineCollection, defineContentConfig } from '@nuxt/content';
import { TourSchema } from './app/shared/schemas/tour';
import { z } from 'zod';

// Define guide schema
const GuideSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  image: z.string(),
  experience: z.object({
    years: z.number(),
    since: z.number(),
    clients: z.number(),
  }),
  intro: z.string(),
  whyChooseMe: z.object({
    localExpertise: z.object({
      title: z.string(),
      description: z.string(),
    }),
    personalizedAdventures: z.object({
      title: z.string(),
      description: z.string(),
    }),
    safetyProfessionalism: z.object({
      title: z.string(),
      description: z.string(),
    }),
    passionateStoryteller: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
  specialties: z.object({
    multiDayTrekking: z.object({
      title: z.string(),
      tours: z.array(z.string()),
    }),
    dayAdventures: z.object({
      title: z.string(),
      tours: z.array(z.string()),
    }),
    culturalImmersion: z.object({
      title: z.string(),
      tours: z.array(z.string()),
    }),
  }),
  testimonials: z.array(
    z.object({
      text: z.string(),
      author: z.string(),
      country: z.string(),
    })
  ),
  certifications: z.array(z.string()),
  contact: z.object({
    whatsapp: z.string(),
    email: z.string(),
  }),
});

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
