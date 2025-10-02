# Development Guide for Ghost-8 Purple Vibes Theme

## 🎯 Quick Start for Editing

This theme has been extracted and is ready for editing in Visual Studio Code or any text editor.

### Opening the Theme

**Option 1: VS Code Workspace (Recommended)**
```bash
code ghost-8-theme.code-workspace
```

**Option 2: Open Folder**
```bash
code .
```

## 📁 File Structure Overview

### Template Files (`.hbs`)
Handlebars templates control the HTML structure:

- **`default.hbs`** - Master layout (header, footer, meta tags)
- **`index.hbs`** - Homepage layout
- **`post.hbs`** - Single post/article layout
- **`page.hbs`** - Static page layout
- **`tag.hbs`** - Tag/category archive page
- **`error.hbs`** - 404/error page
- **`custom-*.hbs`** - Custom templates for specific content types

### Partial Templates (`partials/`)
Reusable template components:

- **`partials/curations-addons/`** - Custom cards and widgets
- **`partials/newsletter/`** - Newsletter-specific components
- **`partials/vf/`** - Various features
- **`partials/widgets.hbs`** - Widget components

### Stylesheets (`assets/css/`)
CSS files for styling:

- **`tokens.css`** - CSS custom properties (colors, fonts, spacing)
- **`base.css`** - Base/reset styles
- **`components.css`** - Reusable component styles
- **`homepage-enhanced.css`** - Homepage-specific styles
- **`layout.css`** - Layout utilities
- **`article-mastery.css`** - Article/post styles
- **`tables.css`** - Table styles
- **`section-boxes.css`** - Section box components
- **`screen.css`** - Main compiled stylesheet

### JavaScript (`assets/js/`)
Client-side functionality:

- **`theme.js`** - Main theme JavaScript
- **`sports-live.js`** - Sports/live features
- **`modules/search.js`** - Search functionality
- **`modules/utils.js`** - Utility functions

## 🎨 Common Editing Tasks

### Changing Colors

Edit `assets/css/tokens.css`:
```css
:root {
  --lime: #EBF99A;      /* Change lime accent */
  --purple: #8B5CF6;    /* Change purple accent */
  --black: #000;        /* Change borders/primary */
  --text: #111;         /* Change body text */
  --bg: #ffffff;        /* Change background */
}
```

### Modifying Homepage Layout

Edit `index.hbs` to change the homepage structure.

Key sections:
- Line 6-13: Header section
- Line 15+: Article listing

### Customizing Header/Footer

Edit `default.hbs`:
- Header: Lines 1-50 (head section)
- Footer: End of file

### Adding Custom Styles

1. Create a new CSS file in `assets/css/`
2. Import it in `screen.css` or link it in `default.hbs`

### Modifying Post Layout

Edit `post.hbs` to change how individual posts are displayed.

## 🔧 Ghost Handlebars Helpers

Common helpers used in this theme:

- `{{#foreach posts}}` - Loop through posts
- `{{#if feature_image}}` - Conditional rendering
- `{{img_url}}` - Generate responsive image URLs
- `{{@site.title}}` - Site title
- `{{@site.url}}` - Site URL
- `{{primary_tag}}` - First tag of a post
- `{{tags}}` - All tags
- `{{date}}` - Format dates
- `{{excerpt}}` - Post excerpt
- `{{content}}` - Full post content

## 🎯 Testing Your Changes

### Local Testing with Ghost CLI

If you have Ghost CLI installed:

```bash
# Navigate to Ghost installation
cd /path/to/ghost

# Copy theme to content/themes/
cp -r /path/to/ghost-8 content/themes/curationsla

# Restart Ghost
ghost restart
```

### Testing by Upload

1. Create a zip file (excluding git and temp files):
   ```bash
   zip -r curationsla-theme.zip . \
     -x "*.git*" \
     -x "*.zip" \
     -x "node_modules/*" \
     -x ".vscode/*" \
     -x "*.tmp"
   ```

2. Upload to Ghost Admin:
   - Go to Settings → Design
   - Click "Change theme"
   - Upload zip file

## 🐛 Troubleshooting

### Theme Not Working After Changes?

1. Check Ghost logs for errors
2. Validate theme structure matches Ghost requirements
3. Ensure all required files are present:
   - `package.json`
   - `default.hbs`
   - `index.hbs`
   - `post.hbs`

### CSS Changes Not Showing?

1. Clear browser cache
2. Check if CSS file is properly linked in `default.hbs`
3. Restart Ghost if using local development

### Template Errors?

1. Check Handlebars syntax
2. Ensure closing tags match opening tags
3. Validate helper names are correct

## 📚 Key Resources

- **Ghost Themes Documentation**: https://ghost.org/docs/themes/
- **Handlebars Helpers**: https://ghost.org/docs/themes/helpers/
- **Theme Development**: https://ghost.org/docs/themes/structure/

## 🎨 Theme Features

### Current Implemented Features

✅ **Purple Branding** - Rich purple (#8B5CF6) accent throughout  
✅ **Lime Highlights** - Vibrant lime (#EBF99A) for hovers/selection  
✅ **Newsletter Layout** - List-based design optimized for newsletters  
✅ **Mobile Responsive** - Fully responsive across all devices  
✅ **SEO Optimized** - Enhanced meta tags for local LA content  
✅ **Weather Widget** - Integrated weather display  
✅ **Category Filtering** - Dynamic category/tag filtering  
✅ **Ghost 6.0 Compatible** - ActivityPub and modern features  

### Custom Configuration

Theme settings can be configured in Ghost Admin under Settings → Design:

- **Accent Color** - Primary color for highlights
- **Newsletter Style** - Toggle newsletter layout
- **Widgets on Posts** - Show/hide widgets on posts
- **Enhanced Animations** - Enable smooth transitions

## 📝 Best Practices

1. **Always backup** before making major changes
2. **Test locally** before deploying to production
3. **Keep CSS organized** using the existing file structure
4. **Use existing classes** before creating new ones
5. **Follow Ghost theme guidelines** for compatibility
6. **Comment your code** for future reference
7. **Preserve accessibility** features (ARIA labels, semantic HTML)

## 🚀 Deployment

When ready to deploy:

1. Create a production zip:
   ```bash
   zip -r curationsla-production.zip . \
     -x "*.git*" \
     -x "*.zip" \
     -x "node_modules/*" \
     -x ".vscode/*" \
     -x "DEVELOPMENT.md" \
     -x "*.workspace"
   ```

2. Upload to Ghost Admin
3. Activate the theme
4. Clear cache and test thoroughly

---

Happy theming! 🎨 For questions, reach out to hello@curations.cc
