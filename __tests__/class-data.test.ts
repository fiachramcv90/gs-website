import { classesData, getClassBySlug, getAllClassSlugs } from '@/lib/class-data'

describe('Class Data', () => {
  test('should have all 8 classes', () => {
    expect(classesData).toHaveLength(8)
  })

  test('should have all required fields for each class', () => {
    classesData.forEach(classData => {
      expect(classData.className).toBeDefined()
      expect(classData.english).toBeDefined()
      expect(classData.slug).toBeDefined()
      expect(classData.ageRange).toBeDefined()
      expect(classData.color).toBeDefined()
      expect(classData.importantInfo).toBeDefined()
      expect(classData.importantInfo.irish).toBeDefined()
      expect(classData.importantInfo.english).toBeDefined()
      expect(classData.terms).toBeDefined()
      expect(classData.terms).toHaveLength(6) // 6 terms per year
      expect(classData.websites).toBeDefined()
    })
  })

  test('should maintain bilingual pattern (Irish first, English second)', () => {
    classesData.forEach(classData => {
      expect(classData.importantInfo.irish.length).toBeGreaterThan(0)
      expect(classData.importantInfo.english.length).toBeGreaterThan(0)
      
      classData.terms.forEach(term => {
        expect(term.topic.irish).toBeDefined()
        expect(term.topic.english).toBeDefined()
      })
    })
  })

  test('should have valid teacher or teachers for each class', () => {
    classesData.forEach(classData => {
      const hasTeacher = classData.teacher || (classData.teachers && classData.teachers.length > 0)
      expect(hasTeacher).toBeTruthy()
    })
  })

  test('getClassBySlug should return correct class', () => {
    const nurseryClass = getClassBySlug('nursery')
    expect(nurseryClass?.className).toBe('Naí-Aonad')
    expect(nurseryClass?.english).toBe('Nursery Unit')
    
    const year7Class = getClassBySlug('year-7')
    expect(year7Class?.className).toBe('Rang 7')
    expect(year7Class?.english).toBe('Year 7')
  })

  test('getClassBySlug should return undefined for invalid slug', () => {
    const invalidClass = getClassBySlug('invalid-slug')
    expect(invalidClass).toBeUndefined()
  })

  test('getAllClassSlugs should return all slugs', () => {
    const slugs = getAllClassSlugs()
    expect(slugs).toHaveLength(8)
    expect(slugs).toContain('nursery')
    expect(slugs).toContain('year-1')
    expect(slugs).toContain('year-7')
  })

  test('should have valid website URLs', () => {
    classesData.forEach(classData => {
      classData.websites.forEach(website => {
        expect(website.name).toBeDefined()
        expect(website.url).toBeDefined()
        expect(website.url).toMatch(/^https?:\/\//)
      })
    })
  })

  test('should have authentic class data from stakeholder PDF', () => {
    // Test Naí-Aonad has correct teacher
    const nursery = getClassBySlug('nursery')
    expect(nursery?.teacher).toBe('Margaret')
    expect(nursery?.assistants).toContain('Brónagh')
    expect(nursery?.assistants).toContain('Caolán')
    expect(nursery?.assistants).toContain('Laoise')

    // Test Rang 1 has correct teacher and Seesaw reference
    const year1 = getClassBySlug('year-1')
    expect(year1?.teacher).toBe('Shauna')
    expect(year1?.importantInfo.irish.some(info => info.includes('Seesaw'))).toBeTruthy()

    // Test Rang 7 has correct teacher and Google Classroom reference
    const year7 = getClassBySlug('year-7')
    expect(year7?.teacher).toBe('Seán')
    expect(year7?.importantInfo.english.some(info => info.includes('Google Classroom'))).toBeTruthy()
  })
})