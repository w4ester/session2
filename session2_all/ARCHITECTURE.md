# Workshop Architecture Documentation

## Overview

This repository contains a CEO-focused workshop on building Custom GPTs, presented in **three different pedagogical approaches**. Each version is self-contained and accessible via a unified navigation bar.

**Target Audience:** CEOs and executives (40-minute workshop)
**Focus:** Building Custom GPTs (not agents)
**Deployment:** GitHub Pages from main branch
**Organization:** w4ester with AI orchestration

---

## Repository Structure

```
ai-workshop-session2/
├── index.html                  # Root homepage with navbar
├── assets/                     # Shared assets for root page
│   ├── css/styles.css         # Includes navbar styling
│   └── js/app.js
├── VERSION-COMPARISON.md       # Detailed comparison of all versions
├── ARCHITECTURE.md             # This file - explains structure
│
├── progressive-version/        # Version 1: Build component by component
│   ├── index.html             # Homepage with navbar (active: Progressive)
│   ├── slides/                # Reveal.js slides
│   │   ├── index.html
│   │   └── slides.md
│   ├── assets/
│   │   ├── css/styles.css     # Includes navbar styling
│   │   └── js/app.js
│   └── readme.md              # Version-specific documentation
│
├── anatomy-version/           # Version 2: Show full architecture first
│   ├── index.html             # Homepage with navbar (active: Anatomy)
│   ├── slides/                # Reveal.js slides
│   │   ├── index.html
│   │   └── slides.md
│   ├── assets/
│   │   ├── css/styles.css     # Includes navbar styling
│   │   └── js/app.js
│   └── README.md              # Version-specific documentation
│
└── live-build-version/        # Version 3: Hands-on live demo
    ├── index.html             # Homepage with navbar (active: Live Build)
    ├── slides/                # Reveal.js slides
    │   ├── index.html
    │   └── slides.md
    ├── assets/
    │   ├── css/styles.css     # Includes navbar styling
    │   └── js/app.js
    └── README.md              # Version-specific documentation
```

---

## The Three Versions

### 1. Progressive Version (🔄)
**Pedagogical Approach:** Build incrementally, one component at a time

**Structure:**
- Start with Instructions (the "brain")
- Add Knowledge base (the "memory")
- Add Capabilities (the "tools")
- Final polish and deployment

**Best For:**
- Audiences who prefer step-by-step learning
- Understanding the logical flow of GPT construction
- Building confidence through progressive complexity

**Time:** 40 minutes (12 slides)

---

### 2. Anatomy Version (🏗️)
**Pedagogical Approach:** Show the complete architecture first, then configure

**Structure:**
- Full GPT anatomy diagram upfront (all components visible)
- Deep dive into each component
- Configuration in context of the whole system
- Understanding interdependencies

**Best For:**
- Systems thinkers who need the big picture
- Audiences with technical backgrounds
- Understanding how all pieces fit together

**Time:** 40 minutes (12 slides)

---

### 3. Live Build Version (⚡)
**Pedagogical Approach:** Hands-on, everyone builds together in real-time

**Structure:**
- Pre-workshop checklist (setup before session)
- Live coding/configuration session
- Interactive troubleshooting
- Real-time delegation playbook
- Immediate results

**Best For:**
- Hands-on learners who need to "feel" the tool
- Building muscle memory through practice
- Creating immediate value and takeaways

**Time:** 40 minutes (plus 15 min Q&A, 5 min buffer)

---

## Unified Navigation System

Every page (root + all versions) includes a **sticky navigation bar** at the top:

```html
<nav class="version-nav">
  <div class="version-nav-container">
    <span class="version-label">Workshop Versions:</span>
    <a href="../index.html">📚 Original</a>
    <a href="../progressive-version/index.html">🔄 Progressive</a>
    <a href="../anatomy-version/index.html">🏗️ Anatomy</a>
    <a href="../live-build-version/index.html">⚡ Live Build</a>
    <a href="../VERSION-COMPARISON.md">📊 Compare</a>
  </div>
</nav>
```

**Features:**
- Sticky positioning (always visible when scrolling)
- Active state highlighting (current version highlighted)
- Mobile responsive (breakpoints at 768px)
- Purple gradient matching brand colors
- Relative paths for cross-version navigation

