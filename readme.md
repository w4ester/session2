# Session 2: Custom GPTs Workshop for CEOs

**Three Pedagogical Approaches | One Powerful Outcome**

An interactive, CEO-focused workshop for building Custom GPTs. Choose your learning style: **Progressive** (build step-by-step), **Anatomy** (architecture-first), or **Live Build** (hands-on together). 100% static, runs on frontend, GitHub Pages ready!

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://w4ester.github.io/session2/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🎯 **What Is This?**

This repository contains **three complete workshop versions** for teaching CEOs how to build Custom GPTs:

1. **🔄 Progressive Version** - Build component by component (Instructions → Knowledge → Capabilities)
2. **🏗️ Anatomy Version** - Show full architecture first, then configure
3. **⚡ Live Build Version** - Hands-on where everyone builds together in real-time

All versions accessible from a unified navigation bar. Pick the approach that best fits your audience!

---

## 🚀 **Quick Start**

### View Online (Recommended)
Visit the live site: **https://w4ester.github.io/session2/**

Click between versions using the purple navigation bar at the top.

### Run Locally
```bash
# Clone the repository
git clone https://github.com/w4ester/session2.git
cd session2

# Start a local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

---

## 📁 **Repository Structure**

```
ai-workshop-session2/
├── index.html                  # Root homepage with navbar
├── assets/                     # Shared assets for root
│   ├── css/styles.css         # Root styles + navbar styling
│   └── js/app.js              # Root interactivity
│
├── VERSION-COMPARISON.md       # Detailed comparison of 3 versions
├── ARCHITECTURE.md             # Complete technical documentation
├── THEME-TESTING-REPORT.md     # Dark/light mode testing results
│
├── progressive-version/        # 🔄 Progressive: Build step-by-step
│   ├── index.html             # Homepage (navbar active: Progressive)
│   ├── slides/                # Reveal.js presentation
│   │   ├── index.html
│   │   └── slides.md
│   ├── assets/
│   │   ├── css/styles.css     # Includes navbar styling
│   │   └── js/app.js
│   └── readme.md              # Version-specific docs
│
├── anatomy-version/           # 🏗️ Anatomy: Architecture-first
│   ├── index.html             # Homepage (navbar active: Anatomy)
│   ├── slides/                # Reveal.js presentation
│   │   ├── index.html
│   │   └── slides.md
│   ├── assets/
│   │   ├── css/styles.css     # Includes navbar styling
│   │   └── js/app.js
│   └── README.md              # Version-specific docs
│
└── live-build-version/        # ⚡ Live Build: Hands-on together
    ├── index.html             # Homepage (navbar active: Live Build)
    ├── slides/                # Reveal.js presentation
    │   ├── index.html
    │   └── slides.md
    ├── assets/
    │   ├── css/styles.css     # Includes navbar styling
    │   └── js/app.js
    └── README.md              # Version-specific docs
