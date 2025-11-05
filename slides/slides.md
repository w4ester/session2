# 🤖 Session 2: AI Agents for Marketing Teams

### Build Your First Custom Marketing Agent (No Code Required)

**What You'll Build:**  
A custom AI assistant that understands your brand, automates repetitive tasks, and delivers consistent results across campaigns.

---

## Session Overview

**75 Minutes | Hands-On | Immediately Applicable**

1. **LLM Foundations** (15 min) - Tokens, context, and costs
2. **Prompt Engineering** (20 min) - Write better prompts, get better results
3. **Reusable Templates** (15 min) - Build once, use everywhere
4. **Live Agent Build** (20 min) - Create your marketing agent
5. **Deploy & Scale** (5 min) - Next steps for your team

> 💡 **Session Goal:** You'll leave with a working marketing agent and reusable prompt templates.

---

## Why This Matters

### Traditional Workflow:
- Draft → Review → Revise → Approve → Publish
- 2-3 hours per campaign asset
- Inconsistent brand voice

### With AI Agents:
- Generate → Refine → Publish
- 20-30 minutes per asset
- Consistent, on-brand output

**ROI:** 5-10 hours saved per week on content creation

---

## Part 1: Understanding Tokens

### What Are Tokens?

LLMs read text as **tokens** (chunks of ~4 characters).

**Why This Matters:**
- 💰 **Cost:** You pay per token (~$0.03 per 1,000 tokens)
- 🧠 **Limits:** Most models cap at 8k-128k tokens
- ⏱️ **Speed:** More tokens = slower responses

### Live Demo

