# Zinara Digital Systems - Website

A professional, high-authority static HTML website for Zinara Digital Systems, focusing on AI Adoption, Digital Marketing, and Revenue Infrastructure.

## Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required
- No backend server needed

### Installation
1. Download all files from this repository
2. Open `index.html` in your web browser
3. Or deploy to any static web hosting (Netlify, Vercel, GitHub Pages, etc.)

### File Structure
```
/
├── index.html                    # Homepage
├── digital-marketing.html        # Digital Marketing page
├── ai-training.html             # AI Training page
├── automation.html              # Automation page
├── audit.html                   # Revenue Audit page
├── system.html                  # System Architecture
├── about.html                   # About page
├── contact.html                 # Contact page
├── get-started.html             # Getting Started
├── privacy.html                 # Privacy Policy
├── 404.html                     # Error page
├── css/
│   ├── main.css                 # Main stylesheet
│   └── main.min.css             # Minified stylesheet
├── js/
│   ├── nav.js                   # Navigation & animations
│   └── nav.min.js               # Minified script
└── README.md                    # This file
```

## Features

### Design
- **Conversion-Focused Hierarchy**: Hero → Proof → Benefits → Features → Pricing → CTA
- **Brand Colors**: Navy (#00043F), Gold (#f8cf40), Gray (#8A8D91), Light (#E6E9F2)
- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, 1024px
- **No Gradients**: Clean, professional aesthetic with restrained color signaling

### Functionality
- **Sticky Navigation**: Always accessible with mobile toggle
- **Animated Metrics**: Counters animate when scrolled into view
- **Smooth Transitions**: All interactions have 200-250ms transitions
- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Esc)
- **Accordion Sections**: Expandable FAQ and content sections

### Performance
- **No Render-Blocking Resources**: CSS loads with link tag, JS loads with defer
- **Minified Assets**: 52% CSS reduction, 50% JS reduction
- **Efficient Animations**: CSS transitions and Intersection Observer API
- **Fast Load Times**: Expected <2s LCP, <0.1 CLS

### Accessibility
- **WCAG AA Compliant**: All text meets 4.5:1 color contrast ratio
- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **ARIA Labels**: aria-expanded on menu toggle, aria-label on buttons
- **Keyboard Accessible**: All interactive elements reachable via keyboard

## Customization

### Updating Colors
Edit CSS variables in `css/main.css`:
```css
:root {
  --navy-primary: #00043F;
  --gold-accent: #f8cf40;
  --gray-muted: #8A8D91;
  --surface-soft: #E6E9F2;
}
```

### Updating Content
1. Edit individual `.html` files
2. Update navigation links if adding/removing pages
3. Test responsive design at different breakpoints

### Updating Styles
1. Edit `css/main.css`
2. Test in browser
3. Minify using any CSS minifier
4. Update `css/main.min.css`

### Updating Scripts
1. Edit `js/nav.js`
2. Test in browser console
3. Minify using any JS minifier
4. Update `js/nav.min.js`

## Deployment

### Netlify
1. Connect repository to Netlify
2. Build command: (leave empty - static site)
3. Publish directory: `/` (root)
4. Deploy

### Vercel
1. Connect repository to Vercel
2. Framework: Other (static)
3. Deploy

### Traditional Hosting
1. Upload all files to web server
2. Set MIME types:
   - `.html` → text/html
   - `.css` → text/css
   - `.js` → text/javascript
3. Set cache headers for performance

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

### File Sizes
- `main.css`: 17KB (unminified)
- `main.min.css`: 8.2KB (minified)
- `nav.js`: 2.8KB (unminified)
- `nav.min.js`: 1.4KB (minified)

### Expected Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Contact

**Email:** info@zinara.co.ke
**Phone:** +254 798 859 452

## License

All rights reserved. Zinara Digital Systems, 2026.

---

For detailed implementation information, see `IMPLEMENTATION_SUMMARY.md`
For testing guidelines, see `TESTING_CHECKLIST.md`
For change details, see `CHANGES_SUMMARY.md`
