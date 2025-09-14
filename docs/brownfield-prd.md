# Gaelscoil na bhFál Website - Brownfield Product Requirements Document (PRD)

## Document Information

| Field | Value |
|-------|--------|
| **Project Name** | Gaelscoil na bhFál Website |
| **Document Type** | Brownfield PRD |
| **Version** | 1.0 |
| **Date** | 2025-09-14 |
| **Author** | Winston (Architect) |
| **Status** | In Development |

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2025-09-14 | 1.0 | Initial brownfield PRD creation | Winston |

## Executive Summary

This PRD documents the current state and future enhancements for the Gaelscoil na bhFál website - a bilingual Irish-language school website built with Next.js 14. The project serves as the digital presence for the school, providing information to parents, students, and the community in both Irish and English.

### Original Stakeholder Vision vs Current Implementation

**Original Request (from initial-ask.txt):**
- Bilingual navigation with Irish primary, English secondary
- 9 main navigation sections with specific sub-sections
- Reference to St Comgall's website as inspiration
- Editable calendar with monthly views
- Comprehensive class information system
- Virtual office with specific omissions

**Current Implementation Status:**
- ✅ Bilingual navigation implemented 
- ✅ Home page with Welcome/Vision sections
- ✅ Basic page structure for all main sections
- ✅ Calendar page with basic functionality
- ✅ News page with sample events
- ✅ School council and virtual office pages
- ⚠️ Missing detailed class information structure
- ⚠️ Limited content management capabilities
- ⚠️ No admin panel for content updates

### Future Enhancement: Content Management System

Based on stakeholder feedback, a key future enhancement will be an **admin panel** that allows school representatives to update content on certain pages without developer intervention.

## Current System Architecture

### Technology Stack

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **Frontend Framework** | Next.js | 14.2.25 | React-based SSG/SSR framework |
| **Language** | TypeScript | ^5 | Type-safe JavaScript |
| **Styling** | Tailwind CSS | ^3.4.17 | Utility-first CSS framework |
| **UI Components** | shadcn/ui + Radix UI | Latest | Accessible component library |
| **Icons** | Lucide React | ^0.454.0 | Icon library |
| **Fonts** | Geist Sans/Mono | ^1.3.1 | Typography system |
| **Deployment** | Vercel | - | Hosting and CI/CD |
| **Analytics** | Vercel Analytics | 1.3.1 | Usage tracking |

### Current Pages Structure

1. **Home** (`/`) - Welcome and Vision sections ✅ 
2. **Classes** (`/classes`) - Class listing page ✅
   - Individual class pages (`/classes/[slug]`) ✅
3. **Events** (`/events`) - Events listing page ✅
4. **Calendar** (`/calendar`) - Interactive calendar ✅
5. **News** (`/news`) - News articles page ✅
6. **School Council** (`/school-council`) - Council information ✅
7. **Virtual Office** (`/virtual-office`) - Resources page ✅
8. **Contact** (`/contact`) - Contact information ✅

### Navigation Implementation

The `BilingualNav` component implements the stakeholder's bilingual requirement:
- Irish text displayed prominently
- English text as secondary
- Dropdown menus for complex sections
- Mobile-responsive hamburger menu
- Green Irish-themed color scheme

## Gap Analysis: Current vs Stakeholder Requirements

### ✅ Implemented Features

1. **Bilingual Navigation Structure**
   - All 9 main navigation sections present
   - Irish/English text hierarchy maintained
   - Responsive design implemented

2. **Core Pages**
   - Home with Welcome and Vision sections
   - Basic structure for all required pages
   - Professional Irish green theme

3. **Technical Foundation**
   - Modern Next.js 14 App Router architecture
   - TypeScript for type safety
   - Accessible UI components
   - Deployed and live on Vercel

### ⚠️ Partially Implemented Features

1. **Class Information System**
   - **Current**: Basic class listing page
   - **Required**: Each class needs 4 subsections:
     - Rudaí tábhachtacha/Important things to remember
     - Téamaí na dTéarmaí/Term Themes  
     - Suíomhanna Úsáideacha/Websites That May Be Useful
     - Foireann/Staff

2. **Extended Schools Section**
   - **Current**: Basic navigation structure
   - **Required**: Detailed pages for each activity:
     - Cumann Bricfeasta/Breakfast Club
     - Peil/Football
     - Cumann Ealaíne/Art Club
     - Cumann TFC/ICT Club
     - Cumann Mata/Maths Club
     - Ionad Uíbh Eachach

3. **Calendar Functionality**
   - **Current**: Basic calendar display
   - **Required**: 
     - Clickable months
     - Current month auto-opens
     - Editable events (implies admin functionality)

4. **Virtual Office**
   - **Current**: Basic page structure
   - **Required**: Specific content based on St Comgall's site minus excluded items

### ❌ Missing Features

1. **Content Management System**
   - No admin panel for content updates
   - No database for dynamic content
   - All content is currently hardcoded