**Styling:**
- Defined in each version's `assets/css/styles.css`
- Uses CSS custom properties: `var(--brand)`, `var(--brand-2)`
- Z-index: 20 (stays above all content)

---

## GitHub Pages Deployment

**Current Setup:**
- Main branch deployed to GitHub Pages
- All versions accessible from root index.html
- Each version is a complete, self-contained mini-site

**URLs (when deployed):**
```
https://w4ester.github.io/session2/                           # Root homepage
https://w4ester.github.io/session2/progressive-version/       # Progressive version
https://w4ester.github.io/session2/anatomy-version/           # Anatomy version
https://w4ester.github.io/session2/live-build-version/        # Live build version
https://w4ester.github.io/session2/VERSION-COMPARISON.md      # Comparison doc
```

**GitHub Pages Configuration:**
1. Repository: `w4ester/session2`
2. Settings → Pages → Source: Deploy from branch `main`
3. Branch: `main` / `(root)`
4. All versions automatically deployed

---

## Git Branch Strategy

### Main Branch
- Contains all workshop versions as regular directories
- All content tracked in main branch
- Used for GitHub Pages deployment
- Single source of truth

### Reference Branches (Optional)
These branches exist for development reference but are **not used for deployment**:
- `progressive-version` - Development work for Progressive version
- `anatomy-version` - Development work for Anatomy version
- `live-build-version` - Development work for Live Build version

**Important:** Changes to reference branches do NOT affect GitHub Pages. Only changes to `main` branch are deployed.

---

## Workflow: How to Update a Version

### For a New AI PM

When you need to update one of the workshop versions:

1. **Understand which version needs updating:**
   - Progressive? (🔄 progressive-version/)
   - Anatomy? (🏗️ anatomy-version/)
   - Live Build? (⚡ live-build-version/)

2. **Make changes directly in main branch:**
   ```bash
   cd /path/to/ai-workshop-session2

   # Edit the version's files
   code progressive-version/index.html
   code progressive-version/slides/slides.md
   code progressive-version/assets/css/styles.css

   # Test locally
   open progressive-version/index.html

   # Stage and commit
   git add progressive-version/
   git commit -m "Update progressive version: [describe changes]

   Built with w4ester and AI orchestration"

   # Push to GitHub (deploys to GitHub Pages)
   git push origin main
   ```

3. **Verify navbar still works:**
   - Check that navbar appears on all pages
   - Verify active states are correct for each version
   - Test navigation between versions

4. **Key files to update:**
   - `index.html` - Homepage content
   - `slides/slides.md` - Slide deck content (Reveal.js markdown)
   - `slides/index.html` - Slide configuration (if needed)
   - `assets/css/styles.css` - Styling
   - `assets/js/app.js` - Interactive features

---

## Common Tasks

### Adding a New Interactive Feature

Example: Add a tokenizer demo to all versions

```bash
# 1. Add feature to progressive version
code progressive-version/index.html
# Add HTML for tokenizer demo

code progressive-version/assets/js/app.js
# Add JavaScript for tokenizer functionality

# 2. Replicate to other versions (if applicable)
cp progressive-version/assets/js/tokenizer.js anatomy-version/assets/js/
cp progressive-version/assets/js/tokenizer.js live-build-version/assets/js/

# 3. Commit and deploy
git add .
git commit -m "Add tokenizer demo to all versions"
git push origin main
```

### Updating Slide Content

```bash
# Edit the markdown slides
code progressive-version/slides/slides.md

# Slides use Reveal.js markdown format:
# --- separates slides
# <!-- .element: class="..." --> for styling

# Commit and deploy
git add progressive-version/slides/
git commit -m "Update progressive version slides: [describe changes]"
git push origin main
```

### Fixing Navbar Issues

If the navbar breaks or stops working:

1. **Check navbar HTML is present:**
   ```bash
   grep -n "Version Switcher Navbar" progressive-version/index.html
   ```

2. **Check navbar CSS is present:**
   ```bash
   grep -n "Version Switcher Navbar" progressive-version/assets/css/styles.css
   ```

