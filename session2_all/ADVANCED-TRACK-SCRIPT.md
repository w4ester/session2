# Advanced Track Workshop Script (40 Minutes)
## Custom GPT Builder - Power User Edition

**Target Audience:** Technical users, developers, marketing ops, power users who want full capabilities

**Workshop Goal:** Build a production-ready Custom GPT with advanced features, custom actions, and publishing strategy

---

## Pre-Workshop Setup (5 minutes before start)

### Facilitator Checklist:
- [ ] Open workshop-demo-advanced.html on main screen
- [ ] Open ChatGPT GPT Builder (https://chatgpt.com/gpts/editor) in second tab
- [ ] Have sample API schema ready (in case needed)
- [ ] Test timer and all tabs working
- [ ] Prepare backup examples if someone needs them

### Attendee Pre-Work (share 10 min before):
"Before we start, please ensure you have:
- ChatGPT Plus account (required for GPT Builder)
- 1-2 sample documents to upload (optional but recommended)
- API keys if you plan to integrate external services (optional)
- Laptop with stable internet"

---

## Opening (0:00 - 2:00) | 2 minutes

### What You Say:
"Welcome to the Advanced Track! This is our 40-minute power-user session where we're going to build a production-ready Custom GPT with advanced capabilities.

Unlike the Express or Custom tracks, we're going DEEP today. You'll learn:
- Advanced prompting patterns that improve GPT reasoning
- How to connect external APIs using custom actions
- Model selection and cost optimization
- Testing strategies for edge cases
- Publishing to the GPT Store

**This is hands-on.** I'll guide you through each section, but you'll be building as we go. Don't worry if you don't finish every section—the goal is to learn the advanced concepts you can apply later.

Let's start the timer. 40 minutes on the clock. Go!"

### What You Do:
- Click "Start" on the timer in demo page
- Show the 6 tabs: Instructions, Actions, Model, Testing, Publishing, Export
- "We'll move through these tabs together. Stay on 'Instructions' for now."

---

## Section 1: Advanced Instructions (2:00 - 10:00) | 8 minutes

### Introduction (30 seconds)
"First, let's talk about advanced instruction patterns. Basic GPTs use simple instructions like 'You are a marketing assistant.' But advanced GPTs use specific prompting techniques that improve reasoning quality."

### Demo Pattern Templates (1 minute)
**What You Say:**
"I'm showing you 5 advanced patterns in the dropdown. Let me explain each quickly:

1. **Chain-of-Thought** - Makes GPT think step-by-step, improves complex reasoning
2. **Few-Shot Learning** - Show examples, GPT learns the pattern
3. **Structured Output** - Force specific formats like JSON or tables
4. **Error Handling** - What to do when things go wrong
5. **Multi-Step Decomposition** - Break complex tasks into subtasks"

**What You Do:**
- Select "Chain-of-Thought" from dropdown
- Show the generated template in the textarea
- Read key parts aloud: "Think step by step", "Show your reasoning"

### Chain-of-Thought Deep Dive (2 minutes)
**What You Say:**
"Chain-of-thought is HUGE. Research shows it improves accuracy by 30-40% on complex tasks.

Here's why: When you tell GPT 'Think step by step,' it literally generates intermediate reasoning steps before the final answer. This catches errors early.

**Bad prompt:** 'Analyze this campaign data and tell me what to do.'

**Good prompt with CoT:** 'Analyze this campaign data. Think step by step: 1) What are the key metrics? 2) What trends do you see? 3) What's working? 4) What's not? 5) What should we change?'

See the difference? We're forcing structured thinking."

### Hands-On Activity (4 minutes)
**What You Say:**
"Your turn. Choose ONE pattern that matches your use case:
- Building a data analyst? → Use Chain-of-Thought
- Building a copywriter? → Use Few-Shot with examples
- Building an API integration? → Use Structured Output

Customize the template for YOUR GPT. You have 4 minutes."

