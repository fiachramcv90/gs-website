# Gaelscoil na bhFál - Brownfield Architecture Document

## Introduction

This document captures the CURRENT STATE of the Gaelscoil na bhFál website codebase, including technical implementation details, architectural patterns, and development constraints. It serves as a reference for AI agents working on enhancements and provides a realistic view of the system's actual implementation.

### Document Scope

Comprehensive documentation of the entire bilingual Irish-language school website system, covering frontend architecture, styling systems, deployment configuration, and development patterns.

### Change Log

| Date   | Version | Description                 | Author    |
| ------ | ------- | --------------------------- | --------- |
| 2025-09-14 | 1.0     | Initial brownfield analysis | Winston (Architect) |

## Quick Reference - Key Files and Entry Points

### Critical Files for Understanding the System

- **Main Entry**: `app/layout.tsx` (Next.js App Router root layout)
- **Homepage**: `app/page.tsx` (Main landing page)
- **Navigation**: `components/bilingual-nav.tsx` (Core navigation component)
- **Styling**: `app/globals.css` (Global styles and CSS variables)
- **Configuration**: `tailwind.config.ts`, `components.json`, `tsconfig.json`
- **Build Config**: `next.config.mjs`, `postcss.config.mjs`, `package.json`
- **Documentation**: `CLAUDE.md` (Development guidelines), `DEPLOYMENT_GUIDE.md`

### Enhancement Impact Areas (Based on PRD)

**Immediate Development Areas:**
- `app/classes/[slug]/page.tsx` - Needs 4 subsections per class
- `app/calendar/page.tsx` - Requires admin editing capabilities
- Virtual office content expansion
- Extended schools detail pages

**Future Admin Panel Areas:**
- New admin routes (`app/admin/`)
- Database integration points
- Content management components

## High Level Architecture

### Technical Summary

**Architecture Pattern**: JAMstack (JavaScript, APIs, Markup)
- **Frontend**: Next.js 14 with App Router (React 18.2.0)
- **Styling**: Tailwind CSS v3 + shadcn/ui components
- **Language**: TypeScript with strict mode
- **Deployment**: Vercel with automatic deployments
- **Analytics**: Vercel Analytics integration

### Actual Tech Stack (from package.json)

| Category  | Technology | Version | Notes                      |
| --------- | ---------- | ------- | -------------------------- |
| **Runtime**   | Node.js    | 18+     | Vercel runtime environment |
| **Framework** | Next.js    | 14.2.25 | App Router architecture |
| **Language**  | TypeScript | ^5      | Strict mode enabled |
| **UI Library** | React     | ^18.2.0 | Downgraded from v19 for compatibility |
| **Styling**   | Tailwind CSS | ^3.4.17 | Reverted from v4 for stability |
| **Components** | shadcn/ui | Latest | Built on Radix UI primitives |
| **Icons**     | Lucide React | ^0.454.0 | Icon system |
| **Fonts**     | Geist Sans/Mono | ^1.3.1 | Typography system |
| **Build Tools** | PostCSS | ^8.5 | CSS processing |
| **Analytics** | Vercel Analytics | 1.3.1 | Usage tracking |

### Repository Structure Reality Check

- **Type**: Single repository (monorepo approach)
- **Package Manager**: npm (package-lock.json present)
- **Build System**: Next.js built-in webpack + PostCSS
- **Deployment**: Git-based with Vercel automatic deployments

## Source Tree and Module Organization

### Project Structure (Actual)

