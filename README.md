# Ghost-8 Purple Vibes Theme

A custom Ghost 6.0+ CMS theme for CurationsLA - Good Vibes × Hyper-Local LA Culture Newsletter.

## 🎨 Theme Overview

This is the current theme for [https://la.curations.cc/](https://la.curations.cc/)

**Version:** 8.2.0-complete-purple  
**Ghost Compatibility:** >= 6.0.0  
**Design Style:** Brutalist with Purple Vibes & Lime Accents

### Key Features

- **Purple Accent Color**: Rich purple (#8B5CF6) throughout the theme
- **Lime Green Highlights**: Vibrant lime (#EBF99A) for hover states and selections
- **Ghost 6.0 Compatible**: Fully compatible with Ghost 6.0+ features including ActivityPub
- **Newsletter-Focused**: Optimized for newsletter-style content
- **Local SEO Optimized**: Enhanced metadata for local Los Angeles content discovery
- **Responsive Design**: Mobile-first, fully responsive layout
- **Custom Widgets**: Weather widget, category filtering, and more

## 📂 Theme Structure

```
ghost-8/
├── assets/
│   ├── built/          # Compiled CSS and JS
│   ├── css/            # Source CSS files
│   ├── icons/          # Theme icons and favicons
│   └── js/             # JavaScript files
├── partials/           # Handlebars partials
│   ├── curations-addons/
│   ├── newsletter/
│   ├── vf/
│   └── widgets/
├── *.hbs               # Handlebars templates
├── package.json        # Theme configuration
└── validation-report.txt
```

## ✅ Development Status

**Last Validated:** October 2, 2025  
**Status:** 🎉 PRODUCTION READY  
**Ghost Dev Environment:** ✅ SETUP COMPLETE  

### Validation Results
- ✅ **0 Critical Errors**
- ✅ **0 Handlebars Issues**
- ✅ **0 CSS Syntax Errors**
- ✅ **0 Undefined Variables**
- ✅ **Ghost 6.x Compatible**
- ⚠️  **1 Minor Warning** (font variables - cosmetic only)

### Ghost Development Environment
A complete Ghost development environment is installed and running:
- **Frontend:** http://localhost:2368
- **Admin:** http://localhost:2368/ghost/
- **Location:** `/workspaces/ghost-local/`
- **Version:** Ghost 6.1.0

See **[SETUP-SUMMARY.md](SETUP-SUMMARY.md)** for complete details.

## 🚀 Quick Start

### For Development

1. **Start Ghost Dev Server:**
   ```bash
   cd /workspaces/ghost-local && ghost start
   ```

2. **Validate Theme:**
   ```bash
   cd /workspaces/ghost-8 && ./validate-theme.sh
   ```

3. **Update Theme in Ghost:**
   ```bash
   cd /workspaces && \
   rm -rf ghost-local/content/themes/curationsla && \
   cp -r ghost-8 ghost-local/content/themes/curationsla && \
   cd ghost-local && ghost restart
   ```

### Opening in Visual Studio Code

1. **Using the Workspace File** (Recommended):
   ```bash
   code ghost-8-theme.code-workspace
   ```

2. **Or open the folder directly**:
   ```bash
   cd /home/runner/work/ghost-8/ghost-8
   code .
   ```

### Key Files to Edit

- **Templates**: `*.hbs` files (Handlebars templates)
  - `default.hbs` - Main layout template
  - `index.hbs` - Homepage template
  - `post.hbs` - Single post template
  - `tag.hbs` - Tag archive template
  
- **Styles**: `assets/css/` directory
  - `tokens.css` - CSS variables and design tokens
  - `base.css` - Base styles
  - `components.css` - Component styles
  - `homepage-enhanced.css` - Homepage-specific styles
  - `screen.css` - Main compiled stylesheet

- **Scripts**: `assets/js/` directory
  - `theme.js` - Main theme JavaScript
  - `sports-live.js` - Sports/live features
  - `modules/` - JavaScript modules

## 🎨 Color Scheme

```css
--lime: #EBF99A          /* Primary accent - lime green */
--purple: #8B5CF6        /* Secondary accent - rich purple */
--black: #000            /* Primary text/borders */
--text: #111             /* Body text */
--text-soft: #444        /* Muted text */
--bg: #ffffff            /* Background */
--muted-purple: #faf9ff  /* Light purple tint */
```

## 🛠️ Development

### Documentation

Complete documentation is available:

- **[SETUP-SUMMARY.md](SETUP-SUMMARY.md)** - 📋 Executive summary & status
- **[GHOST-DEV-SETUP.md](GHOST-DEV-SETUP.md)** - 📚 Complete development guide (detailed)
- **[QUICK-DEV-REFERENCE.md](QUICK-DEV-REFERENCE.md)** - ⚡ Quick command reference
- **[DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md)** - ✈️ Production deployment guide
- **[FINAL-VERIFICATION.txt](FINAL-VERIFICATION.txt)** - ✅ Latest validation report
- **[validate-theme.sh](validate-theme.sh)** - 🔍 Automated validation script

### Making Changes

**Edit Templates:**
```bash
# Edit any .hbs file
vim /workspaces/ghost-8/index.hbs

# Validate
cd /workspaces/ghost-8 && gscan .

# Update in Ghost
cd /workspaces && \
rm -rf ghost-local/content/themes/curationsla && \
cp -r ghost-8 ghost-local/content/themes/curationsla && \
cd ghost-local && ghost restart
```

**Edit CSS:**
```bash
# Edit source CSS
vim /workspaces/ghost-8/assets/css/screen.css

# Copy to built
cp assets/css/screen.css assets/built/screen.css

# Update in Ghost (same as above)
```

**Validate Everything:**
```bash
cd /workspaces/ghost-8
./validate-theme.sh
```

### Ghost Commands
```bash
# Start Ghost
cd /workspaces/ghost-local && ghost start

# Stop Ghost
cd /workspaces/ghost-local && ghost stop

# Restart Ghost
cd /workspaces/ghost-local && ghost restart

# Check Status
cd /workspaces/ghost-local && ghost ls
```

### Making Changes (Deprecated - see above)

1. Edit `.hbs` template files for structure
2. Edit `.css` files in `assets/css/` for styling
3. Edit `.js` files in `assets/js/` for functionality
4. Test locally using Ghost CLI or upload to Ghost instance

### Testing Theme Changes

To test your theme changes, you can:
1. Use Ghost CLI locally: `ghost start`
2. Or zip and upload to your Ghost instance:
   ```bash
   zip -r theme.zip . -x "*.git*" "*.zip" "node_modules/*"
   ```

## 📝 Theme Configuration

The theme supports custom configuration via `package.json`:

- `accent_color` - Primary accent color (default: #ebf998)
- `newsletter_style` - Enable newsletter-style layout
- `widgets_on_posts` - Show widgets on post pages
- `enhanced_animations` - Enable enhanced animations

## 🔗 Resources

- [Ghost Theme Documentation](https://ghost.org/docs/themes/)
- [Ghost Handlebars Reference](https://ghost.org/docs/themes/handlebars/)
- [Ghost Content API](https://ghost.org/docs/content-api/)

## 📄 License

MIT

## 👥 Author

**CURATIONS × GARRETT NOVA**  
Email: hello@curations.cc  
URL: https://la.curations.cc

---

Internal use. Upon completion of Ghost Theme, curate new repo and deploy https://ghost.org/integrations/github/
