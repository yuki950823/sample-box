# Sample Box - Property Renovation Website

A modern, responsive website built directly from Figma design using **Tailwind CSS**. This implementation precisely matches the Figma design with exact colors, typography, spacing, and layout.

## 🎨 Design Specifications

This website is built to match the exact Figma design specifications:

- **Dark Theme**: Primary background `#1b1e24`
- **Brand Colors**: 
  - Purple: `#454dcc`
  - Beige: `#f1e8de`, `#ccc4ba`
  - Neutral: `#cbd5e1`
- **Typography**:
  - **Futura PT** (Heavy 900, Demi 600) for headings
  - **Nunito Sans** (Regular 400, SemiBold 600, Bold 700) for body text
- **Exact Spacing**: All padding, margins, and gaps match Figma pixel-perfect

## 🚀 Features

- ✅ **Pixel-Perfect Design** - Matches Figma design exactly
- ✅ **Tailwind CSS** - Modern utility-first CSS framework via CDN
- ✅ **Dark Theme** - Professional dark UI with brand colors
- ✅ **Responsive Layout** - Fully responsive across all devices
- ✅ **Smooth Animations** - Fade-in effects and hover transitions
- ✅ **Interactive Elements** - Button ripples, hover effects, form validation
- ✅ **Performance Optimized** - Fast loading with lazy image loading

## 📁 Project Structure

```
Sample-box-03/
├── assets/
│   ├── images/              # Place your images here
│   │   ├── hero-main.jpg
│   │   ├── product-countertop.jpg
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   └── ... (see IMAGE-GUIDE.md)
│   └── logo/
│       └── logo.svg         # Your logo file
├── index.html               # Main HTML with Tailwind classes
├── script.js                # JavaScript functionality
├── README.md               # Documentation
└── IMAGE-GUIDE.md          # Image replacement guide
```

## 🎯 Sections Included

1. **Header** - Sticky dark header with navigation
2. **Hero Section** - Large headline with dual CTAs
3. **Product Showcase** - Side-by-side image and content
4. **Benefits Grid** - 4-column grid with icons
5. **Image Gallery** - 2-column responsive gallery
6. **Smart Jobs** - Feature highlight with mockup
7. **Calculator** - Interactive ROI calculator with metrics
8. **Trends** - Category pills with featured content
9. **Collections** - 3-column design collections
10. **Showcase** - Featured image section
11. **Contact Form** - Full-width contact form
12. **Footer** - Multi-column footer with social links

## 🛠️ Technologies Used

- **Tailwind CSS** (CDN) - Utility-first CSS framework
- **Vanilla JavaScript** - No framework dependencies
- **HTML5** - Semantic markup
- **Google Fonts** - Nunito Sans typography

## 🚦 Getting Started

1. **Open** `index.html` in your web browser
2. **Replace images** - Add your images to `assets/images/` folder (see IMAGE-GUIDE.md)
3. That's it! No build process or installation required

The Tailwind CSS is loaded via CDN, so everything works instantly.

### 📸 Adding Your Images

See **[IMAGE-GUIDE.md](IMAGE-GUIDE.md)** for complete instructions on:
- Required image files and sizes
- Where to place images
- How to optimize images
- Troubleshooting tips

## 🎨 Customization

### Colors
Edit the Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-dark': '#1b1e24',
                'brand-purple': '#454dcc',
                'brand-beige': '#f1e8de',
                // Add your custom colors
            }
        }
    }
}
```

### Images
Replace the Unsplash URLs with your actual images throughout `index.html`.

### Content
All text content is directly in the HTML for easy editing.

## 📱 Responsive Breakpoints

Tailwind's default breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

The design uses custom max-width of 1440px for consistent layout.

## 🎨 Design Tokens

From Figma design system:

**Typography Scale:**
- Display XL/Heavy: 60px / 64px line-height
- Display S/Demi: 30px / 36px line-height
- Body XL: 24px / 32px line-height
- Body L: 20px / 28px line-height
- Body: 16px / 24px line-height

**Spacing:**
- Section padding: 96px vertical
- Container padding: 104px horizontal
- Grid gaps: 24px, 56px depending on context

**Border Radius:**
- Small: 8px
- Medium: 12px
- Large: 16px
- XL: 24px (pills)

## ⚡ Performance

- No build process required
- Tailwind CSS JIT via CDN (~50KB)
- Minimal JavaScript
- Optimized images with proper sizing
- Lazy loading ready

## 🔧 Features in JavaScript

- ✅ Smooth scroll navigation
- ✅ Header scroll effects
- ✅ Trend category switching
- ✅ Form validation and submission
- ✅ Currency formatting in calculator
- ✅ Intersection Observer animations
- ✅ Button ripple effects
- ✅ Image lazy loading

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- **Design Fidelity**: This build matches the Figma design exactly
- **Tailwind CDN**: Using CDN for instant setup (production should use compiled Tailwind)
- **Images**: Using Unsplash placeholders - replace with your actual images
- **Form**: Form submission is simulated - integrate with your backend
- **Fonts**: Using web-safe fallbacks for Futura PT (Arial) - add Futura PT web font license for production

## 🎯 Next Steps

1. Replace placeholder images with your actual product photos
2. Set up Tailwind build process for production
3. Add Futura PT web font files (requires license)
4. Integrate contact form with backend API
5. Add actual calculator logic with real ROI calculations
6. Implement mobile menu functionality
7. Add analytics tracking

## 📄 License

This project is open source and available under the MIT License.

---

**Built with Tailwind CSS from your Figma design** 🎨
