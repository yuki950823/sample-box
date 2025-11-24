# 📦 NPM Setup Guide

## ✅ Installation Complete!

Your project is now set up with npm and Tailwind CSS properly installed.

## 📁 Project Structure

```
Sample-box-03/
├── node_modules/          ← npm packages (git ignored)
├── dist/
│   └── output.css        ← Compiled Tailwind CSS
├── src/
│   └── input.css         ← Tailwind source file
├── assets/
│   ├── images/
│   ├── Images-collection/
│   └── logo/
├── index.html
├── collection-detail.html
├── script.js
├── tailwind.config.js    ← Tailwind configuration
├── package.json          ← npm configuration
└── .gitignore           ← Git ignore rules
```

## 🚀 Available Scripts

### Development (Watch Mode)
```bash
npm run dev
```
- Watches for changes in your HTML and CSS
- Auto-rebuilds Tailwind CSS on file changes
- Perfect for development

### Build for Production
```bash
npm run build
```
- Creates minified CSS in `dist/output.css`
- Optimized for production
- Removes unused CSS classes

### Start Dev Server
```bash
npm run serve
```
- Starts live-server on port 3000
- Auto-reloads browser on file changes
- Visit: http://localhost:3000

## 🎨 Using Compiled CSS

### Option 1: Use CDN (Current)
Your HTML files currently use Tailwind CDN:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### Option 2: Use Compiled CSS (Recommended)
Replace the CDN script with:
```html
<link rel="stylesheet" href="dist/output.css">
```

**Benefits:**
- Faster page loads
- No internet required
- Production-ready
- Smaller file size (only used classes)

## 🛠️ Customization

### Colors & Theme
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'brand-dark': '#1b1e24',
      'brand-purple': '#454dcc',
      // Add your custom colors
    },
  },
}
```

### Custom CSS
Edit `src/input.css` to add:
- Custom fonts
- Global styles
- Utility classes
- Animations

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development with watch mode |
| `npm run build` | Build for production |
| `npm run serve` | Start local server |
| `npm start` | Alias for serve |

## 🔄 Workflow

### Daily Development:
1. **Start dev mode:**
   ```bash
   npm run dev
   ```
2. **Edit your HTML/CSS files**
3. **CSS auto-rebuilds** when you save
4. **Refresh browser** to see changes

### Before Deployment:
1. **Build production CSS:**
   ```bash
   npm run build
   ```
2. **Update HTML** to use `dist/output.css`
3. **Test everything**
4. **Deploy** your files

## 📦 Installed Packages

- **tailwindcss@3.4.0** - Utility-first CSS framework
- **postcss@8.5.6** - CSS transformation tool
- **autoprefixer@10.4.22** - Auto-add vendor prefixes
- **live-server@1.2.2** - Development server with live reload

## 🎯 Next Steps

1. **Switch to compiled CSS:**
   - Update HTML files to use `dist/output.css`
   - Remove CDN script tag
   - Test all pages

2. **Start development:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Visit: http://localhost:3000
   - Edit files and see changes instantly

4. **Before going live:**
   ```bash
   npm run build
   ```

## 💡 Tips

- **Keep `dist/` in .gitignore** - It's generated automatically
- **Commit `package.json` and `package-lock.json`** - Others can reproduce your setup
- **Run `npm install` on new machines** - Installs all dependencies
- **Use `npm run dev`** during development - Faster iteration

## 🐛 Troubleshooting

### CSS not updating?
```bash
# Delete dist folder and rebuild
rm -rf dist
npm run build
```

### npm command not found?
- Make sure Node.js is installed
- Check PATH includes npm

### Port 3000 already in use?
- Edit `package.json` serve script
- Change port: `--port=3001`

## 📚 Learn More

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [npm Docs](https://docs.npmjs.com/)
- [PostCSS](https://postcss.org/)

---

**Your project is ready! Run `npm run dev` to start developing.** 🚀

