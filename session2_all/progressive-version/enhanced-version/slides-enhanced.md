# Session 2

## AI Agents for Marketing

**Build Your First Custom Agent**  
*No Code Required*

Note: Welcome everyone! Today you'll build a real AI agent you can use Monday. This is hands-on - follow along on your laptop.

---

## You'll Build This Today

✅ Custom AI marketing assistant  
✅ Understands your brand  
✅ Automates repetitive tasks  
✅ Reusable prompt templates

<span class="brand">**Saves 5-10 hours/week**</span>

Note: Set expectations high. This is practical, not theoretical. Show of hands - who wants their time back?

---

## 60-Minute Workshop

| Time | Topic |
|------|-------|
| 5-7 min | **Introduction** |
| 8 min | **LLM Foundations** |
| 12 min | **Prompt Engineering** |
| 8 min | **Templates** |
| 10 min | **Build Your Agent** |
| 2 min | **Deploy & Scale** |
| 15 min | **Q&A** |

Note: We're moving fast. Everything is on the workshop site to reference later.

---

## The Problem

### Before AI Agents

Draft → Review → Revise → Approve → Publish

⏱️ **2-3 hours per campaign asset**

Note: Show of hands - who's experienced this? The endless revision cycles?

---

## The Solution

### With AI Agents

Generate → Refine → Publish

⏱️ **20-30 minutes per asset**

<span class="brand">**5-10 hours saved weekly**</span>

Note: Same quality output, fraction of the time. That's what we're building today.

---

<!-- PART 1: TOKENS -->

# Part 1

## Understanding Tokens

Note: Quick foundation - 5 minutes on this. It affects everything else.

---

## What Are Tokens?

LLMs read text as **tokens**  
(~4 characters each)

```
"Marketing AI automates tasks."
```

= **8 tokens**

Note: Demo live on the tokenizer. Have everyone open the link.

---

## Why Tokens Matter

💰 **Cost**  
~$0.03 per 1,000 tokens

🧠 **Limits**  
8k - 128k token caps

⏱️ **Speed**  
More tokens = slower

Note: This is why prompt engineering matters. Efficient = cheaper and faster.

---

## Live Demo

