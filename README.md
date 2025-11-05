# Session 2: AI Agents for Marketing - Enhanced Workshop

An interactive, hands-on workshop for teaching marketers how to build AI agents. 100% static, runs on GitHub Pages, no backend required!

## 🚀 What's New in the Enhanced Version

### Engagement Features
- ✅ **Progress Tracking** - Visual progress bar with completion tracking
- ✅ **Auto-Save** - All work saved automatically to localStorage
- ✅ **AI Copilot** - Built-in help assistant that answers questions
- ✅ **Toast Notifications** - Real-time feedback for every action
- ✅ **Stats Dashboard** - Track prompts created, templates built, time saved

### Interactive Tools
- ✅ **Live Tokenization** - Animated token visualization with cost estimates
- ✅ **Prompt Scorer** - Real-time scoring with AI suggestions
- ✅ **Template Library** - Save, load, and share templates
- ✅ **Agent Builder** - Step-by-step walkthrough simulator
- ✅ **Challenge Mode** - 3 real marketing scenarios to solve

### Gamification
- ✅ **Achievement System** - Track completion and scores
- ✅ **Before/After Gallery** - See real results from past workshops
- ✅ **Time Saved Calculator** - Show ROI in hours
- ✅ **Best Score Tracking** - Personal records and improvements

### Export & Share
- ✅ **Export All Work** - Download prompts, templates, and agent config
- ✅ **Download Templates** - Individual .md files for team sharing
- ✅ **Agent Config JSON** - Ready for OpenAI Agent Builder

## 📁 File Structure

```
session2/
├── index.html                 # Main workshop page (REPLACE with index-enhanced.html)
├── slides/
│   ├── index.html            # Reveal.js slideshow viewer
│   └── slides.md             # Slide content (REPLACE with slides-optimized.md)
└── assets/
    ├── css/
    │   └── styles.css        # Styles (REPLACE with styles-enhanced.css)
    └── js/
        └── app.js            # App logic (REPLACE with app-enhanced.js)
```

## 🛠️ Installation

### Option 1: Replace Existing Files

If you already have the workshop running:

1. **Backup your current files** (just in case)

2. **Replace main files:**
```bash
# In your session2 directory
mv index-enhanced.html index.html
mv slides-optimized.md slides/slides.md
mv styles-enhanced.css assets/css/styles.css
mv app-enhanced.js assets/js/app.js
```

3. **Push to GitHub:**
```bash
git add .
git commit -m "Enhanced workshop with interactivity and gamification"
git push origin main
```

4. **Visit your GitHub Pages URL:**
```
https://yourusername.github.io/session2/
```

### Option 2: Fresh Setup

Starting from scratch:

1. **Create new repo:**
```bash
mkdir session2
cd session2
git init
```

2. **Add files:**
```bash
# Copy all enhanced files into directory
# Follow structure above
```

3. **Configure GitHub Pages:**
   - Go to repo Settings > Pages
   - Source: Deploy from main branch
   - Root directory

4. **Push:**
```bash
git add .
git commit -m "Initial enhanced workshop setup"
git branch -M main
git remote add origin https://github.com/yourusername/session2.git
git push -u origin main
```

## 🎯 Features Walkthrough

### 1. Progress Tracking

The top progress bar shows:
- Current section (animated)
- Completed sections (checkmarks)
- Overall progress percentage

**How it works:**
- Tracks scroll position automatically
- Saves progress to localStorage
- Persists across sessions

### 2. AI Copilot Assistant

Floating help button (bottom right) provides:
- Contextual help for each section
- Answers common questions
- Smart keyword matching

**Try asking:**
- "How do tokens work?"
- "How can I improve my prompts?"
- "What are agents?"

### 3. Interactive Tokenization

**Features:**
- Animated token display
- Cost estimation
- Token insights (efficiency tips)
- Example prompts to try

**Educational value:**
- Visual understanding of token chunking
- Real-time cost awareness
- Optimization suggestions

### 4. Prompt Engineering Scorer

**Scores 10 criteria:**
1. Clear format specified
2. Target audience defined
3. Tone/voice set
4. Length constraint
5. Context provided
6. Examples included
7. Clear CTA
8. Multi-step breakdown
9. Exclusions specified
10. Success criteria

**Features:**
- Real-time scoring
- Visual checklist
- AI improvement suggestions
- Tracks personal best

### 5. Template Library

**Capabilities:**
- Generate templates from inputs
- Save to personal library
- Load saved templates
- Download as .md files
- Quick-start examples

**Use cases:**
- Team sharing
- Reusable workflows
- Consistent outputs

### 6. Agent Builder Simulator

**5-Step walkthrough:**
1. Name your agent
2. Define instructions
3. Select tools (web, data, images)
4. Test with prompts
5. Download configuration