**What You Do:**
- Set a 4-minute timer
- Walk around, help people who are stuck
- Common issues:
  - "Which pattern should I use?" → Ask: "What's your GPT doing? Complex reasoning = CoT, Creative writing = Few-Shot"
  - "How detailed should I be?" → "Be VERY specific. Add 'ALWAYS' and 'NEVER' constraints"

### Quick Wins to Share (30 seconds)
**What You Say:**
"Quick tips I see working:
- Use 'ALWAYS' and 'NEVER' for strict rules
- Show examples in your instructions (few-shot)
- Tell GPT what NOT to do (just as important as what to do)
- Use formatting hints: 'Respond in bullet points' or 'Use markdown headers'"

---

## Section 2: Custom Actions & APIs (10:00 - 20:00) | 10 minutes

### Why Actions Matter (1 minute)
**What You Say:**
"Actions are what separate toy GPTs from REAL productivity tools. Actions let your GPT:
- Fetch data from Airtable
- Update Google Sheets
- Trigger Zapier automations
- Search your company database
- Send Slack messages
- Basically... do anything with an API

Without actions, your GPT is just a chatbot. WITH actions, it's an autonomous agent."

### Show API Templates (2 minutes)
**What You Do:**
- Click on "Actions" tab
- Show the 4 API template cards: Airtable, Google Sheets, Zapier, Custom
- Click "Airtable" to show it's selected

**What You Say:**
"I've pre-built templates for common integrations. Let me show you Airtable as an example.

Airtable is like a database you can read/write from anywhere. Imagine: Your GPT could pull customer data from Airtable, analyze it, and write results back.

The key is the OpenAPI schema. This tells ChatGPT: 'Here's the API endpoint, here's how to call it, here's what data it returns.'"

### OpenAPI Schema Explanation (3 minutes)
**What You Say:**
"Don't panic when you see this JSON. Let me break it down:

```json
{
  "openapi": "3.0.0",           // Version (always 3.0.0)
  "info": { "title": "..." },    // What's this API?
  "servers": [{ "url": "..." }], // Where is it?
  "paths": {                     // What endpoints exist?
    "/endpoint": {
      "get": { ... }             // How do I call it?
    }
  }
}
```

You need to know:
1. **URL** - Where's the API? (e.g., https://api.airtable.com)
2. **Endpoint** - What path? (e.g., /v0/baseId/tableName)
3. **Method** - GET (read) or POST (write)?
4. **Auth** - Do I need an API key?

That's it. Everything else is details."

### Authentication Warning (1 minute)
**What You Do:**
- Point to the yellow warning box on screen
- Read it aloud

**What You Say:**
"CRITICAL: Never put API keys in your GPT instructions. Users could extract them.

Instead, use the Actions authentication tab. You enter the key there, it's encrypted, users never see it.

This is Security 101. Don't skip it."

### Hands-On: Choose Your Integration (3 minutes)
**What You Say:**
"Decision time. Do you want to add an action to your GPT?

**Option A:** Yes, I have an API I want to integrate
- Pick a template (Airtable, Sheets, Zapier, or Custom)
- Fill in your API details
- You have 3 minutes

**Option B:** No, not today
- That's fine! Skip to Model Selection tab
- Actions are advanced, you can add later

Raise your hand if you need help with Option A."

**What You Do:**
- Help anyone building actions
- Common issues:
  - "I don't have an API key" → "Use a dummy URL for now, test with Postman later"
  - "This schema is confusing" → "Start with the template, just change the URL"
  - "How do I test this?" → "We'll test in the Testing tab, mock it for now"

---

## Section 3: Model Selection & Cost (20:00 - 25:00) | 5 minutes

### Model Options (2 minutes)
**What You Say:**
"Time to pick your model. You have 3 choices:

1. **GPT-4** - Smartest, slowest, most expensive
   - Use for: Complex reasoning, technical accuracy, high-stakes decisions
   - Cost: ~$0.03/1K input tokens, ~$0.06/1K output tokens

2. **GPT-4 Turbo** - Balanced (RECOMMENDED)
   - Use for: Most production use cases
   - Cost: ~$0.01/1K input tokens, ~$0.03/1K output tokens
   - 3x cheaper than GPT-4, almost same quality

