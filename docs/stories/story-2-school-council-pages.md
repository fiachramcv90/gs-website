# Story 2: Create School Council Sub-Pages - Brownfield Addition

## User Story

As a **student, parent, or community member of Gaelscoil na bhFál**,
I want **to access detailed information about the School Council including who they are, their work, and their goals**,
So that **I can understand how the school council represents student voices and contributes to school improvement**.

## Story Context

**Existing System Integration:**
- Integrates with: BilingualNav component (routes already configured), existing App Router structure, existing `/school-council` directory
- Technology: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui components
- Follows pattern: Bilingual content hierarchy (Irish primary, English secondary), responsive layouts
- Touch points: Navigation dropdowns, existing school-council main page, route generation

## Acceptance Criteria

### Functional Requirements
1. Create 4 school council sub-pages: `/school-council/who-we-are`, `/school-council/work`, `/school-council/short-term-goals`, `/school-council/long-term-goals`
2. All pages display appropriate bilingual content (Irish first, English second)
3. Pages provide meaningful information about council members, activities, and objectives

### Integration Requirements
4. Existing BilingualNav dropdown functionality continues to work unchanged
5. New pages follow existing layout patterns and component usage
6. Integration with existing `/school-council` main page maintained
7. App Router generates proper static routes for all sub-pages

### Quality Requirements
8. All pages are responsive and accessible across mobile, tablet, and desktop
9. Content follows established typography and spacing patterns
10. No regression in existing navigation or page functionality verified

## Technical Notes

- **Integration Approach:** Create individual page files under existing `/app/school-council/` directory structure
- **Existing Pattern Reference:** Follow established page patterns and bilingual content display used throughout site
- **Key Constraints:** Must maintain existing navigation behavior and integrate with current school-council page

## Page Structure Required

### Who We Are (`/school-council/who-we-are`)
- **Page Title:** Cé muid / Who we are
- **Council Members:** Student representatives from each class
- **Roles:** What each member does
- **Selection Process:** How council members are chosen

### Work (`/school-council/work`)
- **Page Title:** Obair / Work
- **Current Projects:** What the council is working on
- **Meetings:** When and how often they meet
- **Activities:** Events and initiatives they organize

### Short-term Goals (`/school-council/short-term-goals`)
- **Page Title:** Spriocanna Gearrthéarmacha / Short-term Goals
- **Current Goals:** What they want to achieve this term/year
- **Progress:** How they're working toward these goals
- **Timeline:** When they hope to achieve them

### Long-term Goals (`/school-council/long-term-goals`)
- **Page Title:** Spriocanna Fadtéarmacha / Long-term Goals
- **Vision:** Their long-term vision for the school
- **Major Projects:** Big initiatives they're planning
- **Impact:** How these will benefit all students

### Sample Content Structure
```typescript
// School Council Page Data
{
  title: {
    irish: "Cé muid",
    english: "Who we are"
  },
  description: {
    irish: "Is ionadaithe na ndaltaí ó gach rang muid",
    english: "We are student representatives from every class"
  },
  sections: [
    {
      heading: {
        irish: "Ár Ról",
        english: "Our Role"
      },
      content: {
        irish: "Déanaimid cinntí tábhachtacha faoin scoil",
        english: "We make important decisions about the school"
      }
    }
  ]
}
```

## Definition of Done

- [ ] All 4 school council sub-pages created with proper routing
- [ ] Bilingual content pattern maintained (Irish/English) across all pages
- [ ] Content provides meaningful information about council structure and goals
- [ ] **All linting checks pass (`npm run lint`)**
- [ ] **All existing tests continue to pass**
- [ ] **New test coverage added for route generation**
- [ ] Existing BilingualNav dropdown functionality verified
- [ ] Integration with existing school-council main page maintained
- [ ] Content displays correctly across mobile, tablet, and desktop
- [ ] All navigation links from dropdown menu work correctly
- [ ] Pages follow established layout and component patterns
- [ ] Static route generation working for all new sub-pages

## Risk Assessment

**Primary Risk:** Breaking existing school-council page or navigation structure
**Mitigation:** Follow established App Router patterns, test integration with existing page
**Rollback:** Remove new page files, navigation already handles missing routes gracefully

## Files Likely to be Modified

### New Files to Create
- `/app/school-council/who-we-are/page.tsx`
- `/app/school-council/work/page.tsx`
- `/app/school-council/short-term-goals/page.tsx`
- `/app/school-council/long-term-goals/page.tsx`

### Potential Data Files
- `/lib/school-council-data.ts` - Council information structure
- Test files for route and content validation

### Existing Files (No Modifications)
- `/app/school-council/page.tsx` - Existing main page remains unchanged
- `components/bilingual-nav.tsx` - Already configured for these routes
- Other navigation or layout components

### Integration Considerations
- Ensure new sub-pages integrate well with existing school-council main page
- Consider adding navigation links from main page to sub-pages
- Maintain consistent styling and layout across all council-related pages

---

**Epic:** [Complete Navigation Sub-Pages](../epic-navigation-subpages-completion.md)
**Story Type:** Brownfield Addition
**Estimated Effort:** Medium (page creation and content development)
**Dependencies:** Existing school-council page structure, BilingualNav configuration