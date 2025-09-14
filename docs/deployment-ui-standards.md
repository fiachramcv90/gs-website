# Gaelscoil na bhFál - Deployment & UI Standards

## Deployment Standards

### Production Deployment Pipeline

**Current Deployment Architecture**:
- **Platform**: Vercel (Automatic Git-based deployment)
- **Trigger**: Git push to `main` branch
- **Build**: Automatic Next.js static generation
- **CDN**: Global edge network distribution
- **SSL**: Automatic certificate management

### Deployment Workflow

**Standard Deployment Process**:
```bash
# 1. Development and testing
npm run dev              # Local development
npm run build            # Test production build locally
npm run lint             # Code quality check

# 2. Version control
git add .
git commit -m "descriptive message"
git push origin main     # Triggers automatic deployment

# 3. Automatic Vercel process
# - Vercel detects push to main
# - Runs npm install
# - Executes npm run build  
# - Deploys static files to CDN
# - Updates live URL
```

**Build Configuration**:
```json
// package.json - Build commands
{
  "scripts": {
    "build": "next build",      // Production build
    "start": "next start",      // Production server
    "lint": "next lint"         // Code quality
  }
}
```

### Environment Management

**Current Environment Setup**:
- **Development**: Local machine (`npm run dev`)
- **Production**: Vercel hosted (automatic deployment)
- **Preview**: Vercel preview deployments for PRs

**No Environment Variables Required** (currently):
- All configuration in code
- No external API dependencies
- Static site approach

**Future Environment Variables** (for admin panel):
```env
# Database
DATABASE_URL=postgresql://...
DATABASE_ENCRYPT_KEY=...

# Authentication
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://...

# Content Management
ADMIN_SECRET_KEY=...
```

### Deployment Verification Checklist

**Post-Deployment Validation**:
- [ ] Homepage loads correctly with Irish green theme
- [ ] Bilingual navigation functions properly
- [ ] All main pages accessible (/classes, /calendar, /events, etc.)
- [ ] Mobile responsive design works on different screen sizes
- [ ] Irish language content displays with proper hierarchy
- [ ] Calendar events load correctly
- [ ] Footer links functional
- [ ] Site analytics tracking active

**Performance Verification**:
- [ ] Lighthouse score >90 for performance
- [ ] Core Web Vitals metrics acceptable
- [ ] Page load times <3 seconds
- [ ] Mobile optimization score >85

### Rollback Procedures

**Vercel Rollback Process**:
1. Access Vercel dashboard
2. Navigate to project deployments
3. Select previous successful deployment
4. Click "Promote to Production"
5. Verify rollback successful

**Git-based Rollback**:
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main  # Use with caution
```

## UI Design Standards

### Color System and Theme

**Irish Green Color Palette** (from `globals.css`):
```css
:root {
  /* Primary Colors (Irish Green Theme) */
  --primary: 142 71% 45%;        /* Irish green #15803d */
  --primary-foreground: 0 0% 100%; /* White text on green */
  
  /* Secondary Colors */
  --secondary: 84 81% 44%;       /* Bright green #84cc16 */
  --secondary-foreground: 217 10% 25%; /* Dark gray */
  
  /* Supporting Colors */
  --background: 0 0% 100%;       /* White background */
  --foreground: 217 10% 25%;     /* Dark gray text */
  --card: 142 69% 96%;           /* Light green cards #f0fdf4 */
  --muted: 142 69% 96%;          /* Light green muted areas */
  --border: 217 10% 82%;         /* Light gray borders */
}
```

**Color Usage Guidelines**:
- **Primary Green**: Navigation bar, primary buttons, section headers
- **Secondary Green**: Accent elements, hover states, icons
- **Light Green**: Card backgrounds, muted sections
- **Dark Gray**: Body text, secondary information
- **White**: Main background, button text on green

### Typography System

**Font Stack**:
```typescript
// Geist Sans (Primary)
import { GeistSans } from "geist/font/sans"

// Geist Mono (Code/Technical content)
import { GeistMono } from "geist/font/mono"

// CSS Variables
--font-sans: var(--font-geist-sans);
--font-mono: var(--font-geist-mono);
```

**Typography Hierarchy**:
```css
/* Headings */
h1: text-4xl md:text-6xl font-bold      /* Main page titles */
h2: text-3xl font-bold                  /* Section headers */
h3: text-xl font-semibold              /* Subsection headers */

/* Body Text */
p: text-lg                             /* Primary content */
p: text-base                           /* Standard content */
p: text-sm                             /* Secondary content */

/* Bilingual Hierarchy */
.irish-primary: text-primary font-bold     /* Irish text prominence */
.english-secondary: text-muted-foreground opacity-80  /* English text secondary */
```

### Component Design Patterns

**Card Component Usage**:
```typescript
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <Icon className="h-8 w-8 text-primary mb-2" />
    <CardTitle className="text-lg">Title Irish / English</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Description text</p>
  </CardContent>
</Card>
```

**Button Variations**:
```typescript
// Primary actions
<Button size="lg">
  Tuilleadh Eolais / Learn More
</Button>

// Secondary actions  
<Button variant="outline" size="lg">
  Déan Teagmháil / Contact Us
</Button>

// Navigation buttons
<Button variant="ghost" size="sm">
  Féach / View
</Button>
```

**Navigation Design Pattern**:
```typescript
// Bilingual navigation item
<NavigationMenuTrigger className="bg-transparent hover:bg-primary-foreground/10">
  <div className="text-center">
    <div className="text-xs">{item.irish}</div>
    <div className="text-xs opacity-80">{item.english}</div>
  </div>
