# Session 2: Build AI Agents for Marketing

**No Code Required — Build in 60 Minutes**

What you'll build today:
- ✅ Tokenization visualizer
- ✅ Prompt quality checker
- ✅ Template generator
- ✅ Custom marketing agent

🌐 **[Workshop Site: w4ester.github.io/session2](https://w4ester.github.io/session2/)**

Note: Welcome! Everything is hands-on. Follow along on your laptop. Workshop site has all tools.

---

## 60-Minute Workshop + ROI

| Time | Activity | Tool |
|------|----------|------|
| 5-7 min | Introduction & Problem | Slides |
| 8 min | Tokenization Demo | [Live Tool](#tokenization) |
| 12 min | Prompt Engineering | [Scoring Tool](#prompting) |
| 8 min | Templates | [Generator](#templates) |
| 15 min | Build Agent | OpenAI Agent Builder |
| 10 min | Q&A | — |

**💰 The Business Case**
- Problem: Repetitive marketing tasks consume 5-10 hours/week
- Solution: AI agents automate drafts, leaving humans for strategy
- ROI: $250-750/week saved (at $50-75/hr) vs $20/month cost

Note: We're solving a real problem. You'll automate a workflow today. Everything is reusable after.

---

## Understanding Tokenization

**What are tokens?**
- LLMs read text as tokens (~4 characters each)
- Example: "Marketing AI automates tasks" = 8 tokens
- Why it matters: Token limits, speed, and cost

**💰 Real Costs (GPT-4)**
- Input: $0.03 per 1,000 tokens
- Output: $0.06 per 1,000 tokens
- 500-word prompt ≈ 650 tokens = **$0.02 per request**
- Daily agent use (5,000 tokens) = **$0.15/day** or **$4.50/month**

🧩 **[Try the Tokenizer →](https://w4ester.github.io/session2/#tokenization)**

Note: Demo the tokenizer live. Show how different text = different token counts. Efficient prompts = cheaper + faster.

---

## Live Demo: Tokenization Visualizer

**Try it now:**
1. Open [workshop site section 1](https://w4ester.github.io/session2/#tokenization)
2. Paste: "Write a social media post about our new analytics dashboard"
3. Click "Tokenize Text"
4. See token count + unique tokens + cost estimate

**Test examples:**
- Short text vs long prompt
- With emoji (uses MORE tokens)
- Technical/code snippets

**Why this matters:**
- Longer prompts = higher costs
- Token limits on models (e.g., 8K, 128K)

Note: Give 2 minutes to explore. Walk through examples. Point out emoji uses 3-4 tokens per character.

---

## 4 Principles of Prompt Engineering

**❌ Basic (costs $0.02, wastes time):**
```
Write a social media post about our new product.
```

**✅ Engineered (costs $0.03, saves 30 minutes):**
```
Write a LinkedIn post announcing our AI-powered
marketing analytics dashboard.

Target: Marketing managers at B2B companies
Benefit: Saves 5+ hours/week on reporting
Tone: Professional but approachable
Length: 150 words
Include: 1 metric, 1 question, 3 hashtags
CTA: "Book a demo"
```

**The 4 Principles:**
1. **Be specific** — format, tone, length, audience
2. **Provide context** — background, constraints
3. **Use examples** — show desired output
4. **Break it down** — guide the reasoning

Note: Run both prompts live in ChatGPT. Show the dramatic difference. Better prompt = better output = less revisions.

---

## Live Activity: Improve Your Prompts

**🧩 [Prompt Quality Checker →](https://w4ester.github.io/session2/#prompting)**

**Your Task (5 minutes):**
1. Go to section 2 on workshop site
2. Improve this prompt:
   ```
   Write an email promoting our analytics dashboard.
   ```
3. Add: audience, benefit, CTA, tone, length
4. Click "Score My Prompt" — aim for 8/10 or higher
5. Copy your result to use later

**What to add:**
- 🎯 Who is this for?
- 💡 What's the key benefit?
- 📞 What action should they take?
- 🎨 What's the tone?
- 📏 How long should it be?

Note: Give 5 minutes. Walk around. Share 2-3 examples after. Point out what made them score high.

---

## Why Templates Matter

**Problem:**
- Every campaign starts from scratch
- Inconsistent quality across team
- Experienced marketers spend time on repetitive tasks

**Solution: Reusable Prompt Templates**
- Variables: `{product_name}`, `{audience}`, `{benefit}`
- Instructions: What the AI should do
- Structure: Format rules
- Examples: Show quality standards

**💰 Template ROI:**
- Build once: 30 minutes
- Use 50 times: Save 25 hours
- Team of 5: Save 125 hours = **$6,250-9,375 saved**
- Cost: $0 (reusable prompt)

Note: Templates are your scaling strategy. One person builds, whole team benefits.

---

## Live Build: Template Generator

**🧩 [Template Generator →](https://w4ester.github.io/session2/#templates)**

**Build a template (5 minutes):**
1. Go to section 3 on workshop site
2. Pick ONE repetitive task you do weekly
3. Enter:
   - Task name: "Email Subject Line Generation"
   - Variables: "product name, offer details, audience, tone"
   - Instructions: "Create 5 subject line options..."
4. Click "Generate Template"
5. Download .md file

**Example templates to build:**
- Weekly performance reports
- Social media posts
- Campaign briefs
- Email sequences

Note: Focus on ONE task. Quality over quantity. Save the template — you'll use it forever.

---

## What Are AI Agents?

**Chatbot vs Agent:**

**Chatbot:** Input → LLM → Output

**Agent:** Input → LLM + Tools + Memory + Planning → Better Output

**Agent Components:**
- 🧠 **LLM** — The brain (GPT-4, Claude)
- 🔧 **Tools** — Web browsing, file analysis, calculations
- 💾 **Memory** — Remembers past conversations
- 🎯 **Planning** — Breaks complex tasks into steps

**💰 Agent Costs & ROI:**
- OpenAI Plus: **$20/month**
- Time saved: **5-10 hours/week** = $250-750/week
- ROI: **$1,000-3,000/month saved** vs $20/month cost
- Payback: **First day**

Note: Agents don't just chat — they work. They can research competitors, analyze CSVs, draft campaigns.

---

## Live Build: OpenAI Agent Builder Walkthrough

**🧩 [OpenAI Agent Builder →](https://platform.openai.com/agent-builder)**

**Build together (10 minutes):**

**Step 1:** Click "+ Create" and name your agent
- Example: "Campaign Companion" or "Brand Voice Assistant"

**Step 2:** Add instructions
```
You are a marketing assistant for [Company].

Your role:
- Draft and optimize campaign content
- Maintain brand voice: [professional/casual]
- Always include measurable benefits
- Always include clear CTAs
- Format for [LinkedIn/Email/Ads]
```

**Step 3:** Enable tools
- ✅ Web Browsing (competitor research)
- ✅ Data Analysis (upload campaign CSVs)

**Step 4:** Test it
```
Create 3 LinkedIn posts about our analytics feature.
Each should highlight time savings (5+ hours/week),
use different angles, include engagement questions,
stay under 150 words, and include 2-3 hashtags.
```

**Step 5:** Review, adjust, save, share with team

Note: Walk through each step live. Help anyone stuck. This is the main deliverable — everyone leaves with a working agent.

---

## ROI Summary: Why This Matters

**What You Built Today:**
- ✅ Tokenization understanding (optimize costs)
- ✅ 4 prompt engineering principles (quality)
- ✅ Reusable templates (scale)
- ✅ Custom agent (automation)

**💰 Financial Impact:**

| Item | Cost | Savings |
|------|------|---------|
| OpenAI Plus | $20/month | — |
| Token usage | ~$5/month | — |
| Time saved | — | 5-10 hrs/week |
| **Net ROI** | **$25/month** | **$1,000-3,000/month** |

**Payback Period:** 1 day

**Annual ROI:** $12,000-36,000 saved vs $300 cost = **40x-120x return**

Note: These are conservative estimates. Many teams save 15-20 hours/week. Document your results to justify expansion.

---

## Resources + Next Steps

**🌐 Workshop Site (Available Forever):**
- [w4ester.github.io/session2](https://w4ester.github.io/session2/)
- All tools: Tokenizer, Prompt Checker, Template Generator
- No login required

**🛠️ Tools:**
- [OpenAI Agent Builder](https://platform.openai.com/agent-builder) (requires Plus)
- [OpenAI Docs](https://platform.openai.com/docs/guides/agents)
- [Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)

**📁 Code:**
- [GitHub: w4ester/session2](https://github.com/w4ester/session2)
- Fork it, modify it, use it (MIT license)

**📋 Your Action Plan (Next 7 Days):**
- Day 1-2: Build ONE agent for repetitive task
- Day 3-4: Create 2-3 templates
- Day 5-7: Test, measure, document savings

**Track These Metrics:**
- ⏱️ Time saved per task
- 🔄 Revision cycles reduced
- ✅ Team adoption rate
- 💰 Cost vs savings

Note: Bookmark the workshop site. All tools work forever. Start with ONE workflow. Prove value. Then scale.

---

# Questions? 🚀

**Common Questions:**

**Q: What if the agent makes mistakes?**
A: Always review outputs. Agents = first drafts, humans = final approval.

**Q: How do I enforce brand guidelines?**
A: Upload brand docs or paste guidelines into agent instructions.

**Q: Can I share my agent with my team?**
A: Yes! OpenAI Agent Builder has team sharing options.

**Q: What about data privacy?**
A: Review your AI provider's terms. Don't input sensitive customer data.

**Q: Which tasks should I automate first?**
A: Pick tasks that are repetitive, time-consuming (2+ hours/week), and have clear quality standards.

**What you have now:**
✅ The tools
✅ The knowledge
✅ The templates
✅ The agent

**Go build something this week.**

🌐 [Workshop Site](https://w4ester.github.io/session2/) • 📁 [GitHub](https://github.com/w4ester/session2)

Note: Stay available for questions. Remind them everything is on the workshop site. Real learning happens when they build. Thank them!
