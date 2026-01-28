# Zinara Digital Systems - CMS Implementation Handoff Package

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Status:** Implementation Ready

---

## 1. HIGH-LEVEL SUMMARY

**Page/Site Purpose:**  
Zinara Digital Systems is a B2B SaaS platform that helps businesses build predictable revenue systems through four integrated layers: Digital Marketing (demand generation), AI Training (capability building), Automation (operations execution), and Revenue Audit (diagnostic entry point). The website serves as the primary authority-building and lead-generation engine, targeting mid-market and enterprise businesses seeking systematic revenue growth.

**Main Content Blocks:**  
Hero sections establishing authority, four-pillar system overview, service layer descriptions, interactive audit diagnostic, social proof metrics, call-to-action sections, and comprehensive footer navigation.

**Target Audience:**  
C-suite executives, revenue operations leaders, marketing directors, and business owners seeking systematic revenue growth through AI-powered systems.

**Core Goals:**
- **SEO:** Rank for high-intent keywords (revenue systems, AI training, workflow automation, revenue audit)
- **Performance:** Lighthouse score >95 across all metrics, <2s page load time
- **Accessibility:** WCAG 2.1 AA compliance, keyboard navigation, screen reader support
- **Analytics:** Track demand generation funnel, audit engagement, CTA conversion, form submissions
- **Privacy:** GDPR/CCPA compliant, transparent data collection, user consent management

---

## 2. VISUAL & LAYOUT GUIDANCE (CARD FORMAT)

### CARD 1: HERO SECTION

**Block Name:** Hero Section  
**Position:** Top of page (first viewport)  
**Purpose:** Establish authority and communicate core value proposition

**CMS Content Fields:**

| Field Name | Type | Label | Validation | Required |
|---|---|---|---|---|
| hero_title | Text | Page Hero Title | Max 100 chars | Yes |
| hero_subtitle | Textarea | Hero Subtitle/Tagline | Max 200 chars | Yes |
| hero_description | Textarea | Hero Description | Max 500 chars | Yes |
| hero_cta_primary_text | Text | Primary CTA Button Text | Max 50 chars | Yes |
| hero_cta_primary_link | URL | Primary CTA Button Link | Valid URL | Yes |
| hero_cta_secondary_text | Text | Secondary CTA Button Text | Max 50 chars | No |
| hero_cta_secondary_link | URL | Secondary CTA Button Link | Valid URL | No |
| hero_background_color | Select | Background Color | navy-primary, surface-soft | Yes |

**Responsive Behavior:**
- Desktop: Full viewport height (100vh), centered text, side-by-side CTAs
- Tablet: 80vh height, text centered, stacked CTAs
- Mobile: 60vh height, text left-aligned, full-width stacked CTAs

**Spacing Rules:**
- Padding: 4rem top/bottom (desktop), 3rem (tablet), 2rem (mobile)
- Gap between title and subtitle: 1.5rem
- Gap between subtitle and CTAs: 2rem
- Gap between CTAs: 1rem

**Example Content:**
```
Title: "Building Predictable Revenue Systems with AI"
Subtitle: "Four integrated layers. One unified system."
Description: "Zinara transforms how businesses generate demand, build capability, automate operations, and recover revenue."
Primary CTA: "Get Started"
Secondary CTA: "Free Audit"
```

**CSS Tokens & Classes:**
```css
/* Hero Container */
.hero {
  background-color: var(--brand-primary);
  color: var(--text-on-dark);
  padding: 4rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero__title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--text-on-dark);
}

.hero__subtitle {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero__description {
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.85);
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
    padding: 3rem 0;
  }
  
  .hero__title {
    font-size: 2rem;
  }
  
  .hero__actions {
    flex-direction: column;
  }
  
  .hero__actions .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 60vh;
    padding: 2rem 0;
  }
  
  .hero__title {
    font-size: 1.75rem;
  }
}
```

**Accessible Markup:**
```html
<section class="hero" role="banner" aria-label="Page hero section">
  <div class="hero__container">
    <h1 class="hero__title">Building Predictable Revenue Systems with AI</h1>
    <p class="hero__subtitle">Four integrated layers. One unified system.</p>
    <p class="hero__description">Zinara transforms how businesses generate demand, build capability, automate operations, and recover revenue.</p>
    <div class="hero__actions" role="group" aria-label="Primary actions">
      <a href="/get-started" class="btn btn-primary" aria-label="Get started with Zinara">Get Started</a>
      <a href="/audit" class="btn btn-secondary" aria-label="Schedule free revenue audit">Free Audit</a>
    </div>
  </div>
</section>
```

**Motion Specifications:**
- Fade-in on page load: 600ms ease-out
- Title animation: slide-up 400ms ease-out (delay 100ms)
- Subtitle animation: fade-in 400ms ease-out (delay 200ms)
- CTA buttons: scale(1.05) on hover, 200ms ease

---

### CARD 2: FEATURES/PILLARS SECTION

**Block Name:** Four Pillars Overview  
**Position:** Below hero (primary content area)  
**Purpose:** Communicate the four integrated layers

**CMS Content Fields:**

| Field Name | Type | Label | Validation | Required |
|---|---|---|---|---|
| section_title | Text | Section Title | Max 100 chars | Yes |
| section_subtitle | Textarea | Section Subtitle | Max 200 chars | No |
| pillar_1_title | Text | Pillar 1 Title | Max 50 chars | Yes |
| pillar_1_description | Textarea | Pillar 1 Description | Max 300 chars | Yes |
| pillar_1_link | URL | Pillar 1 Link | Valid URL | Yes |
| pillar_2_title | Text | Pillar 2 Title | Max 50 chars | Yes |
| pillar_2_description | Textarea | Pillar 2 Description | Max 300 chars | Yes |
| pillar_2_link | URL | Pillar 2 Link | Valid URL | Yes |
| pillar_3_title | Text | Pillar 3 Title | Max 50 chars | Yes |
| pillar_3_description | Textarea | Pillar 3 Description | Max 300 chars | Yes |
| pillar_3_link | URL | Pillar 3 Link | Valid URL | Yes |
| pillar_4_title | Text | Pillar 4 Title | Max 50 chars | Yes |
| pillar_4_description | Textarea | Pillar 4 Description | Max 300 chars | Yes |
| pillar_4_link | URL | Pillar 4 Link | Valid URL | Yes |
| background_color | Select | Background Color | surface-main, surface-soft | Yes |

**Responsive Behavior:**
- Desktop: 4-column grid layout
- Tablet: 2-column grid layout
- Mobile: 1-column stacked layout

**Spacing Rules:**
- Section padding: 4rem top/bottom
- Grid gap: 2rem
- Card padding: 2rem
- Card border-radius: 8px

**Example Content:**
```
Title: "Four Integrated Layers"
Subtitle: "Each layer builds on the previous one to create a complete revenue system."

Pillar 1:
  Title: "Digital Marketing"
  Description: "Layer 1: The Intent Generation Engine. Build authority, generate qualified demand, and acquire customers through integrated digital marketing systems."
  Link: "/digital-marketing"

Pillar 2:
  Title: "AI Training"
  Description: "Layer 2: The Capability Engine. Transform your team into super-powered operators with strategic AI training and certification programs."
  Link: "/ai-training"

Pillar 3:
  Title: "Automation"
  Description: "Layer 3: The System Control Engine. Automate revenue operations with AI agents and achieve 90-second response times."
  Link: "/automation"

Pillar 4:
  Title: "Revenue Audit"
  Description: "Layer 4: The Diagnostic Entry Point. Identify failures and get a roadmap to revenue recovery."
  Link: "/audit"
```

**CSS Tokens & Classes:**
```css
.pillars {
  padding: 4rem 0;
  background-color: var(--brand-bg);
}

.pillars__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.pillars__title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--brand-primary);
  text-align: center;
  margin-bottom: 1rem;
}

.pillars__subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.pillars__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.pillar-card {
  background-color: var(--surface-soft);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.pillar-card:hover {
  background-color: var(--brand-primary);
  color: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.pillar-card h3 {
  color: var(--brand-primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.pillar-card:hover h3 {
  color: white;
}

.pillar-card p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.7;
}

.pillar-card:hover p {
  color: rgba(255, 255, 255, 0.9);
}

/* Responsive */
@media (max-width: 1024px) {
  .pillars__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .pillars {
    padding: 3rem 0;
  }
  
  .pillars__title {
    font-size: 1.75rem;
  }
  
  .pillars__grid {
    grid-template-columns: 1fr;
  }
}
```

