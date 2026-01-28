# Zinara Website - Testing Checklist

## Navigation Responsiveness & Page-to-Page Behavior

### Desktop (≥1025px)
- [ ] Navigation menu displays horizontally with all items visible
- [ ] Hover states on nav items show color transition
- [ ] Active page highlighting works correctly
- [ ] Logo links back to home
- [ ] All page links navigate correctly
- [ ] No layout shifts when navigating between pages

### Tablet (481-1024px)
- [ ] Navigation toggle button appears and is functional
- [ ] Menu opens/closes smoothly with max-height animation
- [ ] Touch targets are at least 44px tall
- [ ] Mobile menu doesn't overlap content
- [ ] Esc key closes the menu
- [ ] Menu closes when a link is clicked
- [ ] aria-expanded attribute updates correctly

### Mobile (≤480px)
- [ ] Navigation toggle button is prominent and easy to tap
- [ ] Menu expands without pushing content down
- [ ] All menu items are readable and tappable
- [ ] Hero section text is readable and properly sized
- [ ] Buttons are full-width and at least 44px tall
- [ ] No horizontal scrolling
- [ ] Images scale properly

## CSS & JS Refactoring

### CSS Organization
- [ ] All styles are in external files (/css/main.css)
- [ ] No inline <style> tags in HTML
- [ ] CSS variables used for colors and spacing
- [ ] Media queries properly organized
- [ ] Minified version available (main.min.css)

### JavaScript Organization
- [ ] All scripts are external (/js/nav.js)
- [ ] No inline onclick handlers
- [ ] Scripts load with defer attribute
- [ ] Navigation toggle works without page reload
- [ ] Accordion functionality works smoothly
- [ ] Counter animations trigger on scroll
- [ ] No console errors

## Visual Design & Hierarchy

### Color & Typography
- [ ] Navy primary (#00043F) used for headers and key elements
- [ ] Gold accent (#f8cf40) used for CTAs and highlights
- [ ] Text contrast meets WCAG AA standards
- [ ] Font sizes are readable at all breakpoints
- [ ] Line heights provide good readability

### Button States
- [ ] Primary buttons have gold background with shadow
- [ ] Hover state shows darker gold with elevated shadow
- [ ] Active state shows slight press effect
- [ ] Secondary buttons have proper styling
- [ ] All buttons have visible focus states

### Card & Feature Blocks
- [ ] Cards have consistent padding and spacing
- [ ] Hover states lift cards with shadow
- [ ] Feature lists have checkmarks
- [ ] Links have arrow indicators
- [ ] No orphaned text or misaligned content

## Conversion Flow

### Hero Section
- [ ] Strong headline is immediately visible
- [ ] Value proposition is clear
- [ ] Primary CTA button is prominent
- [ ] Secondary CTA button is visible
- [ ] No layout shift when page loads

### Social Proof Section
- [ ] Metrics are animated when scrolled into view
- [ ] Counters display correct values
- [ ] Layout is balanced and centered
- [ ] Text is readable

### Feature Sections
- [ ] Four layers are clearly presented
- [ ] Each card shows outcome-driven descriptions
- [ ] Feature lists are scannable
- [ ] Explore links are visible and clickable

### Pricing Section
- [ ] Three pricing tiers are displayed
- [ ] Professional tier is highlighted as "Most Popular"
- [ ] Pricing features are clearly listed
- [ ] CTAs are prominent in each card
- [ ] No ambiguity about what's included

### Testimonials Section
- [ ] Star ratings are visible
- [ ] Quotes are readable and compelling
- [ ] Author names and titles are clear
- [ ] Cards have hover effects
- [ ] Section heading is outcome-focused

### Final CTA Section
- [ ] Call-to-action is clear and compelling
- [ ] Buttons are prominent
- [ ] Section stands out visually

## Performance & Optimization

### Page Load
- [ ] Page loads without FOUC (Flash of Unstyled Content)
- [ ] Critical CSS is loaded first
- [ ] Scripts don't block rendering
- [ ] Images load efficiently

### Lighthouse Scores
- [ ] Performance: ≥85
- [ ] Accessibility: ≥90
- [ ] Best Practices: ≥90
- [ ] SEO: ≥90

### Responsiveness
- [ ] No layout shifts (CLS < 0.1)
- [ ] Smooth animations and transitions
- [ ] No jank or stuttering

## Accessibility

### Keyboard Navigation
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] All interactive elements are keyboard accessible
- [ ] Esc key closes mobile menu

### ARIA & Semantics
- [ ] Navigation has role="navigation"
- [ ] aria-expanded updates on menu toggle
- [ ] aria-label on toggle button
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] Semantic HTML used throughout

### Screen Reader
- [ ] Page structure is logical
- [ ] Links have descriptive text
- [ ] Images have alt text (if any)
- [ ] Form labels are associated

## SEO

### Meta Tags
- [ ] Meta description on all pages
- [ ] Meta keywords present
- [ ] OG tags for social sharing
- [ ] Canonical tags if needed

### Content
- [ ] Heading hierarchy is proper
- [ ] Keywords naturally integrated
- [ ] Internal links are working
- [ ] No duplicate content

## Cross-Browser Testing

- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (Chrome, Safari)

## Device Testing

- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1920px)

## Final Verification

- [ ] All pages load without errors
- [ ] All links work correctly
- [ ] Contact information is accurate
- [ ] No broken images
- [ ] No console errors or warnings
- [ ] Website is ready for production

---

**Testing Date:** [Date]
**Tester:** [Name]
**Browser/Device:** [Details]
**Status:** ✅ PASS / ❌ FAIL
**Notes:** [Any issues found]