</NavigationMenuTrigger>
```

### Responsive Design Standards

**Breakpoint System** (Tailwind CSS defaults):
```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Laptops */
2xl: 1536px /* Large screens */
```

**Mobile-First Responsive Patterns**:
```typescript
// Layout containers
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
// Grid layouts
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

// Navigation responsive
<div className="hidden lg:block">        // Desktop nav
<div className="lg:hidden">              // Mobile nav

// Typography responsive
<h1 className="text-4xl md:text-6xl">   // Larger on desktop
```

**Mobile Navigation Standards**:
- Hamburger menu for screens <1024px
- Touch-friendly button sizes (minimum 44px)
- Swipe-friendly spacing
- Readable text at mobile sizes

### Accessibility Standards

**WCAG 2.1 AA Compliance Requirements**:

**Color Contrast**:
- Primary text: 4.5:1 minimum ratio
- Large text (18pt+): 3:1 minimum ratio
- Interactive elements: Clear focus indicators

**Keyboard Navigation**:
```typescript
// Focus management
<Button className="focus:ring-2 focus:ring-primary focus:outline-none">

// Skip links (recommended for future)
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

**Screen Reader Support**:
```typescript
// Semantic HTML structure
<nav aria-label="Main navigation">
<main aria-label="Page content">
<section aria-labelledby="section-heading">

// ARIA labels for bilingual content
<h2 id="welcome-heading" lang="ga">
  Fáilte
</h2>
<p lang="en">Welcome</p>

// Alternative text for images
<img 
  src="..." 
  alt="Students learning in Irish at Gaelscoil na bhFál"
/>
```

### Icon and Asset Standards

**Icon System**:
```typescript
import { Calendar, Users, BookOpen, Award, Heart, Globe } from "lucide-react"

// Standard icon sizing
<Icon className="h-8 w-8 text-primary" />      // Card headers
<Icon className="h-12 w-12 text-secondary" />  // Feature highlights
<Icon className="h-6 w-6" />                   // Inline icons
```

**Image Guidelines**:
- Use Next.js Image component for optimization
- Provide descriptive alt text in English
- Include cultural context where appropriate
- Optimize for web (WebP format preferred)

**File Organization**:
```
public/
├── favicon.ico                    # Site favicon
├── images/
│   ├── school-photos/            # School-related images
│   ├── events/                   # Event images
│   └── assets/                   # UI assets
app/fonts/                        # Local font files
└── GeistVF.woff, GeistMonoVF.woff
```

### Form Design Standards (Future)

**Form Layout Pattern**:
```typescript
<form className="space-y-6">
  <div>
    <label className="block text-sm font-medium text-foreground">
      Ainm / Name *
    </label>
    <input 
      className="mt-1 block w-full rounded-md border-border bg-background"
      required
    />
  </div>
  
  <Button type="submit" className="w-full">
    Seol / Submit
  </Button>
</form>
```

**Validation Design**:
```typescript
// Error states
<input className="border-destructive focus:ring-destructive" />
<p className="text-sm text-destructive">
  Earráid: Ainm riachtanach / Error: Name required
</p>

// Success states  
<input className="border-green-500 focus:ring-green-500" />
```

### Animation and Interaction Standards

**Transition Standards**:
```css
/* Hover effects */
.hover-transition {
  transition: all 0.2s ease-in-out;
}

/* Focus effects */
.focus-ring {
  transition: box-shadow 0.15s ease-in-out;
}

/* Loading states */
.loading-spinner {
  animation: spin 1s linear infinite;
}
```

**Interactive Elements**:
```typescript
// Hover states for cards
<Card className="hover:shadow-lg transition-shadow cursor-pointer">

// Button hover effects  
<Button className="hover:bg-primary/90 transition-colors">

// Navigation hover
<Link className="hover:text-secondary transition-colors">
```

### Content Management UI Standards (Future)

**Admin Interface Guidelines**:
- Consistent with main site design
- Clear Irish/English content separation
- WYSIWYG editor with bilingual preview
- Form validation in both languages
- Save/preview/publish workflow

**Content Editor Design**:
```typescript
// Future admin panel structure
<div className="admin-layout">
  <aside className="admin-sidebar">
    {/* Navigation */}
  </aside>
  <main className="admin-content">
    <div className="bilingual-editor">
      <div className="irish-content">
        <label>Ábhar Gaeilge / Irish Content</label>
        <textarea />
      </div>
      <div className="english-content">
        <label>English Content</label>
        <textarea />
      </div>
    </div>
  </main>
</div>
```

### Performance Standards

**Image Optimization**:
- Use Next.js Image component
- Lazy loading by default
- Responsive image sizing
- WebP format with fallbacks

**Code Splitting**:
- Route-based splitting (automatic with App Router)
- Component-level splitting for large features
- Dynamic imports for admin functionality

**Bundle Size Targets**:
- First Load JS: <120KB per page
- Runtime JS: <50KB additional per route
- CSS: Minimal unused styles
- Images: Optimized and compressed

### Quality Assurance Standards

**Visual Testing Checklist**:
- [ ] Irish green theme consistent across all pages
- [ ] Bilingual hierarchy properly displayed
- [ ] Mobile responsive at all breakpoints
- [ ] Focus states visible and accessible
- [ ] Loading states provide feedback
- [ ] Error states clearly communicate issues

**Cross-Browser Testing**:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)  
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Accessibility Testing**:
- Keyboard navigation functional
- Screen reader compatibility
- Color contrast compliance
- Focus management appropriate

These deployment and UI standards ensure consistent, accessible, and performant delivery of the Gaelscoil na bhFál website while maintaining the distinctive Irish cultural identity and bilingual requirements.