**Accessible Markup:**
```html
<section class="pillars" aria-labelledby="pillars-title">
  <div class="pillars__container">
    <h2 id="pillars-title" class="pillars__title">Four Integrated Layers</h2>
    <p class="pillars__subtitle">Each layer builds on the previous one to create a complete revenue system.</p>
    
    <div class="pillars__grid" role="list">
      <article class="pillar-card" role="listitem">
        <h3>Digital Marketing</h3>
        <p>Layer 1: The Intent Generation Engine. Build authority, generate qualified demand, and acquire customers through integrated digital marketing systems.</p>
        <a href="/digital-marketing" aria-label="Learn more about Digital Marketing layer">Learn more →</a>
      </article>
      
      <!-- Repeat for pillars 2, 3, 4 -->
    </div>
  </div>
</section>
```

---

### CARD 3: AUDIT ACCORDION SECTION

**Block Name:** Interactive Audit Categories  
**Position:** Mid-page (audit page primary content)  
**Purpose:** Allow users to explore six diagnostic categories

**CMS Content Fields:**

| Field Name | Type | Label | Validation | Required |
|---|---|---|---|---|
| accordion_title | Text | Section Title | Max 100 chars | Yes |
| accordion_subtitle | Textarea | Section Subtitle | Max 200 chars | No |
| category_1_title | Text | Category 1 Title | Max 50 chars | Yes |
| category_1_content | Textarea | Category 1 Content | Max 1000 chars | Yes |
| category_1_questions | Textarea | Category 1 Questions (bullet list) | Max 2000 chars | Yes |
| category_2_title through category_6_title | Text | Category Titles | Max 50 chars each | Yes |
| category_2_content through category_6_content | Textarea | Category Content | Max 1000 chars each | Yes |
| category_2_questions through category_6_questions | Textarea | Category Questions | Max 2000 chars each | Yes |

**Responsive Behavior:**
- Desktop: Full-width accordion, single column
- Tablet: Full-width accordion, single column
- Mobile: Full-width accordion, touch-friendly headers (min 44px height)

**Spacing Rules:**
- Section padding: 4rem top/bottom
- Accordion item margin-bottom: 1rem
- Header padding: 1.5rem
- Content padding: 1.5rem
- Max-width: 900px, centered

**Example Content:**
```
Title: "Six Diagnostic Categories"
Subtitle: "Click each category to explore the diagnostic questions"

Category 1: Demand Failure
  Content: "Are people aware of your business and interested in what you offer?"
  Questions:
    - Do you have consistent lead flow?
    - Is your brand recognized in your market?
    - Are your marketing channels effective?
    - Do you understand your target audience?
    - Is your value proposition clear?

Category 2: Capture Failure
  Content: "Are you converting interested prospects into qualified leads?"
  Questions:
    - Is your website optimized for conversions?
    - Do you have clear calls-to-action?
    - Are you capturing lead data effectively?
    - What's your conversion rate?
    - Do you have lead qualification criteria?

(Continue for categories 3-6: System, Capability, Continuity, Authority)
```

**CSS Tokens & Classes:**
```css
.accordion {
  padding: 4rem 0;
  background-color: var(--surface-soft);
}

.accordion__container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.accordion__title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--brand-primary);
  text-align: center;
  margin-bottom: 1rem;
}

.accordion__subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  text-align: center;
  margin-bottom: 3rem;
}

.accordion-item {
  background-color: var(--surface-soft);
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.accordion-header {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: var(--brand-primary);
  transition: all 200ms ease;
  background-color: var(--surface-soft);
  border: none;
  width: 100%;
  text-align: left;
  font-size: 1rem;
}

.accordion-header:hover {
  background-color: var(--brand-primary);
  color: white;
}

.accordion-item.open .accordion-header {
  background-color: var(--brand-primary);
  color: white;
}

.accordion-toggle {
  font-size: 1.25rem;
  transition: transform 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.accordion-item.open .accordion-toggle {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease;
  padding: 0 1.5rem;
}

.accordion-item.open .accordion-content {
  max-height: 500px;
  padding: 0 1.5rem 1.5rem;
}

.accordion-content p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.accordion-content ul {
  list-style: none;
  padding-left: 0;
}

.accordion-content li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  padding-left: 1.5rem;
  position: relative;
}

.accordion-content li:before {
  content: "•";
  color: var(--brand-accent);
  font-weight: 700;
  position: absolute;
  left: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .accordion {
    padding: 3rem 0;
  }
  
  .accordion__title {
    font-size: 1.75rem;
  }
  
  .accordion-header {
    padding: 1rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .accordion-header {
    min-height: 44px;
  }
}
```

**Accessible Markup:**
```html
<section class="accordion" aria-labelledby="audit-title">
  <div class="accordion__container">
    <h2 id="audit-title" class="accordion__title">Six Diagnostic Categories</h2>
    <p class="accordion__subtitle">Click each category to explore the diagnostic questions</p>
    
    <div class="accordion-list" role="region" aria-label="Audit categories">
      <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false" aria-controls="category-1-content">
          <span>Demand Failure</span>
          <span class="accordion-toggle" aria-hidden="true">▼</span>
        </button>
        <div id="category-1-content" class="accordion-content" role="region" aria-labelledby="category-1-header">
          <p>Are people aware of your business and interested in what you offer?</p>
          <ul>
            <li>Do you have consistent lead flow?</li>
            <li>Is your brand recognized in your market?</li>
            <!-- More items -->
          </ul>
        </div>
      </div>
      
      <!-- Repeat for categories 2-6 -->
    </div>
  </div>
</section>
```

**JavaScript for Accordion:**
```javascript
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('open');
    this.setAttribute('aria-expanded', item.classList.contains('open'));
  });
});

// Keyboard navigation
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});
```

---

### CARD 4: FOOTER SECTION

**Block Name:** Footer Navigation & Information  
**Position:** Bottom of all pages  
**Purpose:** Provide navigation, company info, and legal links

**CMS Content Fields:**

| Field Name | Type | Label | Validation | Required |
|---|---|---|---|---|
| footer_company_name | Text | Company Name | Max 50 chars | Yes |
| footer_company_tagline | Text | Company Tagline | Max 100 chars | Yes |
| footer_col1_title | Text | Column 1 Title | Max 50 chars | Yes |
| footer_col1_links | Repeater | Column 1 Links | Link text + URL | Yes |
| footer_col2_title | Text | Column 2 Title | Max 50 chars | Yes |
| footer_col2_links | Repeater | Column 2 Links | Link text + URL | Yes |
| footer_col3_title | Text | Column 3 Title | Max 50 chars | Yes |
| footer_col3_links | Repeater | Column 3 Links | Link text + URL | Yes |
| footer_col4_title | Text | Column 4 Title | Max 50 chars | Yes |
| footer_col4_links | Repeater | Column 4 Links | Link text + URL | Yes |
| footer_copyright | Text | Copyright Text | Max 100 chars | Yes |
| footer_background_color | Select | Background Color | navy-primary | Yes |

**Responsive Behavior:**
- Desktop: 4-column grid layout
- Tablet: 2x2 grid layout
- Mobile: 1-column stacked layout

**Spacing Rules:**
- Footer padding: 3rem top, 1rem bottom
- Column gap: 2rem
- Bottom border padding: 1rem top

**Example Content:**
```
Company Name: "Zinara"
Company Tagline: "Building revenue systems with AI"

Column 1 (Platform):
  - Digital Marketing
  - AI Training
  - Automation
  - Audit

Column 2 (Company):
  - About
  - Contact
  - Privacy
  - Get Started

Column 3 (Resources):
  - System Architecture
  - Revenue Audit
  - Blog (future)

Column 4 (Legal):
  - Privacy Policy
  - Terms of Service
  - Cookie Policy

Copyright: "© 2026 Zinara Digital Systems. All rights reserved."
```

**CSS Tokens & Classes:**
```css
footer {
  background-color: var(--brand-primary);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

footer h4 {
  color: var(--brand-accent);
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1rem;
}

footer p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
}

footer ul {
  list-style: none;
  padding: 0;
}

footer li {
  margin-bottom: 0.5rem;
}

footer a {
  color: rgba(255, 255, 255, 0.8);
  transition: color 200ms ease;
  text-decoration: none;
}

footer a:hover {
  color: var(--brand-accent);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 1024px) {
  footer .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  footer .container {
    grid-template-columns: 1fr;
  }
}
```

