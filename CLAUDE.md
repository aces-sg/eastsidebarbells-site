# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**FitMove** is a Next.js 14 fitness app landing page built with TypeScript and Tailwind CSS. It's designed to showcase a comprehensive fitness management platform with features like workout tracking, progress monitoring, and personalized training plans. The site uses modern web technologies including React Icons for iconography and a clean, professional design system.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (opens on localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture and Data-Driven Design

### Core Architectural Pattern

This codebase follows a **data-driven component architecture** where content is completely separated from presentation. This is the most important architectural principle to understand:

- **Data files** (`/src/data/*.ts`) contain all content, copy, and configuration
- **Components** (`/src/components/`) are pure presentation layers that consume data
- **Types** (`/src/types.ts`) define the data contracts between data and components

### Key Directories

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout with Header/Footer, metadata config, Google Analytics
│   ├── page.tsx      # Homepage composition (assembles sections)
│   └── globals.css   # Global styles and CSS variables
├── components/       # React components (pure presentation)
├── data/            # Content and configuration (single source of truth)
└── types.ts         # TypeScript interfaces for data structures
```

### Data Files Pattern

All site content lives in `/src/data/`:

- **`siteDetails.ts`**: Core site metadata, branding, URLs, GA ID, logo configuration
- **`menuItems.ts`**: Navigation menu items (Home, About, Membership, Contact)
- **`hero.ts`**: Hero section content with badge, heading, and CTA
- **`about.ts`**: About section with stats card (50K+ users, 4.8 rating, 120+ programs, 98% retention)
- **`coreValues.tsx`**: Four core value cards (Performance-Oriented, User-Friendly, Personalized, Data-Driven)
- **`howItWorks.ts`**: 4-step onboarding process
- **`pricing.ts`**: Pricing tier data (Starter, Pro, Elite, Team Plan)
- **`testimonials.ts`**: Customer testimonials
- **`faq.ts`**: FAQ items
- **`blog.ts`**: Blog post previews
- **`cta.ts`**: Call-to-action content for app download
- **`footer.ts`**: Footer links and social media handles

**Important**: When customizing content, always edit the data files first. Never hardcode content in components.

## Styling System

### CSS Variables (Theme Customization)

The design system uses CSS custom properties defined in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0c0a09;     /* Stone-950 */
  --primary: #fef08a;         /* Yellow-200 */
  --secondary: #bfdbfe;       /* Blue-200 */
  --primary-accent: #fde047;  /* Yellow-300 */
  --foreground-accent: #64748b; /* Slate-500 */
  --hero-background: #f0f9ff; /* Sky-50 */
  --lime: #d9f99d;           /* Lime-200 */
  --lime-accent: #bef264;    /* Lime-300 */
  --sky: #e0f2fe;            /* Sky-100 */
  --neutral: #fafaf9;        /* Neutral-50 */
}
```

These variables are mapped to Tailwind utilities in `tailwind.config.ts`. To change the color scheme, edit the CSS variables in `globals.css`.

### Typography

- **Primary font**: Figtree (Google Fonts) - used for all text
- Font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- Fonts are optimized using Next.js `next/font` in `layout.tsx`

## Component Patterns

### Section Components

Most landing page sections follow this pattern:

```typescript
<Section
  id="section-id"
  title="Section Title"
  description="Section description"
>
  <FeatureComponent />
</Section>
```

The `Section` component provides consistent layout, spacing, and structure. The `Container` component provides consistent max-width and padding.

### Data-Driven Components

Components like `Benefits`, `Pricing`, `FAQ`, and `Testimonials` import their data directly from `/src/data/`:

```typescript
import { benefits } from '@/data/benefits';
```

They then map over the data to render UI. To add/edit/remove items, modify the data files.

## Important Configuration Files

### Metadata and SEO

Metadata is configured in `src/app/layout.tsx` and pulls from `siteDetails.ts`:

- Open Graph images should be placed in `/public/images/og-image.jpg`
- Twitter images should be placed in `/public/images/twitter-image.jpg`
- Favicon should be placed at `/src/app/favicon.ico`

### Google Analytics

To enable Google Analytics, add your GA ID to `siteDetails.ts`:

```typescript
googleAnalyticsId: 'G-XXXXXXXXXX'
```

The `@next/third-parties/google` package handles the GA integration.

## Adding New Sections

To add a new landing page section:

1. Create a data file in `/src/data/newSection.ts` with content
2. Define TypeScript interface in `/src/types.ts` if needed
3. Create component in `/src/components/NewSection.tsx` that imports the data
4. Add the component to `/src/app/page.tsx` in the desired order

## Working with Icons

This template uses `react-icons` which provides 31+ icon libraries. Icons are imported in data files (e.g., `benefits.tsx`, `stats.tsx`) where they're part of the content structure:

```typescript
import { FiBarChart2 } from "react-icons/fi"; // Feather Icons
```

Browse available icons at: https://react-icons.github.io/react-icons/

## Key Dependencies

- **Next.js 14**: App Router, image optimization, font optimization
- **TypeScript**: Type safety for data structures
- **Tailwind CSS v3**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **@headlessui/react**: Accessible UI components (mobile menu)
- **react-icons**: Icon library access

## Deployment

The template is optimized for Vercel deployment. Configuration in `next.config.mjs` supports custom base paths if needed. The project includes a deploy button in the README for one-click Vercel deployment.
