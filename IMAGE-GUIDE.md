# 📸 Image Replacement Guide

This guide will help you replace all placeholder images with your own local images.

## 📁 Folder Structure

```
Sample-box-03/
├── assets/
│   ├── images/           # All website images
│   │   ├── hero-main.jpg
│   │   ├── product-countertop.jpg
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   ├── dashboard-preview.jpg
│   │   ├── metric-property.jpg
│   │   ├── metric-tools.jpg
│   │   ├── trend-hvac.jpg
│   │   ├── collection-blonde.jpg
│   │   ├── collection-vivid.jpg
│   │   ├── collection-scale.jpg
│   │   ├── showcase-samples.jpg
│   │   └── README.md     # Detailed image specs
│   └── logo/
│       └── logo.svg       # Your logo file
├── index.html
├── script.js
└── README.md
```

## 🎯 Quick Start

### Step 1: Prepare Your Images

1. Collect all your product/property images
2. Resize them to recommended dimensions (see table below)
3. Optimize for web (compress to reduce file size)
4. Save with exact filenames listed below

### Step 2: Add Images to Folder

Place your images in the `assets/images/` folder with these exact names:

| Filename | Section | Size | Description |
|----------|---------|------|-------------|
| `hero-main.jpg` | Hero | 1232×684px | Main hero background image |
| `product-countertop.jpg` | Product | 708×584px | MSI Countertop close-up |
| `gallery-1.jpg` | Gallery | 709×413px | Interior photo 1 |
| `gallery-2.jpg` | Gallery | 709×413px | Interior photo 2 |
| `dashboard-preview.jpg` | Smart Jobs | 800×500px | Dashboard interface mockup |
| `metric-property.jpg` | Calculator | 400×200px | Modern property photo |
| `metric-tools.jpg` | Calculator | 300×150px | Tools/maintenance photo |
| `trend-hvac.jpg` | Trends | 1200×600px | HVAC/Air conditioner |
| `collection-blonde.jpg` | Collections | 400×400px | Blonde aesthetic interior |
| `collection-vivid.jpg` | Collections | 400×400px | Bold/vivid colors interior |
| `collection-scale.jpg` | Collections | 400×400px | Large scale interior |
| `showcase-samples.jpg` | Showcase | 800×800px | Material samples display |

### Step 3: Replace Logo (Optional)

Replace `assets/logo/logo.svg` with your own logo:
- **Format**: SVG (recommended) or PNG
- **Size**: 88×20px (or similar aspect ratio)
- **Background**: Transparent
- **Color**: White for dark backgrounds

## 🛠️ Image Optimization Tools

### Online Tools
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [ImageOptim](https://imageoptim.com/) - Mac app for compression

### Recommended Settings
- **Format**: JPG for photos, PNG for graphics
- **Quality**: 80-85% for JPG
- **File Size**: Keep under 500KB per image
- **Color Space**: sRGB

## 📐 Aspect Ratios Guide

| Image Type | Aspect Ratio | Example Sizes |
|------------|--------------|---------------|
| Hero | 16:9 | 1232×684, 1920×1080 |
| Product | ~6:5 | 708×584, 1200×1000 |
| Gallery | ~16:9 | 709×413, 1600×900 |
| Square | 1:1 | 400×400, 800×800 |
| Landscape | 2:1 | 1200×600, 800×400 |

## ✅ Image Checklist

Before adding images, make sure:

- [ ] Images are properly sized (or will be cropped automatically)
- [ ] File sizes are optimized (< 500KB each)
- [ ] Filenames match exactly (case-sensitive!)
- [ ] Images are in JPG or PNG format
- [ ] Images are relevant to the content
- [ ] Images are high quality and professional

## 🔄 Testing Your Images

1. Add your images to `assets/images/` folder
2. Open `index.html` in your browser
3. Check that all images load correctly
4. Verify images look good on different screen sizes
5. Check browser console for any 404 errors

## 💡 Tips for Best Results

### Photography Tips
1. **Lighting**: Use natural light when possible
2. **Composition**: Follow rule of thirds
3. **Focus**: Ensure sharp focus on key elements
4. **Background**: Keep backgrounds clean and relevant

### File Naming
- Use lowercase letters
- Use hyphens, not spaces: `my-image.jpg` ✓ NOT `my image.jpg` ✗
- Be descriptive: `modern-kitchen.jpg` ✓ NOT `img1.jpg` ✗

### Image Quality
- Shoot at 2x resolution for retina displays
- Export at high quality (minimize compression artifacts)
- Use consistent color grading across all images
- Maintain consistent style/mood throughout site

## 🚨 Troubleshooting

### Image Not Showing?
1. Check filename matches exactly (case-sensitive)
2. Verify file is in correct folder: `assets/images/`
3. Check file extension (`.jpg` not `.jpeg`)
4. Open browser console (F12) to check for errors
5. Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

### Image Looks Pixelated?
- Use higher resolution source image
- Make sure image isn't being stretched too much
- Export at higher quality setting

### Image Won't Load?
- Check file path in HTML is correct
- Ensure file permissions allow reading
- Try renaming file to remove special characters

## 📝 Fallback Strategy

If you don't have all images ready:

1. **Use placeholders temporarily**: Keep current Unsplash URLs
2. **Mix and match**: Replace only the images you have
3. **Duplicate images**: Use one good image in multiple places temporarily
4. **Solid colors**: Replace with colored rectangles using CSS

Example to use solid color temporarily:
```html
<!-- Instead of image, use colored div -->
<div class="bg-gray-700 w-full h-[584px] rounded-xl"></div>
```

## 🎨 Content Suggestions

### Hero Section
- Modern property exterior or interior
- Well-lit, spacious room
- High-end finishes visible

### Product Section
- Close-up of countertop or material
- Clear texture and color
- Professional lighting

### Gallery
- Different rooms in properties
- Before/after renovations
- Happy tenants (with permission)

### Collections
- Trend-specific interiors
- Color palette examples
- Material samples arranged nicely

## 📞 Need Help?

If you encounter issues:
1. Check the `assets/images/README.md` for detailed specs
2. Verify file paths in `index.html`
3. Test images individually
4. Check browser developer console for errors

---

**Once you've added all your images, delete the placeholder comments in the README files to clean up!** 🎉

