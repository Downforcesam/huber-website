import { z } from 'zod';

// Simple contact form schema (from HomeContact.vue)
export const SimpleContactFormSchema = z.object({
  senderName: z.string().min(2, 'Name must be at least 2 characters'),
  senderEmail: z.string().email('Please enter a valid email'),
  senderSubject: z.string().min(5, 'Subject must be at least 5 characters'),
  senderMessage: z.string().min(10, 'Message must be at least 10 characters'),
});

// Custom tour request schema (from custom-tour.vue)
export const CustomTourRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  country: z.string().min(2, 'Please enter your country'),
  dates: z.string().optional(),
  duration: z.string().min(1, 'Please select duration'),
  groupSize: z.string().min(1, 'Please select group size'),
  budget: z.string().optional(),
  fitnessLevel: z.string().min(1, 'Please select fitness level'),
  interests: z.array(z.string()).optional(),
  destinations: z.string().optional(),
  dietary: z.string().optional(),
  health: z.string().optional(),
  message: z
    .string()
    .min(
      20,
      'Please tell me more about your dream adventure (at least 20 characters)'
    ),
});

// Contact form schema
export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .optional(),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject is too long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long'),
  tourInterest: z.string().optional(),
  preferredDate: z.string().optional(),
  groupSize: z
    .number()
    .positive()
    .max(50, 'Group size cannot exceed 50 people')
    .optional(),
  budget: z
    .object({
      min: z.number().positive().optional(),
      max: z.number().positive().optional(),
      currency: z.enum(['USD', 'EUR', 'PEN']).default('USD'),
    })
    .optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
  newsletter: z.boolean().default(false),
});

// Inquiry schema for tour-specific inquiries
export const TourInquirySchema = z.object({
  tourId: z.string().min(1),
  tourTitle: z.string().min(1),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .optional(),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  groupSize: z
    .number()
    .positive()
    .max(50, 'Group size cannot exceed 50 people'),
  specialRequests: z
    .string()
    .max(500, 'Special requests are too long')
    .optional(),
  budget: z
    .object({
      min: z.number().positive().optional(),
      max: z.number().positive().optional(),
      currency: z.enum(['USD', 'EUR', 'PEN']).default('USD'),
    })
    .optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
  newsletter: z.boolean().default(false),
});

// Newsletter subscription schema
export const NewsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  interests: z
    .array(z.enum(['trekking', 'cultural', 'adventure', 'city', 'nature']))
    .optional(),
  language: z.enum(['en', 'es']).default('en'),
});

export type SimpleContactForm = z.infer<typeof SimpleContactFormSchema>;
export type CustomTourRequest = z.infer<typeof CustomTourRequestSchema>;
export type ContactForm = z.infer<typeof ContactFormSchema>;
export type TourInquiry = z.infer<typeof TourInquirySchema>;
export type Newsletter = z.infer<typeof NewsletterSchema>;