**Accessible Markup:**
```html
<footer role="contentinfo">
  <div class="container">
    <div>
      <h4>Zinara</h4>
      <p>Building revenue systems with AI</p>
    </div>
    <div>
      <h4>Platform</h4>
      <ul role="list">
        <li><a href="/digital-marketing">Digital Marketing</a></li>
        <li><a href="/ai-training">AI Training</a></li>
        <li><a href="/automation">Automation</a></li>
        <li><a href="/audit">Audit</a></li>
      </ul>
    </div>
    <!-- More columns -->
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 Zinara Digital Systems. All rights reserved.</p>
  </div>
</footer>
```

---

## 3. META TAGS AND HEADER RULES

### Page Type: Home Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character Encoding & Viewport -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  
  <!-- Language & Canonical -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="canonical" href="https://zinara.co.ke/">
  <link rel="alternate" hreflang="en" href="https://zinara.co.ke/">
  
  <!-- SEO Meta Tags -->
  <title>Zinara Digital Systems - Revenue Systems with AI | Build Predictable Growth</title>
  <meta name="description" content="Zinara builds predictable revenue systems with AI. Four integrated layers: Digital Marketing, AI Training, Automation, and Revenue Audit. Start your free audit today.">
  <meta name="keywords" content="revenue systems, AI training, workflow automation, digital marketing, business growth, revenue audit">
  <meta name="author" content="Zinara Digital Systems">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  
  <!-- Open Graph (Social Sharing) -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://zinara.co.ke/">
  <meta property="og:title" content="Zinara Digital Systems - Revenue Systems with AI">
  <meta property="og:description" content="Build predictable revenue systems with AI. Four integrated layers for sustainable growth.">
  <meta property="og:image" content="https://zinara.co.ke/assets/og-image-1200x630.webp">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Zinara Digital Systems">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@ZinaraDigital">
  <meta name="twitter:title" content="Zinara Digital Systems - Revenue Systems with AI">
  <meta name="twitter:description" content="Build predictable revenue systems with AI. Four integrated layers for sustainable growth.">
  <meta name="twitter:image" content="https://zinara.co.ke/assets/twitter-image-1200x675.webp">
  
  <!-- Favicon & Icons -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- Preconnect & DNS Prefetch -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="/css/main.css">
  
  <!-- Critical CSS Inline (FOUC Prevention) -->
  <style>
    :root {
      --brand-primary: #00043F;
      --brand-accent: #f8cf40;
      --brand-bg: #FFFFFF;
      --surface-soft: #E6E9F2;
      --text-primary: #1a1a1a;
      --text-secondary: #404040;
      --text-muted: #666666;
      --text-on-dark: #FFFFFF;
    }
    
    html { scroll-behavior: smooth; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; }
    nav { position: sticky; top: 0; z-index: 1000; background: var(--brand-bg); border-bottom: 1px solid #e0e0e0; }
  </style>
</head>
<body>
  <!-- Page Content -->
</body>
</html>
```

**Title Template Rules:**
- Format: `[Page Title] | [Brand Name]`
- Length: 50-60 characters
- Include primary keyword
- Examples:
  - Home: "Zinara Digital Systems - Revenue Systems with AI"
  - Service: "Digital Marketing - Layer 1 | Zinara Digital Systems"
  - Audit: "Revenue Audit - Diagnostic Entry Point | Zinara"

**Meta Description Rules:**
- Length: 150-160 characters
- Include primary keyword and CTA
- Unique per page
- Examples:
  - Home: "Zinara builds predictable revenue systems with AI. Four integrated layers: Digital Marketing, AI Training, Automation, and Revenue Audit. Start your free audit today."
  - Service: "Discover how Digital Marketing powers demand generation. Layer 1 of Zinara's revenue system. Learn the 7 sub-systems driving qualified leads."

**Open Graph Image Specifications:**
- Dimensions: 1200x630px (recommended)
- Format: WebP or JPEG
- File size: <200KB
- Include brand colors and page title
- Fallback: Use consistent brand hero image

**Twitter Card Specifications:**
- Card type: `summary_large_image`
- Image dimensions: 1200x675px
- Format: WebP or JPEG
- File size: <200KB

---

### Page Type: Service/Layer Page (Digital Marketing, AI Training, Automation)

```html
<head>
  <title>Digital Marketing - Layer 1: The Intent Generation Engine | Zinara</title>
  <meta name="description" content="Layer 1 of Zinara's revenue system. Build authority, generate qualified demand, and acquire customers through integrated digital marketing systems. Explore 7 sub-systems.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://zinara.co.ke/digital-marketing">
  <meta property="og:title" content="Digital Marketing - Layer 1 | Zinara Digital Systems">
  <meta property="og:description" content="Build authority and generate qualified demand through integrated digital marketing systems.">
  <meta property="article:published_time" content="2026-01-27T00:00:00Z">
  <meta property="article:modified_time" content="2026-01-27T00:00:00Z">
  <meta property="article:author" content="Zinara Digital Systems">
</head>
```

---

### Page Type: Audit/Landing Page

```html
<head>
  <title>Revenue Audit - Identify Revenue Failures | Zinara Digital Systems</title>
  <meta name="description" content="Free revenue audit diagnostic. Identify demand, capture, system, capability, continuity, and authority failures. Get your recovery roadmap. Schedule your free audit now.">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://zinara.co.ke/audit">
  <meta property="og:title" content="Free Revenue Audit | Zinara Digital Systems">
  <meta property="og:description" content="Identify revenue failures and get your recovery roadmap. Free diagnostic audit.">
</head>
```

---

### Page Type: 404 Error Page

```html
<head>
  <title>Page Not Found - Zinara Digital Systems</title>
  <meta name="description" content="The page you are looking for could not be found. Return to Zinara Digital Systems homepage or start a free revenue audit.">
  <meta name="robots" content="noindex, follow">
  <meta property="og:type" content="website">
</head>
```

---

## 4. JSON-LD SCHEMA MARKUP

### Organization Schema (Add to all pages in <head>)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zinara Digital Systems",
  "url": "https://zinara.co.ke",
  "logo": "https://zinara.co.ke/assets/logo.svg",
  "description": "Building predictable revenue systems with AI",
  "sameAs": [
    "https://www.linkedin.com/company/zinara-digital",
    "https://twitter.com/ZinaraDigital",
    "https://www.facebook.com/ZinaraDigital"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "telephone": "+254-700-000-000",
    "email": "info@zinara.co.ke"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nairobi",
    "addressCountry": "KE"
  }
}
</script>
```

### Website Schema (Add to home page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Website",
  "name": "Zinara Digital Systems",
  "url": "https://zinara.co.ke",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://zinara.co.ke/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
```

### WebPage Schema (Add to all pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[PAGE_TITLE]",
  "description": "[PAGE_DESCRIPTION]",
  "url": "[PAGE_URL]",
  "isPartOf": {
    "@type": "Website",
    "name": "Zinara Digital Systems",
    "url": "https://zinara.co.ke"
  },
  "datePublished": "[PUBLISH_DATE]",
  "dateModified": "[MODIFIED_DATE]",
  "author": {
    "@type": "Organization",
    "name": "Zinara Digital Systems"
  }
}
</script>
```

### BreadcrumbList Schema (Add to service pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zinara.co.ke/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "System Architecture",
      "item": "https://zinara.co.ke/system"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Digital Marketing",
      "item": "https://zinara.co.ke/digital-marketing"
    }
  ]
}
</script>
```

### FAQPage Schema (Add to audit page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Demand Failure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Demand Failure occurs when people are not aware of your business or interested in what you offer. Key indicators include inconsistent lead flow, weak brand recognition, and ineffective marketing channels."
      }
    },
    {
      "@type": "Question",
      "name": "What is Capture Failure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Capture Failure happens when you fail to convert interested prospects into qualified leads. This includes poor website conversion optimization, unclear CTAs, and ineffective lead qualification."
      }
    },
    {
      "@type": "Question",
      "name": "What is System Failure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "System Failure occurs when your revenue operations are not running efficiently and predictably. This includes lack of system integration, poor pipeline visibility, and undocumented processes."
      }
    }
  ]
}
</script>
```

### LocalBusiness Schema (Add to contact page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zinara Digital Systems",
  "image": "https://zinara.co.ke/assets/logo.svg",
  "description": "Building predictable revenue systems with AI",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nairobi",
    "addressCountry": "KE"
  },
  "telephone": "+254-700-000-000",
  "email": "info@zinara.co.ke",
  "url": "https://zinara.co.ke",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
}
</script>
```

---

## 5. PLATFORM INTEGRATIONS & IMPLEMENTATION SNIPPETS

### Google Tag Manager (GTM) Setup

**GTM Container Snippet (Add to <head> and <body>):**

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM_ID_PLACEHOLDER');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM_ID_PLACEHOLDER"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Replace `GTM_ID_PLACEHOLDER` with your actual GTM Container ID (e.g., GTM-XXXXXX)**

### DataLayer Structure

```javascript
// Initialize dataLayer (add before GTM script)
window.dataLayer = window.dataLayer || [];

