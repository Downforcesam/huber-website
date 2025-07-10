import { z } from 'zod';

// Base schemas for reusable types
export const ItineraryItemSchema = z.object({
  day: z.number().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
  activities: z.array(z.string()).optional(),
  accommodation: z.string().optional(),
  meals: z.array(z.string()).optional(),
  elevation: z.string().optional(),
  distance: z.string().optional(),
  duration: z.string().optional(),
});

export const AdditionalInfoSchema = z.record(z.string()).optional();

// Main tour schema - updated to match actual content files
export const TourSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  summary: z.string().min(1), // Short version for cards/hero
  description: z.string().min(1), // Full detailed description
  thumbnail: z.string(),
  gallery: z.array(z.string()).optional(),
  category: z.string().min(1),
  difficulty: z.string().min(1),
  duration: z.number().positive(),
  destinations: z.array(z.string()).optional(),
  price: z.number().positive(),
  currency: z.string().default('USD'),
  groupSize: z.string().optional(),
  featured: z.boolean().default(false),
  highlights: z.array(z.string()).optional(),
  included: z.array(z.string()).optional(),
  notIncluded: z.array(z.string()).optional(),
  whatToBring: z.array(z.string()).optional(),
  physicalRequirement: z.string().optional(),
  bestTime: z.string().optional(),
  itinerary: z.array(ItineraryItemSchema).optional(),
  additionalInfo: AdditionalInfoSchema,
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

// Schema for tour listing/summary (subset of full tour)
export const TourSummarySchema = TourSchema.pick({
  title: true,
  slug: true,
  summary: true,
  thumbnail: true,
  category: true,
  difficulty: true,
  duration: true,
  price: true,
  currency: true,
  featured: true,
});

// Schema for tour filters
export const TourFiltersSchema = z.object({
  category: z.string().optional(),
  difficulty: z.string().optional(),
  duration: z
    .object({
      min: z.number().positive().optional(),
      max: z.number().positive().optional(),
    })
    .optional(),
  featured: z.boolean().optional(),
  price: z
    .object({
      min: z.number().positive().optional(),
      max: z.number().positive().optional(),
    })
    .optional(),
});

export type Tour = z.infer<typeof TourSchema>;
export type TourSummary = z.infer<typeof TourSummarySchema>;
export type TourFilters = z.infer<typeof TourFiltersSchema>;
export type ItineraryItem = z.infer<typeof ItineraryItemSchema>;
export type AdditionalInfo = z.infer<typeof AdditionalInfoSchema>;
