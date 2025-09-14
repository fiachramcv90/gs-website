# Gaelscoil na bhFál - Coding Standards & Development Guidelines

## Overview

This document establishes coding standards and development patterns for the Gaelscoil na bhFál website project. These standards ensure consistency, maintainability, and proper handling of bilingual Irish-English content.

## Core Development Principles

### 1. Bilingual-First Development
- **Irish Primary**: Irish language content always appears first
- **English Secondary**: English translations follow with reduced visual prominence
- **Cultural Respect**: Maintain authentic Irish language usage and cultural context
- **Consistent Patterns**: Use established bilingual patterns throughout the codebase

### 2. Component-Driven Architecture
- **shadcn/ui Priority**: Use existing shadcn/ui components before creating custom ones
- **Accessibility First**: Maintain Radix UI accessibility features
- **Reusable Components**: Build for reuse across the bilingual context
- **Type Safety**: Leverage TypeScript for robust component interfaces

### 3. Performance and User Experience
- **Static First**: Prefer static generation for optimal performance
- **Mobile Responsive**: Implement mobile-first responsive design
- **Progressive Enhancement**: Ensure core functionality works without JavaScript
- **Irish Green Theme**: Maintain consistent Irish cultural theming

## File Organization Standards

### Directory Structure

```
app/
├── [route]/           # Next.js App Router pages
│   └── page.tsx      # Route component (required)
components/
├── ui/               # shadcn/ui components (do not modify)
└── [feature]-[type].tsx  # Custom components
lib/
└── [utility].ts     # Utility functions
```

### Naming Conventions

**Files and Directories**:
- Routes: `kebab-case` (e.g., `school-council/`)
- Components: `PascalCase.tsx` (e.g., `BilingualNav.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MONTH_NAMES`)

**Variables and Functions**:
```typescript
// Bilingual content objects
const navigationItems = [...]
const monthNames = [...]

// Component props
interface BilingualContentProps {
  irish: string;
  english: string;
}

// Event handlers
const handleNavigationClick = () => { ... }
```

## TypeScript Standards

### Type Definitions

**Bilingual Content Pattern**:
```typescript
interface BilingualText {
  irish: string;    // Primary language
  english: string;  // Secondary language
}

interface NavigationItem extends BilingualText {
  href: string;
  subItems?: BilingualText[];
}

interface SchoolEvent {
  title: string;    // Already bilingual format "Irish / English"
  date: string;     // ISO format YYYY-MM-DD
  time: string;     // 24-hour format HH:MM
  type: 'academic' | 'cultural' | 'wellness' | 'performance';
}
```

**Component Props**:
```typescript
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

interface BilingualComponentProps {
  title: BilingualText;
  content?: BilingualText;
  children?: React.ReactNode;
}
```

### Import Organization

**Import Order**:
```typescript
// 1. React and Next.js imports
import React from "react"
import Link from "next/link"

// 2. External libraries
import { Calendar, Users, BookOpen } from "lucide-react"

// 3. UI components (shadcn/ui)
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// 4. Custom components
import { BilingualNav } from "@/components/bilingual-nav"

// 5. Utilities
import { cn } from "@/lib/utils"
```

## Component Development Standards

### React Component Structure

**Standard Component Template**:
```typescript
"use client" // Only when needed for client-side features

import { ... } from "..."

interface ComponentProps {
  // Props definition
}

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Component logic here
  
  return (
    <div className="...">
      {/* Component JSX */}
    </div>
  )
}
```

**Bilingual Content Components**:
```typescript
interface BilingualSectionProps {
  title: BilingualText;
  content: BilingualText;
}

export function BilingualSection({ title, content }: BilingualSectionProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-primary mb-2">
        {title.irish}
      </h2>
      <p className="text-lg text-muted-foreground mb-4">
        {title.english}
      </p>
      <div className="space-y-2">
        <p className="text-foreground">{content.irish}</p>
        <p className="text-muted-foreground">{content.english}</p>
      </div>
    </section>
  )
}
```

### Styling Standards

**Tailwind CSS Patterns**:
```typescript
// Irish (primary) content styling
<h1 className="text-primary font-bold">
  {title.irish}
</h1>

// English (secondary) content styling  
<p className="text-muted-foreground opacity-80">
  {title.english}
</p>

// Interactive elements
<Button className="bg-primary hover:bg-primary/90">
  Tuilleadh Eolais / Learn More
</Button>

// Layout patterns
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Content grid */}
  </div>
</div>
```

**CSS Variable Usage**:
```css
/* Use established CSS variables from globals.css */
.custom-component {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}
```

### State Management

**Client Component State**:
```typescript
"use client"

import { useState } from "react"

export function InteractiveComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth())
  
  // State logic here
}
```

**Props Down Pattern** (preferred over context for this project):
```typescript
// Parent component passes data down
<CalendarComponent 
  events={calendarEvents}
  selectedMonth={currentMonth}
  onMonthChange={handleMonthChange}
/>
```

## Content Standards

### Bilingual Content Guidelines