**Benefits:**
- Practice before building real agent
- Learn agent components
- Export ready-to-use config

### 7. Challenge Mode

**3 Marketing scenarios:**

**Challenge 1: Product Launch (Easy)**
- Create LinkedIn posts
- Practice prompt engineering
- Real marketing scenario

**Challenge 2: Email Template (Medium)**
- Build reusable template
- Multiple variables
- Tone variations

**Challenge 3: Campaign Agent (Advanced)**
- Design full agent
- Multiple capabilities
- Complex workflow

**Scoring:**
- Automatic evaluation
- Detailed feedback
- Improvement tips
- Progress tracking

### 8. Export & Share

**Export includes:**
- All prompts created
- All templates built
- Agent configuration
- Challenge scores
- Statistics (time saved, completion rate)

**File format:** JSON (easy to parse, share, archive)

## 💾 Data Storage

All data stored in browser localStorage:
- No server needed
- Works offline
- Private (local only)
- Persists across sessions

**Storage keys:**
- `workshop_session2_state` - Main state object

**What's saved:**
- Current progress
- Created prompts
- Built templates
- Agent configuration
- Challenge scores
- Statistics

**To reset:** Click "Start Fresh" button or:
```javascript
localStorage.removeItem('workshop_session2_state');
location.reload();
```

## 🎨 Customization

### Colors

Edit in `styles.css`:
```css
:root {
  --brand: #7c5cff;        /* Primary purple */
  --brand-light: #9d7eff;  /* Light purple */
  --brand-dark: #5a3fd9;   /* Dark purple */
  --success: #10b981;       /* Green */
  --warning: #f59e0b;       /* Orange */
  --error: #ef4444;         /* Red */
}
```

### Copilot Responses

Edit in `app.js`:
```javascript
const copilotKnowledge = {
  'your_keyword': 'Your custom response...',
  // Add more Q&A pairs
};
```

### Challenge Criteria

Edit in `app.js`, `scoreChallenge()` function to adjust:
- Point values
- Scoring criteria
- Feedback messages

## 📊 Analytics & Metrics

Track these metrics for workshops:

**Engagement:**
- % who complete all sections
- Average time per section
- Challenge completion rate

**Learning:**
- Average prompt score improvement
- Templates created per participant
- Agent builds completed

**Satisfaction:**
- Time saved estimates
- Export rate (% who download work)
- Return visitors (localStorage check)

## 🐛 Troubleshooting

### Progress not saving?
- Check localStorage enabled
- Not in private/incognito mode
- Clear cache and reload

### Animations not working?
- Ensure styles.css loaded correctly
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R)

### Copilot not responding?
- Check app.js loaded
- Verify no JavaScript errors
- Keywords might not match (add custom ones)

### Export button not working?
- Check browser allows downloads
- Try different browser
- Check console for errors

## 🚀 Advanced Features to Add

### Future enhancements:

1. **Team Leaderboard**
   - Add Firebase for real-time data
   - Show top prompts/templates
   - Competitive element

2. **Real AI Integration**
   - OpenAI API calls (requires backend)
   - Live generation instead of simulation
   - Cost tracking

3. **Workshop Analytics**
   - Track aggregate stats
   - Heatmaps of where people get stuck
   - A/B test different teaching methods

4. **Social Sharing**
   - Share completed challenges
   - Generate social cards
   - LinkedIn integration

5. **Video Walkthroughs**
   - Embedded tutorial videos
   - Screen recordings of examples
   - Expert tips

## 📚 Resources

**Workshop Materials:**
- Main Site: https://w4ester.github.io/session2/
- Slides: https://w4ester.github.io/session2/slides/
- GitHub: https://github.com/w4ester/session2

**AI Tools Referenced:**
- [OpenAI Agent Builder](https://platform.openai.com/docs/guides/agent-builder)
- [Claude Projects](https://claude.ai)
- [Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)

**Technical Docs:**
- [Reveal.js](https://revealjs.com/) - Slide framework
- [Mermaid](https://mermaid.js.org/) - Diagrams
- [GitHub Pages](https://pages.github.com/) - Hosting

## 🤝 Contributing

Want to improve the workshop?

1. Fork the repo
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

**Ideas welcome:**
- New challenge scenarios
- Better copilot responses
- UI/UX improvements
- Additional gamification
- Bug fixes


**Questions?** Check the copilot or open a discussion!

## 🎉 Credits

**Created by:** Will Esterson  
**For:** Baltimore AI Producers Lab & MSDE Division of College and Career Pathways  
**Purpose:** Teaching families and educators to build AI tools, not just consume them  

**Special thanks to:**
- Workshop participants for feedback
- AI education community
- Open source contributors

---

**Let's GrOw! 🚀**

*Build smarter, not harder - your AI-powered marketing team starts now!*