```text
gs-website/
├── app/                     # Next.js 14 App Router pages
│   ├── calendar/           # Interactive calendar with events
│   │   └── page.tsx       # Basic calendar implementation
│   ├── classes/            # School class information
│   │   ├── [slug]/        # Dynamic class pages
│   │   │   └── page.tsx   # Individual class template
│   │   └── page.tsx       # Classes overview
│   ├── contact/            # Contact information
│   ├── events/             # School events listing
│   ├── news/               # Latest news and updates
│   ├── school-council/     # School council information
│   ├── virtual-office/     # Resources and forms
│   ├── favicon.ico         # Site favicon
│   ├── fonts/              # Local font files (Geist)
│   ├── globals.css         # Global styles + CSS variables
│   ├── layout.tsx          # Root layout (Irish lang="ga")
│   └── page.tsx            # Homepage
├── components/             # Reusable React components
│   ├── ui/                 # shadcn/ui components
│   │   ├── badge.tsx      # UI badge component
│   │   ├── button.tsx     # Button variations
│   │   ├── card.tsx       # Card layout components
│   │   ├── navigation-menu.tsx # Navigation primitives
│   │   └── separator.tsx  # Visual separators
│   └── bilingual-nav.tsx  # Main navigation (CRITICAL)
├── lib/                    # Utility functions
│   └── utils.ts           # Tailwind class merging utility
├── .bmad-core/            # BMad development framework
├── components.json        # shadcn/ui configuration
├── CLAUDE.md             # Development guidelines
├── DEPLOYMENT_GUIDE.md   # Deployment instructions
├── initial-ask.txt       # Original stakeholder requirements
├── next.config.mjs       # Next.js configuration (minimal)
├── package.json          # Dependencies and scripts
├── postcss.config.mjs    # PostCSS + Tailwind setup
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

### Key Modules and Their Purpose

**Core Navigation**: `components/bilingual-nav.tsx`
- Complex bilingual navigation with dropdowns
- Mobile responsive hamburger menu
- Irish green theme implementation
- Handles all 9 main navigation sections

**Page Structure**: Each route follows Next.js App Router conventions
- `page.tsx` = route component
- `[slug]` = dynamic routing for classes
- Consistent bilingual content patterns

**Styling System**: `app/globals.css` + `tailwind.config.ts`
- CSS variables for Irish green theme
- HSL color format for Tailwind compatibility
- Responsive design utilities

**UI Components**: `components/ui/`
- shadcn/ui "new-york" style components
- Built on Radix UI for accessibility
- Consistent with design system

## Data Models and APIs

### Current Data Architecture

**Static Data Approach**: All content currently hardcoded in React components
- No database integration
- No external APIs
- Sample data for calendar events (`app/calendar/page.tsx:25`)

### Content Patterns

**Bilingual Content Structure**:
```typescript
// Pattern used throughout codebase
interface BilingualContent {
  irish: string;    // Primary language (always first)
  english: string;  // Secondary language
}

