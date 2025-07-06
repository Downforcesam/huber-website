import { z } from 'zod';
import type { FormError } from '../types';

/**
 * Validates data against a Zod schema and returns formatted errors
 */
export function validateWithSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: FormError[] } {
  try {
    const result = schema.parse(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: FormError[] = error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      return { success: false, errors };
    }
    return {
      success: false,
      errors: [{ field: 'general', message: 'Validation failed' }],
    };
  }
}

/**
 * Safely parses data with a Zod schema, returning null on failure
 */
export function safeParseWithSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): T | null {
  try {
    return schema.parse(data);
  } catch {
    return null;
  }
}

/**
 * Validates a single field against a schema
 */
export function validateField<T>(
  schema: z.ZodSchema<T>,
  fieldName: string,
  value: unknown
): string | null {
  try {
    // Create a test object with just the field we want to validate
    const testData = { [fieldName]: value } as any;
    schema.parse(testData);
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldError = error.errors.find((err) =>
        err.path.includes(fieldName)
      );
      return fieldError?.message || 'Invalid value';
    }
    return 'Validation error';
  }
}

/**
 * Formats Zod errors for display
 */
export function formatZodErrors(error: z.ZodError): Record<string, string> {
  const formatted: Record<string, string> = {};

  error.errors.forEach((err) => {
    const field = err.path.join('.');
    formatted[field] = err.message;
  });

  return formatted;
}

/**
 * Checks if a value is a valid email
 */
export function isValidEmail(email: string): boolean {
  const emailSchema = z.string().email();
  return emailSchema.safeParse(email).success;
}

/**
 * Checks if a value is a valid phone number
 */
export function isValidPhone(phone: string): boolean {
  const phoneSchema = z
    .string()
    .min(10)
    .regex(/^[\d\s\-\+\(\)]+$/);
  return phoneSchema.safeParse(phone).success;
}

/**
 * Sanitizes and validates a string input
 */
export function sanitizeString(input: string, maxLength = 1000): string {
  return input.trim().slice(0, maxLength).replace(/[<>]/g, ''); // Remove potential HTML tags
}

/**
 * Validates and formats a date string
 */
export function validateDate(dateString: string): Date | null {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return null;
    }
    return date;
  } catch {
    return null;
  }
}

/**
 * Validates a URL
 */
export function isValidUrl(url: string): boolean {
  const urlSchema = z.string().url();
  return urlSchema.safeParse(url).success;
}

/**
 * Creates a debounced validation function
 */
export function createDebouncedValidator<T>(
  schema: z.ZodSchema<T>,
  delay = 300
) {
  let timeoutId: NodeJS.Timeout | null = null;

  return (
    data: unknown,
    callback: (result: { success: boolean; errors?: FormError[] }) => void
  ) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      const result = validateWithSchema(schema, data);
      callback(result);
    }, delay);
  };
}
