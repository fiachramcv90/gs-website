import { schoolCouncilData, getCouncilPageBySlug, getAllCouncilPageSlugs } from '@/lib/school-council-data'

describe('School Council Data', () => {
  test('should have all 4 expected council pages', () => {
    expect(schoolCouncilData).toHaveLength(4)
  })

  test('should have all required fields for each page', () => {
    schoolCouncilData.forEach(page => {
      expect(page).toHaveProperty('title')
      expect(page).toHaveProperty('slug')
      expect(page).toHaveProperty('description')
      expect(page).toHaveProperty('sections')
      expect(page).toHaveProperty('color')
      
      // Check bilingual fields
      expect(page.title).toHaveProperty('irish')
      expect(page.title).toHaveProperty('english')
      expect(page.description).toHaveProperty('irish')
      expect(page.description).toHaveProperty('english')
      
      // Check sections structure
      expect(Array.isArray(page.sections)).toBe(true)
      page.sections.forEach(section => {
        expect(section).toHaveProperty('heading')
        expect(section).toHaveProperty('content')
        expect(section.heading).toHaveProperty('irish')
        expect(section.heading).toHaveProperty('english')
        expect(section.content).toHaveProperty('irish')
        expect(section.content).toHaveProperty('english')
        expect(Array.isArray(section.content.irish)).toBe(true)
        expect(Array.isArray(section.content.english)).toBe(true)
      })
    })
  })

  test('should follow bilingual pattern (Irish content should not be empty)', () => {
    schoolCouncilData.forEach(page => {
      expect(page.title.irish).toBeTruthy()
      expect(page.title.english).toBeTruthy()
      expect(page.description.irish).toBeTruthy()
      expect(page.description.english).toBeTruthy()
      
      page.sections.forEach(section => {
        expect(section.heading.irish).toBeTruthy()
        expect(section.heading.english).toBeTruthy()
        expect(section.content.irish.length).toBeGreaterThan(0)
        expect(section.content.english.length).toBeGreaterThan(0)
        expect(section.content.irish.length).toBe(section.content.english.length)
        
        section.content.irish.forEach(item => expect(item).toBeTruthy())
        section.content.english.forEach(item => expect(item).toBeTruthy())
      })
    })
  })

  test('should have unique slugs', () => {
    const slugs = schoolCouncilData.map(page => page.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  test('should include all expected council pages', () => {
    const expectedSlugs = [
      'who-we-are',
      'work',
      'short-term-goals',
      'long-term-goals'
    ]
    
    const actualSlugs = schoolCouncilData.map(page => page.slug)
    expect(actualSlugs.sort()).toEqual(expectedSlugs.sort())
  })

  test('getCouncilPageBySlug should return correct page', () => {
    const whoWeArePage = getCouncilPageBySlug('who-we-are')
    expect(whoWeArePage).toBeDefined()
    expect(whoWeArePage?.title.english).toBe('Who we are')
    expect(whoWeArePage?.title.irish).toBe('Cé muid')
  })

  test('getCouncilPageBySlug should return undefined for invalid slug', () => {
    const invalidPage = getCouncilPageBySlug('non-existent-page')
    expect(invalidPage).toBeUndefined()
  })

  test('getAllCouncilPageSlugs should return all slugs', () => {
    const slugs = getAllCouncilPageSlugs()
    expect(slugs).toHaveLength(4)
    expect(slugs).toContain('who-we-are')
    expect(slugs).toContain('work')
    expect(slugs).toContain('short-term-goals')
    expect(slugs).toContain('long-term-goals')
  })

  test('should have appropriate color classes', () => {
    schoolCouncilData.forEach(page => {
      expect(page.color).toMatch(/^bg-\w+-50 border-\w+-200$/)
    })
  })

  test('should have meaningful content structure', () => {
    schoolCouncilData.forEach(page => {
      expect(page.sections.length).toBeGreaterThan(0)
      expect(page.sections.length).toBeLessThanOrEqual(5) // Reasonable limit
      
      page.sections.forEach(section => {
        expect(section.content.irish.length).toBeGreaterThan(0)
        expect(section.content.english.length).toBeGreaterThan(0)
        
        // Content items should be substantial (not just single words)
        section.content.irish.forEach(item => {
          expect(item.length).toBeGreaterThan(10)
        })
        section.content.english.forEach(item => {
          expect(item.length).toBeGreaterThan(10)
        })
      })
    })
  })

  test('should have consistent data structure for school council domain', () => {
    // Test specific to school council content
    const whoWeArePage = getCouncilPageBySlug('who-we-are')
    const workPage = getCouncilPageBySlug('work')
    const shortTermPage = getCouncilPageBySlug('short-term-goals')
    const longTermPage = getCouncilPageBySlug('long-term-goals')

    expect(whoWeArePage?.title.irish).toBe('Cé muid')
    expect(workPage?.title.irish).toBe('Obair')
    expect(shortTermPage?.title.irish).toBe('Spriocanna Gearrthéarmacha')
    expect(longTermPage?.title.irish).toBe('Spriocanna Fadtéarmacha')

    // All pages should have multiple sections
    expect(whoWeArePage?.sections.length).toBeGreaterThanOrEqual(2)
    expect(workPage?.sections.length).toBeGreaterThanOrEqual(2)
    expect(shortTermPage?.sections.length).toBeGreaterThanOrEqual(2)
    expect(longTermPage?.sections.length).toBeGreaterThanOrEqual(2)
  })
})