// Push page view data
dataLayer.push({
  'event': 'page_view',
  'page_title': document.title,
  'page_url': window.location.href,
  'page_path': window.location.pathname,
  'page_type': 'home', // or 'service', 'audit', 'contact', etc.
  'user_id': '[USER_ID_IF_LOGGED_IN]',
  'timestamp': new Date().toISOString()
});

// Push event data (CTA click example)
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', function() {
    dataLayer.push({
      'event': 'cta_click',
      'cta_text': this.textContent,
      'cta_url': this.href,
      'cta_type': 'primary',
      'page_section': this.closest('section')?.id || 'unknown',
      'timestamp': new Date().toISOString()
    });
  });
});

// Push form submission data
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    dataLayer.push({
      'event': 'form_submit',
      'form_name': this.name || this.id,
      'form_fields': Array.from(this.elements).map(el => el.name),
      'timestamp': new Date().toISOString()
    });
  });
});
```

### Google Analytics 4 (GA4) Setup

**GA4 Measurement Snippet (Add to <head>):**

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID_PLACEHOLDER"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID_PLACEHOLDER', {
    'page_path': window.location.pathname,
    'page_title': document.title,
    'anonymize_ip': true,
    'allow_google_signals': true,
    'allow_ad_personalization_signals': false
  });
</script>
```

**Replace `GA_MEASUREMENT_ID_PLACEHOLDER` with your GA4 Measurement ID (e.g., G-XXXXXXXXXX)**

**GA4 Custom Events:**

```javascript
// CTA Click Event
gtag('event', 'cta_click', {
  'button_text': 'Get Started',
  'button_url': '/get-started',
  'page_section': 'hero',
  'page_type': 'home'
});

// Form Submit Event
gtag('event', 'form_submit', {
  'form_name': 'contact_form',
  'form_fields': ['name', 'email', 'message'],
  'page_type': 'contact'
});

// Audit Category Expand Event
gtag('event', 'accordion_expand', {
  'category_name': 'Demand Failure',
  'page_type': 'audit'
});

// Lead Generation Event
gtag('event', 'lead_generated', {
  'lead_source': 'audit_form',
  'lead_type': 'free_audit',
  'value': 0,
  'currency': 'USD'
});
```

### Meta Pixel (Facebook) Setup

```html
<!-- Meta Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'FACEBOOK_PIXEL_ID_PLACEHOLDER');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=FACEBOOK_PIXEL_ID_PLACEHOLDER&ev=PageView&noscript=1" /></noscript>
```

**Replace `FACEBOOK_PIXEL_ID_PLACEHOLDER` with your Meta Pixel ID**

**Meta Pixel Custom Events:**

```javascript
// Lead Event
fbq('track', 'Lead', {
  content_name: 'Free Audit',
  content_type: 'service',
  value: 0.00,
  currency: 'USD'
});

// ViewContent Event
fbq('track', 'ViewContent', {
  content_ids: ['digital-marketing'],
  content_name: 'Digital Marketing Layer',
  content_type: 'product',
  value: 0.00,
  currency: 'USD'
});
```

### LinkedIn Insight Tag

```html
<!-- LinkedIn Insight Tag -->
<script type="text/javascript">
  _linkedin_partner_id = "LINKEDIN_PARTNER_ID_PLACEHOLDER";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/javascript">
  (function(){var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);})();
</script>
<noscript>
  <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=LINKEDIN_PARTNER_ID_PLACEHOLDER&conversionId=CONVERSION_ID_PLACEHOLDER&fmt=gif" />
</noscript>
```

**Replace `LINKEDIN_PARTNER_ID_PLACEHOLDER` and `CONVERSION_ID_PLACEHOLDER` with your LinkedIn IDs**

**LinkedIn Conversion Events:**

```javascript
// Track Lead Conversion
window.lintrk('track', { conversion_id: 'CONVERSION_ID_PLACEHOLDER' });

// Track Page View with custom data
window.lintrk('track', {
  conversion_id: 'CONVERSION_ID_PLACEHOLDER',
  'page_type': 'audit'
});
```

### Hotjar Session Recording Setup

```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:HOTJAR_ID_PLACEHOLDER,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

**Replace `HOTJAR_ID_PLACEHOLDER` with your Hotjar Site ID**

**Hotjar Custom Events:**

```javascript
// Track CTA Click
hj('event', 'cta_click_get_started');

// Track Form Submission
hj('event', 'form_submit_contact');

// Track Audit Engagement
hj('event', 'audit_category_expanded');
```

---

## 6. CONVERSATION FLOWS AND BOT SCRIPTS

### Conversation Flow 1: Product Inquiry

**Purpose:** Capture initial interest and qualify lead for sales follow-up  
**Trigger:** User clicks "Get Started" or "Learn More" CTA  
**Platform:** Intercom, Drift, or custom chatbot

**Flow Diagram:**
```
START
  ↓
Bot: "Hi! 👋 Welcome to Zinara. What brings you here today?"
  ↓
User: [Selects option or types response]
  ↓
Bot: [Branches based on response]
  ├─ "I want to learn about your services"
  │   ↓
  │   Bot: "Great! Are you interested in Digital Marketing, AI Training, Automation, or a Revenue Audit?"
  │   ↓
  │   User: [Selects layer]
  │   ↓
  │   Bot: [Provides layer info + CTA to schedule call]
  │
  ├─ "I need help with revenue growth"
  │   ↓
  │   Bot: "Perfect! Let's start with a free Revenue Audit to identify your revenue failures."
  │   ↓
  │   Bot: "Can I get your email to schedule your audit?"
  │   ↓
  │   User: [Enters email]
  │   ↓
  │   Bot: "Thanks! Our team will reach out within 24 hours."
  │
  └─ "I have a specific question"
      ↓
      Bot: "I'd love to help! What's your question?"
      ↓
      User: [Types question]
      ↓
      Bot: [Attempts to answer or escalates to human]
        ↓
        [If escalation needed]
        ↓
        Bot: "Let me connect you with a specialist..."
        ↓
        Human Agent: [Takes over]
        ↓
        END
```

**Node-by-Node Breakdown:**

| Node | Bot Message | User Input | Validation | Next Node |
|---|---|---|---|---|
| 1 | "Hi! Welcome to Zinara. What brings you here today?" | Quick reply buttons: "Learn about services", "Revenue growth help", "Specific question" | Required | 2, 3, or 4 |
| 2 | "Great! Are you interested in Digital Marketing, AI Training, Automation, or Revenue Audit?" | Quick reply buttons | Required | 5 |
| 3 | "Perfect! Let's start with a free Revenue Audit. Can I get your email?" | Email input | Valid email format | 6 |
| 4 | "I'd love to help! What's your question?" | Free text | Min 10 chars | 7 |
| 5 | "[Layer info]. Would you like to schedule a call with our team?" | "Yes" / "No" | Required | 8 or 9 |
| 6 | "Thanks! Our team will reach out within 24 hours." | N/A | N/A | END |
| 7 | [AI attempts answer or escalates] | N/A | N/A | 10 or 11 |
| 8 | "Great! What's your email?" | Email input | Valid email | 12 |
| 9 | "No problem! Feel free to explore our site or reach out anytime." | N/A | N/A | END |
| 10 | [Answer provided] | "Helpful" / "Not helpful" | Required | 11 or 13 |
| 11 | "Let me connect you with a specialist..." | N/A | N/A | HANDOFF |
| 12 | "Perfect! We'll be in touch soon." | N/A | N/A | END |
| 13 | "I apologize. Let me connect you with our team." | N/A | N/A | HANDOFF |

**Sample Utterances & Slot Mapping:**

```javascript
// Utterances for intent detection
const utterances = {
  learn_services: [
    "tell me about your services",
    "what do you offer",
    "how can you help",
    "learn more"
  ],
  revenue_growth: [
    "i need help with revenue",
    "how do i grow revenue",
    "revenue audit",
    "i want to increase sales"
  ],
  schedule_call: [
    "schedule a call",
    "book a meeting",
    "talk to someone",
    "speak with a specialist"
  ]
};