🧩 **[Open Tokenization Visualizer](https://w4ester.github.io/session2/#tokenization)**

Try this:
```
"Our AI assistant helps marketers build 
smarter campaigns faster and consistently."
```

Watch how it breaks down!

Note: Give them 60 seconds to play with it. Point out spaces and punctuation count as tokens.

---

<!-- PART 2: PROMPT ENGINEERING -->

# Part 2

## Prompt Engineering

**Write Better → Get Better**

Note: This is the skill multiplier. Master this and every prompt improves.

---

## The 4 Principles

1️⃣ **Be Specific**

2️⃣ **Provide Context**

3️⃣ **Use Examples**

4️⃣ **Break It Down**

Note: Write these down. They apply to EVERY AI tool, not just what we're building.

---

## Before

❌ **Basic Prompt**

```
Write a social media post 
about our new product.
```

Generic, vague, unusable

Note: This is what most people start with. Let's see what happens when we apply the 4 principles.

---

## After

✅ **Engineered Prompt**

```
Write a LinkedIn post announcing our 
AI-powered marketing analytics dashboard.

Target: Marketing managers at B2B companies
Benefit: Saves 5+ hours/week on reporting
Tone: Professional but approachable
Length: 150 words
Include: 1 metric, 1 question, 3 hashtags
CTA: "Book a demo"
```

Note: Run both prompts live. Show the dramatic difference in output quality.

---

## The Difference

❌ Basic = Generic output  
✅ Engineered = **300% better engagement**

<span class="brand">Specificity = Quality</span>

Note: Real metric from teams using engineered prompts. The more guidance, the better output.

---

## Your Turn

**Improve This:**

```
Write an email promoting 
our analytics dashboard.
```

🧩 **[Prompt Quality Checker](https://w4ester.github.io/session2/#prompting)**

Note: Give them 3 minutes. Walk around if in-person. We'll share examples after.

---

## What to Add

- 🎯 Audience?
- 💡 Key benefit?
- 📞 Call to action?
- 🎨 Tone?
- 📏 Length?

**Add these → Better results**

Note: These 5 elements transform basic prompts into great ones.

---

## Share Time

**Who improved their score?** 🙋

Show one example

Note: Pick 2-3 good examples. Point out what made them better. Reinforce the 4 principles.

---

<!-- PART 3: TEMPLATES -->

# Part 3

## Prompt Templates

**Build Once, Use Forever**

Note: This is how you scale. One person builds it, whole team benefits.

---

## Why Templates?

| One-Offs | Templates |
|----------|-----------|
| ❌ Inconsistent | ✅ Reliable |
| ❌ Don't scale | ✅ Team shares |
| ❌ Reinvent | ✅ Reuse |

Note: Templates are your team's competitive advantage. Build once, use 100 times.

---

## Template Parts

**1. Variables** → `{product_name}`

**2. Instructions** → What to do

**3. Structure** → Format rules

**4. Examples** → Show quality

Note: Think Mad Libs for marketing. Fill in the blanks, get great content.

---

## Example Template

```markdown
# Weekly Report for {date_range}

📊 Performance
- {top_channel}: {metric}

💡 Insights
- [What worked]
- [What needs work]

🎯 Next Week
- [Priority]

Tone: Data-driven but conversational
```

Note: This is reusable every week. Just swap variables. Same quality every time.

---

## Build Yours

🧩 **[Template Generator](https://w4ester.github.io/session2/#templates)**

Pick ONE task you do weekly

Build a template for it

Download → Share with team

Note: Give them 5 minutes. Focus on ONE repetitive task. Quality over quantity.

---

<!-- PART 4: AI AGENTS -->

# Part 4

## AI Agents

**LLMs + Tools + Automation**

Note: Now we combine everything. This is the future of marketing workflows.

---

## Chatbot vs Agent

**Chatbot:**
```
Input → LLM → Output
```

**Agent:**
```
Input → LLM + Tools + Memory → Better Output
```

Note: Agents can browse web, analyze files, remember context. Way more powerful.

---

## Agent Components

🧠 **LLM** → The brain

🔧 **Tools** → Web, files, calculations

💾 **Memory** → Past conversations

🎯 **Planning** → Multi-step tasks

Note: This is what makes agents different. They don't just chat, they work.

---

## Marketing Use Cases

**Content**
- Email campaigns (A/B variants)
- Social posts (platform-optimized)
- Ad copy (brand-consistent)

**Analysis**
- Campaign reports
- Competitor research
- Trend identification

Note: These are real use cases. Teams are using agents for this today.

---

## ⚠️ Golden Rule

**Always review before publishing**

Agents = First drafts  
You = Final approval

Note: Agents are assistants, not replacements. Quality control stays human.

---

<!-- PART 5: BUILD -->

# Part 5

## Build Your Agent

**Live Demo 🚀**

Note: Main event. Everyone follow along. We're building together, step by step.

---

## Tool: Agent Builder

📖 **[OpenAI Agent Builder](https://platform.openai.com/docs/guides/agent-builder)**

**Building:** Marketing Assistant

**Time:** 15 minutes

**Open the link now** 👆

Note: Make sure everyone has it open. Help anyone who needs it. This is the hands-on part.

---

## Step 1: Name It

**Examples:**
- Campaign Companion
- Brand Voice Assistant
- Marketing Co-Pilot

**Choose yours** (clear + descriptive)

Note: Name matters for adoption. Make it friendly and purpose-driven.

---

## Step 2: Instructions

**Copy this template:**

```
You are a marketing assistant for [Company].

Your role:
- Draft and optimize campaign content
- Maintain brand voice: [professional/casual]
- Always include measurable benefits
- Always include clear CTAs
- Format for [LinkedIn/Email/Ads]
```

Note: Customize company name and brand voice. This is the agent's job description.

---

## Step 3: Add Tools

✅ **Web Browsing**  
→ Research competitors

✅ **Data Analysis**  
→ Upload campaign CSVs

✅ **DALL-E** (optional)  
→ Generate images

Note: Start with browsing and data analysis. Add more later as needed.

---

## Step 4: Test It

**Test Prompt:**

```
Create 3 LinkedIn posts about our 
new analytics feature.

Each should:
- Highlight time savings (5+ hours/week)
- Use different angles (ROI, ease, collaboration)
- Include engagement question
- Stay under 150 words
- Include 2-3 hashtags
```

Note: This tests if instructions worked. Run it now. Look for consistent voice and format.

---

## Step 5: Review Output

Check for:

✅ Right tone?  
✅ Right length?  
✅ Includes CTAs?  
✅ On brand?

**If no** → Adjust instructions  
**If yes** → Save & share! 🎉

Note: Iteration is normal. First version is rarely perfect. That's okay.

---

## Share Your Agent

**Options:**

1. **Direct Link** → Team members
2. **API** → Connect to tools
3. **Docs** → Write usage guide

📖 [Deployment docs](https://platform.openai.com/docs/guides/agent-builder)

Note: Links are easiest for small teams. API for enterprise scale.

---

<!-- PROMPT LIBRARY -->

# Prompt Library

**Copy-Paste Ready**

Note: Save these. Workshop site has all of them forever.

---

## Tokenization

```
Tokenize this and explain each token:
"Our AI helps marketers build campaigns."
```

🧩 [Try it live](https://w4ester.github.io/session2/#tokenization)

Note: Great for understanding how LLMs read your content.

---

## Prompt Improvement

```
Improve this prompt: [paste yours]

Add:
- Audience
- Tone
- Length
- Structure
- Examples
- CTA
```

Note: Use this template to improve any prompt. Works every time.

---

## Template Creation

```
Create a template for [task type]

Variables: {var1}, {var2}, {var3}
Include: format, tone, length specs
```

Note: This meta-prompt creates new templates. Very powerful for scaling.

---

## Campaign Analysis

```
Analyze the attached campaign CSV.

Provide:
- Top 3 performers
- Bottom 2 performers
- One insight per channel
- Next week recommendations

Format: 250-word CMO memo
```

Note: Real workflow prompt. Upload CSV, get executive summary. Modify for your needs.

---

<!-- TAKEAWAYS -->

# Key Takeaways

**What You Learned**

Note: Let's wrap up the key lessons. These apply beyond today's workshop.

---

## 5 Core Lessons

1. **Tokens = Cost + Speed**

2. **4 Principles = Quality**

3. **Templates = Scale**

4. **Agents = Automation**

5. **No Code = No Barriers**

Note: These principles work with ANY AI tool, not just what we built today.

---

<!-- ACTION PLAN -->

# Your Action Plan

**Next 7 Days**

Note: Don't let this sit. Take action this week.

---

## This Week

**Day 1-2**  
Build ONE agent for repetitive task

**Day 3-4**  
Create 2-3 templates

**Day 5-7**  
Test, measure, share

Note: Start small. Pick the task that takes 2+ hours weekly. Prove value first.

---

## Track These Metrics

⏱️ Time saved per task

🔄 Revision cycles reduced

✅ Team adoption rate

Note: Numbers matter. Document savings to justify expansion.

---

## Success Pattern

1. Start small (one workflow)
2. Document results
3. Share learnings
4. Scale gradually
5. Iterate always

Note: Don't try to automate everything. Prove value, then expand.

---

<!-- RESOURCES -->

# Resources

**Everything You Need**

Note: All of this is free and available forever.

---

## 🌐 Workshop Hub

**[w4ester.github.io/session2](https://w4ester.github.io/session2/)**

- Tokenization Visualizer
- Prompt Quality Checker
- Template Generator
- Full Documentation
- Download All Materials

Note: Bookmark this. No login required. Available 24/7.

---

## 🛠️ Tools

**Build:**
- [OpenAI Agent Builder](https://platform.openai.com/docs/guides/agent-builder)
- [Claude Projects](https://claude.ai)

**Learn:**
- [OpenAI Prompt Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompts](https://docs.anthropic.com/prompts)

Note: Agent Builder and Claude need paid accounts. Others are free.

---

## 📁 Code

**[GitHub Repository](https://github.com/w4ester/session2)**

- All slides
- All prompts
- All templates
- Workshop source code

Fork it, modify it, use it

Note: MIT licensed. Use however you want. Contributions welcome.

---

<!-- Q&A -->

# Questions?

Note: Open floor. Address specific questions from audience.

---

## Common Questions

**Q: Mistakes?**  
A: Always review. Agents = drafts.

**Q: Brand guidelines?**  
A: Upload files or paste into instructions.

**Q: Share with team?**  
A: Check Agent Builder docs for options.

**Q: Data privacy?**  
A: Review AI provider terms.

Note: Privacy is often the biggest concern. Address it directly.

---

<!-- CLOSING -->

# You're Ready 🚀

**You have:**

✅ The tools  
✅ The knowledge  
✅ The templates  
✅ The agent

Note: This is just the start. Real learning happens when you build.

---

## Start This Week

**One Task**  
**One Template**  
**One Agent**

<span class="brand">**Go automate**</span>

Note: Don't wait. Build something this week. Share results.

---

# Thank You! 🎉

**Session 2 Complete**

🌐 [w4ester.github.io/session2](https://w4ester.github.io/session2/)  
📁 [github.com/w4ester/session2](https://github.com/w4ester/session2)

*Build smarter, not harder*

Note: Thank them. Remind them the site has everything. They can revisit anytime. Stay available for questions.