```

---

## 🎓 **The Three Versions Explained**

### 🔄 **Progressive Version**
**Pedagogical Approach:** Build incrementally, one component at a time

**Learning Flow:**
1. Start with Instructions (the "brain")
2. Add Knowledge base (the "memory")
3. Add Capabilities (the "tools")
4. Final polish and deployment

**Best For:**
- Audiences who prefer step-by-step learning
- Understanding the logical flow of GPT construction
- Building confidence through progressive complexity

**Time:** 40 minutes | **Slides:** 12

**Build Example:** Campaign Brief Generator for marketing teams

---

### 🏗️ **Anatomy Version**
**Pedagogical Approach:** Show the complete architecture first, then configure

**Learning Flow:**
1. Full GPT anatomy diagram upfront (all components visible)
2. Deep dive into each component
3. Configuration in context of the whole system
4. Understanding interdependencies

**Best For:**
- Systems thinkers who need the big picture
- Audiences with technical backgrounds
- Understanding how all pieces fit together

**Time:** 40 minutes | **Slides:** 12

**Build Example:** Executive Communication Assistant

---

### ⚡ **Live Build Version**
**Pedagogical Approach:** Hands-on, everyone builds together in real-time

**Learning Flow:**
1. Pre-workshop checklist (setup before session)
2. Live coding/configuration session
3. Interactive troubleshooting
4. Real-time delegation playbook
5. Immediate results

**Best For:**
- Hands-on learners who need to "feel" the tool
- Building muscle memory through practice
- Creating immediate value and takeaways

**Time:** 40 minutes (+ 15 min Q&A, 5 min buffer)

**Build Example:** Executive Communication Assistant (built live)

---

## 🎨 **Features**

### ✅ **Unified Navigation Bar**
- Purple gradient navbar on all pages
- Sticky positioning (always visible)
- Active state highlighting (current version)
- One-click switching between versions
- Mobile responsive (breakpoints at 768px)

### ✅ **Dark/Light Mode Toggle**
- Theme toggle on all pages
- Smooth transitions (0.3s ease)
- WCAG AAA compliant contrast
- System font stack (instant loading)
- Tested across all versions

### ✅ **Interactive Demos**
- Live tokenization visualizer
- Prompt engineering examples
- Real-world use cases
- CEO-focused scenarios

### ✅ **Reveal.js Slides**
- Full-screen presentations
- Keyboard navigation
- Speaker notes
- Mobile friendly
- Print to PDF support

### ✅ **GitHub Pages Ready**
- 100% static (no backend)
- Fast loading
- CDN-hosted assets
- Works offline (cached)

---

## 🛠️ **Installation & Deployment**

### Deploy to GitHub Pages

1. **Fork or clone this repository**
```bash
git clone https://github.com/w4ester/session2.git
cd session2
```

2. **Push to your GitHub repository**
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/session2.git
git push -u origin main
```

3. **Enable GitHub Pages**
   - Go to repository **Settings**
   - Navigate to **Pages** in left sidebar
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
   - Click **Save**

4. **Wait 2-3 minutes for deployment**
   - GitHub will build and deploy
   - Visit: `https://YOUR-USERNAME.github.io/session2/`

### Local Development

```bash
# Start local server
python3 -m http.server 8000

# Or use Node.js
npx http-server -p 8000

# Or use PHP
php -S localhost:8000
```

Open http://localhost:8000 in your browser.

---

## 📖 **Documentation**

- **[VERSION-COMPARISON.md](VERSION-COMPARISON.md)** - Detailed comparison of all three versions
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Complete technical documentation for developers
- **[THEME-TESTING-REPORT.md](THEME-TESTING-REPORT.md)** - Dark/light mode testing results

### Quick Links:
- **Root Homepage:** `/index.html`
- **Progressive Version:** `/progressive-version/index.html`
- **Anatomy Version:** `/anatomy-version/index.html`
- **Live Build Version:** `/live-build-version/index.html`

---

## 🎯 **Which Version Should I Use?**

| Audience Type | Best Version | Why? |
|---------------|--------------|------|
| **First-time learners** | 🔄 Progressive | Step-by-step builds confidence |
| **Technical executives** | 🏗️ Anatomy | Systems view matches mental model |
| **Hands-on learners** | ⚡ Live Build | Learn by doing, immediate results |
| **Mixed audience** | 🔄 Progressive | Most universally accessible |
| **Time-constrained** | ⚡ Live Build | Maximum value in minimum time |
| **Theory-focused** | 🏗️ Anatomy | Deep understanding of architecture |

**Not sure?** Start with **Progressive** - it's the most beginner-friendly.

---

## 🎨 **Customization**

### Change Brand Colors

Edit in any version's `assets/css/styles.css`:

```css
:root {
  --brand: #7c5cff;        /* Primary purple */
  --brand-2: #22d3ee;      /* Secondary cyan */
  --ok: #10b981;           /* Success green */
  --warn: #f59e0b;         /* Warning orange */
  --bad: #ef4444;          /* Error red */
}
```

### Update Slide Content

Edit slides in each version's `slides/slides.md`:

```markdown
# Your Slide Title
Content here

---

# Next Slide
More content

<!-- Note: Speaker notes here -->
```

Slides use Reveal.js markdown format with `---` separators.

