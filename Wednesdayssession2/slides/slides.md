# Build Your LinkedIn Post GPT

**Live Build Session**

<div class="metadata">
<strong>Duration:</strong> 40 Minutes | Follow Along or Build With Me Today<br><br>
<strong>What we're building:</strong> We will build a custom GPT that writes LinkedIn posts for LinkedIn ... and maybe a specail suprise ...<br>
<strong>Your result:</strong> Create and publish LinkedIn posts in seconds
</div>

### Today's Flow:
- ✅ **Part 1:** Build Custom GPT (15 min)
- ✅ **Part 2:** Create Post for LinkedIn (10 min) - Our Custom GPT ouput from our chat
- ✅ **Part 3:** Make Some Updates to LinkedIn Custom GPT (5 min) - will test live to show it is working
- 🎉 **Part 4:** A WOW ... (10 min) - Demo Action for Custom GPT

**⚠️ Before we start:** Make sure you have ChatGPT Plus ($20/month) and can access [chatgpt.com/gpts/editor](https://chatgpt.com/gpts/editor)

Note: This is fully hands-on. No sitting back. Everyone is building RIGHT NOW.

---

## Slide 1: The LinkedIn Problem
### ⏱️ 3 minutes

**How much time do you and/or team spend on social media content (e.g., LinkedIn)?**

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
<div>

### The Time Drain:
- Scrolling social feed: **20 min**
- Writing and rewriting: **30 min/post**
- Editing for LinkedIn format: **10 min/post**
- Actually posting: **5 min**

**Total: 65 minutes per post**

**3 posts/week = 3+ hours**

</div>
<div>

### Today's Solution:
Build a Custom GPT that:
- ✅ Writes posts in YOUR voice
- ✅ Follows LinkedIn best practices
- ✅ Actually POSTS for you
- ✅ Takes 2 minutes start to finish

**Result: 65 minutes → 2 minutes**

</div>
</div>

Note: PRESENTER: Ask the room - "Raise your hand if LinkedIn content takes too long." Pause. "By the end of this session, you'll go from idea to published post in 2 minutes." Start the timer - we have 40 minutes.

---

## Slide 2: Open GPT Editor Together
### ⏱️ 2 minutes

<div style="font-size: 0.85em;">

### 🚨 Let's Build Or Watch (remember all we do today is shared with you ... to reference)

</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">

<div>

- **Step 1:** Open a new tab
- **Step 2:** Go to: **[chatgpt.com/gpts/editor](https://chatgpt.com/gpts/editor)**
- **Step 3:** You should see a split screen:
  - Left side: Configuration panel
  - Right side: Preview chat

<div style="background: #fff3cd; padding: 1rem; margin-top: 1.5rem; border-radius: 8px; font-size: 0.75em;">

**⚠️ If you see "Upgrade to Plus":**

You need ChatGPT Plus to continue. Sign up at [chat.openai.com/plus](https://chat.openai.com/plus) ($20/month)

**Backup Plan:** Take detailed notes and build it after the workshop.

</div>

<div style="background: #d1ecf1; padding: 1rem; margin-top: 1rem; border-radius: 8px; font-size: 0.75em;">

**✅ Success Check:**

Click thumbs up or in chat thumbs up to Mo to show you all are all good and see your GPT Editor interface.

</div>

</div>

<div>

<img src="../assets/gpt-editor-interface.png" alt="GPT Editor Interface" style="max-width: 100%; max-height: 500px; margin: 0 auto; display: block;" />

</div>

</div>

Note: PRESENTER: "I'm screen sharing my GPT Editor now. Your screen should look exactly like mine. If it doesn't, raise your hand and someone will help you." Wait. "Okay, we're going to build this together. Everyone types what I type, when I type it. Stay with me."

---

## Slide 3: Choose Your Template & Name It
### ⏱️ 3 minutes

### Choose your version to best match your role(s)

<div class="template-cards-container">

<!-- CEO Template Card -->
<div id="card-ceo" class="template-card" onclick="toggleCard('card-ceo')">
  <div class="template-card-header">📊 CEO</div>
  <div class="template-card-role">For: Executives, Founders</div>
  <div class="template-card-content">
    <div class="template-field">
      <div class="template-field-label">Name:</div>
      <div class="template-field-value">Executive Communication Assistant</div>
      <button id="copy-ceo-name" class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Executive Communication Assistant', 'copy-ceo-name')">Copy Name</button>
    </div>
    <div class="template-field">
      <div class="template-field-label">Description:</div>
      <div class="template-field-value">Drafts executive communications (board updates, all-hands emails, investor memos, LinkedIn posts) in your leadership voice. Maintains strategic tone, ensures clarity, and aligns with company values.</div>
      <button id="copy-ceo-desc" class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Drafts executive communications (board updates, all-hands emails, investor memos, LinkedIn posts) in your leadership voice. Maintains strategic tone, ensures clarity, and aligns with company values.', 'copy-ceo-desc')">Copy Description</button>
    </div>
  </div>
</div>

<!-- Marketing Template Card -->
<div id="card-marketing" class="template-card" onclick="toggleCard('card-marketing')">
  <div class="template-card-header">📈 Marketing</div>
  <div class="template-card-role">For: Marketing Professionals</div>
  <div class="template-card-content">
    <div class="template-field">
      <div class="template-field-label">Name:</div>
      <div class="template-field-value">Campaign Brief Generator</div>
      <button id="copy-marketing-name" class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Campaign Brief Generator', 'copy-marketing-name')">Copy Name</button>
    </div>
    <div class="template-field">
      <div class="template-field-label">Description:</div>
      <div class="template-field-value">Creates comprehensive marketing campaign briefs with audience insights, messaging strategy, channel recommendations, success metrics, and timeline. Saves 1-2 hours per brief while ensuring consistency and data-driven decisions.</div>
      <button id="copy-marketing-desc" class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Creates comprehensive marketing campaign briefs with audience insights, messaging strategy, channel recommendations, success metrics, and timeline. Saves 1-2 hours per brief while ensuring consistency and data-driven decisions.', 'copy-marketing-desc')">Copy Description</button>
    </div>
  </div>
</div>

<!-- AI Enthusiast Template Card -->
<div id="card-ai" class="template-card" onclick="toggleCard('card-ai')">
  <div class="template-card-header">🤖 AI Enthusiast</div>
  <div class="template-card-role">For: Tech Practitioners</div>
  <div class="template-card-content">
    <div class="template-field">
      <div class="template-field-label">Name:</div>
      <div class="template-field-value">AI Implementation Advisor</div>
      <button id="copy-ai-name" class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('AI Implementation Advisor', 'copy-ai-name')">Copy Name</button>
    </div>
    <div class="template-field">
      <div class="template-field-label">Description:</div>
      <div class="template-field-value">Helps explore AI use cases, evaluate tools, create implementation roadmaps, and calculate ROI. Combines technical knowledge with practical business advice for successfully adopting AI in your organization.</div>
      <button id="copy-ai-desc" class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Helps explore AI use cases, evaluate tools, create implementation roadmaps, and calculate ROI. Combines technical knowledge with practical business advice for successfully adopting AI in your organization.', 'copy-ai-desc')">Copy Description</button>
    </div>
  </div>
</div>

</div>

✅ **Success Check:** Name and Description pasted in your GPT Editor

Note: PRESENTER: "Click your role - CEO, Marketing, or AI. Card expands. Click Copy Name, paste in GPT Editor. Click Copy Description, paste in GPT Editor. Your choice saves automatically for the next slide."

---

## Slide 4: Copy Instructions (The Brain of Your GPT)
### ⏱️ 5 minutes

<div style="font-size: 0.8em; margin-bottom: 0.5rem;">Your choice pre-loaded - click card to expand</div>

<!-- Template Accordion Cards -->
<div class="template-cards-container">

<!-- CEO Template Card -->
<div id="card-slide4-ceo" class="template-card" onclick="toggleCard('card-slide4-ceo')">
  <div class="template-card-header">📊 CEO: Executive Communication Assistant</div>
  <div class="template-card-content">

<button id="copy-ceo-instructions" class="copy-btn" style="font-size: 1em; padding: 0.75rem 1.5rem; margin: 1rem 0;" onclick="copyTemplateInstructions('ceo')">📋 Copy Instructions</button>

<div class="instructions-container">
<div class="instructions-text">You are an Executive Communication Assistant for a CEO.

YOUR ROLE:
- Draft executive communications that are clear, strategic, and authentic
- Match the executive's voice and leadership style
- Ensure messaging aligns with company values and strategic priorities
- Maintain professionalism while being approachable

COMMUNICATION TYPES:
1. All-Hands Emails - Company-wide updates
2. Board Updates - Quarterly performance, strategic initiatives
3. Investor Memos - Financial performance, market positioning
4. LinkedIn Posts - Thought leadership, company milestones
5. Internal Announcements - Policy changes, organizational updates

WRITING PRINCIPLES:
- Lead with "why" before "what"
- Be transparent about challenges, not just wins
- Recognize team contributions specifically
- Connect tactical updates to strategic vision
- Keep messages concise
- Use active voice and clear language

TONE: Professional but not corporate-speak, confident without being arrogant, transparent, empathetic, forward-looking

WHAT TO AVOID: Jargon, passive voice, vague statements, overpromising

PROCESS: Ask about communication type → Request key points → Confirm tone → Draft message → Provide subject options → Explain framing</div>
</div>

<div style="font-size: 0.75em; font-weight: 600; margin-top: 0.25rem; margin-bottom: 0.25rem;">Conversation Starters:</div>

<div class="starter-item">
"Draft an all-hands email about our Q4 results and 2025 strategy"
<button class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Draft an all-hands email about our Q4 results and 2025 strategy', this.id)" style="float: right;">Copy</button>
</div>

<div class="starter-item">
"Create a LinkedIn post about leadership lessons from a recent challenge"
<button class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Create a LinkedIn post about leadership lessons from a recent challenge', this.id)" style="float: right;">Copy</button>
</div>

  </div>
</div>
<!-- End CEO Card -->

<!-- Marketing Template Card -->
<div id="card-slide4-marketing" class="template-card" onclick="toggleCard('card-slide4-marketing')">
  <div class="template-card-header">📈 Marketing: Campaign Brief Generator</div>
  <div class="template-card-content">

<button id="copy-marketing-instructions" class="copy-btn" style="font-size: 1em; padding: 0.75rem 1.5rem; margin: 1rem 0;" onclick="copyTemplateInstructions('marketing')">📋 Copy Instructions</button>

<div class="instructions-container">
<div class="instructions-text">You are a Campaign Brief Generator for marketing teams.

YOUR ROLE:
- Create comprehensive, actionable marketing campaign briefs
- Use data-driven insights and past campaign learnings
- Ensure consistency with brand voice and positioning
- Include specific, measurable success metrics

REQUIRED BRIEF STRUCTURE:
1. Executive Summary (2-3 sentences)
2. Campaign Objectives (SMART goals with KPIs)
3. Target Audience (demographics, psychographics, behaviors)
4. Key Messaging (value prop, proof points, differentiation)
5. Channel Strategy (recommended channels, budget allocation)
6. Content Requirements (asset list, quantities, creative direction)
7. Success Metrics (primary/secondary KPIs, measurement plan)
8. Timeline & Milestones (phases, dates, responsibilities)
9. Budget & Resources (breakdown, team, vendors/tools)
10. Risk Mitigation (challenges, contingency plans)

PROCESS: Ask about goal → audience → budget → timeline → channels → Generate brief → Reference past campaigns → Include actionable recommendations

TONE: Professional but conversational, data-driven, action-oriented, strategic but practical

WHAT TO AVOID: Vague objectives, generic descriptions, overly optimistic projections, missing details, buzzwords</div>
</div>

<div style="font-size: 0.75em; font-weight: 600; margin-top: 0.25rem; margin-bottom: 0.25rem;">Conversation Starters:</div>

<div class="starter-item">
"Create a brief for Q2 product launch targeting enterprise buyers"
<button class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Create a brief for Q2 product launch targeting enterprise buyers', this.id)" style="float: right;">Copy</button>
</div>

<div class="starter-item">
"Generate a campaign brief for our summer sale (existing customers)"
<button class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Generate a campaign brief for our summer sale (existing customers)', this.id)" style="float: right;">Copy</button>
</div>

  </div>
</div>
<!-- End Marketing Card -->

<!-- AI Template Card -->
<div id="card-slide4-ai" class="template-card" onclick="toggleCard('card-slide4-ai')">
  <div class="template-card-header">🤖 AI: AI Implementation Advisor</div>
  <div class="template-card-content">

<button id="copy-ai-instructions" class="copy-btn" style="font-size: 1em; padding: 0.75rem 1.5rem; margin: 1rem 0;" onclick="copyTemplateInstructions('ai')">📋 Copy Instructions</button>

<div class="instructions-container">
<div class="instructions-text">You are an AI Implementation Advisor helping organizations successfully adopt AI.

YOUR EXPERTISE:
- Identifying high-value AI use cases
- Evaluating AI tools and platforms
- Creating practical implementation roadmaps
- Calculating ROI and building business cases
- Navigating technical and organizational challenges

WHAT YOU HELP WITH:
1. Use Case Discovery (audit processes, prioritize by impact vs effort, identify quick wins)
2. Tool Evaluation (compare platforms, build vs buy, security/privacy, total cost of ownership)
3. Implementation Planning (pilot → rollout → scale, technical requirements, training, metrics)
4. ROI Calculation (time savings, cost savings, revenue impact, implementation costs)
5. Best Practices (data quality, prompt engineering, fine-tuning vs prompting, security)

YOUR APPROACH: Understand context → Assess readiness → Recommend approach → Provide specifics → Plan mitigation

TONE: Technical but accessible, practical not academic, honest about limitations, realistic, encouraging without overhyping

WHAT TO AVOID: Overpromising, recommending AI where simpler solutions exist, generic advice, ignoring costs/risks, buzzwords

DECISION FRAMEWORKS:
- When to use AI: ✅ Repetitive tasks, pattern recognition, content generation, data analysis | ❌ Life-or-death decisions, true creativity/empathy, insufficient data
- Build vs Buy: Buy (APIs) for most use cases | Build (fine-tune) for specialized domains, sensitive data, high volume

ALWAYS INCLUDE: Tool recommendations, cost estimates, timelines, required skills, success metrics, common pitfalls</div>
</div>

<div style="font-size: 0.75em; font-weight: 600; margin-top: 0.25rem; margin-bottom: 0.25rem;">Conversation Starters:</div>

<div class="starter-item">
"Help me identify the top 3 AI use cases for our marketing team"
<button class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Help me identify the top 3 AI use cases for our marketing team', this.id)" style="float: right;">Copy</button>
</div>

<div class="starter-item">
"Create an implementation roadmap for AI-powered content generation"
<button class="copy-btn" onclick="event.stopPropagation(); copyToClipboard('Create an implementation roadmap for AI-powered content generation', this.id)" style="float: right;">Copy</button>
</div>

  </div>
</div>
<!-- End AI Card -->

</div>
<!-- End Template Cards Container -->

Note: PRESENTER: "Click a card to expand it. Your Slide 3 choice is already expanded. Copy Instructions button, paste in GPT Editor. Copy conversation starters if you want. Click another card to switch templates."

---

## Slide 5: Skip Knowledge for Now
### ⏱️ 1 minute

### We're skipping this to save time (you can add later)

<div style="background: #d1ecf1; padding: 1.5rem; border-radius: 8px;">

### Knowledge Files (Optional):
You can upload past LinkedIn posts, brand guidelines, or writing samples to make the GPT match your voice even better.

**For today:** I will just add a few documents for best practices for posting on social media

**After the workshop:** Upload 5-10 of your best LinkedIn posts to fine-tune the voice.

</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">

<div style="background: #f8f9fa; padding: 1rem; border-radius: 8px;">

### What You COULD Upload:
- Past LinkedIn posts (PDF/text)
- Brand voice guidelines
- Company one-pager
- Your resume/bio

</div>

<div style="background: #f8f9fa; padding: 1rem; border-radius: 8px;">

### Why We're Skipping:
- ⏱️ Saves 10 minutes
- ✅ GPT works great without it
- 🎯 Want to get to LinkedIn posting
- 📝 Easy to add later

</div>

</div>

Note: PRESENTER: "We're skipping Knowledge uploads today to save time. The GPT will work great without it. You can always add files later to fine-tune the voice. Let's keep moving - we want to get to the LinkedIn posting!"

---

## Slide 6: Enable Capabilities (Quick)
### ⏱️ 2 minutes

### Just check these two boxes:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">

<div style="background: #d4edda; padding: 1.5rem; border-radius: 8px;">

### ✅ Web Browsing
**Why:** Research current trends for your posts

**Example:**
"Research latest AI news and write a post about it"

</div>

<div style="background: #f8d7da; padding: 1.5rem; border-radius: 8px;">

### ❌ DALL-E & Code Interpreter
**Skip both** - Not needed for LinkedIn posts

(You can enable later if you want)

</div>

</div>

<div style="background: #d1ecf1; padding: 1rem; margin-top: 1rem; border-radius: 8px;">

### ✅ Your checklist:
- ✅ Web Browsing: CHECKED
- ❌ DALL-E: Unchecked
- ❌ Code Interpreter: Unchecked

</div>

Note: PRESENTER: "Scroll to Capabilities. Check Web Browsing. Leave the rest unchecked. That's it." Demo on screen. "Web Browsing lets your GPT research current trends. You don't need image generation or code for LinkedIn posts."

---

## Slide 7: Quick Test (Does It Work?)
### ⏱️ 3 minutes

### Test your GPT right now in the preview chat:

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; font-family: monospace; margin: 2rem 0;">

**Type this:**
```
Write a LinkedIn post about the importance of AI literacy
for business leaders
```

</div>

### What Should Happen:
- ✅ GPT drafts a post in the style you chose (CEO/Marketing/AI)
- ✅ Post is 150-250 words
- ✅ Has a strong hook
- ✅ Ends with a takeaway

Note: PRESENTER: "Everyone type this test prompt in the preview chat on the right." Show on screen. "Hit enter. You should get a LinkedIn post draft back." Demo the result. "See? It wrote a post. Yours should look similar. Everyone got a post? Great. Now here's where it gets cool..."

---

## Slide 8: Add LinkedIn Posting Power 🚀
### ⏱️ 15 minutes

### Now the cool part: Make it actually POST to LinkedIn

<div style="display: grid; grid-template-columns: 300px 1fr; gap: 2rem; align-items: start;">

<!-- Left Column: Step Buttons -->
<div class="step-buttons-container">

<div id="step-btn-1" class="step-button active" onclick="showStep(1)">
  <span class="step-number">1</span> Scroll to "Actions" Section
</div>

<div id="step-btn-2" class="step-button" onclick="showStep(2)">
  <span class="step-number">2</span> Click "Create new action"
</div>

<div id="step-btn-3" class="step-button" onclick="showStep(3)">
  <span class="step-number">3</span> Copy/Paste OpenAPI Schema
</div>

<div id="step-btn-4" class="step-button" onclick="showStep(4)">
  <span class="step-number">4</span> Configure Authentication
</div>

<div id="step-btn-5" class="step-button" onclick="showStep(5)">
  <span class="step-number">5</span> Save Your GPT
</div>

</div>

<!-- Right Column: Step Content -->
<div class="step-content-container">

<!-- Step 1 Content -->
<div id="step-content-1" class="step-content active">

In your GPT Editor, scroll down to **"Actions"** (below Capabilities).

**Note:** PRESENTER: "Scroll down in your GPT Editor. See the Actions section?"

</div>

<!-- Step 2 Content -->
<div id="step-content-2" class="step-content">

Click the **"Create new action"** button.

**Note:** PRESENTER: "Click 'Create new action.'" Show on screen.

</div>

<!-- Step 3 Content -->
<div id="step-content-3" class="step-content">

**Copy the OpenAPI Schema below and paste it into the Schema box in GPT Editor:**

<div style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; max-height: 400px; overflow-y: auto; font-family: 'Courier New', monospace; font-size: 0.75em; margin: 1rem 0;">

```yaml
openapi: 3.1.0
info:
  title: LinkedIn Post Action
  description: Posts content to a LinkedIn profile using the LinkedIn API.
  version: 1.0.0
servers:
  - url: https://api.linkedin.com/v2
paths:
  /ugcPosts:
    post:
      operationId: postToLinkedIn
      summary: Post a message to your LinkedIn profile.
      description: Posts a text-only message to the authenticated user's LinkedIn profile.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - author
                - lifecycleState
                - specificContent
                - visibility
              properties:
                author:
                  type: string
                  description: The URN of the LinkedIn user, e.g. urn:li:person:abcdef123456789
                lifecycleState:
                  type: string
                  enum: [PUBLISHED]
                specificContent:
                  type: object
                  properties:
                    com.linkedin.ugc.ShareContent:
                      type: object
                      properties:
                        shareCommentary:
                          type: object
                          properties:
                            text:
                              type: string
                        shareMediaCategory:
                          type: string
                          enum: [NONE]
                      required:
                        - shareCommentary
                        - shareMediaCategory
                  required:
                    - com.linkedin.ugc.ShareContent
                visibility:
                  type: object
                  properties:
                    com.linkedin.ugc.MemberNetworkVisibility:
                      type: string
                      enum: [PUBLIC]
                  required:
                    - com.linkedin.ugc.MemberNetworkVisibility
      responses:
        '201':
          description: Post created successfully
        '400':
          description: Bad request
        '401':
          description: Unauthorized – invalid token
        '403':
          description: Forbidden – missing permissions
```

</div>

**Note:** PRESENTER: "Here's the complete OpenAPI schema. You can scroll through it. Select all and copy, then paste it into the Schema box in your GPT Editor."

</div>

<!-- Step 4 Content -->
<div id="step-content-4" class="step-content">

Scroll down to **"Authentication"** section:

1. Select **"Bearer"** from dropdown
2. Paste the workshop access token (I'll provide this)
3. Click **"Test"** - you should see "Success"

<div style="background: #d1ecf1; padding: 1rem; margin-top: 1rem; border-radius: 8px; font-size: 0.9em;">

**🔑 Workshop Access Token:**

I'll share this in chat / on screen during the workshop.

**Note:** This is a shared token for testing only. After the workshop, you can set up your own

</div>

</div>

<!-- Step 5 Content -->
<div id="step-content-5" class="step-content">

1. Click **"Update"** or **"Create"** (top right)
2. Choose **"Only me"** for now
3. Click **"Confirm"**

✅ **You now have a LinkedIn-posting GPT!**

**Note:** PRESENTER: "Great! Click Update to save your GPT."

</div>

</div>

</div>

---

## Slide 9: POST TO LINKEDIN! 🎉
### ⏱️ 5 minutes

# 🚀 Time to Post!

Your GPT can now write AND publish to LinkedIn.

---

### Try This Prompt:

```
Write a LinkedIn post about what I'm learning at this AI workshop
and post it to LinkedIn.

My URN is: urn:li:person:YOUR_URN_HERE
```

**Replace YOUR_URN_HERE with your actual URN** (we'll help you get this)

Note: PRESENTER: "Everyone needs their LinkedIn URN. Go to [show method to get URN]. Copy it." Help people get their URNs. "Now go to your GPT. Type the prompt with your URN." Demo on screen. "Watch - it's writing... now asking if I want to post... I say yes... BOOM. Check LinkedIn - it's live!" Show LinkedIn with the new post.

---

## 🔐 Want OAuth Instead? Here's How

<div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 2rem; margin: 1rem 0; align-items: start;">

<!-- Left Column: Instructions -->
<div>

### Quick OAuth Setup (5 Minutes)

**Step 1: LinkedIn App Setup**

Open: **[LinkedIn Developers](https://www.linkedin.com/developers/apps)**

1. Create app → Fill in name, page, logo
2. **Products** tab → Request "Share on LinkedIn" + "Sign In with LinkedIn"
3. **Auth** tab → Add Redirect URL from GPT Editor (see callback URL at bottom of Actions page)

**Step 2: Configure GPT Authentication**

Open: **[GPT Editor](https://chatgpt.com/gpts/editor)**

In **Actions** → **Authentication** → **OAuth**, enter:

<div style="background: #f0f0f0; padding: 0.75rem; border-radius: 6px; font-size: 0.8em; margin: 0.5rem 0;">

**Client ID:** `YOUR_CLIENT_ID_FROM_LINKEDIN`

**Client Secret:** `YOUR_CLIENT_SECRET_FROM_LINKEDIN`

**Authorization URL:**
`https://www.linkedin.com/oauth/v2/authorization`

**Token URL:**
`https://www.linkedin.com/oauth/v2/accessToken`

**Scope:**
`openid profile email w_member_social`

</div>

**Where to get your Client ID & Secret:**
- Go to your LinkedIn app → **Auth** tab
- Copy **Client ID** (looks like: `78abc123xyz`)
- Copy **Client Secret** (click "Show" - looks like: `WPL_AP1.abc...`)

**Step 3: Get Your LinkedIn URN**

**Quick Method (5 minutes):**

1. **Authorize Your App:**
   - Build this URL: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=https://oauth.pstmn.io/v1/callback&scope=openid%20profile%20email%20w_member_social`
   - Replace `YOUR_CLIENT_ID` with your actual Client ID
   - Visit the URL in your browser

2. **Copy the Authorization Code:**
   - After authorizing, you'll be redirected to: `https://oauth.pstmn.io/v1/callback?code=AQT...`
   - Copy the entire URL

3. **Exchange Code for Access Token:**

```bash
curl -X POST https://www.linkedin.com/oauth/v2/accessToken \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "grant_type=authorization_code" \
  --data-urlencode "code=PASTE_CODE_FROM_STEP_2" \
  --data-urlencode "redirect_uri=https://oauth.pstmn.io/v1/callback" \
  --data-urlencode "client_id=YOUR_CLIENT_ID" \
  --data-urlencode "client_secret=YOUR_CLIENT_SECRET"
```

4. **Get Your URN:**

```bash
curl -X GET "https://api.linkedin.com/v2/userinfo" \
  -H "Authorization: Bearer ACCESS_TOKEN_FROM_STEP_3"
```

**Response will look like:**
```json
{
  "sub": "ABC123XYZ",
  "name": "Your Name",
  "email": "you@email.com"
}
```

5. **Build Your URN:**
   - Find the `"sub"` field → Example: `"ABC123XYZ"`
   - Add prefix: `urn:li:person:` + `ABC123XYZ`
   - **Final URN:** `urn:li:person:ABC123XYZ`
   - **This is what you use in your GPT!**

**Easier Option:** Ask your GPT (once OAuth is configured):
*"Get my LinkedIn URN using the OAuth connection"*

</div>

<!-- Right Column: Reference Image -->
<div>

<img src="../assets/chatgpt-post-action-to-linkedin.png" alt="GPT Editor OAuth Configuration" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />

<p style="font-size: 0.75em; color: #666; margin-top: 0.5rem; text-align: center;">OAuth Configuration in GPT Editor</p>

</div>

</div>

---

### 🔑 Important: Copy Your Callback URL!

After adding the action, scroll to the bottom of the Actions page in GPT Editor. You'll see a **Callback URL** like:

`https://chat.openai.com/aip/g-abc123.../oauth/callback`

Copy this EXACT URL and add it to your LinkedIn app's **Auth** → **Redirect URLs**

---

**Note:** You must create your own LinkedIn app and use your own credentials. Go to [LinkedIn Developers](https://www.linkedin.com/developers/apps) to get started.

---

### Let's Check LinkedIn:

Go Linkedin ... and I will post in real time from custom gpt

And post should be live at https://www.linkedin.com/in/w4ester/