3. **GPT-3.5 Turbo** - Fastest, cheapest
   - Use for: High volume, simple tasks, drafts
   - Cost: ~$0.0005/1K input tokens, ~$0.0015/1K output tokens
   - 20x cheaper than GPT-4

**My recommendation:** Start with GPT-4 Turbo. If costs get high, downgrade. If quality isn't enough, upgrade."

### Cost Calculator Demo (2 minutes)
**What You Do:**
- Show the cost calculator on screen
- Enter example values:
  - Monthly usage: 1000 conversations
  - Avg tokens per conversation: 2000

**What You Say:**
"Let's do quick math. Say you expect 1,000 conversations per month, averaging 2,000 tokens each.

With GPT-4 Turbo (recommended):
- Input cost: ~$10/month
- Output cost: ~$30/month
- **Total: $40/month**

That's NOTHING for a productivity tool that saves hours. But at scale, these costs add up.

**Pro tip:** If you're hitting $500/month, you're using this HEAVILY. Consider:
- Caching frequent requests
- Shorter instructions (less tokens)
- Downgrade to GPT-3.5 for simple queries"

### Quick Activity (1 minute)
**What You Say:**
"Fill in YOUR expected usage. Be honest:
- How many people will use this?
- How often? Daily? Weekly?
- Long conversations or short?

The calculator updates in real-time. You'll see your monthly cost."

---

## Section 4: Testing & Debugging (25:00 - 32:00) | 7 minutes

### Testing Philosophy (1 minute)
**What You Say:**
"Here's where amateurs and pros differ:

**Amateurs:** Test the happy path, publish, wonder why it breaks

**Pros:** Test EVERYTHING. Edge cases. Errors. Weird inputs. Long conversations.

Your GPT will be used in ways you never imagined. Break it now, fix it now."

### The 8-Point Testing Checklist (3 minutes)
**What You Do:**
- Show the checklist on screen
- Go through each item

**What You Say:**
"Work through this checklist. I'll explain each:

1. **Basic functionality** - Does it work at all?
   - Test: Ask a simple question, get a good answer

2. **Edge cases** - Unusual inputs
   - Test: Empty message, super long message, special characters

3. **Error handling** - What if something fails?
   - Test: Give it incomplete data, watch how it responds

4. **Token limits** - Long conversations
   - Test: Chat for 10+ turns, does it remember context?

5. **Multi-turn conversations** - Context retention
   - Test: Reference earlier messages, does it remember?

6. **Action testing** - If you added APIs
   - Test: Trigger the action, verify it works

7. **Output format consistency** - Same format every time?
   - Test: Ask same question 3 times, compare outputs

8. **Performance under load** - Speed
   - Test: Multiple rapid requests, does it slow down?

Check off each as you test. Don't skip any."

### Common Issues & Fixes (2 minutes)
**What You Say:**
"I'm showing you the 3 most common issues I see:

**Issue 1:** GPT doesn't follow instructions consistently
- **Fix:** Be MORE explicit. Add 'ALWAYS do X' and 'NEVER do Y'

**Issue 2:** Actions timeout or fail
- **Fix:** Test your API outside ChatGPT first (use Postman). Verify auth works.

**Issue 3:** Output format varies
- **Fix:** Use structured output patterns. Give exact format examples.

These account for 80% of problems. Memorize them."

### Hands-On Testing (1 minute)
**What You Say:**
"You have 1 minute. Pick ONE test from the checklist and run it NOW in ChatGPT.

Open your GPT, test it, note what breaks. We'll fix issues in the next 5 minutes of workshop."

---

## Section 5: Publishing Strategy (32:00 - 37:00) | 5 minutes

### Privacy Levels (1 minute)
**What You Say:**
"Three privacy options:

1. **Only me** - Private, just you
   - Use for: Personal productivity, testing, company secrets

2. **Anyone with a link** - Shareable, not listed
   - Use for: Team sharing, client projects, controlled access

3. **Public (GPT Store)** - Discoverable, anyone can use
   - Use for: Building reputation, monetization (coming soon), max reach