### Modify Navbar Links

Edit navbar HTML in each `index.html`:

```html
<nav class="version-nav">
  <div class="version-nav-container">
    <a href="your-link.html" class="version-link">Your Link</a>
  </div>
</nav>
```

---

## 📊 **Browser Support**

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Recommended |
| Firefox | ✅ Full | Recommended |
| Safari | ✅ Full | macOS/iOS |
| Edge | ✅ Full | Chromium-based |
| Mobile | ✅ Responsive | All major browsers |

**Requirements:**
- JavaScript enabled
- LocalStorage enabled (for theme preference)
- Modern browser (2020+)

---

## 🐛 **Troubleshooting**

### Navbar not showing?
1. Check CSS is loaded: View Page Source → find `<link rel="stylesheet" href="assets/css/styles.css">`
2. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check browser console for errors

### Theme toggle not working?
1. Check JavaScript is enabled
2. Look for errors in browser console
3. Verify `app.js` is loaded

### Slides not displaying?
1. Check internet connection (Reveal.js uses CDN)
2. Open `slides/index.html` directly
3. Verify `slides.md` exists and is formatted correctly

### GitHub Pages not updating?
1. Wait 2-3 minutes after push
2. Hard refresh browser cache
3. Check GitHub Actions tab for build status
4. Verify Pages settings: Settings → Pages → main branch

---

## 🚀 **Advanced Features**

### Add System Theme Detection

Add to `assets/js/app.js`:

```javascript
// Detect system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.setAttribute('data-theme', 'dark');
}
```

### Add Keyboard Shortcuts

```javascript
// Ctrl+Shift+T to toggle theme
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'T') {
    toggleTheme();
  }
});
```

### Track Analytics

Add to `index.html` before `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

---

## 📚 **Resources**

### Workshop Materials
- **Live Site:** https://w4ester.github.io/session2/
- **GitHub Repo:** https://github.com/w4ester/session2
- **Version Comparison:** [VERSION-COMPARISON.md](VERSION-COMPARISON.md)

### AI Tools Referenced
- [OpenAI GPT Builder](https://platform.openai.com/docs/guides/gpt-builder)
- [Claude Projects](https://claude.ai)
- [Anthropic Docs](https://docs.anthropic.com)

### Technical Frameworks
- [Reveal.js](https://revealjs.com/) - Slide presentations
- [GitHub Pages](https://pages.github.com/) - Static site hosting
- [Markdown](https://www.markdownguide.org/) - Content formatting

---

## 🤝 **Contributing**

We welcome contributions! Here's how:

1. **Fork the repository**
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Contribution Ideas
- 🎨 New color themes
- 📊 Additional workshop versions
- 🐛 Bug fixes
- 📝 Documentation improvements
- 🌐 Translations
- ♿ Accessibility enhancements

---

## 📄 **License**

MIT License - feel free to use this for your workshops!

See [LICENSE](LICENSE) file for details.

---

## 🎉 **Credits**

**Created by:** Will F ([@w4ester](https://github.com/w4ester))

**Built with:**
- w4ester and AI orchestration
- Love for education and empowerment
- Feedback from workshop participants

**Special Thanks:**
- CEOs who attended workshops and provided feedback
- AI education community
- Open source contributors
- Anthropic Claude for development assistance

---

## 🌟 **What's Next?**

### For Workshop Attendees:
1. **Choose your version** - Pick Progressive, Anatomy, or Live Build
2. **Complete the workshop** - Build your first Custom GPT
3. **Deploy your GPT** - Put it to work in your business
4. **Share your results** - Tell us how it's going!

### For Workshop Facilitators:
1. **Read ARCHITECTURE.md** - Understand the technical structure
2. **Review VERSION-COMPARISON.md** - Pick the best version for your audience
3. **Test locally** - Run through the workshop yourself
4. **Customize** - Adapt content to your needs
5. **Deploy** - Share with your participants

---

**Let's GrOw! 🚀**

*Building Producers, not users - Your AI power starts now!*

---

Built with w4ester and AI orchestration | Last updated: 2025-11-06
