// Re-export all types from schemas
export * from '../schemas/tour';
export * from '../schemas/contact';

// ============================================================================
// Core Application Types
// ============================================================================

export interface User {
  id: string;
  name: string;
  email: string;
  preferredLanguage: 'en' | 'es';
  createdAt: string;
  updatedAt: string;
}

export interface AppConfig {
  siteName: string;
  siteUrl: string;
  defaultLanguage: 'en' | 'es';
  supportedLanguages: ('en' | 'es')[];
  contactEmail: string;
  phoneNumber: string;
  whatsappNumber: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

// ============================================================================
// Navigation & UI Types
// ============================================================================

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
  external?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
  noindex?: boolean;
}

// ============================================================================
// API & Response Types
// ============================================================================

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  timestamp: string;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// ============================================================================
// Form & Validation Types
// ============================================================================

export interface FormField {
  name: string;
  label: string;
  type:
    | 'text'
    | 'email'
    | 'tel'
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'date'
    | 'number';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    custom?: (value: any) => boolean | string;
  };
}

export interface FormError {
  field: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isValid: boolean;
  errors: FormError[];
  touched: string[];
}

// ============================================================================
// Content & Media Types
// ============================================================================

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  credit?: string;
}

export interface Video {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  caption?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export interface Gallery {
  id: string;
  title: string;
  description?: string;
  images: Image[];
  featured?: boolean;
}

// ============================================================================
// Utility Types
// ============================================================================

export type Locale = 'en' | 'es';

export type Theme = 'light' | 'dark' | 'system';

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface Alert {
  id: string;
  type: AlertType;
  title: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
}

// ============================================================================
// Component Props Types
// ============================================================================

export interface BaseComponentProps {
  class?: string;
  style?: string;
  id?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: Image;
  href?: string;
  featured?: boolean;
}

// ============================================================================
// Event Types
// ============================================================================

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customProperties?: Record<string, any>;
}

export interface ContactEvent {
  type: 'form_submit' | 'email_click' | 'phone_click' | 'whatsapp_click';
  source: string;
  tourId?: string;
  metadata?: Record<string, any>;
}
