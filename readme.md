# Progressive Version: Custom GPTs for CEOs

## Overview

This is the **Progressive Version** of the Custom GPT workshop, specifically designed for **CEO audiences**. Unlike the original marketer-focused workshop, this version uses a "Progressive Reveal" narrative approach to build understanding component by component.

**Key Difference:** Instead of teaching prompt engineering techniques, this workshop helps CEOs understand what makes AI effective so they can direct and evaluate their team's work.

## Target Audience

- **Primary:** CEOs, Founders, C-suite executives
- **Secondary:** Senior leaders who need to understand AI capabilities for strategic delegation
- **Not for:** Technical implementers or prompt engineering practitioners

## Workshop Duration

**Total: 40 minutes**

Breakdown:
- Slide 1 (CEO Problem): 5 minutes
- Slide 2 (Component 1: Instructions): 8 minutes
- Slide 3 (Component 2: Knowledge): 8 minutes
- Slide 4 (Component 3: Capabilities): 8 minutes
- Slide 5 (Hands-On Build): 8 minutes
- Slide 6 (Delegation Playbook): 3 minutes

## Narrative Approach: Progressive Reveal

This workshop uses a **building blocks** approach where each section reveals one component of a Custom GPT:

```
Section 1: Component 1 (Instructions) [●]
Section 2: Component 2 (Knowledge)   [●][●]
Section 3: Component 3 (Capabilities)[●][●][●]
Section 4: Build (Combine all 3)     [●●●] → Working Custom GPT
Section 5: Delegate (Scale to team)  [●●●] → Team Rollout
```

By the end, attendees see how all components work together to create a complete Custom GPT.

## Main Build Outcome

**Campaign Brief Generator** - A Custom GPT that:
- Takes a campaign request as input
- Uses Instructions (how to structure briefs)
- References Knowledge (brand guidelines, past briefs)
- Leverages Capabilities (web research, data analysis)
- Produces a comprehensive campaign brief in 10 minutes instead of 1.5 hours

## Content Tone Shift

| Original Workshop (Marketers) | Progressive Version (CEOs) |
|------------------------------|---------------------------|
| "Learn to write prompts" | "Understand what makes AI effective" |
| "Hands-on prompt engineering" | "Strategic delegation framework" |
| "Build marketing templates" | "Build & delegate to your team" |
| Technical implementation focus | Strategic oversight focus |

## Key CEO-Specific Content

### 1. CEO Problem Framing
- Board presentation briefs (2 hrs → 15 min)
- Investor updates (1.5 hrs → 10 min)
- Strategic communications (2 hrs → 15 min)
- Campaign briefs (1.5 hrs → 10 min)

**Total time savings:** 7+ hours per week

### 2. ROI Focus
- Clear cost-benefit analysis
- 37x ROI calculation example
- Metrics to track (adoption, usage, time saved, quality)
- Success story: $200K annual productivity gain

### 3. Delegation Playbook
- 30-day rollout plan
- Next 6 Custom GPTs to build (by function owner)
- CEO Cheat Sheet for evaluating Custom GPTs
- Quality standards to set for team

## Files Structure

```
/Users/willf/progressive-version/
├── index.html                 # CEO-focused workshop site
├── slides/
│   ├── index.html            # Reveal.js wrapper (unchanged)
│   └── slides.md             # 40-minute CEO slide deck
├── assets/                   # Shared CSS/JS (unchanged)
├── README.md                 # This file
└── [other files unchanged]
```

## What Was Removed

From the original workshop, these sections were removed or simplified:

1. **Removed:** Tokenization deep-dive tool
   - Why: Too technical for CEO audience, not relevant to delegation
   
2. **Simplified:** Prompt quality checker
   - Before: Interactive scoring tool
   - After: Simple good/bad example comparison
   
3. **Removed:** Template generator
   - Why: CEOs don't need to build templates themselves
   - After: Link to pre-built templates

4. **Removed:** Agents deep-dive
   - Why: Too advanced for 40-minute CEO workshop
   - After: Brief mention in capabilities section

## What Was Added

New CEO-specific content:

1. **Component 1: Instructions Section**
   - CEO-focused examples (board briefs, investor updates)
   - Strategic thinking encoding concept
   - Quality standards framework

2. **Component 2: Knowledge Section**
   - Context limits explained for strategic decisions
   - Prioritization framework (HIGH/MEDIUM/LOW)
   - "More isn't better" principle

3. **Component 3: Capabilities Section**
   - When to enable what (decision framework)
   - Real examples of web browsing + data analysis
   - Minimal capabilities principle

4. **Building Blocks Visuals**
   - Progressive Mermaid diagrams that grow
   - Component 1: [●]
   - Component 1+2: [●][●]
   - Component 1+2+3: [●][●][●]
   - Complete system: [●●●] → Output

5. **Delegation Section**
   - 30-day rollout plan
   - Next 6 use cases to build
   - Metrics to track
   - CEO Cheat Sheet for evaluation
   - Success story case study

## Presenter Notes

