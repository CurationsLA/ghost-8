#!/bin/bash

echo "============================================"
echo "  Ghost Theme Validation Report"
echo "  Theme: CurationsLA v8.2.0"
echo "  Date: $(date)"
echo "============================================"
echo ""

# Check for undefined variables in Handlebars
echo "🔍 Checking for 'undefined' in templates..."
if grep -r "undefined" --include="*.hbs" . 2>/dev/null | grep -v "node_modules" | grep -v ".git"; then
    echo "❌ Found 'undefined' references"
else
    echo "✅ No 'undefined' references found"
fi
echo ""

# Check for empty if statements
echo "🔍 Checking for empty {{#if}} blocks..."
if grep -r "{{#if\s*}}" --include="*.hbs" . 2>/dev/null | grep -v "node_modules" | grep -v ".git"; then
    echo "❌ Found empty if blocks"
else
    echo "✅ No empty if blocks found"
fi
echo ""

# Check for malformed Handlebars
echo "🔍 Checking for common Handlebars syntax issues..."
ERRORS=0

# Check for unclosed blocks
if grep -rP '{{#(?!each|foreach|if|unless|has|is|match|concat|foreach|get|primary_author|primary_tag|authors|tags)[\w-]+(?!.*}})' --include="*.hbs" . 2>/dev/null | grep -v "node_modules" | grep -v ".git" | head -5; then
    echo "⚠️  Potential unclosed blocks detected"
    ERRORS=$((ERRORS + 1))
fi

# Check for proper helper usage
if grep -r "{{#author}}" --include="*.hbs" . 2>/dev/null | grep -v "author.hbs" | grep -v "node_modules" | grep -v ".git"; then
    echo "⚠️  Deprecated {{#author}} helper found (use {{#primary_author}})"
    ERRORS=$((ERRORS + 1))
else
    echo "✅ No deprecated {{#author}} helpers outside author.hbs"
fi
echo ""

# Check package.json
echo "🔍 Validating package.json..."
if [ -f "package.json" ]; then
    if node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8'))" 2>/dev/null; then
        echo "✅ package.json is valid JSON"
    else
        echo "❌ package.json has syntax errors"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo "❌ package.json not found"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check for required template files
echo "🔍 Checking required template files..."
REQUIRED=("index.hbs" "post.hbs" "default.hbs")
for file in "${REQUIRED[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file is missing"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# Run gscan
echo "🔍 Running gscan validation..."
echo ""
gscan . 2>&1 | grep -A 50 "theme compatibility"
echo ""

# Check CSS
echo "🔍 Checking CSS files..."
if [ -f "assets/built/screen.css" ]; then
    if grep -q "\-\-gh-font-heading" assets/built/screen.css && grep -q "\-\-gh-font-body" assets/built/screen.css; then
        echo "✅ Ghost font variables found"
    else
        echo "⚠️  Ghost font variables missing (minor warning)"
    fi
else
    echo "❌ assets/built/screen.css not found"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Summary
echo "============================================"
echo "  Validation Summary"
echo "============================================"
if [ $ERRORS -eq 0 ]; then
    echo "✅ Theme validation passed!"
    echo "   Your theme is ready for deployment."
else
    echo "⚠️  Found $ERRORS critical issue(s)"
    echo "   Please review and fix before deployment."
fi
echo ""
echo "🌐 Test your theme at: http://localhost:2368"
echo "⚙️  Admin panel at: http://localhost:2368/ghost/"
echo ""