Start with 'Only me,' test thoroughly, then upgrade."

### GPT Store Optimization (2 minutes)
**What You Say:**
"If you're going public, here's how to get discovered:

**Name:** Clear, specific, searchable
- ✅ Good: 'Marketing Campaign Brief Generator for B2B'
- ❌ Bad: 'Helper Bot'

**Description:** Benefits, not features
- ✅ Good: 'Save 2 hours per brief. Creates data-backed campaigns with audience insights.'
- ❌ Bad: 'A GPT that helps with marketing'

**Category:** Pick the most relevant
- Most competitive: Writing, Productivity
- Less competitive: Research & Analysis, Programming

**Conversation Starters:** Show off capabilities
- ✅ Good: 'Create a Q2 product launch brief for enterprise SaaS'
- ❌ Bad: 'Help me with marketing'

**Profile Picture:** Custom, professional
- Not required but 3x higher engagement

Think like SEO for the GPT Store."

### Publishing Checklist (1 minute)
**What You Do:**
- Show the 6-item checklist on screen

**What You Say:**
"Before you publish:
- ✓ Clear, descriptive name
- ✓ Compelling description
- ✓ Relevant category
- ✓ Custom profile picture
- ✓ Example prompts showcase features
- ✓ Tested thoroughly

Don't rush this. First impression matters."

### Hands-On Decision (1 minute)
**What You Say:**
"Choose your privacy level now:
- Testing phase? → Only me
- Sharing with team? → Anyone with link
- Ready for prime time? → Public

Set it, move to Export tab."

---

## Section 6: Export & Next Steps (37:00 - 40:00) | 3 minutes

### Export Options (1 minute)
**What You Say:**
"You've built something valuable. Save it:

1. **Download JSON** - Complete config, machine-readable
   - Use for: Backups, sharing with devs, version control

2. **Download Markdown** - Human-readable doc
   - Use for: Documentation, team training, blog posts

3. **Copy Share Link** - URL to this config
   - Use for: Quick sharing, team collaboration

Export at least JSON. You'll thank me later when you want to replicate this."

### Version History (30 seconds)
**What You Say:**
"Notice the version history at the bottom? This is auto-saved.

You can roll back to earlier versions if you break something. Think of it like Git for GPTs."

### What Happens Next (1 minute 30 seconds)
**What You Say:**
"We're at 40 minutes. You've learned:
- ✓ Advanced prompting patterns
- ✓ Custom actions and APIs
- ✓ Model selection and costs
- ✓ Comprehensive testing
- ✓ Publishing strategies

**Your homework:**
1. Finish building your GPT (if not done)
2. Test ALL 8 checklist items
3. Share it with 2 colleagues for feedback
4. Iterate based on real usage

**Resources:**
- This demo page (keep it open, reference anytime)
- OpenAI GPT Builder docs: platform.openai.com/docs/guides/gpt-builder
- My office hours: [insert your contact]

**Questions?** Drop them in chat or raise your hand."

---

## Closing (40:00) | Wrap-up

### What You Say:
"Time's up! Let's see what we built.

Can I get a quick show of hands:
- Who completed a working GPT? 🙋
- Who added custom actions? 🙋
- Who plans to publish to GPT Store? 🙋

Awesome. You're all power users now.

**Remember:** The best GPTs come from ITERATION. Your v1 won't be perfect. Ship it, get feedback, improve.

Thanks for joining the Advanced Track. Let's build some AI! 🚀"

### What You Do:
- Stop the timer
- Show a few examples from the demo dashboard (if available)
- Share next steps slide
- Collect feedback (quick survey or verbal)

---

## Post-Workshop Follow-Up

### Within 24 Hours:
- Email attendees:
  - Link to demo pages
  - Recording (if recorded)
  - Slide deck
  - Sample GPT configs (JSON files)
  - Office hours calendar link

### Within 1 Week:
- Send follow-up survey:
  - Did you complete your GPT?
  - What challenges did you face?
  - What additional topics would help?
  - Success stories to share?

---

## Troubleshooting Guide for Facilitators

### Common Workshop Issues:

