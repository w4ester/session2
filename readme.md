# Wednesday Session 2 - LinkedIn Post GPT Workshop

**Live Build Workshop for Virtual Attendees**

## What This Is

A focused, hands-on workshop where attendees build a Custom GPT that writes AND posts to LinkedIn. This is the clean, production-ready version for Wednesday's virtual session.

## Workshop Flow (45 minutes)

### Part 1: Build Custom GPT Together (15 min)
- Choose a template (CEO/Marketing/AI Enthusiast)
- Copy/paste to build your GPT
- We build ONE together live

### Part 2: Add LinkedIn Action (15 min)
- Copy LinkedIn Action schema
- Configure authentication
- Make it actually post

### Part 3: Post to LinkedIn (5 min)
- Test it live
- See your post on LinkedIn
- THE WOW MOMENT

### Part 4: Show MCP Alternative (10 min)
- Demo local MCP server
- Show 100% ownership option
- The "moat" message: ownership, incentives, imagination

## How to Run This Workshop

### For Presenter:

1. **Open the 2-panel view:**
   ```bash
   open index.html
   ```
   This shows slides + demo side-by-side

2. **Have ready:**
   - LinkedIn access token (for workshop)
   - Method to get attendee URNs
   - Terminal ready for MCP demo

3. **Follow the slides:**
   - `/slides/slides.md` has full presenter notes

### For Attendees:

1. **Prerequisites:**
   - ChatGPT Plus account ($20/month)
   - Can access https://chatgpt.com/gpts/editor

2. **Resources they'll use:**
   - Template page: `/custom-gpts/gpt-templates.html`
   - LinkedIn Action guide: `/custom-gpts/LINKEDIN-ACTION-SETUP.md`

3. **What they'll build:**
   - Custom GPT (one of 3 templates)
   - LinkedIn posting capability
   - Working tool in 45 minutes

## File Structure

```
Wednesdayssession2/
├── index.html                   ← 2-panel workshop view (slides + demo)
├── slides/
│   └── slides.md                ← Presentation with presenter notes
├── custom-gpts/
│   ├── gpt-templates.html       ← 3 templates (CEO, Marketing, AI)
│   ├── LINKEDIN-ACTION-SETUP.md ← Full OAuth setup guide
│   └── linkedin-action-spec.yaml
└── assets/
    └── [workshop assets]
```

## The 3 Templates

Attendees choose ONE to build:

### 1. CEO/Founder Template
- **Voice:** Strategic thought leadership
- **Topics:** Business insights, leadership, company building
- **For:** Executives, founders

### 2. Marketing Professional Template
- **Voice:** Actionable marketing insights
- **Topics:** Campaigns, tactics, trends
- **For:** Marketing pros, growth marketers

### 3. AI Enthusiast Template
- **Voice:** Practical AI exploration
- **Topics:** AI tools, experiments, learning
- **For:** Tech folks, AI practitioners

**During workshop:** We build template #1 (CEO) together. Templates #2 and #3 are resources for them to use later.

## Workshop Strategy

### Copy/Paste Easy
- Every step has a "Copy" button
- No typing unless they want to
- Fast, accessible, low-friction

### The Hook
LinkedIn posting is the wow factor. Going from idea → published post in 2 minutes is magical.

### The Pivot
After they experience how easy it is, we show them MCP - the "you can own this" alternative. Same functionality, different ownership model.

### The Message
**The real "moat" in AI isn't the technology. It's:**
1. Who owns your data
2. Incentives (advertising vs education)
3. Imagination (what you build)

## Testing Before Workshop

### Test the 2-panel view:
```bash
open index.html
```
Should show slides on left, demo space on right.

### Test template page:
```bash
open custom-gpts/gpt-templates.html
```
Should have 3 tabs with "Copy" buttons.

### Verify slides:
```bash
open slides/slides.md
```
Should have 12 slides with presenter notes.

## After the Workshop

Attendees leave with:
- ✅ Working Custom GPT
- ✅ LinkedIn posting capability
- ✅ Understanding of MCP alternative
- ✅ Knowledge of ownership implications

They can then:
- Use their GPT daily
- Set up their own LinkedIn OAuth (guide provided)
- Build MCP servers (resources provided)
- Choose their level of ownership

## Links & Resources

**During workshop, share:**
- This folder's URL (for templates)
- LinkedIn Action setup guide
- MCP documentation: https://modelcontextprotocol.io
- Transparency MCP example (for privacy analysis demo)

**Contact:**
- Email: howdy@edinfinite.com
- Workshop: AI Workshop Session 2

## Notes for Iteration

This is the production version. Keep it clean and focused:
- ✅ Just what's needed for the live build
- ✅ Clear, copy/paste instructions
- ✅ Works for virtual attendees
- ✅ 2-panel view for screen sharing

Other experimental versions live in other folders.
