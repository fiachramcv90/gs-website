import { extendedSchoolsData, getActivityBySlug, getAllActivitySlugs } from '@/lib/extended-schools-data'

describe('Extended Schools Data', () => {
  test('should have all 6 expected activities', () => {
    expect(extendedSchoolsData).toHaveLength(6)
  })

  test('should have all required fields for each activity', () => {
    extendedSchoolsData.forEach(activity => {
      expect(activity).toHaveProperty('name')
      expect(activity).toHaveProperty('slug')
      expect(activity).toHaveProperty('description')
      expect(activity).toHaveProperty('schedule')
      expect(activity).toHaveProperty('ageGroups')
      expect(activity).toHaveProperty('contact')
      expect(activity).toHaveProperty('color')
      
      // Check bilingual fields
      expect(activity.name).toHaveProperty('irish')
      expect(activity.name).toHaveProperty('english')
      expect(activity.description).toHaveProperty('irish')
      expect(activity.description).toHaveProperty('english')
      expect(activity.schedule).toHaveProperty('irish')
      expect(activity.schedule).toHaveProperty('english')
      expect(activity.ageGroups).toHaveProperty('irish')
      expect(activity.ageGroups).toHaveProperty('english')
      expect(activity.contact).toHaveProperty('irish')
      expect(activity.contact).toHaveProperty('english')
    })
  })

  test('should follow bilingual pattern (Irish content should not be empty)', () => {
    extendedSchoolsData.forEach(activity => {
      expect(activity.name.irish).toBeTruthy()
      expect(activity.name.english).toBeTruthy()
      expect(activity.description.irish).toBeTruthy()
      expect(activity.description.english).toBeTruthy()
      expect(activity.schedule.irish).toBeTruthy()
      expect(activity.schedule.english).toBeTruthy()
      expect(activity.ageGroups.irish).toBeTruthy()
      expect(activity.ageGroups.english).toBeTruthy()
      expect(activity.contact.irish).toBeTruthy()
      expect(activity.contact.english).toBeTruthy()
    })
  })

  test('should have unique slugs', () => {
    const slugs = extendedSchoolsData.map(activity => activity.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  test('should include all expected activities', () => {
    const expectedSlugs = [
      'breakfast-club',
      'football',
      'art-club',
      'ict-club',
      'maths-club',
      'iveagh-centre'
    ]
    
    const actualSlugs = extendedSchoolsData.map(activity => activity.slug)
    expect(actualSlugs.sort()).toEqual(expectedSlugs.sort())
  })

  test('getActivityBySlug should return correct activity', () => {
    const breakfastClub = getActivityBySlug('breakfast-club')
    expect(breakfastClub).toBeDefined()
    expect(breakfastClub?.name.english).toBe('Breakfast Club')
    expect(breakfastClub?.name.irish).toBe('Cumann Bricfeasta')
  })

  test('getActivityBySlug should return undefined for invalid slug', () => {
    const invalidActivity = getActivityBySlug('non-existent-activity')
    expect(invalidActivity).toBeUndefined()
  })

  test('getAllActivitySlugs should return all slugs', () => {
    const slugs = getAllActivitySlugs()
    expect(slugs).toHaveLength(6)
    expect(slugs).toContain('breakfast-club')
    expect(slugs).toContain('football')
    expect(slugs).toContain('art-club')
    expect(slugs).toContain('ict-club')
    expect(slugs).toContain('maths-club')
    expect(slugs).toContain('iveagh-centre')
  })

  test('should have appropriate color classes', () => {
    extendedSchoolsData.forEach(activity => {
      expect(activity.color).toMatch(/^bg-\w+-50 border-\w+-200$/)
    })
  })

  test('should have additional info when present', () => {
    extendedSchoolsData.forEach(activity => {
      if (activity.additionalInfo) {
        expect(activity.additionalInfo).toHaveProperty('irish')
        expect(activity.additionalInfo).toHaveProperty('english')
        expect(Array.isArray(activity.additionalInfo.irish)).toBe(true)
        expect(Array.isArray(activity.additionalInfo.english)).toBe(true)
        expect(activity.additionalInfo.irish.length).toBe(activity.additionalInfo.english.length)
      }
    })
  })
})