// Slot mapping (CMS fields)
const slots = {
  email: {
    type: 'email',
    validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    cms_field: 'contact_email'
  },
  layer_interest: {
    type: 'category',
    options: ['digital-marketing', 'ai-training', 'automation', 'audit'],
    cms_field: 'service_interest'
  },
  phone: {
    type: 'phone',
    validation: /^\+?[1-9]\d{1,14}$/,
    cms_field: 'contact_phone'
  }
};
```

---

### Conversation Flow 2: Revenue Audit Booking

**Purpose:** Guide user through audit discovery and schedule consultation  
**Trigger:** User visits `/audit` page or clicks "Schedule Audit" CTA  
**Platform:** Intercom, Drift, or custom chatbot

**Flow Diagram:**
```
START
  ↓
Bot: "Welcome to Zinara's Revenue Audit. This free diagnostic takes 5 minutes."
  ↓
Bot: "First, what's your business industry?"
  ↓
User: [Selects industry or types]
  ↓
Bot: "How many team members do you have?"
  ↓
User: [Selects range: 1-10, 11-50, 51-200, 200+]
  ↓
Bot: "What's your current annual revenue?"
  ↓
User: [Selects range]
  ↓
Bot: "Which revenue failure concerns you most?"
  ↓
User: [Selects: Demand, Capture, System, Capability, Continuity, Authority]
  ↓
Bot: "Thanks! Can I get your contact info?"
  ↓
User: [Enters name, email, phone]
  ↓
Bot: "Perfect! Your audit report will be ready in 24 hours. When would you like to discuss results?"
  ↓
User: [Selects time slot]
  ↓
Bot: "Confirmed! Check your email for calendar invite."
  ↓
END
```

**Handoff Conditions:**
- If user selects "urgent" or mentions immediate need → escalate to human
- If user has >500 employees → escalate to enterprise team
- If user asks technical questions beyond scope → escalate to specialist

**Fallback Messages:**
- "I didn't quite understand. Could you rephrase?"
- "I'm not sure about that. Let me connect you with our team."
- "It seems like you need specialized help. One moment while I find the right person..."

---

## 7. TRACKING PLAN AND EVENT MAP

### Event Taxonomy

| Event Name | Trigger Condition | DataLayer/Payload | GA4 Event | Conversion | Purpose |
|---|---|---|---|---|---|
| `page_view` | Page loads | `{ page_title, page_url, page_type, user_id }` | `page_view` | No | Track all page visits |
| `cta_click` | User clicks CTA button | `{ cta_text, cta_url, cta_type, page_section }` | `cta_click` | No | Track engagement with calls-to-action |
| `form_start` | User focuses on form field | `{ form_name, form_id, field_name }` | `form_start` | No | Track form engagement |
| `form_field_error` | Form validation fails | `{ form_name, field_name, error_message }` | `form_error` | No | Track form issues |
| `form_submit` | User submits form | `{ form_name, form_fields, submission_time }` | `form_submit` | Yes | Track lead capture |
| `audit_category_expand` | User expands accordion | `{ category_name, category_id, expand_time }` | `accordion_expand` | No | Track audit engagement |
| `audit_complete` | User completes audit | `{ audit_duration, categories_viewed, final_score }` | `audit_complete` | Yes | Track audit completion |
| `video_play` | User plays video | `{ video_title, video_id, video_duration }` | `video_play` | No | Track video engagement |
| `video_complete` | User watches 100% of video | `{ video_title, video_id, watch_time }` | `video_complete` | No | Track video completion |
| `chat_initiated` | User opens chat | `{ chat_type, page_type, user_id }` | `chat_initiated` | No | Track chat engagement |
| `chat_message_sent` | User sends chat message | `{ message_length, message_sentiment, page_type }` | `chat_message` | No | Track chat activity |
| `chat_converted` | Chat leads to lead/sale | `{ chat_duration, messages_count, conversion_type }` | `chat_converted` | Yes | Track chat conversion |
| `lead_generated` | Lead captured (form/chat/audit) | `{ lead_source, lead_type, lead_value, lead_quality }` | `lead_generated` | Yes | Track lead generation |
| `demo_scheduled` | User schedules demo/call | `{ demo_date, demo_type, demo_duration }` | `demo_scheduled` | Yes | Track demo bookings |
| `content_view` | User views article/resource | `{ content_title, content_type, content_id }` | `content_view` | No | Track content engagement |
| `scroll_depth` | User scrolls to milestone | `{ scroll_percentage, page_section, time_on_page }` | `scroll_depth` | No | Track page engagement |
| `error_page_view` | 404 or error page loads | `{ error_code, referrer_url, attempted_url }` | `error_page_view` | No | Track broken links |
| `search_query` | User searches site | `{ search_term, search_results_count }` | `search` | No | Track search behavior |

### Conversion Definitions

**Lead Generated Conversion:**
- Trigger: Form submission (contact, audit, demo booking)
- Value: $0 (placeholder for CRM integration)
- Goal: Track all lead sources

**Audit Completed Conversion:**
- Trigger: User completes revenue audit
- Value: $0 (placeholder for CRM integration)
- Goal: Track audit engagement and qualification

**Demo Scheduled Conversion:**
- Trigger: User books demo/call
- Value: $0 (placeholder for CRM integration)
- Goal: Track sales-qualified leads

**Chat Converted Conversion:**
- Trigger: Chat leads to lead capture or booking
- Value: $0 (placeholder for CRM integration)
- Goal: Track chat ROI

### GA4 Goals Configuration

```javascript
// GA4 Goals (configure in GA4 interface)
const goals = [
  {
    name: 'Lead Generated',
    event: 'form_submit',
    condition: 'form_name equals contact_form OR form_name equals audit_form'
  },
  {
    name: 'Audit Completed',
    event: 'audit_complete',
    condition: 'audit_duration >= 300'
  },
  {
    name: 'Demo Scheduled',
    event: 'demo_scheduled',
    condition: 'demo_date is not empty'
  },
  {
    name: 'Chat Converted',
    event: 'chat_converted',
    condition: 'conversion_type equals lead OR conversion_type equals booking'
  }
];
```

---

## 8. CONSENT AND COMPLIANCE (GDPR/CCPA)

### Cookie Categories & Retention

| Category | Purpose | Retention | Examples | Consent Required |
|---|---|---|---|---|
| Strictly Necessary | Site functionality | Session | Session ID, CSRF token | No |
| Preferences | User preferences | 1 year | Language, theme, font size | Yes |
| Analytics | Website analytics | 13 months | GA4, Hotjar | Yes |
| Marketing | Advertising & retargeting | 90 days | Meta Pixel, LinkedIn Insight | Yes |

### Cookie Banner Copy

```html
<!-- Cookie Consent Banner -->
<div id="cookie-banner" role="alertdialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
  <h2 id="cookie-title">We Use Cookies</h2>
  <p id="cookie-description">
    We use cookies to improve your experience, analyze site usage, and deliver personalized content. 
    By clicking "Accept All," you consent to our use of cookies. You can customize your preferences below.
  </p>
  
  <div class="cookie-categories">
    <label>
      <input type="checkbox" name="strictly-necessary" checked disabled>
      <span>Strictly Necessary (Always On)</span>
      <p>Required for site functionality and security.</p>
    </label>
    
    <label>
      <input type="checkbox" name="analytics">
      <span>Analytics</span>
      <p>Help us understand how you use our site to improve your experience.</p>
    </label>
    
    <label>
      <input type="checkbox" name="marketing">
      <span>Marketing</span>
      <p>Allow us to show you relevant ads and content based on your interests.</p>
    </label>
    
    <label>
      <input type="checkbox" name="preferences">
      <span>Preferences</span>
      <p>Remember your preferences for a personalized experience.</p>
    </label>
  </div>
  
  <div class="cookie-actions">
    <button id="cookie-reject" class="btn btn-outline">Reject All</button>
    <button id="cookie-customize" class="btn btn-outline">Customize</button>
    <button id="cookie-accept" class="btn btn-primary">Accept All</button>
  </div>
  
  <a href="/privacy" class="cookie-privacy-link">Privacy Policy</a>
</div>
```

### CMP Configuration (OneTrust/Cookiebot Example)

```javascript
// OneTrust CMP Configuration
window.OneTrust = window.OneTrust || {};
window.OneTrust.coreConfig = {
  "domainId": "ONETRUST_DOMAIN_ID_PLACEHOLDER",
  "language": "en",
  "autoLoad": true,
  "autoConsentIfNoInteraction": false,
  "hideFromCrawlers": true,
  "groupsDisplayFormat": "tab",
  "onConsentChanged": function(consentData) {
    // Block/unblock scripts based on consent
    if (consentData.analytics) {
      // Load GA4, Hotjar, etc.
      loadAnalyticsScripts();
    }
    if (consentData.marketing) {
      // Load Meta Pixel, LinkedIn, etc.
      loadMarketingScripts();
    }
  }
};
```

### Consent Signals for Script Blocking

```javascript
// Check consent before loading third-party scripts
function shouldLoadScript(category) {
  const consent = localStorage.getItem('user_consent');
  if (!consent) return false;
  
  const consentData = JSON.parse(consent);
  return consentData[category] === true;
}

