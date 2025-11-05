Session 2: Boost Your Marketing Team’s Productivity with Custom GPTs & Agents
# LLM Workshop for Marketers

### Objective
Build a chatbot that speaks your language, understands your business, and boosts productivity.

---

## Agenda

- From Novice to Comfortable: Understanding LLMs  
- Tokenization: what are tokens and why they matter  
- Prompt Engineering: principles & examples  
- Prompt Templates: reusable scaffolds  
- Intro to Agents: tools, memory, and planning  
- **New! Build a No-Code Marketing Agent**  
- Hands-on activities & resources  

---

## Audience

Non-technical marketers who want practical, real-world applications.

---

## Understanding Tokenization

LLMs read **tokens** (subwords), not full words.  
Token counts affect:

- 💰 Cost (providers bill by token)  
- 🧠 Context window limits  
- ⏱️ Latency and truncation risk  

**Hands-on:** Try the *Tokenization Visualizer* on the workshop site.

---

## Demo: Tokenizing a Message

Example:  
`Hello world! How are marketing campaigns optimized with AI?`

🧩 See total tokens  
🔍 Inspect token pieces  
💬 Toggle a chat wrapper to observe overhead  

---

## Prompt Engineering Basics

### Four Principles
1. **Be specific and clear** – tone, format, length, audience  
2. **Provide context** – background and constraints  
3. **Use examples** – few-shot prompting  
4. **Break complex tasks** – step-by-step guidance  

---

## Prompt Comparison

**Basic**
Write a social media post about our new product.


**Engineered**
Write a LinkedIn post about our new AI-powered marketing analytics dashboard
that helps marketing teams track campaign performance in real time.

The post should:

Be professional but conversational

Highlight the key benefit of saving 5+ hours/week on reporting

Include a question to encourage engagement

Be around 150 words

Include 3 relevant hashtags



---

## Try It Yourself

💡 Open the “Prompt Quality Check” on the workshop site.  
- Paste your improved prompt  
- Aim for **8+/10** by adding audience, tone, format, length, and examples  

---

## Prompt Templates

### Why Templates?
- ✅ Consistency across teams  
- ⚡ Faster iteration  
- 🧱 Built-in best practices  

**Template Components**
- Variables  
- Instructions  
- Structure  
- Examples  

---

## Exercise

🧩 Generate an *Email Subject Line* template on the workshop site.  
📥 Download it as `.md` and share with your team.

---

## Introduction to AI Agents

Agents = **LLM + tools + memory + planning + feedback loops**

Marketing use cases:
- 📅 Content Calendar Manager  
- 🕵️ Competitive Monitor  
- 💌 Personalization Engine  
- ✍️ Ad Copy Optimizer  

⚠️ Always review agent outputs before publishing.

---

## Concept Diagram

(See “Introduction to AI Agents” diagram on the workshop site.)

---

## 🧠 NEW: Build a No-Code Marketing Agent

### OpenAI Agent Builder Demo

🧩 Create your own **Marketing Assistant** without code!

**Steps:**
1. Open [OpenAI Agent Builder ↗](https://chat.openai.com/create)  
2. Click **+ Create** and name your agent  
3. Add clear **instructions** (“Draft social posts and summarize ad results”)  
4. Optionally enable **Web Browsing** or **File Upload**  
5. Save, test, and share your agent with your team  

---

### Demo Checklist

✅ Demo OpenAI account ready  
✅ Slides or screen recording of Agent Builder  
✅ Example prompt: *“Create 3 LinkedIn post options promoting our new analytics feature.”*  
✅ Example result: Copy generation + performance summary  

---

### Concept Flow (No-Code Agent Builder)

```mermaid
flowchart LR
  Marketer([Marketer 🧑‍💼]) --> Builder["🧩 OpenAI Agent Builder"]
  Builder --> Config[Define purpose & instructions]
  Builder --> Tools[Add tools<br/>Browsing · File Upload · APIs]
  Tools --> Test[Test & Iterate]
  Test --> Launch[🚀 Live Marketing Agent]
  Launch --> Results[📊 Generates Campaign Copy<br/>Analyzes Ad Performance]


Wrap-Up

You learned:

Tokenization essentials

Prompting principles

Template building

Agent fundamentals

No-Code Agent creation

Next Steps

Pick one workflow this week and apply a template.

Experiment with the Agent Builder.

Iterate based on real campaign results.

Resources

🌐 Workshop site (repo root)

🖥️ Slides (this folder)

📄 Downloadable prompt templates

💬 Feedback welcome!
