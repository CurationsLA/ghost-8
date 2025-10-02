# Ghost Theme Cleanup Analysis

## ✅ KEEP - Core Templates (Required)
- `default.hbs` - Master layout
- `index.hbs` - Homepage  
- `post.hbs` - Single posts
- `page.hbs` - Static pages
- `tag.hbs` - Tag archives
- `error.hbs` - Error pages
- `post-email.hbs` - Email templates

## ✅ KEEP - Active Custom Templates  
- `custom-newsletter.hbs` - ACTIVELY USED (12+ addon references)

## ❌ REMOVE - Unused Custom Templates
- `custom-eats.hbs` - 301 redirect, 0 addon references
- `custom-events.hbs` - 301 redirect, 0 addon references

## ✅ KEEP - Essential Partials
- All `/partials/curations-addons/` - Used by newsletter
- All `/partials/newsletter/` - Used by newsletter
- `/partials/jsonld-*.hbs` - SEO enhancement
- `/partials/universal-footer-tagline.hbs` - Used by default
- `/partials/cta-subscribe.hbs` - Used by customs
- `/partials/widget-weather.hbs` - CREATED (was missing)

## 🔄 CLEANUP - Redundant Partials
- Check `/partials/vf/` directory usage
- Verify `/partials/widgets-strip.hbs` vs `/partials/widgets.hbs`

## 🎯 PURPLE ENHANCEMENTS TO ADD
1. Purple vertical bar for H3 headers
2. Purple content tags with white text
3. Enhanced CSS variables