**Issue:** "I can't access ChatGPT GPT Builder"
- **Fix:** Need ChatGPT Plus subscription ($20/month)
- **Workaround:** Pair them with someone who has access, share screen

**Issue:** "My OpenAPI schema won't validate"
- **Fix:** Check for:
  - Missing commas in JSON
  - Wrong URL format
  - Missing required fields (openapi version, info, servers, paths)
- **Workaround:** Use the Airtable template exactly as-is, just change URL

**Issue:** "My GPT doesn't follow instructions"
- **Fix:** Instructions too vague. Add:
  - 'ALWAYS' and 'NEVER' constraints
  - Specific examples
  - Format requirements
  - "If you're unsure, ask for clarification"

**Issue:** "Actions return 401 Unauthorized"
- **Fix:** API key wrong or missing. Check:
  - Key entered in Actions auth tab (not instructions)
  - Key has correct permissions
  - Test API with Postman first

**Issue:** "Cost calculator shows $1000/month"
- **Fix:** They entered usage in wrong units
  - Should be conversations/month, not tokens
  - Typical: 100-1000 conversations/month for personal use

**Issue:** "I'm lost, what should I build?"
- **Fix:** Ask them:
  - What's your role? (Marketing → Campaign Brief, Dev → Code Reviewer)
  - What takes 2+ hours/week? (That's your GPT use case)
  - What do you Google repeatedly? (Turn that into a GPT)

---

## Facilitator Self-Checklist

Before the workshop:
- [ ] Test all demo pages locally
- [ ] Prepare 1-2 backup GPT examples
- [ ] Have API keys ready (if doing live demo)
- [ ] Timer ready and visible
- [ ] Screen sharing tested
- [ ] Backup plan if internet fails

During the workshop:
- [ ] Keep to time (use timer)
- [ ] Walk around (or monitor chat if virtual)
- [ ] Answer questions quickly
- [ ] Show examples liberally
- [ ] Encourage experimentation

After the workshop:
- [ ] Send resources within 24h
- [ ] Collect feedback
- [ ] Note what to improve next time
- [ ] Follow up with stuck attendees

---

## Success Metrics

Track these to improve future workshops:

- **Completion rate:** % who finish a working GPT (Goal: >80%)
- **Advanced features:** % who add actions (Goal: >30%)
- **Publishing:** % who publish (any privacy level) (Goal: >50%)
- **Satisfaction:** Post-workshop NPS (Goal: 8+/10)
- **Follow-through:** % still using their GPT 1 week later (Goal: >60%)

---

## Advanced Tips for Repeat Facilitators

After running this 3+ times:

1. **Collect GPT gallery** - Save best examples from each workshop
2. **Create "Greatest Hits"** - Compilation of best actions/patterns
3. **Build community** - Slack/Discord for past attendees
4. **Offer "Advanced Advanced"** - 2-hour deep dive on specific topics
5. **Partner with companies** - Run this for corporate teams

---

## Quick Reference Card (Print & Share)

```
ADVANCED TRACK QUICK REFERENCE

⏱️ 40 minutes total

📋 Six Tabs:
1. Instructions (8 min) - Advanced patterns
2. Actions (10 min) - APIs & integrations
3. Model (5 min) - Cost optimization
4. Testing (7 min) - 8-point checklist
5. Publishing (5 min) - GPT Store strategy
6. Export (3 min) - Save your work

🔑 Key Takeaways:
- Use Chain-of-Thought for complex reasoning
- Never put API keys in instructions
- GPT-4 Turbo is the sweet spot
- Test edge cases, not just happy path
- Iterate based on real usage

📚 Resources:
- Demo: [your-url]/workshop-demo-advanced.html
- Docs: platform.openai.com/docs/guides/gpt-builder
- Help: [your-email]
```

---

## End of Script

**Total Timing Breakdown:**
- Opening: 2 min
- Instructions: 8 min
- Actions: 10 min
- Model: 5 min
- Testing: 7 min
- Publishing: 5 min
- Export: 3 min
- **Total: 40 minutes**

Good luck facilitating! 🚀