2. **Advanced Calendar Features**
   - Event editing capabilities
   - Monthly event management
   - Administrative controls

3. **Detailed Content Population**
   - Missing specific content for most subsections
   - Placeholder content in many areas
   - Need real school information

## Technical Debt and Constraints

### Current Technical Debt

1. **Configuration Issues Recently Resolved**
   - Tailwind CSS v3/v4 compatibility issues (RESOLVED)
   - React version compatibility problems (RESOLVED)
   - PostCSS configuration conflicts (RESOLVED)

2. **Content Management Limitations**
   - All content hardcoded in React components
   - No content versioning or approval workflow
   - Manual deployment required for content updates

3. **Missing Test Coverage**
   - No test framework configured
   - No automated testing in CI/CD pipeline
   - Manual testing only

### Development Constraints

1. **Bilingual Content Requirement**
   - All new content must be provided in Irish and English
   - Irish content takes priority in display hierarchy
   - Cultural sensitivity required for Irish language context

2. **Accessibility Standards**
   - Must maintain current accessibility features from Radix UI
   - Navigation must work with screen readers
   - Keyboard navigation required

3. **Deployment Environment**
   - Vercel hosting with automatic deployments
   - No server-side database currently
   - Static site generation (SSG) approach

## Enhancement Roadmap

### Phase 1: Content Completion (Current Priority)
1. **Complete Class Information Pages**
   - Add 4 subsections to each of 8 class pages
   - Populate with real or representative content
   - Ensure consistent bilingual formatting

2. **Extended Schools Detail Pages**
   - Create dedicated pages for each activity
   - Add descriptive content and contact information
   - Include schedules and enrollment information

3. **Virtual Office Content**
   - Research St Comgall's implementation
   - Create appropriate pages minus excluded items
   - Add forms and resource downloads

### Phase 2: Enhanced Calendar System
1. **Interactive Calendar Improvements**
   - Add event detail views
   - Implement month navigation
   - Add event categories and filtering

2. **Basic Content Management**
   - Simple admin interface for calendar events
   - Authentication for admin users
   - Event CRUD operations

### Phase 3: Full Content Management System (Future)
1. **Admin Panel Development**
   - User authentication system
   - Role-based permissions
   - Content editing interface for key pages

2. **Database Integration**
   - Add database for dynamic content
   - Content versioning system
   - Approval workflow for changes

3. **Advanced Features**
   - Image upload and management
   - Newsletter subscription system
   - Event notification system

## Success Metrics

### Technical Metrics
- **Performance**: Lighthouse score >90
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Proper meta tags and Irish language support
- **Mobile**: Responsive design working on all devices

### Content Metrics
- **Completeness**: All required pages have substantive content
- **Bilingual Coverage**: 100% content available in both languages
- **Update Frequency**: Admin panel enables weekly content updates

### User Experience Metrics
- **Navigation**: Users can find information within 3 clicks
- **Language Switching**: Clear Irish/English presentation
- **Calendar Usage**: Event details accessible and up-to-date

## Risk Assessment

### Technical Risks
1. **Content Management Complexity** (High)
   - Risk: Admin panel may require significant architectural changes
   - Mitigation: Phase implementation, consider headless CMS options

2. **Bilingual Content Maintenance** (Medium)
   - Risk: Content drift between Irish and English versions
   - Mitigation: Implement validation and review processes

3. **Accessibility Compliance** (Medium)
   - Risk: New features may break accessibility
   - Mitigation: Maintain testing standards, use established components

### Business Risks
1. **Content Accuracy** (High)
   - Risk: Incorrect school information published
   - Mitigation: Content review process with school stakeholders

2. **Cultural Sensitivity** (High)
   - Risk: Inappropriate handling of Irish language content
   - Mitigation: Irish language expert review for all content

## Technical Implementation Notes

### Current File Structure
```
gs-website/
├── app/                    # Next.js App Router pages
│   ├── calendar/          # Calendar functionality
│   ├── classes/           # Class information pages
│   ├── contact/           # Contact information
│   ├── events/            # Events listing
│   ├── news/              # News articles
│   ├── school-council/    # School council info
│   └── virtual-office/    # Virtual office resources
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   └── bilingual-nav.tsx # Main navigation
└── lib/                  # Utility functions
```

### Key Configuration Files
- `tailwind.config.ts` - Styling configuration with Irish theme
- `components.json` - shadcn/ui component configuration
- `CLAUDE.md` - Development guidelines and patterns
- `next.config.mjs` - Next.js build configuration

### Development Patterns
- Irish text always appears first in bilingual content
- CSS variables used for theming (Irish green primary colors)
- TypeScript strict mode enabled
- shadcn/ui components preferred over custom implementations
- Mobile-first responsive design approach

This PRD serves as the foundation for continued development of the Gaelscoil na bhFál website, ensuring all future enhancements align with both technical best practices and the unique cultural requirements of an Irish-language school.