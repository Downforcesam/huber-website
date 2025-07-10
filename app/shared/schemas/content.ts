import { z } from 'zod';

// Guide schema for about page content
export const GuideSchema = z.object({
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

// Destination schema for destination content
export const DestinationSchema = z.object({
  title: z.string(),
  slug: z.string(),
  featured: z.boolean().optional(),
  type: z.string(), // Destination type (Archaeological, Natural, etc.)
  summary: z.string(), // Short version for cards
  description: z.string(), // Full detailed description
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

// Testimonial schema
export const TestimonialSchema = z.object({
  text: z.string(),
  author: z.string(),
  country: z.string(),
  rating: z.number().min(1).max(5).optional(),
  tour: z.string().optional(),
  date: z.string().optional(),
});

export type Guide = z.infer<typeof GuideSchema>;
export type Destination = z.infer<typeof DestinationSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
