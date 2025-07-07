# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a travel agency website built with Nuxt 3, showcasing tours and destinations in Peru. The project focuses on personal travel guide services with multilingual support (English/Spanish) and is designed with a mobile-first approach.

## Development Commands

### Package Management
- **Install dependencies:** `pnpm install`
- **Package manager:** Uses pnpm (version 10.12.4)

### Development & Build
- **Development server:** `pnpm run dev` (starts on http://localhost:3000)
- **Build for production:** `pnpm run build`
- **Generate static site:** `pnpm run generate`
- **Preview production build:** `pnpm run preview`

### Code Quality
- **ESLint:** `pnpm run lint` (if available)
- **Type checking:** `pnpm run typecheck` (if available)
- **ESLint rules:** Configured in `eslint.config.mjs` with TypeScript and Vue-specific rules

## Architecture & Tech Stack

### Core Framework
- **Nuxt 3** with future compatibility version 4
- **Vue 3** with TypeScript support
- **SSR disabled** (SPA mode) for deployment flexibility

### Key Dependencies
- **@nuxt/ui-pro**: UI component library (primary design system)
- **@nuxtjs/tailwindcss**: Utility-first CSS framework
- **@nuxt/content**: Content management system
- **@nuxtjs/i18n**: Internationalization (EN/ES)
- **@nuxt/image**: Image optimization
- **@vueuse/core & @vueuse/motion**: Vue composables and animations
- **Zod**: TypeScript-first schema validation

### Database & Validation
- **better-sqlite3**: Local database for development
- **Zod schemas**: Comprehensive type validation in `app/shared/schemas/`

## File Structure & Conventions

### Directory Organization
```
app/
├── components/
│   ├── features/         # Feature-specific components
│   │   ├── home/        # Home page components
│   │   └── tours/       # Tour-related components
│   ├── layout/          # Layout components (navbar, footer)
│   └── ui/              # Reusable UI components
├── pages/               # File-based routing
├── layouts/             # Nuxt layouts
├── locales/             # i18n translation files
├── shared/              # Shared utilities and types
│   ├── schemas/         # Zod validation schemas
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
└── assets/              # Static assets (CSS, fonts)

content/                 # Content files
├── en/                  # English content
└── es/                  # Spanish content
```

### Component Patterns
- **Feature-based organization**: Components grouped by functionality
- **Composition API**: Use `<script setup>` syntax
- **TypeScript**: All components use TypeScript with proper type inference
- **Nuxt UI Pro**: Primary component library for consistent design

### Content Management
- **Nuxt Content**: Manages tours, destinations, and testimonials
- **Structured data**: Tours use comprehensive Zod schemas
- **Multilingual content**: Separate content directories for EN/ES
- **Collections**: Tours collection with type-safe schema validation

## Internationalization (i18n)

### Configuration
- **Locales**: English (default) and Spanish
- **Strategy**: `prefix_except_default` (English has no prefix, Spanish uses `/es/`)
- **Lazy loading**: Translation files loaded on demand
- **Browser detection**: Automatic locale detection with cookie persistence

### Translation Files
- **Location**: `app/locales/[locale].json`
- **Usage**: `{{ $t('key') }}` in templates, `t('key')` in composables

## Styling & Design

### CSS Framework
- **Tailwind CSS**: Utility-first styling
- **Custom CSS**: `app/assets/css/main.css` for global styles
- **Fonts**: Lora and Montserrat web fonts (optimized WOFF2)

### Design System
- **Nuxt UI Pro**: Primary component library
- **Color palette**: Teal primary, amber secondary, stone neutral
- **Mobile-first**: Responsive design with mobile prioritization

## Type System

### Schemas & Validation
- **Tour schema**: Comprehensive tour data structure in `app/shared/schemas/tour.ts`
- **Contact schema**: Form validation schemas
- **Type exports**: Centralized type definitions in `app/shared/types/index.ts`

### Key Types
- **Tour**: Complete tour data with itinerary, pricing, location
- **TourSummary**: Subset for listings
- **TourFilters**: Search and filter parameters
- **Locale**: 'en' | 'es'

## Development Guidelines

### Code Style
- **ESLint configuration**: Strict TypeScript and Vue rules
- **Quotes**: Single quotes preferred
- **Semicolons**: Not required (omit them)
- **Brace style**: 1TBS (one true brace style)
- **Vue components**: Multi-word component names disabled

### Performance Considerations
- **Image optimization**: Use `<NuxtImg>` component
- **Lazy loading**: Implement for non-critical content
- **Mobile-first**: Prioritize mobile performance
- **Bundle optimization**: Tree-shaking enabled

## Content Schema

### Tour Data Structure
Tours follow a comprehensive schema with:
- **Basic info**: title, slug, description, thumbnail
- **Classification**: category, difficulty, duration
- **Pricing**: flexible pricing structure with group sizes
- **Itinerary**: day-by-day breakdown with activities
- **Location**: coordinates, altitude, region
- **Additional info**: includes/excludes, highlights, tags

### Content Collections
- **Tours**: Type-safe tour collection with Zod validation
- **Destinations**: Location-based content
- **Testimonials**: Customer reviews and experiences

## Common Development Tasks

### Adding New Tours
1. Create JSON file in `content/[locale]/tours/[category]/`
2. Follow TourSchema structure for validation
3. Add corresponding translation files
4. Update navigation if needed

### Component Development
1. Use Nuxt UI Pro components when possible
2. Follow feature-based organization
3. Implement proper TypeScript types
4. Use Composition API with `<script setup>`

### Internationalization
1. Add translations to `app/locales/[locale].json`
2. Use `$t()` for template strings
3. Use `t()` composable in script sections
4. Maintain consistency across locales

## Important Notes

- **Mobile-first approach**: All development should prioritize mobile experience
- **Type safety**: Leverage TypeScript and Zod for runtime validation
- **Performance**: SSR disabled for deployment flexibility
- **SEO**: Implement proper meta tags and structured data
- **Contact system**: Uses AWS Lambda integration for form handling