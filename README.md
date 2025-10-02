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

## 🚀 Getting Started

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

This theme uses Ghost's standard theme structure. No build process is required for basic edits to templates.

### Making Changes

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
