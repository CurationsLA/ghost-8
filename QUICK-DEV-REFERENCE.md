# Quick Developer Reference

## Start/Stop Ghost
```bash
cd /workspaces/ghost-local && ghost start
cd /workspaces/ghost-local && ghost stop
cd /workspaces/ghost-local && ghost restart
```

## Update Theme in Ghost
```bash
cd /workspaces && \
  rm -rf ghost-local/content/themes/curationsla && \
  cp -r ghost-8 ghost-local/content/themes/curationsla && \
  cd ghost-local && ghost restart
```

## Validate Theme
```bash
cd /workspaces/ghost-8 && gscan .
cd /workspaces/ghost-8 && ./validate-theme.sh
```

## URLs
- Frontend: http://localhost:2368
- Admin: http://localhost:2368/ghost/

## Edit CSS
1. Edit `/workspaces/ghost-8/assets/css/screen.css`
2. Run: `cp assets/css/screen.css assets/built/screen.css`
3. Update theme in Ghost (see above)
4. Hard refresh browser (Ctrl+Shift+R)

## Current Status
✅ Theme validated - NO ERRORS
✅ Ghost 6.1.0 running
✅ All templates working
✅ CSS syntax fixed
✅ Handlebars validated