// Load Analytics only if consented
if (shouldLoadScript('analytics')) {
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  document.head.appendChild(script);
}

// Load Marketing pixels only if consented
if (shouldLoadScript('marketing')) {
  // Load Meta Pixel
  // Load LinkedIn Insight
  // Load other marketing pixels
}
```

### Data Processing Checklist

**GDPR Compliance:**
- [ ] Privacy Policy published and accessible
- [ ] Data Processing Agreement (DPA) with all vendors
- [ ] Consent mechanism implemented (cookie banner)
- [ ] Right to access implemented (user can request data)
- [ ] Right to deletion implemented (user can request deletion)
- [ ] Right to portability implemented (user can export data)
- [ ] Data breach notification process documented
- [ ] Data retention policy documented
- [ ] Third-party vendor list maintained
- [ ] DPIA (Data Protection Impact Assessment) completed

**CCPA Compliance:**
- [ ] Privacy Policy includes CCPA disclosures
- [ ] "Do Not Sell My Personal Information" link visible
- [ ] Consumer rights notice provided
- [ ] Opt-out mechanism implemented
- [ ] Vendor list maintained and disclosed
- [ ] Data retention policy compliant with CCPA

**Vendor List (Example):**
```json
{
  "vendors": [
    {
      "name": "Google Analytics 4",
      "purpose": "Analytics",
      "data_processed": ["Page views", "User ID", "Events"],
      "dpa_signed": true,
      "privacy_policy": "https://policies.google.com/privacy"
    },
    {
      "name": "Meta Pixel",
      "purpose": "Advertising",
      "data_processed": ["Page views", "Conversions", "User ID"],
      "dpa_signed": true,
      "privacy_policy": "https://www.facebook.com/privacy/explanation"
    },
    {
      "name": "Hotjar",
      "purpose": "Analytics & Session Recording",
      "data_processed": ["Session recordings", "Heatmaps", "User interactions"],
      "dpa_signed": true,
      "privacy_policy": "https://www.hotjar.com/privacy"
    }
  ]
}
```

### Accessibility Compliance Checklist (WCAG 2.1 AA)

**Contrast & Color:**
- [ ] Text contrast ratio ≥ 4.5:1 for normal text
- [ ] Text contrast ratio ≥ 3:1 for large text (18pt+)
- [ ] Color not the only means of conveying information
- [ ] Focus indicators have ≥ 3:1 contrast

**Keyboard Navigation:**
- [ ] All interactive elements keyboard accessible
- [ ] Tab order logical and intuitive
- [ ] Focus visible at all times
- [ ] No keyboard traps
- [ ] Escape key closes modals/menus

**Focus Order & Skip Links:**
- [ ] Skip to main content link present
- [ ] Focus order follows visual order
- [ ] Focus management in modals/dialogs

**ARIA Usage:**
- [ ] Landmark roles used (banner, main, navigation, contentinfo)
- [ ] aria-label for icon buttons
- [ ] aria-expanded for collapsible sections
- [ ] aria-controls for related elements
- [ ] aria-live for dynamic content

**Alt Text & Images:**
- [ ] Meaningful alt text for all images
- [ ] Decorative images have empty alt=""
- [ ] Complex images have detailed descriptions

**Headings & Structure:**
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Only one h1 per page
- [ ] Headings describe content

**Forms & Labels:**
- [ ] All form fields have associated labels
- [ ] Error messages clear and linked to fields
- [ ] Required fields marked
- [ ] Form instructions provided

**Motion & Animation:**
- [ ] No content flashes more than 3x per second
- [ ] Animations respect prefers-reduced-motion
- [ ] Auto-playing videos can be paused

### Security & Privacy Technical Controls

**Content Security Policy (CSP) Header:**
```
Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://snap.licdn.com https://connect.facebook.net; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  font-src 'self' https://fonts.gstatic.com; 
  img-src 'self' data: https:; 
  connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; 
  frame-ancestors 'none'; 
  base-uri 'self'; 
  form-action 'self'
```

**X-Frame-Options Header:**
```
X-Frame-Options: DENY
```

**HSTS (HTTP Strict Transport Security) Header:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**Secure Cookie Flags:**
```javascript
// Set secure cookies
document.cookie = "session_id=abc123; Secure; HttpOnly; SameSite=Strict; Path=/";
```

**Minimal PII Collection:**
- Only collect: Name, Email, Phone (if necessary)
- Never collect: SSN, Credit card, Password
- Encrypt all PII in transit (HTTPS) and at rest

---

## 9. SEO & TECHNICAL RULES

### URL Patterns

```
Home: /
Service Pages: /[service-name] (e.g., /digital-marketing, /ai-training)
Audit Page: /audit
About Page: /about
Contact Page: /contact
Privacy Page: /privacy
Get Started: /get-started
404 Page: /404 (or automatic 404 handling)

Avoid:
- Query parameters for navigation (use clean URLs)
- Session IDs in URLs
- Duplicate content at different URLs
```

### Canonicalization Strategy

```html
<!-- Add to all pages -->
<link rel="canonical" href="https://zinara.co.ke[PAGE_PATH]">

<!-- For pagination (if applicable) -->
<!-- Page 1 -->
<link rel="canonical" href="https://zinara.co.ke/resources">
<link rel="next" href="https://zinara.co.ke/resources?page=2">

<!-- Page 2 -->
<link rel="canonical" href="https://zinara.co.ke/resources?page=2">
<link rel="prev" href="https://zinara.co.ke/resources">
<link rel="next" href="https://zinara.co.ke/resources?page=3">
```

### Sitemap.xml Rules

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zinara.co.ke/</loc>
    <lastmod>2026-01-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://zinara.co.ke/digital-marketing</loc>
    <lastmod>2026-01-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zinara.co.ke/audit</loc>
    <lastmod>2026-01-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

### robots.txt Example

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /temp/

Sitemap: https://zinara.co.ke/sitemap.xml

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /
```

### hreflang Implementation (Multi-language)

```html
<!-- English (default) -->
<link rel="alternate" hreflang="en" href="https://zinara.co.ke/">

<!-- If future translations exist -->
<link rel="alternate" hreflang="fr" href="https://fr.zinara.co.ke/">
<link rel="alternate" hreflang="es" href="https://es.zinara.co.ke/">
<link rel="alternate" hreflang="x-default" href="https://zinara.co.ke/">
```

### Internal Linking Recommendations

- Link from home to all main service pages
- Link from service pages to related services
- Link from audit page to service pages
- Use descriptive anchor text (avoid "click here")
- Maintain 2-3 clicks to reach any page from home

---

## 10. PERFORMANCE & TESTING

### Performance Best Practices

**Lazy-Loading Images:**
```html
<img 
  src="placeholder.webp" 
  data-src="actual-image.webp" 
  alt="Description"
  loading="lazy"
  width="1200"
  height="630"
>

<script>
  // Lazy load implementation
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
</script>
```

**Responsive Images with srcset:**
```html
<img 
  src="image-800w.webp" 
  srcset="
    image-400w.webp 400w,
    image-800w.webp 800w,
    image-1200w.webp 1200w,
    image-1600w.webp 1600w
  "
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
  alt="Description"
  width="1200"
  height="630"
>
```

**Preconnect & DNS Prefetch:**
```html
<!-- Preconnect to critical third-party origins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://www.google-analytics.com">
<link rel="preconnect" href="https://www.googletagmanager.com">

<!-- DNS prefetch for non-critical origins -->
<link rel="dns-prefetch" href="https://snap.licdn.com">
<link rel="dns-prefetch" href="https://connect.facebook.net">
```

**Asset Hashing for Long-Term Caching:**
```
main.a1b2c3d4.css
nav.e5f6g7h8.js
logo.i9j0k1l2.svg

Cache-Control: public, max-age=31536000, immutable
```

**Critical CSS Extraction:**
```html
<!-- Inline critical CSS to prevent FOUC -->
<style>
  :root { --brand-primary: #00043F; }
  nav { position: sticky; top: 0; z-index: 1000; }
  .hero { background-color: var(--brand-primary); }
</style>

<!-- Defer non-critical CSS -->
<link rel="stylesheet" href="/css/main.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="/css/main.css"></noscript>
```