// Example from calendar months
const months = [
  { irish: "Eanáir", english: "January", number: 0 },
  // ...
]
```

**Event Data Structure**:
```typescript
// Sample events structure from calendar
const sampleEvents: { [key: string]: { title: string; time: string; type: string; }[] } = {
  "2024-11-20": [
    {
      title: "Geal sa Gheimhreadh / Ditch the Dark",
      time: "09:00", 
      type: "wellness",
    },
  ],
}
```

### API Integration Points (Future)

**Planned for Admin Panel**:
- Content management endpoints
- Event CRUD operations
- User authentication
- File upload capabilities

## Technical Debt and Known Issues

### Recently Resolved Technical Debt

1. **Tailwind CSS Configuration** (RESOLVED 2025-09-14)
   - **Issue**: Tailwind v4 `@theme inline` approach caused complete styling breakdown
   - **Solution**: Reverted to stable Tailwind v3.4.17 with traditional configuration
   - **Impact**: All styling now working correctly

2. **React Version Compatibility** (RESOLVED 2025-09-14)
   - **Issue**: React v19 incompatible with Next.js 14.2.25
   - **Solution**: Downgraded to React 18.2.0
   - **Impact**: Build process stable

3. **PostCSS Configuration** (RESOLVED 2025-09-14)
   - **Issue**: `@tailwindcss/postcss` v4 plugin conflicts
   - **Solution**: Reverted to `tailwindcss + autoprefixer` approach
   - **Impact**: CSS processing working correctly

### Current Technical Debt

1. **Content Management Limitations**
   - All content hardcoded in React components
   - No versioning or approval workflow
   - Manual deployment required for content updates
   - **Impact**: High maintenance overhead for content changes

2. **Missing Test Infrastructure**
   - No test framework configured
   - No automated testing in CI/CD pipeline
   - ESLint warnings present but not enforced as errors
   - **Impact**: Manual testing only, potential regression risks

3. **Incomplete Content Structure**
   - Class pages missing required subsections (4 per class)
   - Extended schools pages not implemented
   - Virtual office content incomplete
   - **Impact**: Website doesn't meet full stakeholder requirements

### Development Constraints

1. **Bilingual Content Requirement**
   - All content must be provided in both Irish and English
   - Irish text always takes priority in display hierarchy
   - Cultural sensitivity required for Irish language context
   - **Impact**: Doubles content maintenance effort

2. **Static Site Limitations**
   - No server-side database currently
   - No user authentication system
   - No content management interface
   - **Impact**: Limited dynamic functionality

3. **Accessibility Requirements**
   - Must maintain Radix UI accessibility features
   - Screen reader compatibility required
   - Keyboard navigation essential
   - **Impact**: All new components must follow a11y standards

## Integration Points and External Dependencies

### External Services

| Service | Purpose | Integration Type | Key Files |
|---------|---------|------------------|-----------|
| **Vercel** | Hosting & CDN | Git-based deployment | `.vercel/`, `next.config.mjs` |
| **Vercel Analytics** | Usage tracking | React component | `app/layout.tsx:24` |
| **Geist Fonts** | Typography | npm package | `app/layout.tsx:3-4` |

### Internal Integration Points

**shadcn/ui Component System**:
- Configuration: `components.json`
- Installation path: `components/ui/`
- Styling: CSS variables in `globals.css`
- Utility: `lib/utils.ts` (cn function)

**Tailwind CSS Integration**:
- Config: `tailwind.config.ts`
- Processing: `postcss.config.mjs`
- Variables: `app/globals.css:5-32`
- Irish green theme implementation

**Next.js App Router Architecture**:
- Pages: `app/*/page.tsx`
- Layout: `app/layout.tsx`
- TypeScript: Path aliases `@/*` → project root

## Development and Deployment

### Local Development Setup

**Prerequisites**:
- Node.js 18+ 
- npm (latest)

**Actual Working Steps**:
```bash
cd /Users/fiachramcvicker/Documents/GitProjects/gs-website
npm install                 # Install dependencies
npm run dev                 # Start dev server (usually port 3001)
npm run build              # Test production build
npm run lint               # Check code quality
```

**Known Setup Issues**:
- Port 3000 often in use, dev server auto-selects 3001
- Build warnings about img tags (not errors, build succeeds)
- ESLint relaxed rules for bilingual content (`react/no-unescaped-entities: off`)

### Build and Deployment Process

**Build Configuration**:
- **Build Command**: `npm run build` (Next.js webpack)
- **Build Output**: `.next/` directory (static generation)
- **Production Server**: `npm run start`

**Deployment Workflow**:
1. Git push to `main` branch triggers Vercel build
2. Vercel runs `npm install && npm run build`
3. Automatic deployment to production URL
4. Previous deployments remain accessible for rollback

**Current Deployment URLs**:
- **Latest**: https://gs-website-7xdqpxkkd-fiachramcv90.vercel.app
- **Repository**: https://github.com/fiachramcv90/gs-website

### Environment Configuration

**Production Environment**:
- Platform: Vercel (Node.js 18.x runtime)
- SSL: Automatic (Vercel managed)
- CDN: Global edge network
- Analytics: Vercel Analytics enabled

**No Environment Variables Currently Required**:
- All configuration in code
- No secrets or API keys
- Static generation approach

## Testing Reality

### Current Test Coverage

**Testing Status**: No automated testing implemented
- **Unit Tests**: 0% coverage (no framework)
- **Integration Tests**: None
- **E2E Tests**: None
- **Manual Testing**: Primary QA method

**Code Quality Tools**:
```bash
npm run lint               # ESLint with relaxed rules
# No test runner configured
# No coverage reporting
```

**ESLint Configuration** (`.eslintrc.json`):
```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "warn"
  }
}
```

### Testing Considerations for Future

**Recommended Testing Strategy**:
- Jest + React Testing Library for components
- Playwright for E2E testing
- Visual regression testing for bilingual content
- Accessibility testing with axe-core

## Bilingual Implementation Patterns

### Language Display Hierarchy

**Consistent Pattern Throughout Codebase**:
```tsx
// Irish text first, English second
<h1>Fáilte go Gaelscoil na bhFál</h1>
<p>Welcome to Gaelscoil na bhFál</p>

// Navigation items
<div className="text-xs">{item.irish}</div>
<div className="text-xs opacity-80">{item.english}</div>

// Buttons and links
<Link href="/contact">Déan Teagmháil / Contact Us</Link>
```

**CSS Implementation**:
- Irish text: Full opacity/prominence
- English text: Reduced opacity (opacity-80)
- Consistent spacing and hierarchy

### Cultural Considerations

**Irish Language Context**:
- HTML lang attribute: `<html lang="ga">`
- Meta descriptions in Irish first
- Cultural elements in color scheme (Irish green)
- Respectful handling of Irish language content

## Performance and Optimization

### Current Performance Profile

**Next.js Static Generation**:
- All pages pre-rendered at build time
- Automatic code splitting
- Image optimization (where Next.js Image used)
- Font optimization with local files

**Bundle Analysis** (from build output):
```
Route (app)                              Size     First Load JS
┌ ○ /                                    197 B           113 kB
├ ○ /calendar                            2.5 kB          115 kB
├ ○ /classes                             197 B           113 kB
├ ƒ /classes/[slug]                      534 B           113 kB
```

**Performance Optimizations Needed**:
- Replace `<img>` tags with Next.js `<Image />` components
- Add loading states for interactive components
- Optimize font loading strategy

### Known Performance Issues

**Image Optimization**: ESLint warnings indicate direct `<img>` usage
- Location: `app/page.tsx:38`, `app/news/page.tsx`, etc.
- Impact: Slower LCP, higher bandwidth usage
- Solution: Migrate to Next.js Image component

## Security Considerations

### Current Security Profile

**Frontend Security**:
- No user authentication implemented
- No sensitive data exposure
- Static site approach minimizes attack surface
- Vercel provides automatic SSL and security headers

**Future Security Requirements** (for admin panel):
- Authentication system required
- Role-based access control
- Content validation and sanitization
- File upload security measures

## Change Impact Analysis

### Areas Requiring Updates for Full Requirements

**High Priority Changes**:
1. **Class Information System** (`app/classes/[slug]/page.tsx`)
   - Add 4 subsections per class
   - Create data structure for class content
   - Implement consistent layout patterns

2. **Extended Schools Pages**
   - Create individual pages for each activity
   - Add descriptive content and schedules
   - Link from navigation structure

3. **Virtual Office Content**
   - Research St Comgall's implementation
   - Create appropriate resource pages
   - Add downloadable forms

**Future Architectural Changes** (Admin Panel):
1. **Database Integration**
   - Add database for dynamic content
   - Content versioning system
   - User management

2. **Authentication System**
   - User login/logout functionality
   - Role-based permissions
   - Session management

3. **Content Management Interface**
   - WYSIWYG editor for bilingual content
   - Image upload and management
   - Calendar event management

## Deployment Configuration

### Vercel Configuration

**Automatic Deployment**:
- Trigger: Git push to `main` branch
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `.next` (Next.js default)

**Domain Configuration**:
- Primary: Auto-generated Vercel domain
- Custom domains: Not configured
- SSL: Automatic via Vercel

### Build Process Details

**Package Manager**: npm (evidenced by package-lock.json)
**Node Version**: 18+ (Vercel default)
**Build Steps**:
1. `npm install` - Install dependencies
2. `npm run build` - Next.js production build
3. Static file generation and optimization
4. Deployment to Vercel edge network

## Appendix - Useful Commands and Scripts

### Development Commands

```bash
# Development
npm run dev         # Start development server (usually :3001)
npm run build       # Production build
npm run start       # Start production server
npm run lint        # ESLint code quality check

# Git workflow
git add .
git commit -m "Description"
git push            # Triggers automatic Vercel deployment

# Dependencies  
npm install         # Install all dependencies
npm audit           # Check for vulnerabilities
```

### File Locations for Common Tasks

**Adding New Pages**: Create `app/[route]/page.tsx`
**Styling Changes**: Modify `app/globals.css` or `tailwind.config.ts`
**Navigation Updates**: Edit `components/bilingual-nav.tsx`
**Component Creation**: Use shadcn/ui CLI: `npx shadcn-ui add [component]`

### Debugging and Troubleshooting

**Common Issues**:
1. **Port Conflicts**: Dev server uses 3001 if 3000 taken
2. **Build Warnings**: ESLint warnings about img tags (non-blocking)
3. **Styling Issues**: Check CSS variable definitions in globals.css
4. **TypeScript Errors**: Verify import paths use `@/` alias

**Log Locations**:
- Build logs: Vercel dashboard
- Dev server: Terminal output
- Runtime errors: Browser console

### Configuration Files Summary

| File | Purpose | Key Settings |
|------|---------|--------------|
| `package.json` | Dependencies and scripts | React 18.2.0, Next.js 14.2.25, Tailwind 3.4.17 |
| `tailwind.config.ts` | Styling configuration | HSL colors, responsive breakpoints |
| `components.json` | shadcn/ui setup | new-york style, CSS variables enabled |
| `tsconfig.json` | TypeScript config | Strict mode, path aliases (`@/*`) |
| `next.config.mjs` | Next.js build config | Minimal configuration (defaults) |
| `postcss.config.mjs` | CSS processing | tailwindcss + autoprefixer |

This brownfield architecture document provides a comprehensive view of the current system state, enabling AI agents to understand the real implementation patterns, constraints, and technical debt while planning future enhancements for the Gaelscoil na bhFál website.