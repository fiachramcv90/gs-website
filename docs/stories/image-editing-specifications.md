# Image Editing Specifications - Developer Handoff

**Created by**: UX Expert (Sally)  
**Date**: 2025-09-21  
**For**: Developer Implementation  
**Story**: School Logo and Hero Image Implementation

## 🎯 Overview

This document provides detailed specifications for optimizing and preparing images for the Gaelscoil na bhFál website. All specifications maintain brand consistency with the existing green/navy color scheme and bilingual Irish-English approach.

---

## 📷 **LOGO SPECIFICATIONS**

### **Source File**: `Final-Gaelscoil-Na-Bhfal-Logo.jpg`

#### **Navigation Logo (Primary Implementation)**
- **Target Dimensions**: 40px × 40px
- **Format**: PNG with transparent background preferred
- **Quality**: High-resolution for retina displays (80px × 80px source, scaled down)
- **Compression**: Optimized for web (<10KB target)

#### **Technical Requirements**:
```css
/* Target CSS Application */
.navigation-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* Maintains circular design */
  object-fit: cover;
}
```

#### **Design Specifications**:
- **Crop Focus**: Center the circular logo design
- **Background**: Remove white background, make transparent
- **Color Preservation**: Maintain the green color scheme (#22c55e approximate)
- **Contrast**: Ensure logo remains legible on primary background color
- **Edge Treatment**: Smooth anti-aliasing for crisp circular edges

#### **Output Files Needed**:
1. `logo-40x40.png` (Standard resolution)
2. `logo-40x40@2x.png` (Retina resolution - 80x80px)

---

## 🏞️ **HERO BANNER SPECIFICATIONS**

### **Target Dimensions**: 800px × 400px (2:1 aspect ratio)
### **Responsive Requirements**: Must work at various viewport sizes
### **Format**: WebP with JPG fallback

---

## **🥇 Option 1: P-230.jpg (School Playground) - PRIMARY RECOMMENDATION**

### **Source Analysis**:
- **Current Dimensions**: Landscape format, multiple children, school building visible
- **Key Elements**: Red brick school building, children on playground equipment, outdoor natural lighting

### **Cropping Specifications**:
- **Focal Point**: Center-left composition focusing on school building and active playground
- **Include Elements**: 
  - School building (background right)
  - Children on playground equipment (foreground)
  - Green play area/yard space
  - Natural sky (if visible)

### **Crop Guidelines**:
```
Target Composition:
├── Left 60%: Active playground scene with children
├── Right 40%: School building and background
├── Top 20%: Sky/natural lighting
└── Bottom 80%: Ground level activity
```

### **Post-Processing Requirements**:
- **Brightness**: Slight increase (+10-15%) for web optimized viewing
- **Contrast**: Enhance slightly to improve text overlay readability
- **Saturation**: Maintain natural tones, slight boost to green elements
- **Gradient Overlay**: Optional dark gradient from top-to-bottom (20% opacity) for text readability

### **Alt Text Specification**:
```
"Páistí ag súgradh i gclós na scoile ag Gaelscoil na bhFál / Children playing in the school playground at Gaelscoil na bhFál"
```

---

## **🥈 Option 2: P-256.jpg (Sports Field) - SECONDARY OPTION**

### **Source Analysis**:
- **Current Dimensions**: Wide sports field with multiple uniformed children
- **Key Elements**: Green sports field, children in school uniforms, outdoor setting

### **Cropping Specifications**:
- **Focal Point**: Center composition focusing on children in action
- **Include Elements**:
  - Multiple children in navy/green uniforms
  - Green sports field surface
  - Natural outdoor lighting
  - Goal posts or sports equipment (if visible)

### **Crop Guidelines**:
```
Target Composition:
├── Left-Center: Primary group of children
├── Right: Open field space for text overlay
├── Background: Sports field and natural setting
└── Foreground: Active student engagement
```

### **Post-Processing Requirements**:
- **Focus Enhancement**: Slight sharpening on children's uniforms
- **Color Boost**: Enhance green field color to match brand
- **Lighting**: Balance outdoor lighting for consistent web viewing
- **Vignette**: Subtle vignette to draw focus to center action

### **Alt Text Specification**:
```
"Daltaí ag imirt spóirt ar pháirc na scoile ag Gaelscoil na bhFál / Students playing sports on the school field at Gaelscoil na bhFál"
```

---

## **🥉 Option 3: P-379.jpg (GAA Football) - CULTURAL OPTION**

### **Source Analysis**:
- **Current Dimensions**: Sports action shot with "Gaelscoil na bhFál" visible on jerseys
- **Key Elements**: GAA football action, branded school jerseys, green sports field

### **Cropping Specifications**:
- **Focal Point**: Center on main player with ball, school branding visible
- **Include Elements**:
  - Primary player with Gaelic football
  - "Gaelscoil na bhFál" jersey text (crucial for branding)
  - Green field background
  - Secondary players for context

### **Crop Guidelines**:
```
Target Composition:
├── Center-Left: Main player with ball and visible jersey text
├── Background: Supporting players and green field
├── Action Flow: Left-to-right movement direction
└── Brand Focus: Ensure "Gaelscoil na bhFál" text remains legible
```

### **Post-Processing Requirements**:
- **Jersey Enhancement**: Increase clarity of school name on jerseys
- **Action Emphasis**: Slight motion blur reduction on key elements
- **Color Coordination**: Enhance green/gold jersey colors to match site palette
- **Text Legibility**: Ensure jersey text remains readable at 800px width

### **Alt Text Specification**:
```
"Imreoirí peile Ghaelach Gaelscoil na bhFál ag imirt cluiche / Gaelscoil na bhFál Gaelic football players during a match"
```

---

## 🛠️ **TECHNICAL IMPLEMENTATION SPECIFICATIONS**

### **File Organization**:
```
Target Directory Structure:
public/images/
├── logos/
│   ├── logo-40x40.png
│   ├── logo-40x40@2x.png
│   └── logo-original.jpg (backup)
└── hero/
    ├── hero-playground.webp (Option 1)
    ├── hero-playground.jpg (fallback)
    ├── hero-sports-field.webp (Option 2) 
    ├── hero-sports-field.jpg (fallback)
    ├── hero-gaelic-football.webp (Option 3)
    └── hero-gaelic-football.jpg (fallback)
```

### **Optimization Targets**:
- **Logo Files**: <10KB each
- **Hero Images**: <150KB WebP, <200KB JPG
- **Quality**: 85% compression maintaining visual clarity
- **Progressive Loading**: Enable progressive JPG encoding

### **Responsive Considerations**:
- **Mobile (320px-768px)**: Images should maintain composition at smaller widths
- **Tablet (768px-1024px)**: Full hero banner visible with proper text space
- **Desktop (1024px+)**: Optimal viewing experience with max-width container

---

## ✅ **QUALITY ASSURANCE CHECKLIST**

### **Logo Implementation**:
- [ ] Logo maintains circular design integrity at 40px
- [ ] Transparent background properly rendered
- [ ] Colors match website's green theme
- [ ] Retina version sharp and clear
- [ ] File sizes optimized for performance

### **Hero Banner Implementation**:
- [ ] 800×400px dimensions exact
- [ ] Composition balanced and engaging
- [ ] Text overlay areas have sufficient contrast
- [ ] Colors harmonize with website design system
- [ ] Alt text properly implements bilingual format
- [ ] Images optimized for web performance
- [ ] Responsive behavior verified across devices

### **Brand Consistency**:
- [ ] Green color palette maintained (#22c55e range)
- [ ] Irish cultural elements preserved
- [ ] School identity clearly represented
- [ ] Professional quality maintained
- [ ] Accessibility standards met

---

## 🎨 **DESIGN RATIONALE**

### **Option 1 (Playground) Advantages**:
- Shows complete school environment (building + students)
- Natural, authentic school life representation
- Wide composition perfect for hero banner format
- Multiple age groups visible

### **Option 2 (Sports Field) Advantages**:
- Emphasizes active, healthy school culture
- Clear uniforms show school identity
- Open composition allows text overlay flexibility
- Professional sports photography quality

### **Option 3 (GAA Football) Advantages**:
- Strongest Irish cultural connection (GAA sports)
- Clear school branding visible on jerseys
- Dynamic action conveys energy and achievement
- Unique cultural authenticity

---

## 🚀 **DEVELOPER HANDOFF NOTES**

1. **Priority Order**: Implement Option 1 first, prepare Options 2&3 as alternatives
2. **Testing**: Verify responsive behavior across all target devices
3. **Performance**: Monitor image loading times and optimize if needed
4. **Accessibility**: Ensure alt text follows exact bilingual specifications
5. **Fallbacks**: Implement proper WebP → JPG fallback chains

**Estimated Development Time**: 2-3 hours for complete implementation

---

**Ready for Developer Implementation** ✅