### Lighthouse Target Thresholds

| Metric | Target | Threshold |
|---|---|---|
| Performance | >95 | >90 |
| Accessibility | >95 | >90 |
| Best Practices | >95 | >90 |
| SEO | 100 | >95 |
| First Contentful Paint (FCP) | <1.8s | <3s |
| Largest Contentful Paint (LCP) | <2.5s | <4s |
| Cumulative Layout Shift (CLS) | <0.1 | <0.25 |
| Time to Interactive (TTI) | <3.8s | <5s |

### QA Test Cases

**SEO Tags Present:**
```javascript
// Test: All required meta tags present
const tests = {
  title: () => document.title.length > 0 && document.title.length <= 60,
  description: () => {
    const desc = document.querySelector('meta[name="description"]');
    return desc && desc.content.length > 0 && desc.content.length <= 160;
  },
  canonical: () => document.querySelector('link[rel="canonical"]') !== null,
  ogTags: () => {
    const required = ['og:title', 'og:description', 'og:type', 'og:url', 'og:image'];
    return required.every(tag => document.querySelector(`meta[property="${tag}"]`));
  }
};
```

**Schema Validation:**
```javascript
// Test: JSON-LD schema valid
const tests = {
  organizationSchema: () => {
    const schema = document.querySelector('script[type="application/ld+json"]');
    return schema && schema.textContent.includes('"@type":"Organization"');
  },
  breadcrumbSchema: () => {
    const schema = document.querySelector('script[type="application/ld+json"]');
    return schema && schema.textContent.includes('"@type":"BreadcrumbList"');
  }
};
```

**Accessibility Checks:**
```javascript
// Test: Keyboard navigation works
const tests = {
  focusVisible: () => {
    const button = document.querySelector('button');
    button.focus();
    return window.getComputedStyle(button, ':focus').outline !== 'none';
  },
  headingHierarchy: () => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const levels = headings.map(h => parseInt(h.tagName[1]));
    return levels[0] === 1; // First heading should be h1
  }
};
```

### Cross-Browser & Device Test Matrix

| Browser | Desktop | Tablet | Mobile |
|---|---|---|---|
| Chrome (latest) | ✓ | ✓ | ✓ |
| Firefox (latest) | ✓ | ✓ | ✓ |
| Safari (latest) | ✓ | ✓ | ✓ |
| Edge (latest) | ✓ | ✓ | ✓ |
| iOS Safari | - | ✓ | ✓ |
| Chrome Mobile | - | ✓ | ✓ |

**Device Breakpoints to Test:**
- Mobile: 375px (iPhone SE), 414px (iPhone 12), 480px
- Tablet: 768px (iPad), 1024px (iPad Pro)
- Desktop: 1366px, 1920px, 2560px

---

## 11. QA CHECKLIST AND DEPLOYMENT STEPS

### Pre-Deployment Staging Checklist

**Content & Copy:**
- [ ] All page titles and meta descriptions finalized
- [ ] All hero copy reviewed and approved
- [ ] All CTA button text consistent and clear
- [ ] No placeholder text remaining
- [ ] All links tested and working
- [ ] No broken images or missing assets

**Technical & Performance:**
- [ ] Lighthouse score >95 on all metrics
- [ ] Page load time <2 seconds
- [ ] All CSS/JS files minified
- [ ] Asset hashing implemented
- [ ] Cache headers configured
- [ ] Critical CSS inlined
- [ ] Images optimized and responsive

**SEO & Metadata:**
- [ ] All meta tags present and accurate
- [ ] JSON-LD schemas validated
- [ ] Canonical tags correct
- [ ] sitemap.xml generated
- [ ] robots.txt configured
- [ ] hreflang tags (if multi-language)

**Accessibility:**
- [ ] WCAG 2.1 AA compliance verified
- [ ] Keyboard navigation tested
- [ ] Screen reader tested
- [ ] Color contrast verified
- [ ] Focus indicators visible
- [ ] Alt text on all images

**Analytics & Tracking:**
- [ ] GTM container implemented
- [ ] GA4 tracking verified
- [ ] dataLayer structure correct
- [ ] Conversion goals configured
- [ ] Event tracking tested

**Security & Privacy:**
- [ ] HTTPS enabled
- [ ] CSP headers configured
- [ ] Cookie banner implemented
- [ ] Privacy policy linked
- [ ] No sensitive data in code
- [ ] Form data encrypted

**Cross-Browser Testing:**
- [ ] Chrome (desktop, mobile)
- [ ] Firefox (desktop, mobile)
- [ ] Safari (desktop, iOS)
- [ ] Edge (desktop)

**Device Testing:**
- [ ] Mobile (375px, 414px)
- [ ] Tablet (768px, 1024px)
- [ ] Desktop (1366px, 1920px)

### Deployment Steps

**Step 1: Pre-Deployment Verification**
```bash
# Run automated tests
npm run test:seo
npm run test:accessibility
npm run test:performance
npm run test:security

# Manual review
# - Review all pages in staging
# - Test all CTAs and forms
# - Verify analytics tracking
```

**Step 2: Database & CMS Setup**
```bash
# Backup current production
pg_dump production_db > backup_$(date +%Y%m%d).sql

# Migrate CMS content (if applicable)
npm run migrate:cms

# Verify content in staging
# - Check all pages render correctly
# - Verify all content fields populated
```

**Step 3: DNS & Domain Configuration**
```bash
# Update DNS records (if domain change)
# - Update A record to new server IP
# - Update CNAME records for CDN
# - Update MX records for email
# - Wait for DNS propagation (up to 48 hours)

# Verify DNS
dig zinara.co.ke
nslookup zinara.co.ke
```

**Step 4: SSL Certificate Setup**
```bash
# Install SSL certificate
# - Obtain from Let's Encrypt or CA
# - Install on server
# - Configure auto-renewal

# Verify SSL
openssl s_client -connect zinara.co.ke:443
```

**Step 5: Server Configuration**
```bash
# Configure web server (Nginx/Apache)
# - Set cache headers
# - Configure gzip compression
# - Set security headers
# - Configure redirects (HTTP → HTTPS)

# Test server configuration
curl -I https://zinara.co.ke
```

**Step 6: CDN Setup (if applicable)**
```bash
# Configure CDN
# - Point domain to CDN
# - Cache rules: CSS/JS 1 year, HTML 1 hour
# - Purge cache before deployment

# Verify CDN
curl -I https://zinara.co.ke -H "Accept-Encoding: gzip"
```

**Step 7: Monitoring & Alerts**
```bash
# Set up monitoring
# - Uptime monitoring (Pingdom, UptimeRobot)
# - Error tracking (Sentry, Rollbar)
# - Performance monitoring (New Relic, DataDog)
# - Log aggregation (ELK, Splunk)

# Configure alerts
# - 5xx errors
# - Page load time >3s
# - Uptime <99%
```

**Step 8: Go-Live**
```bash
# Final checks
# - Verify all systems operational
# - Test critical user flows
# - Monitor error logs
# - Monitor analytics

# Deploy to production
# - Update DNS (if needed)
# - Clear CDN cache
# - Monitor for issues

# Post-deployment
# - Verify all pages accessible
# - Check analytics data flowing
# - Monitor error rates
# - Monitor performance metrics
```

**Step 9: Rollback Plan (if needed)**
```bash
# If critical issues detected:

# Option 1: Revert to previous version
git revert HEAD
npm run build
npm run deploy

# Option 2: Restore from backup
pg_restore backup_20260127.sql
systemctl restart web-server

# Option 3: DNS rollback
# Update DNS to point to previous server
```

### Feature Flagging Recommendations

```javascript
// Feature flags for gradual rollout
const featureFlags = {
  newDesign: {
    enabled: true,
    rolloutPercentage: 100,
    targetUsers: ['all']
  },
  newCheckout: {
    enabled: false,
    rolloutPercentage: 0,
    targetUsers: []
  },
  betaAudit: {
    enabled: true,
    rolloutPercentage: 50,
    targetUsers: ['beta-testers']
  }
};

// Usage
if (isFeatureEnabled('newDesign')) {
  // Load new design
} else {
  // Load old design
}
```

### Final Delivery Checklist

**Before Handing Off to Client:**
- [ ] All pages deployed and live
- [ ] All links working (no 404s)
- [ ] Analytics tracking verified
- [ ] Forms submitting correctly
- [ ] Mobile responsiveness verified
- [ ] Performance metrics acceptable
- [ ] Accessibility verified
- [ ] Security headers configured
- [ ] SSL certificate installed
- [ ] Backups configured
- [ ] Monitoring alerts set up
- [ ] Documentation provided
- [ ] Support contact information provided
- [ ] Training completed (if needed)