**Content Structure Pattern**:
```typescript
// Navigation items
const menuItems = [
  {
    irish: "Baile",
    english: "Home",
    href: "/",
  },
  {
    irish: "Ár Ranganna", 
    english: "Our Classes",
    href: "/classes",
  }
]

// Page content
const pageContent = {
  welcome: {
    irish: "Fáilte go dtí suíomh gréasáin Gaelscoil na bhFál...",
    english: "Welcome to the Gaelscoil na bhFál website..."
  }
}
```

**Inline Bilingual Format**:
```typescript
// For buttons, links, and short text
<Button>Tuilleadh Eolais / Learn More</Button>
<Link href="/contact">Déan Teagmháil / Contact Us</Link>

// For events and announcements
const eventTitle = "Dráma na Nollag / Christmas Play"
```

### Content Validation Rules

1. **Irish Language Priority**: Irish text must always appear first
2. **Translation Accuracy**: English must be accurate translation, not interpretation
3. **Cultural Sensitivity**: Respect Irish language conventions and cultural context
4. **Consistency**: Use consistent terminology across the site
5. **Completeness**: All content must be available in both languages

## Error Handling and Validation

### Error Boundaries

```typescript
// Not currently implemented, but recommended for future
export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  // Error boundary implementation
}
```

### Form Validation (Future)

```typescript
import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(1, "Ainm riachtanach / Name required"),
  email: z.string().email("Ríomhphost neamhbhailí / Invalid email"),
  message: z.string().min(10, "Teachtaireacht rófhada / Message too short")
})
```

## Testing Standards (Future Implementation)

### Component Testing Template

```typescript
// Recommended for future implementation
import { render, screen } from '@testing-library/react'
import { BilingualSection } from './BilingualSection'

describe('BilingualSection', () => {
  it('displays Irish text prominently', () => {
    const props = {
      title: { irish: "Fáilte", english: "Welcome" },
      content: { irish: "Tánaiste", english: "Content" }
    }
    
    render(<BilingualSection {...props} />)
    
    // Irish text should be more prominent
    expect(screen.getByText("Fáilte")).toHaveClass("text-primary")
    expect(screen.getByText("Welcome")).toHaveClass("text-muted-foreground")
  })
})
```

### Accessibility Testing

```typescript
// Future implementation with axe-core
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('should not have accessibility violations', async () => {
  const { container } = render(<Component />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

## Performance Guidelines

### Image Optimization

```typescript
// Preferred: Next.js Image component
import Image from "next/image"

<Image
  src="/irish-school-children.jpg"
  alt="Students learning at Gaelscoil na bhFál"
  width={800}
  height={400}
  className="rounded-lg"
/>

// Avoid: Direct img tags (causes ESLint warnings)
<img src="..." alt="..." /> // ❌ Don't use
```

### Loading States

```typescript
export function CalendarPage() {
  const [loading, setLoading] = useState(true)
  
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">
          Ag lódáil... / Loading...
        </div>
      </div>
    )
  }
  
  return <CalendarContent />
}
```

### Code Splitting

```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic'

const CalendarWidget = dynamic(() => import('./CalendarWidget'), {
  loading: () => <p>Ag lódáil... / Loading...</p>
})
```

## Git Workflow Standards

### Commit Message Format

```
type: brief description in English

- Detailed changes in bullet points
- Include both Irish and English context when relevant
- Reference issue numbers if applicable

Examples:
feat: add bilingual navigation dropdown for school classes
fix: resolve Tailwind CSS configuration issues
docs: update development guidelines for bilingual content
```

### Branch Naming

```
feature/bilingual-calendar
fix/navigation-mobile-responsiveness  
docs/coding-standards
refactor/component-structure
```

### Pull Request Template

```markdown
## Changes Made
- List of changes

## Bilingual Content Validation
- [ ] Irish text appears first in all new content
- [ ] English translations are accurate
- [ ] Cultural context is appropriate

## Testing Checklist
- [ ] Component renders correctly on desktop
- [ ] Component renders correctly on mobile
- [ ] Accessibility features work (keyboard navigation, screen readers)
- [ ] No console errors or warnings
```

## Code Quality Tools

### ESLint Configuration

Current `.eslintrc.json`:
```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "warn"
  }
}
```

### Recommended Additional Rules (Future)

```json
{
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## Documentation Standards

### Component Documentation

```typescript
/**
 * BilingualNav - Main navigation component for the website
 * 
 * Handles bilingual navigation with Irish text primary and English secondary.
 * Includes mobile responsive hamburger menu and dropdown functionality.
 * 
 * @example
 * ```tsx
 * <BilingualNav />
 * ```
 */
export function BilingualNav() {
  // Component implementation
}
```

### README Pattern for New Features

```markdown
# Feature Name

## Purpose
Brief description of the feature in both Irish and English context.

## Usage
Code examples showing how to use the feature.

## Accessibility
Notes about accessibility considerations.

## Bilingual Content
Guidelines for content creators using this feature.
```

## Deployment and Environment Standards

### Environment Configuration

```typescript
// No environment variables currently needed
// Future admin panel may require:
const config = {
  DATABASE_URL: process.env.DATABASE_URL,
  ADMIN_SECRET: process.env.ADMIN_SECRET,
  // etc.
}
```

### Build Optimization

```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start", 
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

These coding standards ensure consistent, maintainable, and culturally appropriate development for the Gaelscoil na bhFál website while maintaining the bilingual Irish-English requirements and modern web development best practices.