3. **Verify relative paths are correct:**
   - Root: `href="progressive-version/index.html"`
   - Versions: `href="../progressive-version/index.html"`

4. **Check active states:**
   - Progressive: `class="version-link active"` on Progressive link
   - Anatomy: `class="version-link active"` on Anatomy link
   - Live Build: `class="version-link active"` on Live Build link

---

## Design System

### Colors (CSS Custom Properties)

```css
:root {
  --bg: #0b1020;           /* Dark background */
  --panel: #0f172a;        /* Panel background */
  --text: #f1f5f9;         /* Light text */
  --brand: #7c5cff;        /* Primary brand purple */
  --brand-2: #22d3ee;      /* Secondary brand cyan */
  --ok: #10b981;           /* Success green */
  --warn: #f59e0b;         /* Warning orange */
  --bad: #ef4444;          /* Error red */
}
```

### Typography
- System font stack: `system-ui, -apple-system, Segoe UI, Roboto, Ubuntu`
- Base size: 16px
- Line height: 1.5

### Components
- **Cards:** `.card` - Panel with border and shadow
- **Buttons:** `.btn` (default), `.btn.primary` (branded gradient)
- **Hero:** `.hero` - Large banner with gradient background
- **Navbar:** `.version-nav` - Sticky navigation bar

---

## Reveal.js Slides

All versions use **Reveal.js** for slide presentations.

### Slide Configuration

Located in each version's `slides/index.html`:

```html
<script>
  Reveal.initialize({
    width: 1600,
    height: 900,
    margin: 0.04,
    transition: 'fade',
    hash: true,
    respondToHashChanges: true
  });
</script>
```

### Slide Content

Located in each version's `slides/slides.md`:

```markdown
# Slide Title
Content here

---

# Next Slide
More content

<!-- Note: Speaker notes go here -->
```

### Slide Styling

- Custom styles in each version's `assets/css/styles.css`
- Reveal.js theme customization in `slides/index.html`
- Background colors, fonts, transitions all configurable

---

## Testing Checklist

Before pushing changes:

- [ ] All navbar links work from root page
- [ ] All navbar links work from each version page
- [ ] Active states correct on each version
- [ ] Slides load correctly in each version
- [ ] Mobile responsive (test at 768px, 480px)
- [ ] Dark/light mode toggle works (if applicable)
- [ ] Interactive demos function correctly
- [ ] No console errors in browser dev tools
- [ ] Git commit follows format: "Built with w4ester and AI orchestration"

---

## Troubleshooting

### Navbar not showing on a page
1. Check HTML: `grep "version-nav" [file].html`
2. Check CSS: `grep "version-nav" assets/css/styles.css`
3. Verify CSS is linked in HTML `<head>`

### Links broken after deployment
1. Check relative paths (`../` for going up one level)
2. Verify GitHub Pages base URL matches paths
3. Test locally with `python -m http.server 8000`

### Slides not loading
1. Check `slides/index.html` exists
2. Verify Reveal.js CDN links are working
3. Check `slides/slides.md` for syntax errors

### Git issues
1. Check branch: `git branch` (should be on `main`)
2. Check remote: `git remote -v`
3. Pull latest: `git pull origin main`

---

## Key Contacts & Resources

- **Repository:** https://github.com/w4ester/session2
- **GitHub Pages:** https://w4ester.github.io/session2/
- **Attribution:** Built with w4ester and AI orchestration
- **Reveal.js Docs:** https://revealjs.com/

---

## For New AI PM: Quick Start

1. **Clone the repo:**
   ```bash
   git clone https://github.com/w4ester/session2.git
   cd session2
   ```

2. **Understand the structure:**
   - Read this `ARCHITECTURE.md`
   - Read `VERSION-COMPARISON.md`
   - Open `index.html` in browser to see navbar

3. **Make your first change:**
   - Edit a simple text in `progressive-version/index.html`
   - Commit: `git commit -m "Test change"`
   - Push: `git push origin main`
   - Wait 2-3 minutes for GitHub Pages to deploy
   - Visit: https://w4ester.github.io/session2/progressive-version/

4. **You're ready to build!**

---

*Last Updated: 2025-11-06*
*Built with w4ester and AI orchestration*