**Documentation to Provide:**
- [ ] CMS User Guide
- [ ] Content Update Instructions
- [ ] Analytics Dashboard Access
- [ ] Support Contact Information
- [ ] Emergency Procedures
- [ ] Backup & Recovery Procedures
- [ ] Performance Optimization Tips

---

## APPENDIX: COMPLETE EXAMPLE PAGE IMPLEMENTATION

### Full Homepage Implementation with All Integrations

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta Tags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="canonical" href="https://zinara.co.ke/">
  
  <title>Zinara Digital Systems - Revenue Systems with AI | Build Predictable Growth</title>
  <meta name="description" content="Zinara builds predictable revenue systems with AI. Four integrated layers: Digital Marketing, AI Training, Automation, and Revenue Audit. Start your free audit today.">
  <meta name="keywords" content="revenue systems, AI training, workflow automation, digital marketing, business growth">
  <meta name="author" content="Zinara Digital Systems">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://zinara.co.ke/">
  <meta property="og:title" content="Zinara Digital Systems - Revenue Systems with AI">
  <meta property="og:description" content="Build predictable revenue systems with AI. Four integrated layers for sustainable growth.">
  <meta property="og:image" content="https://zinara.co.ke/assets/og-image-1200x630.webp">
  <meta property="og:site_name" content="Zinara Digital Systems">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@ZinaraDigital">
  <meta name="twitter:title" content="Zinara Digital Systems - Revenue Systems with AI">
  <meta name="twitter:description" content="Build predictable revenue systems with AI. Four integrated layers for sustainable growth.">
  <meta name="twitter:image" content="https://zinara.co.ke/assets/twitter-image-1200x675.webp">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://www.google-analytics.com">
  <link rel="preconnect" href="https://www.googletagmanager.com">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="/css/main.css">
  
  <!-- Critical CSS Inline -->
  <style>
    :root {
      --brand-primary: #00043F;
      --brand-accent: #f8cf40;
      --brand-bg: #FFFFFF;
      --surface-soft: #E6E9F2;
      --text-primary: #1a1a1a;
      --text-secondary: #404040;
      --text-on-dark: #FFFFFF;
    }
    
    html { scroll-behavior: smooth; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; }
    nav { position: sticky; top: 0; z-index: 1000; background: var(--brand-bg); border-bottom: 1px solid #e0e0e0; }
    .hero { background-color: var(--brand-primary); color: var(--text-on-dark); }
  </style>
  
  <!-- JSON-LD Schemas -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zinara Digital Systems",
    "url": "https://zinara.co.ke",
    "logo": "https://zinara.co.ke/assets/logo.svg",
    "description": "Building predictable revenue systems with AI",
    "sameAs": ["https://www.linkedin.com/company/zinara-digital"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "telephone": "+254-700-000-000",
      "email": "info@zinara.co.ke"
    }
  }
  </script>
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zinara Digital Systems - Revenue Systems with AI",
    "description": "Build predictable revenue systems with AI. Four integrated layers for sustainable growth.",
    "url": "https://zinara.co.ke/",
    "isPartOf": {
      "@type": "Website",
      "name": "Zinara Digital Systems",
      "url": "https://zinara.co.ke"
    }
  }
  </script>
  
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id=GTM_ID_PLACEHOLDER'+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM_ID_PLACEHOLDER');</script>
  
  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID_PLACEHOLDER"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID_PLACEHOLDER', {
      'page_path': window.location.pathname,
      'anonymize_ip': true
    });
  </script>
</head>
<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM_ID_PLACEHOLDER"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  
  <!-- Navigation -->
  <nav role="navigation" aria-label="Main navigation">
    <div class="container">
      <a href="/" class="logo">Zinara</a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/system">System Architecture</a></li>
        <li><a href="/digital-marketing">Digital Marketing</a></li>
        <li><a href="/ai-training">AI Training</a></li>
        <li><a href="/automation">Automation</a></li>
        <li><a href="/audit">Audit</a></li>
        <li><a href="/contact" class="nav-cta">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" role="banner" aria-label="Page hero section">
    <div class="container">
      <h1 class="hero__title">Building Predictable Revenue Systems with AI</h1>
      <p class="hero__subtitle">Four integrated layers. One unified system.</p>
      <p class="hero__description">Zinara transforms how businesses generate demand, build capability, automate operations, and recover revenue.</p>
      <div class="hero__actions" role="group" aria-label="Primary actions">
        <a href="/get-started" class="btn btn-primary" data-event="cta_click" data-cta="get_started">Get Started</a>
        <a href="/audit" class="btn btn-secondary" data-event="cta_click" data-cta="free_audit">Free Audit</a>
      </div>
    </div>
  </section>

  <!-- Four Pillars Section -->
  <section class="pillars" aria-labelledby="pillars-title">
    <div class="container">
      <h2 id="pillars-title" class="pillars__title">Four Integrated Layers</h2>
      <p class="pillars__subtitle">Each layer builds on the previous one to create a complete revenue system.</p>
      
      <div class="pillars__grid" role="list">
        <article class="pillar-card" role="listitem">
          <h3>Digital Marketing</h3>
          <p>Layer 1: The Intent Generation Engine. Build authority, generate qualified demand, and acquire customers through integrated digital marketing systems.</p>
          <a href="/digital-marketing" aria-label="Learn more about Digital Marketing layer">Learn more →</a>
        </article>
        
        <article class="pillar-card" role="listitem">
          <h3>AI Training</h3>
          <p>Layer 2: The Capability Engine. Transform your team into super-powered operators with strategic AI training and certification programs.</p>
          <a href="/ai-training" aria-label="Learn more about AI Training layer">Learn more →</a>
        </article>
        
        <article class="pillar-card" role="listitem">
          <h3>Automation</h3>
          <p>Layer 3: The System Control Engine. Automate revenue operations with AI agents and achieve 90-second response times.</p>
          <a href="/automation" aria-label="Learn more about Automation layer">Learn more →</a>
        </article>
        
        <article class="pillar-card" role="listitem">
          <h3>Revenue Audit</h3>
          <p>Layer 4: The Diagnostic Entry Point. Identify failures and get a roadmap to revenue recovery.</p>
          <a href="/audit" aria-label="Learn more about Revenue Audit layer">Learn more →</a>
        </article>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer role="contentinfo">
    <div class="container">
      <div>
        <h4>Zinara</h4>
        <p>Building revenue systems with AI</p>
      </div>
      <div>
        <h4>Platform</h4>
        <ul role="list">
          <li><a href="/digital-marketing">Digital Marketing</a></li>
          <li><a href="/ai-training">AI Training</a></li>
          <li><a href="/automation">Automation</a></li>
          <li><a href="/audit">Audit</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul role="list">
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy</a></li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul role="list">
          <li><a href="/system">System Architecture</a></li>
          <li><a href="/get-started">Get Started</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Zinara Digital Systems. All rights reserved.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="/js/nav.js" defer></script>
  
  <!-- DataLayer Events -->
  <script>
    // Track CTA clicks
    document.querySelectorAll('[data-event="cta_click"]').forEach(btn => {
      btn.addEventListener('click', function() {
        dataLayer.push({
          'event': 'cta_click',
          'cta_text': this.textContent,
          'cta_type': this.dataset.cta,
          'page_section': 'hero',
          'timestamp': new Date().toISOString()
        });
      });
    });
    
    // Track page scroll depth
    let scrollDepthTracked = false;
    window.addEventListener('scroll', function() {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > 50 && !scrollDepthTracked) {
        dataLayer.push({
          'event': 'scroll_depth',
          'scroll_percentage': 50,
          'page_type': 'home'
        });
        scrollDepthTracked = true;
      }
    });
  </script>
</body>
</html>
```

---

## CONCLUSION

This CMS Implementation Handoff Package provides a complete, production-ready specification for implementing the Zinara Digital Systems website. All code snippets are copy-paste ready, and all placeholders are clearly marked for replacement with actual values.

**Key Implementation Priorities:**
1. Set up GTM and GA4 for analytics tracking
2. Implement cookie consent banner for GDPR/CCPA compliance
3. Configure CSP and security headers
4. Set up monitoring and alerting
5. Test across all devices and browsers
6. Verify accessibility compliance
7. Optimize performance metrics
8. Deploy to production with rollback plan

**Support & Questions:**
For implementation questions or clarifications, refer to the specific sections in this document or contact the development team.

---

**Document End**
