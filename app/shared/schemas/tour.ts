import { z } from 'zod';

// Base schemas for reusable types
export const ItineraryItemSchema = z.object({
  day: z.number().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
  activities: z.array(z.string()).optional(),
  accommodation: z.string().optional(),
  meals: z.array(z.enum(['breakfast', 'lunch', 'dinner'])).optional(),
  altitude: z.number().optional(),
  distance: z.string().optional(),
  duration: z.string().optional(),
});

export const AdditionalInfoSchema = z.object({
  category: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().optional(),
  items: z.array(z.string()).optional(),
});

export const TourPriceSchema = z.object({
  currency: z.enum(['USD', 'EUR', 'PEN']).default('USD'),
  amount: z.number().positive(),
  groupSize: z.object({
    min: z.number().positive(),
    max: z.number().positive(),
  }),
  includes: z.array(z.string()).optional(),
  excludes: z.array(z.string()).optional(),
});

export const TourLocationSchema = z.object({
  name: z.string().min(1),
  coordinates: z
    .object({
      latitude: z.number().min(-90).max(90),
      longitude: z.number().min(-180).max(180),
    })
    .optional(),
  altitude: z.number().optional(),
  region: z.string().optional(),
});

// Main tour schema
export const TourSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  thumbnail: z.string().url(),
  images: z.array(z.string().url()).optional(),
  category: z.enum(['trekking', 'cultural', 'adventure', 'city', 'nature']),
  difficulty: z.enum(['easy', 'moderate', 'challenging', 'expert']),
  duration: z.number().positive(),
  durationUnit: z.enum(['hours', 'days', 'weeks']).default('days'),
  maxGroupSize: z.number().positive().optional(),
  minAge: z.number().positive().optional(),
  bestSeason: z.array(z.string()).optional(),
  highlights: z.array(z.string()).optional(),
  itinerary: z.array(ItineraryItemSchema).optional(),
  additionalInfo: z.array(AdditionalInfoSchema).optional(),
  pricing: z.array(TourPriceSchema).optional(),
  location: TourLocationSchema.optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  available: z.boolean().default(true),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

// Schema for tour listing/summary (subset of full tour)
export const TourSummarySchema = TourSchema.pick({
  id: true,
  title: true,
  slug: true,
  description: true,
  thumbnail: true,
  category: true,
  difficulty: true,
  duration: true,
  durationUnit: true,
  featured: true,
  available: true,
});

// Schema for tour filters
export const TourFiltersSchema = z.object({
  category: z
    .enum(['trekking', 'cultural', 'adventure', 'city', 'nature'])
    .optional(),
  difficulty: z.enum(['easy', 'moderate', 'challenging', 'expert']).optional(),
  duration: z
    .object({
      min: z.number().positive().optional(),
      max: z.number().positive().optional(),
    })
    .optional(),
  featured: z.boolean().optional(),
  available: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

export type Tour = z.infer<typeof TourSchema>;
export type TourSummary = z.infer<typeof TourSummarySchema>;
export type TourFilters = z.infer<typeof TourFiltersSchema>;
export type ItineraryItem = z.infer<typeof ItineraryItemSchema>;
export type AdditionalInfo = z.infer<typeof AdditionalInfoSchema>;
export type TourPrice = z.infer<typeof TourPriceSchema>;
export type TourLocation = z.infer<typeof TourLocationSchema>;