🧩 **Try it:** [Tokenization Visualizer](https://w4ester.github.io/session2/#tokenization)

**Example:**
```
"Marketing AI automates repetitive writing tasks efficiently."
```

**Result:** 12 tokens (including spaces and punctuation)

### Exercise Prompt:
```
Explain how token limits affect the length of campaign briefs I can analyze in a single prompt.
```

---

## Part 2: Prompt Engineering

### The Four Principles

**1. Be Specific**
- Define format, length, and tone
- Specify your audience

**2. Provide Context**
- Background information
- Constraints and requirements

**3. Use Examples**
- Show the style you want
- Include good and bad examples

**4. Break It Down**
- Complex tasks → simple steps
- Use numbered instructions

---

### Before & After

#### ❌ Basic Prompt:
```
Write a social media post about our new product.
```

#### ✅ Engineered Prompt:
```
Write a LinkedIn post announcing our AI-powered marketing analytics dashboard.

Target Audience: Marketing managers at mid-size B2B companies
Key Benefit: Saves 5+ hours/week on manual reporting
Tone: Professional but approachable
Length: 150 words
Include: One measurable benefit, one question for engagement, 3 hashtags
CTA: "Book a demo"
```

**Result:** 300% better engagement, 50% less revision time

---

### Your Turn: Prompt Workshop

**🧩 Activity:** [Prompt Quality Checker](https://w4ester.github.io/session2/#prompting)

**Challenge:**
Improve this prompt:
```
Write an email promoting our analytics dashboard.
```

**Add:**
- Who is the audience?
- What's the key benefit?
- What action should they take?
- What tone/voice?
- How long?

---

## Part 3: Prompt Templates

### Why Templates Beat One-Offs

| One-Off Prompts | Templates |
|----------------|-----------|
| Inconsistent results | Reliable quality |
| Can't scale | Share across team |
| Reinvent each time | Use immediately |
| No best practices | Embedded expertise |

---

### Template Anatomy

**1. Variables** (customizable)
```
{product_name}, {audience}, {key_benefit}, {cta}
```

**2. Instructions** (what to do)
```
"Write a [content_type] for [audience] highlighting [benefit]"
```

**3. Structure** (format)
```
"Use 3 bullet points, include 1 statistic, end with a question"
```

**4. Examples** (show don't tell)
```
"Good example: [paste sample]"
```

---

### Build a Template

**🧩 Activity:** [Template Generator](https://w4ester.github.io/session2/#templates)

**Example Template:**
```
# Campaign Summary Template

Create a weekly campaign report for {date_range}.

Format:
📊 Performance Overview
- {top_performing_channel}: {metric}
- {second_channel}: {metric}

💡 Key Insights
- [What worked well]
- [What needs adjustment]

🎯 Next Week's Focus
- [Top priority]
- [Quick win opportunity]

Tone: Data-driven but conversational
Length: 200-300 words
```

**→ Download as .md → Share with team → Reuse weekly**

---

## Part 4: AI Agents Explained

### What's an Agent?

**Simple Chatbot:**
```
Input → LLM → Output
```

**AI Agent:**
```
Input → LLM + Tools + Memory + Planning → Better Output
```

**Components:**
- 🧠 **LLM:** The brain (reasoning)
- 🔧 **Tools:** Web search, file analysis, calculations
- 💾 **Memory:** Conversation history, brand guidelines
- 🎯 **Planning:** Break tasks into steps

---

### Marketing Agent Use Cases

#### Content Creation:
- Draft email campaigns with A/B variants
- Generate social posts optimized per platform
- Create ad copy matching brand voice

#### Analysis:
- Summarize campaign performance from CSVs
- Competitor content analysis
- Trend identification from web research

#### Workflow Automation:
- Content calendar management
- SEO optimization suggestions
- First-draft creation for review

⚠️ **Rule:** Always review AI outputs before publishing

---

## Part 5: Build Your Agent (Live Demo)

### No-Code Agent Builder

**Tool:** [OpenAI Agent Builder](https://platform.openai.com/docs/guides/agent-builder)

### Steps:

**1. Name It:** "Campaign Companion" or "Brand Voice Assistant"

**2. Define Purpose:**
```
You are a marketing assistant for [Company Name].
You help draft, review, and optimize campaign content.
You understand our brand voice: [professional/casual/witty].
Always include measurable benefits and clear CTAs.
```

**3. Add Tools:**
- ✅ Web Browsing (competitor research)
- ✅ Data Analysis (CSV uploads)
- ✅ DALL-E (visual concepts)

**4. Test & Iterate:**
```
Create 3 LinkedIn posts announcing our new analytics feature.
Each should:
- Highlight time savings (5+ hours/week)
- Use a different angle (ROI/ease-of-use/team collaboration)
- Include engagement question
- Stay under 150 words
```

**5. Share:** Generate link → Team uses the same agent

---

### Agent Architecture

```
Your Request
    ↓
AI Planning Layer (breaks down task)
    ↓
Tool Selection (web, files, calculations)
    ↓
Content Generation
    ↓
Quality Check (against instructions)
    ↓
Refined Output → You
```

---

## Quick Reference: Best Prompts

### Tokenization Analysis:
```
Tokenize this sentence and explain each token:
"Our AI assistant helps marketers build smarter campaigns faster."
```

### Prompt Improvement:
```
Improve this prompt for a marketing email:
[paste basic prompt]

Add: audience, tone, length, structure, examples, and CTA.
```

### Template Creation:
```
Create a reusable prompt template for [task type].
Variables: {var1}, {var2}, {var3}
Include: format instructions, tone guidance, length specs.
```

### Agent Task:
```
Analyze the attached campaign CSV.
Provide: top 3 performers, bottom 2, one actionable insight per channel.
Format as a 250-word memo for the CMO.
```

---

## Key Takeaways

### ✅ You Now Know:

1. **Tokens = Cost + Speed**  
   Write efficient prompts to save money and time

2. **Four Principles = Better Prompts**  
   Specificity, context, examples, structure

3. **Templates = Scalability**  
   Build once, reuse across campaigns

4. **Agents = Automation**  
   Combine LLMs + tools for complex workflows

5. **No Code = No Excuses**  
   Anyone can build custom AI assistants

---

## Your Next 3 Actions

### This Week:
1. Build one agent for your most repetitive task
2. Create 2-3 templates for common workflows
3. Test, document results, share with team

### Metrics to Track:
- ⏱️ Time saved per task
- 🔄 Revision cycles reduced
- ✅ Team adoption rate

**Share Back:**
What worked? What didn't? Iterate together.

---

## Resources & Tools

### 🌐 Workshop Hub
**[w4ester.github.io/session2](https://w4ester.github.io/session2/)**

- Tokenization Visualizer
- Prompt Quality Checker
- Template Generator
- All Slides & Examples

### 🛠️ Build Tools

- [OpenAI Agent Builder](https://platform.openai.com/docs/guides/agent-builder)
- [Claude Projects](https://claude.ai) (alternative)
- [GitHub Repository](https://github.com/w4ester/session2)

### 📖 Learn More

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Library](https://docs.anthropic.com/prompts)

---

## Frequently Asked Questions

**Q: What if my agent makes mistakes?**  
A: Always review before publishing. Use agents for first drafts, you provide final approval.

**Q: Can I use this with our brand guidelines?**  
A: Yes! Upload guidelines as files or paste into agent instructions.

**Q: How do I share agents with my team?**  
A: Agents built with OpenAI Agent Builder can be shared via API or integrated into your workflows. Check the [Agent Builder documentation](https://platform.openai.com/docs/guides/agent-builder) for deployment options.

**Q: What about data privacy?**  
A: Check your AI provider's terms. For sensitive data, use on-premise solutions.

**Q: Do I need coding skills?**  
A: No! This entire workshop uses no-code tools. If you can write a prompt, you can build an agent.

**Q: How much does this cost?**  
A: OpenAI Agent Builder pricing varies by usage. Check [OpenAI's pricing page](https://openai.com/pricing) for current rates. Claude Projects is included with Claude Pro ($20/month).

---

## Start Building Today

**You have the tools.**  
**You have the knowledge.**  
**You have the templates.**

**Now go automate your workflow.**

🚀 **Your AI-powered marketing team starts now.**

---

## About This Workshop

**Session 2 of the LLM Workshop Series**  
Created for non-technical marketers, strategists, and creative professionals.

**Facilitator Resources:**
- All slides are self-contained
- No prior setup required
- Interactive demos hosted on GitHub Pages
- Reusable prompt library included

**Workshop Site:** [w4ester.github.io/session2](https://w4ester.github.io/session2/)  
**GitHub:** [github.com/w4ester/session2](https://github.com/w4ester/session2)

---

**License:** MIT  
**Contributions:** Welcome! Open an issue or PR.

---

**Session 2 Complete** ✅

*Build smarter, not harder — your AI-powered marketing workflow starts now!*