### Pre-Workshop Setup (5 min before)
1. Open [chatgpt.com/gpts/editor](https://chatgpt.com/gpts/editor) in a browser tab
2. Have 2-3 sample documents ready to upload (brand guide, past brief, positioning doc)
3. Test that Mermaid diagrams render correctly
4. Ensure everyone has ChatGPT Plus accounts (required for Custom GPTs)

### Slide 1: CEO Problem (5 min)
- **Goal:** Make the pain real
- **Interaction:** "How many hours do you spend per week on briefs and strategic documents?"
- **Key message:** "These tasks require your expertise, not your time"
- **Transition:** "Custom GPTs let you delegate the execution while encoding your strategic thinking"

### Slide 2: Component 1 - Instructions (8 min)
- **Goal:** Understand that instructions = strategic thinking encoded
- **Key visual:** Side-by-side comparison (without vs with instructions)
- **Emphasis:** "This is THE most important component - instructions turn generic AI into YOUR strategic assistant"
- **Show:** Building block 1 appears [●]
- **Avoid:** Getting into prompt engineering techniques

### Slide 3: Component 2 - Knowledge (8 min)
- **Goal:** Understand what documents to upload and why
- **Key message:** "Quality over quantity - start with 3-5 key documents"
- **Show:** Building block 2 added [●][●]
- **Emphasis:** Context limits matter, prioritization framework
- **Example:** Before/after with knowledge

### Slide 4: Component 3 - Capabilities (8 min)
- **Goal:** Understand when to enable tools
- **Key message:** "More capabilities ≠ better output"
- **Show:** Building block 3 added [●][●][●]
- **Live examples:** Web browsing finding competitor data, data analysis recommending channels
- **Transition:** "You now understand all 3 components. Let's build."

### Slide 5: Hands-On Build (8 min)
- **Goal:** Everyone leaves with a working Custom GPT
- **Format:** Guided build, walk the room
- **Steps:** Name → Description → Instructions → Knowledge → Capabilities → Test
- **Show:** Complete system diagram with all 3 components connected
- **ROI:** Share 37x return calculation
- **Support:** Help people who get stuck, show test prompts
- **Outcome:** Working Campaign Brief Generator

### Slide 6: Delegation Playbook (3 min)
- **Goal:** Provide actionable next steps for scaling
- **Key message:** "Your role is to understand, evaluate, and empower - not to build every GPT yourself"
- **Share:** 30-day rollout plan
- **Metrics:** What to track (adoption, usage, time saved, quality, ROI)
- **Inspire:** Success story ($200K annual gain)
- **End:** Clear action items (today, this week, next week, this month, next quarter)

## Success Criteria

A successful workshop means:

✅ **Understanding:** CEOs can explain the 3 components and why each matters  
✅ **Build:** 80%+ of attendees have a working Custom GPT  
✅ **Delegation:** CEOs know who to assign the next 2-3 Custom GPTs to  
✅ **ROI:** CEOs can calculate and justify the investment  
✅ **Next steps:** Clear 30-day plan for scaling across the team  

## Post-Workshop Follow-Up

Send within 24 hours:

1. **Email with:**
   - Link to this workshop site
   - Link to slide deck
   - Instructions template (copy-paste ready)
   - 30-day rollout plan checklist
   - Recommended next 6 Custom GPTs to build

2. **30-day check-in:**
   - How many Custom GPTs built?
   - Time saved (actual vs expected)?
   - Adoption rate across team?
   - What's working / what's not?

3. **90-day review:**
   - ROI calculation (hours saved × hourly rate)
   - Success stories to share
   - Challenges faced
   - Next round of use cases

## Troubleshooting

### "I don't have ChatGPT Plus"
- Custom GPTs require ChatGPT Plus ($20/month)
- ROI justifies cost (37x return)
- Can watch and build later

### "My output isn't good"
- Most common issue: Instructions too vague
- Solution: Be more specific, add examples
- Show good vs bad instructions side-by-side

### "It's not using my documents"
- Check: Are docs uploaded in Knowledge section?
- Check: Is prompt asking for info from docs?
- Try: "Based on our brand guidelines, create..."

### "This takes too long"
- First build takes 10-15 min
- Second build takes 5 min (you know the pattern)
- ROI comes from usage, not build time

## Customization Guide

To customize for your organization:

1. **Replace Campaign Brief Generator with your use case:**
   - Board Presentation Brief Generator
   - Investor Update Draft Generator
   - Strategic Memo Writer
   - Product Launch Checklist Generator

2. **Update ROI calculation:**
   - Use your team's average hourly rate
   - Use your actual volume (briefs/documents per month)
   - Calculate your specific time savings

3. **Adjust Knowledge priorities:**
   - What documents matter most to YOUR business?
   - What examples best demonstrate YOUR quality bar?

4. **Customize delegation playbook:**
   - Who are the right owners in YOUR org?
   - What's a realistic rollout timeline for YOUR culture?

## Technical Notes

- **Mermaid diagrams:** Render client-side, work offline
- **Mobile responsive:** All content scales for tablets/phones
- **No backend required:** Pure static HTML/CSS/JS
- **Theme toggle:** Dark/light mode preserved in localStorage
- **Copy buttons:** One-click copy for templates

## Version History

- **Original (ai-workshop-session2):** Marketer-focused, 60-minute deep-dive
- **Progressive Version (this branch):** CEO-focused, 40-minute progressive reveal

## License & Attribution

This workshop is built for internal use. When sharing externally:
- Credit Anthropic (Claude) for AI capabilities
- Credit OpenAI for Custom GPT functionality
- Share as educational resource, not commercial product

---

**Questions?** Open an issue or reach out to the workshop creator.

**Ready to run the workshop?** Start with the slide deck at `/slides/` and reference this README for timing and presenter notes.
