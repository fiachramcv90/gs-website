# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server (Next.js)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a bilingual Irish-language school website built with Next.js 14, using the App Router architecture. The project follows these key patterns:

### Core Technologies
- **Next.js 14** with App Router (TypeScript)
- **Tailwind CSS** with CSS variables for theming
- **shadcn/ui** components (configured in `components.json`)
- **Radix UI** primitives for accessible components
- **Lucide React** for icons

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - Each route is a folder with a `page.tsx` file
  - `layout.tsx` contains the root layout with Irish (`lang="ga"`) HTML attribute
- `components/` - Reusable React components
  - `components/ui/` - shadcn/ui components
  - `components/bilingual-nav.tsx` - Main navigation component
- `lib/` - Utility functions and shared logic

### Bilingual Approach
The website serves a Gaelscoil (Irish-language school) and implements bilingualism throughout:

- **Navigation**: `BilingualNav` component displays both Irish and English text for all menu items
- **Content**: Pages show Irish text first, followed by English translations
- **URL Structure**: Routes use English slugs but content is bilingual
- **Metadata**: Set to Irish language (`lang="ga"`) at the root level

### UI Design System
- Uses shadcn/ui "new-york" style with CSS variables
- Theme configured in `tailwind.config.ts` with HSL color tokens
- Responsive design with mobile-first approach
- Consistent bilingual text patterns (Irish primary, English secondary)

### Key Components
- `BilingualNav`: Complex navigation with dropdowns, mobile menu, bilingual labels
- Layout uses Geist fonts (imported via next/font)
- Cards and components follow consistent Irish/English text hierarchy

### Development Notes
- TypeScript strict mode enabled
- Path alias `@/*` maps to project root
- No test framework currently configured
- Uses Vercel Analytics for tracking
- CSS variables approach allows for dynamic theming

When working with this codebase:
- Maintain the bilingual pattern (Irish first, English second)
- Follow the existing component structure and naming conventions
- Use the established shadcn/ui components rather than custom ones
- Respect the Irish language context and cultural elements