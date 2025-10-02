# 🚀 Production Deployment Checklist

## Pre-Deployment Validation

### Theme Validation
- [ ] Run `cd /workspaces/ghost-8 && gscan .` - Shows "compatible with Ghost 6.x"
- [ ] Run `./validate-theme.sh` - All critical checks pass
- [ ] No critical errors in validation report
- [ ] CSS files compile without errors
- [ ] All Handlebars templates validated

### Local Testing
- [ ] Ghost running locally: http://localhost:2368
- [ ] Homepage loads correctly
- [ ] Individual post pages render properly
- [ ] Newsletter template works (custom-newsletter.hbs)
- [ ] Tag pages function correctly
- [ ] Error page displays properly (error.hbs)
- [ ] All custom pages work (custom-eats.hbs, custom-events.hbs)

### Content Testing
- [ ] Create test posts with various layouts
- [ ] Test featured images display
- [ ] Verify excerpts render correctly
- [ ] Check author information displays
- [ ] Test tags and categories
- [ ] Verify date formatting
- [ ] Check reading time calculation

### Responsive Design
- [ ] Test mobile layout (< 768px)
- [ ] Test tablet layout (768px - 1024px)
- [ ] Test desktop layout (> 1024px)
- [ ] Verify navigation works on mobile
- [ ] Check images scale properly
- [ ] Test touch interactions on mobile

### Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### SEO & Meta Tags
- [ ] View page source - meta tags present
- [ ] Open Graph tags properly formatted
- [ ] Twitter Cards meta tags included
- [ ] JSON-LD schema markup validates
- [ ] Canonical URLs correct
- [ ] RSS feed accessible

### Performance
- [ ] Images optimized and compressed
- [ ] CSS minified (built/screen.css)
- [ ] JavaScript minified (built/theme.js)
- [ ] No console errors in browser
- [ ] Page load time acceptable

### Email Templates
- [ ] post-email.hbs renders correctly
- [ ] Newsletter templates display properly
- [ ] Email-specific styles work
- [ ] Responsive email layout verified

### Functionality
- [ ] Search works (if implemented)
- [ ] Newsletter signup form functional
- [ ] Social sharing buttons work
- [ ] Navigation menus display correctly
- [ ] Footer displays properly
- [ ] All widgets/cards render

### Code Quality
- [ ] No undefined variables in templates
- [ ] No empty {{#if}} blocks
- [ ] No deprecated helpers used
- [ ] CSS follows naming conventions
- [ ] JavaScript is error-free
- [ ] All partials properly included

## Create Production Package

### Clean Theme Directory
```bash
cd /workspaces/ghost-8

# Remove development files
rm -f validate-theme.sh
rm -f GHOST-DEV-SETUP.md
rm -f QUICK-DEV-REFERENCE.md
rm -f DEPLOYMENT-CHECKLIST.md

# Or create clean copy
cd /workspaces
cp -r ghost-8 ghost-8-production
cd ghost-8-production
rm -f validate-theme.sh GHOST-DEV-SETUP.md QUICK-DEV-REFERENCE.md DEPLOYMENT-CHECKLIST.md
rm -rf for-enhancements/
```

### Create ZIP Package
```bash
cd /workspaces
zip -r curationsla-v8.2.0-production.zip ghost-8 \
  -x "*.git*" \
  -x "*node_modules/*" \
  -x "*.DS_Store" \
  -x "*/.vscode/*" \
  -x "*.code-workspace" \
  -x "for-enhancements/*" \
  -x "validate-theme.sh" \
  -x "GHOST-DEV-SETUP.md" \
  -x "QUICK-DEV-REFERENCE.md" \
  -x "DEPLOYMENT-CHECKLIST.md" \
  -x "SETUP-SUMMARY.md" \
  -x "validation-report.txt"
```

### Verify Package
- [ ] ZIP file created successfully
- [ ] File size reasonable (< 10MB typically)
- [ ] Extract and verify contents
- [ ] Run gscan on extracted theme

## Production Deployment

### Backup Current Theme
- [ ] Download current production theme
- [ ] Backup Ghost database
- [ ] Document current theme settings
- [ ] Save custom CSS/JS if any

### Upload New Theme
- [ ] Login to production Ghost Admin
- [ ] Navigate to Settings → Design
- [ ] Click "Change theme"
- [ ] Upload ZIP file
- [ ] Wait for upload completion

### Activate Theme
- [ ] Click "Activate" on new theme
- [ ] Verify activation successful
- [ ] Check for any error messages

### Configure Theme Settings
- [ ] Set accent color (#EBF99A - lime)
- [ ] Configure social media links
- [ ] Set posts per page (12 recommended)
- [ ] Enable/disable features as needed
- [ ] Configure custom settings in Admin

### Post-Deployment Testing
- [ ] Visit homepage - loads correctly
- [ ] Test random blog post - renders properly
- [ ] Check navigation menu
- [ ] Verify footer content
- [ ] Test newsletter signup
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags (view source)
- [ ] Test social sharing

### Performance Check
- [ ] Run Google PageSpeed Insights
- [ ] Check Core Web Vitals
- [ ] Verify images load quickly
- [ ] Test from different locations/networks

### SEO Verification
- [ ] Google Search Console - no errors
- [ ] Structured data validates (schema.org)
- [ ] Sitemap accessible
- [ ] Robots.txt correct
- [ ] RSS feed working

### Monitor
- [ ] Check Ghost logs for errors
- [ ] Monitor site analytics
- [ ] Watch for user feedback
- [ ] Check email deliverability
- [ ] Monitor performance metrics

## Rollback Plan (If Issues Occur)

### Immediate Steps
1. Go to Settings → Design
2. Re-activate previous theme
3. Document the issue
4. Fix in development environment
5. Re-validate and re-deploy

### Debug Issues
```bash
# Check Ghost logs
tail -f /path/to/ghost/content/logs/*.log

# Validate theme locally
cd /workspaces/ghost-8
gscan .
./validate-theme.sh

# Test in local Ghost instance
cd /workspaces/ghost-local && ghost restart
```

## Post-Deployment

### Documentation
- [ ] Update theme version number
- [ ] Document any custom settings used
- [ ] Note any production-specific configurations
- [ ] Record deployment date and version

### Communication
- [ ] Notify team of deployment
- [ ] Update changelog if applicable
- [ ] Inform users of new features (if any)

### Monitoring Period
- [ ] Watch for 24 hours
- [ ] Check analytics daily for first week
- [ ] Monitor error logs
- [ ] Gather user feedback

## Success Criteria

✅ Theme deployed without errors  
✅ All pages loading correctly  
✅ No console errors  
✅ Mobile experience optimal  
✅ SEO meta tags present  
✅ Performance acceptable  
✅ Email templates working  
✅ All functionality operational  

---

## Emergency Contacts

**Ghost Support**: https://ghost.org/help/  
**Theme Documentation**: See GHOST-DEV-SETUP.md  
**Validation Tool**: https://gscan.ghost.org/  

---

**Current Version**: CurationsLA v8.2.0  
**Ghost Compatibility**: 6.x  
**Last Validated**: October 2, 2025  
**Status**: ✅ Production Ready
