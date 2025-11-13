# Zero‑to‑Post: Set up LinkedIn + Custom GPT Action (Non‑Developer Guide)

*A plain‑English, step‑by‑step checklist with the exact pages to click, so you can let a Custom GPT post to your personal LinkedIn feed after you approve it.*

---

## 🤖 Prompt for LLM (Use This to Get Help!)

**Copy and paste this into ChatGPT, Claude, or any LLM to get step-by-step help:**

```
Help me set up LinkedIn + Custom GPT integration using this guide:
https://w4ester.github.io/session2/linkedin_custom_gpt_posting_setup.md

Please walk me through each step, one at a time. I'll tell you when I'm ready to move to the next step.

Remember: I AM IN CONTROL. I am the creator, the driver, and the thinker.
- If I have a thought or question at any point, STOP and answer it
- If I want to change the style or approach, YOU follow MY direction
- If I want to go deeper or skip ahead, I'm the boss
- Step through WITH me, not FOR me - this is collaborative

I'm currently at: [Step 0 / Step 1 / Step 2 / etc.]

Let's begin!
```

**What this means for YOU (the human):**
- ✅ The LLM will step through as much or as little as you want
- ✅ YOU are in control at all times
- ✅ YOU are the creator, driver, and thinker
- ✅ Have a thought, question, or want a style change? **You're the boss!**
- ✅ Go in any direction of information interaction you choose
- ✅ The LLM is your assistant, not your leader

**Don't be afraid to:**
- "Wait, explain that again differently"
- "Skip this part, I already did it"
- "Go slower here, I'm confused"
- "Show me an example"
- "Let me try this myself first"

**YOU are building this. The LLM is just helping you think through it.**

---

## What you will have at the end

- A **LinkedIn Developer App** that's verified and allowed to post **as you**.
- A **Custom GPT Action** connected to that app via OAuth.
- A **test flow** that: gets your LinkedIn ID via OpenID Connect and publishes a **text post** to your feed.

> **Safety:** The GPT can only post **after you authorize it** on LinkedIn. You can revoke access anytime in LinkedIn → *Settings & Privacy → Data privacy → Other applications → Permitted services*.

---

## 📝 Example Walkthrough (follow along!)

Throughout this guide, we'll follow **Sarah Johnson** as she sets up her LinkedIn posting GPT:

- **Sarah's App Name:** `Sarah's LinkedIn Assistant`
- **Sarah's Company Page:** `Sarah Johnson Consulting` (she created this for her freelance business)
- **Sarah's GPT Name:** `LinkedIn Post Helper`
- **What Sarah wants:** To draft and post LinkedIn updates from her Custom GPT after she approves them

**You'll do the same**, just replace Sarah's names with your own!

---

## Your values (fill in as you go)

| Field | Your Value | Sarah's Example |
|-------|------------|-----------------|
| **LinkedIn App Name** | `_________________` | `Sarah's LinkedIn Assistant` |
| **Company Page Name** | `_________________` | `Sarah Johnson Consulting` |
| **LinkedIn App ID** | `_________________` | `123456789` (appears after you create the app) |
| **GPT Callback URL** | `_________________` | `https://chat.openai.com/aip/g-abc123.../oauth/callback` |
| **Client ID** | `_________________` | (visible in Auth tab) |
| **Client Secret** | `_________________` | **🔒 Keep this private!** |

> **Tip:** Keep a notepad open and fill these in as you go through the steps!

---

## Timeline overview (the order of tasks)

1. **Create or confirm a LinkedIn Page** and Developer app access
2. **Create/verify the LinkedIn Developer App** and associate it with your Page
3. **Add Products (permissions)**: *Sign in with LinkedIn (OIDC)* + *Share on LinkedIn*
4. **Configure OAuth** (Authorization URL, Token URL, Scopes, Redirect URL)
5. **Build the Custom GPT Action** (OpenAPI schema + OAuth in GPT builder)
6. **Authorize and test** (get `userinfo` → create a post)
7. **(Optional) Expand to images/links** later

---

## Step 0 — Prerequisites

### What you need:
- ✅ A personal LinkedIn account (you have this)
- ✅ A **LinkedIn Page** where you are **Admin** (or higher)
- ✅ Access to the **LinkedIn Developer Portal** (same account)

### Do you have a LinkedIn Page?

**Sarah's situation:** Sarah has a personal LinkedIn profile but no Company Page yet.

**Check if you have one:**
1. Go to https://www.linkedin.com/me
2. Click your profile picture → **View Profile**
3. Scroll to **Resources** section → Click **My Company**
4. Do you see any pages listed?
   - ✅ **YES** → You're good! Make sure you're an **Admin**
   - ❌ **NO** → Create one now (takes 2 minutes)

### How to create a Company Page (if you don't have one)

**Sarah creates "Sarah Johnson Consulting":**

1. **Go to:** https://www.linkedin.com/company/setup/new/
2. **Choose page type:** Click **Company**
3. **Fill in the form:**
   - **Page identity → Page name:** `Sarah Johnson Consulting` *(You: your business/personal brand name)*
   - **Company website:** `https://sarahjohnson.com` *(You: your website or LinkedIn profile URL)*
   - **Industry:** Select your industry from dropdown *(Sarah picks: Business Consulting and Services)*
   - **Company size:** `1 employee` *(or your actual size)*
   - **Company type:** `Sole Proprietorship` *(or your type)*
4. **Click:** `Create page` button
5. **You're now the Page Admin!** ✅

**Helpful links:**
- How to create a LinkedIn Page → https://www.linkedin.com/help/linkedin/answer/a543852
- Managing your LinkedIn Page → https://www.linkedin.com/help/linkedin/answer/a542543

> **Why do I need a Page?** LinkedIn requires every Developer App to be associated with a Page for branding/ownership. Don't worry - this does NOT force your posts to go to the Page. You'll still post as yourself!

---

## Step 1 — Create your LinkedIn Developer App

**Sarah creates "Sarah's LinkedIn Assistant":**

### 1.1 Go to LinkedIn Developers

1. **Open:** https://www.linkedin.com/developers/apps
2. **Sign in** with your LinkedIn account (if not already)
3. You'll see the "My apps" page

### 1.2 Create New App

1. **Click** the blue **`Create app`** button (top right)
2. **Fill in the Create an app form:**

| Field | What to enter | Sarah's Example |
|-------|---------------|-----------------|
| **App name** | Your app's name (users won't see this) | `Sarah's LinkedIn Assistant` |
| **LinkedIn Page** | Select YOUR Company Page from dropdown | `Sarah Johnson Consulting` |
| **App logo** | Upload a square image (optional, can skip) | *(Sarah uploads a simple "S" logo)* |
| **Privacy policy URL** | Your website or LinkedIn profile URL | `https://www.linkedin.com/in/sarahjohnson` |
| **Legal agreement** | Check the box to agree | ✅ |

3. **Click** `Create app` button at bottom

### 1.3 Save your App ID

After creating, you'll see your app's dashboard. **Write down your App ID:**

- Look at the URL: `https://www.linkedin.com/developers/apps/123456789/...`
- Sarah's App ID: `123456789` *(You: write yours in the table above!)*

**Direct link to Sarah's app:** https://www.linkedin.com/developers/apps/123456789/settings
**Your app link:** `https://www.linkedin.com/developers/apps/[YOUR_APP_ID]/settings`

> ✅ **Checkpoint:** You now have a LinkedIn Developer App!

---

## Step 2 — Verify your app with your LinkedIn Page

**Why this matters:** LinkedIn needs to confirm you own the Page before letting the app post. This takes 1-2 minutes.

**Sarah verifies "Sarah's LinkedIn Assistant" with "Sarah Johnson Consulting":**

### 2.1 Send Verification Request

1. **Open your app's Settings tab:**
   - Sarah's link: https://www.linkedin.com/developers/apps/123456789/settings
   - Your link: `https://www.linkedin.com/developers/apps/[YOUR_APP_ID]/settings`

2. **Scroll down to "App settings" section**

3. **Find "LinkedIn Page" field:**
   - You should see your Page name already listed (you selected it when creating the app)
   - Sarah sees: `Sarah Johnson Consulting`

4. **Look for verification status:**
   - If it says **"Unverified"** → Click **"Send verification request"** button
   - LinkedIn will send a notification to the Page Admins

5. **Click the button to send the request**

### 2.2 Approve the Verification (as Page Admin)

**You need to approve your own request** (since you're the Page Admin):

**Option A: Approve from LinkedIn Notification (fastest)**
1. **Check your LinkedIn notifications** (bell icon, top right)
2. Look for: *"App verification request from [Your App Name]"*
3. **Click the notification**
4. **Click "Approve"** button
5. Done! ✅

**Option B: Approve from Page Admin Center**
1. **Go to:** https://www.linkedin.com/company/[YOUR_PAGE_NAME]/admin/
   - Sarah's link: https://www.linkedin.com/company/sarah-johnson-consulting/admin/
2. **Look for app verification notification** in the admin dashboard
3. **Click "Review"** → **"Approve"**
4. Done! ✅

### 2.3 Confirm Verification

1. **Go back to your app's Settings tab:** `https://www.linkedin.com/developers/apps/[YOUR_APP_ID]/settings`
2. **Look at "LinkedIn Page" field**
3. **You should see:** ✅ **"Verified"** with a green checkmark and date
   - Sarah sees: *"Verified: Jan 15, 2025"*

**Helpful links:**
- Associate an app with a LinkedIn Page → https://www.linkedin.com/help/linkedin/answer/a548360
- Approve or deny an app verification → https://www.linkedin.com/help/linkedin/answer/a1669245

> ✅ **Checkpoint:** Your app is now verified and connected to your Page!

---

## Step 3 — Add Products (API Permissions)

**What are Products?** These are the permissions your app needs from LinkedIn. You need 2 products to post.

**Sarah adds permissions to "Sarah's LinkedIn Assistant":**

### 3.1 Go to Products Tab

1. **Open your app's Products tab:**
   - Sarah's link: https://www.linkedin.com/developers/apps/123456789/products
   - Your link: `https://www.linkedin.com/developers/apps/[YOUR_APP_ID]/products`

2. **You'll see a list of available LinkedIn Products**

### 3.2 Add Product #1: Sign in with LinkedIn (OIDC)

**Why you need this:** To get your LinkedIn person ID so the app knows who you are.

1. **Find:** "Sign in with LinkedIn using OpenID Connect"
2. **Click:** `Request access` button next to it
3. **Approval:** Usually instant! ✅
4. **What it grants:** `openid`, `profile`, `email` scopes

**More info:** https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2

### 3.3 Add Product #2: Share on LinkedIn

**Why you need this:** To actually post content to your LinkedIn feed.

1. **Find:** "Share on LinkedIn"
2. **Click:** `Request access` button next to it
3. **Approval:** Usually instant! ✅
4. **What it grants:** `w_member_social` scope (permission to post as you)

**More info:** https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/share-on-linkedin

### 3.4 Confirm Both Products Added

1. **Refresh the page:** https://www.linkedin.com/developers/apps/[YOUR_APP_ID]/products
2. **You should see both products with green checkmarks:**
   - ✅ Sign in with LinkedIn using OpenID Connect
   - ✅ Share on LinkedIn

**Sarah's status:**
- ✅ Product 1: Added
- ✅ Product 2: Added
- Ready for Step 4!

> ✅ **Checkpoint:** Your app now has permission to identify you and post on your behalf!

---

## Step 4 — Get Your LinkedIn App Credentials

**Sarah gets her Client ID and Client Secret:**

### 4.1 Go to Auth Tab

1. **Open your app's Auth tab:**
   - Sarah's link: https://www.linkedin.com/developers/apps/123456789/auth
   - Your link: `https://www.linkedin.com/developers/apps/[YOUR_APP_ID]/auth`

### 4.2 Copy Your Client ID

1. **Find:** "Authentication keys" section at the top
2. **See:** `Client ID` field
3. **Copy the value** (looks like: `86a1b2c3d4e5f6`)
   - Sarah's Client ID: `86a1b2c3d4e5f6` *(example)*
   - Your Client ID: `_________________` *(write it in the table at the top!)*

### 4.3 Reveal and Copy Your Client Secret

1. **Find:** `Client Secret` field (right below Client ID)
2. **See:** `••••••••••••••` (hidden by default)
3. **Click:** `Show` link next to it
4. **Copy the revealed value** (looks like: `AbCdEfGh12345...`)
   - **🔒 IMPORTANT:** This is a password! Don't share it publicly!
   - Your Client Secret: `_________________` *(save this somewhere safe!)*

### 4.4 Save These Values

**Keep these handy for Step 5!**

| Credential | Sarah's Example | Your Value |
|------------|-----------------|------------|
| **Client ID** | `86a1b2c3d4e5f6` | `_________________` |
| **Client Secret** | `AbCdEfGh12345...` (🔒 secret!) | `_________________` (🔒 keep safe!) |

**We'll add the Redirect URL in Step 5 after creating the GPT!**

**Helpful docs:** https://platform.openai.com/docs/actions/authentication/oauth

> ✅ **Checkpoint:** You have your LinkedIn app credentials ready for the GPT!

---

## Step 5 — Create Your Custom GPT and Add the Action

**Sarah creates "LinkedIn Post Helper" and connects it to her LinkedIn app:**

### 5.1 Create a New Custom GPT

1. **Go to:** https://chat.openai.com/gpts/editor
2. **You'll see the GPT editor with two tabs:** Configure | Preview
3. **In the "Configure" tab, fill in:**
   - **Name:** `LinkedIn Post Helper` *(Sarah's choice - you can name yours anything!)*
   - **Description:** `Helps me draft and post to LinkedIn after I approve` *(optional)*
   - **Instructions:** *(we'll add this in Step 6)*
   - **Conversation starters:** *(optional - like "Help me write a LinkedIn post")*

### 5.2 Add Action (OpenAPI Schema)

1. **Scroll down in the Configure tab**
2. **Find:** "Actions" section
3. **Click:** `Create new action` button
4. **You'll see:** "Add actions" panel with a schema editor

### 5.3 Paste the OpenAPI Schema

**Copy this entire YAML block and paste it into the schema editor:**

```yaml
openapi: 3.1.0
info:
  title: LinkedIn Member Posting
  version: 1.0.0
servers:
  - url: https://api.linkedin.com
components:
  securitySchemes:
    linkedinOAuth:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://www.linkedin.com/oauth/v2/authorization
          tokenUrl: https://www.linkedin.com/oauth/v2/accessToken
          scopes:
            openid: "OIDC identity"
            profile: "OIDC profile"
            email: "OIDC email"
            w_member_social: "Post as the authenticated member"
  parameters:
    LinkedInVersionHeader:
      name: Linkedin-Version
      in: header
      required: true
      schema: { type: string, default: "202502" } # set to a current YYYYMM
    RestLiHeader:
      name: X-Restli-Protocol-Version
      in: header
      required: true
      schema: { type: string, default: "2.0.0" }
paths:
  /v2/userinfo:
    get:
      operationId: getUserInfo
      summary: Get the current member's LinkedIn person ID (sub).
      security: [{ linkedinOAuth: [openid, profile, email] }]
      responses:
        '200':
          description: OIDC UserInfo
          content:
            application/json:
              schema:
                type: object
                properties:
                  sub: { type: string, description: "Use as urn:li:person:{sub}" }
                  name: { type: string }
                  email: { type: string }
  /rest/posts:
    post:
      operationId: createTextPost
      summary: Create a text-only post on the authenticated member's feed.
      description: "Build author as urn:li:person:{sub} from GET /v2/userinfo"
      security: [{ linkedinOAuth: [w_member_social] }]
      parameters:
        - $ref: "#/components/parameters/LinkedInVersionHeader"
        - $ref: "#/components/parameters/RestLiHeader"
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [author, commentary, visibility, distribution, lifecycleState]
              properties:
                author:
                  type: string
                  example: "urn:li:person:SUB_VALUE"
                commentary:
                  type: string
                visibility:
                  type: string
                  enum: [PUBLIC, CONNECTIONS, LOGGED_IN, CONTAINER]
                  default: PUBLIC
                distribution:
                  type: object
                  properties:
                    feedDistribution:
                      type: string
                      enum: [MAIN_FEED, NONE]
                      default: MAIN_FEED
                    targetEntities:
                      type: array
                      items: { type: string }
                    thirdPartyDistributionChannels:
                      type: array
                      items: { type: "string" }
                lifecycleState:
                  type: string
                  enum: [PUBLISHED]
                  default: PUBLISHED
                isReshareDisabledByAuthor:
                  type: boolean
                  default: false
      responses:
        '201':
          description: Created. New post URN in x-restli-id header.
```

**After pasting, the editor should validate the schema automatically.** ✅

### 5.4 Configure OAuth Settings in the GPT

**Still in the "Add actions" panel:**

1. **Scroll down to "Authentication" section**
2. **Select:** `OAuth` from the dropdown
3. **You'll see OAuth configuration fields. Fill them in:**

| Field | What to enter | Sarah's Example | Your Value |
|-------|---------------|-----------------|------------|
| **Authorization URL** | LinkedIn OAuth authorization endpoint | `https://www.linkedin.com/oauth/v2/authorization` | *(same)* |
| **Token URL** | LinkedIn OAuth token endpoint | `https://www.linkedin.com/oauth/v2/accessToken` | *(same)* |
| **Scope** | Permissions (space-separated) | `openid profile w_member_social email` | *(same - must be exact!)* |
| **Client ID** | From Step 4.2 | `86a1b2c3d4e5f6` | *(your Client ID from Step 4)* |
| **Client Secret** | From Step 4.3 | `AbCdEfGh12345...` (🔒) | *(your Client Secret from Step 4)* |

**⚠️ CRITICAL:** The Scope field must be **exactly**: `openid profile w_member_social email` (with spaces, no commas)

### 5.5 Copy Your GPT's Callback URL

**After entering the OAuth config:**

1. **Look at the bottom of the OAuth section**
2. **You'll see:** "Callback URL" with a long URL like:
   ```
   https://chat.openai.com/aip/g-abc123def456.../oauth/callback
   ```
3. **Click** the copy icon to copy this URL
4. **Save it!** Sarah's looks like: `https://chat.openai.com/aip/g-abc123def456.../oauth/callback`
   - Your callback URL: `_________________` *(write it in the table at the top!)*

### 5.6 Add Callback URL to LinkedIn App (REQUIRED!)

**Now go back to your LinkedIn app to add this callback URL:**

1. **Open your LinkedIn app's Auth tab:**
   - Sarah's link: https://www.linkedin.com/developers/apps/123456789/auth
   - Your link: `https://www.linkedin.com/developers/apps/[YOUR_APP_ID]/auth`

2. **Scroll down to "OAuth 2.0 settings"**

3. **Find:** "Authorized redirect URLs for your app" section

4. **Click:** `Add redirect URL` button (or pencil icon to edit)

5. **Paste your GPT's callback URL** (from Step 5.5):
   - Sarah pastes: `https://chat.openai.com/aip/g-abc123def456.../oauth/callback`
   - You paste: *(your callback URL)*

6. **Click:** `Update` or `Save` button

7. **Confirm:** You see your callback URL listed under "Redirect URLs" ✅

**⚠️ CRITICAL:** The URL must match **character-for-character** or OAuth will fail!

### 5.7 Save Your GPT

1. **Go back to your GPT editor tab**
2. **Click:** `Save` button (top right)
3. **Choose visibility:**
   - `Only me` *(recommended for testing)*
   - Sarah chooses: **"Only me"**

**Sarah's GPT is now saved!** 🎉

> ✅ **Checkpoint:** Your Custom GPT has Actions configured and OAuth linked to your LinkedIn app!

> **Note:** If you prefer the legacy UGC Shares API, you can swap `/rest/posts` for `POST https://api.linkedin.com/v2/ugcPosts` (and drop the `Linkedin-Version` header). For most new builds, **Posts API** is recommended.

---

## Step 6 — Add Instructions to Your GPT

**Sarah adds instructions to tell her GPT how to behave:**

### 6.1 Go to Instructions Field

1. **Open your GPT editor** (if not still open): https://chat.openai.com/gpts/editor/[YOUR_GPT_ID]
2. **Click the "Configure" tab** (left side)
3. **Find:** "Instructions" text box (big empty field near the top)

### 6.2 Copy and Paste These Instructions

**Sarah pastes this into her "LinkedIn Post Helper" GPT:**

```
You are a posting assistant for LinkedIn. Before posting, always:

1) Confirm the exact text of the post and visibility (default PUBLIC).

2) Call GET /v2/userinfo to get `sub`. Build author as urn:li:person:{sub}.

3) Call POST /rest/posts with:
   - author: urn:li:person:{sub}
   - commentary: <confirmed text>
   - visibility: <PUBLIC or CONNECTIONS>
   - distribution.feedDistribution: MAIN_FEED
   - lifecycleState: PUBLISHED

4) After posting, report success with the returned x-restli-id header.

5) Never post without explicit user confirmation. If unsure, ask.
```

**What this does:**
- Tells the GPT to always confirm before posting
- Explains how to get the user's LinkedIn ID (`sub`)
- Shows how to format the POST request correctly
- Ensures safe, confirmation-based posting

### 6.3 Save Your GPT Again

1. **Click:** `Update` or `Save` button (top right)
2. **Confirm:** You see "Saved" confirmation

**Sarah's GPT now knows how to post to LinkedIn!** ✅

> ✅ **Checkpoint:** Your GPT has instructions and is ready to test!

---

## Step 7 — Authorize and Test Your LinkedIn GPT!

**Sarah tests "LinkedIn Post Helper" with a real post:**

### 7.1 Start a Conversation with Your GPT

1. **Go to:** Your GPT (either from the editor or your GPT list)
   - From editor: Click **"View GPT"** button
   - From list: https://chat.openai.com/gpts/mine → Click "LinkedIn Post Helper"

2. **Start a new chat** with your GPT

### 7.2 Ask Your GPT to Connect LinkedIn

**Sarah types this message to her GPT:**

```
Connect my LinkedIn and make a public test post that says
"Hello from my Custom GPT! 🚀 This is my first automated post."
```

**What happens next:**

1. **The GPT will ask you to authorize** (first time only)
2. **You'll see a button:** "Always allow [GPT Name] to access..."
3. **Click the button** → You'll be redirected to LinkedIn

### 7.3 Authorize on LinkedIn

**Sarah sees the LinkedIn OAuth screen:**

1. **LinkedIn shows:** "Sarah's LinkedIn Assistant wants to access your LinkedIn account"
2. **Permissions listed:**
   - ✅ `openid` - Verify your identity
   - ✅ `profile` - Access your profile info
   - ✅ `email` - Access your email address
   - ✅ `w_member_social` - Post content on your behalf

3. **Click:** `Allow` or `Authorize` button

4. **Redirected back to ChatGPT** ✅

### 7.4 Watch the GPT Work

**After authorization, Sarah's GPT automatically:**

1. **Calls GET** `https://api.linkedin.com/v2/userinfo`
   - **Returns:** `{ "sub": "KGWEb2LU1C", "name": "Sarah Johnson", "email": "sarah@..." }`
   - **The GPT now knows:** Sarah's LinkedIn ID is `KGWEb2LU1C`
   - **Builds author:** `urn:li:person:KGWEb2LU1C`

2. **Asks Sarah for confirmation:**
   ```
   I'm ready to post this to your LinkedIn:

   "Hello from my Custom GPT! 🚀 This is my first automated post."

   Visibility: PUBLIC
   Should I proceed?
   ```

3. **Sarah responds:** "Yes, post it!"

4. **Calls POST** `https://api.linkedin.com/rest/posts`
   - **With:** author: `urn:li:person:KGWEb2LU1C`
   - **With:** commentary: "Hello from my Custom GPT! 🚀 This is my first automated post."
   - **With:** visibility: PUBLIC
   - **Returns:** HTTP 201 Created ✅
   - **Returns header:** `x-restli-id: urn:li:share:7234567890123456789`

5. **GPT reports success:**
   ```
   ✅ Posted successfully!
   Post URN: urn:li:share:7234567890123456789

   Check your LinkedIn feed: https://www.linkedin.com/feed/
   ```

### 7.5 Verify on LinkedIn

**Sarah checks her LinkedIn:**

1. **Opens:** https://www.linkedin.com/feed/
2. **Sees:** Her new post at the top! 🎉
3. **Post content:** "Hello from my Custom GPT! 🚀 This is my first automated post."
4. **Posted as:** Sarah Johnson (personal profile)
5. **Visibility:** Public (everyone can see it)

**Success!** ✅✅✅

> ✅ **Checkpoint:** Your Custom GPT is now live and posting to LinkedIn!

### What Just Happened?

**The full flow:**
1. You asked your GPT to post
2. GPT triggered OAuth → you authorized on LinkedIn
3. GPT got your LinkedIn ID via OpenID Connect
4. GPT confirmed the post text with you
5. GPT posted to LinkedIn via the Posts API
6. Post appeared on your personal LinkedIn feed

**From now on:**
- You won't need to re-authorize (token is saved)
- Just ask your GPT to post and confirm
- GPT will handle all the API calls automatically

---

## 🔍 How to Find Your LinkedIn URN (Standalone Guide)

**What is a LinkedIn URN?**
- URN = "Uniform Resource Name" - your unique LinkedIn member ID
- Format: `urn:li:person:XXXXXXXXXX`
- Example: Sarah's URN is `urn:li:person:KGWEb2LU1C`
- **Not a secret!** It's just an identifier, like a username

**When do you need it?**
- When posting to LinkedIn via API (your GPT does this automatically)
- When testing with cURL commands
- When debugging "who am I posting as?"

---

### Method 1: Let Your Custom GPT Get It (Easiest!)

**If your GPT is already set up with OAuth (from Step 7):**

1. **Open your GPT** in ChatGPT
2. **Ask it:** "What's my LinkedIn URN?"
3. **GPT automatically:**
   - Calls `GET https://api.linkedin.com/v2/userinfo`
   - Extracts the `sub` field
   - Returns: "Your URN is `urn:li:person:KGWEb2LU1C`"

**Done!** ✅

---

### Method 2: Use LinkedIn's Token Generator (Manual)

**Sarah uses this method to get her URN manually:**

#### 2.1 Generate a Test Access Token

1. **Go to:** https://www.linkedin.com/developers/tools/oauth/token-generator
2. **Select your app:** `Sarah's LinkedIn Assistant` *(you: select your app)*
3. **Check these 4 scopes:**
   - ✅ `openid`
   - ✅ `profile`
   - ✅ `email`
   - ✅ `w_member_social`
4. **Click:** `Request access token` button
5. **Authorize** on LinkedIn (you'll see permission screen)
6. **Copy the access token** - looks like:
   ```
   AQXNvXt2E7b...xyz123
   ```
   - Sarah's token (example): `AQXNvXt2E7bK1mP9...` *(yours will be different)*

**⚠️ Note:** This token expires in ~60 days. It's just for testing!

#### 2.2 Call the UserInfo Endpoint

**Open your terminal and run:**

```bash
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  https://api.linkedin.com/v2/userinfo
```

**Sarah's example (fake token for demo):**
```bash
curl -H "Authorization: Bearer AQXNvXt2E7bK1mP9..." \
  https://api.linkedin.com/v2/userinfo
```

**Response:**
```json
{
  "sub": "KGWEb2LU1C",
  "name": "Sarah Johnson",
  "given_name": "Sarah",
  "family_name": "Johnson",
  "email": "sarah@example.com",
  "email_verified": true
}
```

#### 2.3 Build Your URN

**Take the `sub` value and format it:**

- **Sarah's `sub`:** `KGWEb2LU1C`
- **Sarah's URN:** `urn:li:person:KGWEb2LU1C`

**Your URN format:**
```
urn:li:person:{YOUR_SUB_VALUE}
```

**Write it down!** You'll use this when posting via API.

---

### Method 3: OAuth Flow (Step-by-Step Exchange)

**For developers who want to understand the full OAuth flow:**

#### 3.1 Get Authorization Code

**Build this URL (replace with your values):**
```
https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=openid%20profile%20w_member_social%20email
```

**Sarah's example:**
```
https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86a1b2c3d4e5f6&redirect_uri=https://chat.openai.com/aip/g-abc123.../oauth/callback&scope=openid%20profile%20w_member_social%20email
```

**Visit this URL in your browser:**
1. You'll log in to LinkedIn
2. You'll see permission screen
3. Click "Allow"
4. LinkedIn redirects you to your callback URL with a `code`:
   ```
   https://chat.openai.com/aip/g-abc123.../oauth/callback?code=AQTxyz123...
   ```
5. **Copy the `code` value**

#### 3.2 Exchange Code for Access Token

```bash
curl -X POST 'https://www.linkedin.com/oauth/v2/accessToken' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'grant_type=authorization_code' \
  --data-urlencode 'code=YOUR_CODE' \
  --data-urlencode 'client_id=YOUR_CLIENT_ID' \
  --data-urlencode 'client_secret=YOUR_CLIENT_SECRET' \
  --data-urlencode 'redirect_uri=YOUR_REDIRECT_URI'
```

**Sarah's example (fake credentials):**
```bash
curl -X POST 'https://www.linkedin.com/oauth/v2/accessToken' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'grant_type=authorization_code' \
  --data-urlencode 'code=AQTxyz123...' \
  --data-urlencode 'client_id=86a1b2c3d4e5f6' \
  --data-urlencode 'client_secret=AbCdEfGh12345...' \
  --data-urlencode 'redirect_uri=https://chat.openai.com/aip/g-abc123.../oauth/callback'
```

**Response:**
```json
{
  "access_token": "AQXNvXt2E7bK1mP9...",
  "expires_in": 5184000,
  "scope": "openid,profile,w_member_social,email"
}
```

#### 3.3 Get UserInfo with Token

```bash
curl -H "Authorization: Bearer AQXNvXt2E7bK1mP9..." \
  https://api.linkedin.com/v2/userinfo
```

**Returns your `sub` → build your URN!**

---

## 📊 Visual: LinkedIn OAuth Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    LinkedIn OAuth 2.0 + OIDC Flow               │
└─────────────────────────────────────────────────────────────────┘

Step 1: User Authorization Request
┌──────────────┐                                    ┌──────────────┐
│   Your GPT   │──────────────────────────────────▶│   LinkedIn   │
│  (ChatGPT)   │  "Please authorize this app"       │    OAuth     │
└──────────────┘   Authorization URL +              └──────────────┘
                   Client ID + Scopes                       │
                                                             │
                                                             ▼
                                               ┌──────────────────────┐
                                               │ User sees permission │
                                               │ screen and clicks    │
                                               │ "Allow"              │
                                               └──────────────────────┘
                                                             │
Step 2: Authorization Code                                   │
┌──────────────┐                                    ┌────────▼──────┐
│   Your GPT   │◀──────────────────────────────────│   LinkedIn    │
│  (ChatGPT)   │  Redirect to callback URL          │               │
└──────────────┘  with code=AQTxyz123...            └───────────────┘
       │
       │
Step 3: Token Exchange
       │
       ▼
┌──────────────┐                                    ┌──────────────┐
│   Your GPT   │──────────────────────────────────▶│   LinkedIn   │
│  (ChatGPT)   │  POST /oauth/v2/accessToken        │  Token API   │
└──────────────┘  Code + Client Secret              └──────────────┘
       │                                                     │
       │                                                     │
       ◀─────────────────────────────────────────────────────┘
         Returns: { "access_token": "AQX...", "expires_in": 5184000 }

Step 4: Get User Info (URN)
┌──────────────┐                                    ┌──────────────┐
│   Your GPT   │──────────────────────────────────▶│   LinkedIn   │
│  (ChatGPT)   │  GET /v2/userinfo                  │  UserInfo    │
└──────────────┘  Authorization: Bearer AQX...      │     API      │
       │                                            └──────────────┘
       │                                                     │
       ◀─────────────────────────────────────────────────────┘
         Returns: { "sub": "KGWEb2LU1C", "name": "Sarah Johnson" }
       │
       │
       ▼
  urn:li:person:KGWEb2LU1C  ← Your LinkedIn URN!

Step 5: Create Post
┌──────────────┐                                    ┌──────────────┐
│   Your GPT   │──────────────────────────────────▶│   LinkedIn   │
│  (ChatGPT)   │  POST /rest/posts                  │   Posts API  │
└──────────────┘  author: urn:li:person:KGWEb2LU1C  └──────────────┘
                  Authorization: Bearer AQX...              │
                  commentary: "Hello LinkedIn!"             │
                                                            │
       ◀─────────────────────────────────────────────────────┘
         Returns: 201 Created
         Header: x-restli-id: urn:li:share:7234567890...
```

---

## 🔧 URN-Specific Troubleshooting

### Problem 1: "Invalid author URN"

**Error message:**
```json
{
  "status": 400,
  "message": "Invalid author URN format"
}
```

**Causes & Fixes:**

| Cause | Wrong Format | Correct Format |
|-------|-------------|----------------|
| Missing `urn:li:person:` prefix | `KGWEb2LU1C` | `urn:li:person:KGWEb2LU1C` |
| Used organization URN instead | `urn:li:organization:123` | `urn:li:person:KGWEb2LU1C` |
| Typo in URN | `urn:li:persons:KGW...` (extra 's') | `urn:li:person:KGWEb2LU1C` |
| Used old member ID format | `id:12345` | `urn:li:person:KGWEb2LU1C` |

**How to fix:**
1. Get fresh URN from `GET /v2/userinfo`
2. Copy the `sub` value exactly
3. Format as: `urn:li:person:{sub}`

---

### Problem 2: "Post appears on Company Page instead of personal profile"

**What happened:**
- You used your Company Page's URN by accident
- Format: `urn:li:organization:123456789`

**How to fix:**
1. Confirm you're using **person URN**, not organization URN
2. Person URN format: `urn:li:person:KGWEb2LU1C`
3. Organization URN format: `urn:li:organization:123456789`
4. Check the `author` field in your POST request

**Sarah's example:**
- ❌ Wrong: `"author": "urn:li:organization:987654321"` → posts to Company Page
- ✅ Correct: `"author": "urn:li:person:KGWEb2LU1C"` → posts to personal profile

---

### Problem 3: "URN doesn't match authenticated user"

**Error message:**
```json
{
  "status": 403,
  "message": "Not authorized to post as this member"
}
```

**Cause:**
- Your access token is for User A
- But you're trying to post as User B's URN

**How to fix:**
1. Make sure the access token and URN are from the **same LinkedIn account**
2. Re-run `GET /v2/userinfo` with your current token to get the correct URN
3. Don't copy someone else's URN - always use your own!

**Sarah's example:**
- Sarah's token → Sarah's `sub` → `urn:li:person:KGWEb2LU1C` ✅
- Sarah's token → Alex's URN → `urn:li:person:DifferentID` ❌ (403 error)

---

### Problem 4: "Can't find my URN - /v2/me returns different ID"

**Issue:**
- You're using the old `/v2/me` endpoint (legacy API)
- Returns `id` field instead of `sub` field

**Difference:**

| Old API (legacy) | New API (OpenID Connect) |
|------------------|---------------------------|
| `GET /v2/me` | `GET /v2/userinfo` |
| Returns: `"id": "12345"` | Returns: `"sub": "KGWEb2LU1C"` |
| Uses `r_liteprofile` scope | Uses `openid profile` scopes |
| ❌ Deprecated | ✅ Current standard |

**How to fix:**
1. Use `GET /v2/userinfo` (not `/v2/me`)
2. Use scopes: `openid profile w_member_social email`
3. Extract the `sub` field (not `id`)
4. Format as: `urn:li:person:{sub}`

---

### Problem 5: "Token Generator doesn't show my app"

**Possible causes:**

1. **App not verified**
   - Solution: Go to Step 2 and verify your app with your LinkedIn Page

2. **Products not added**
   - Solution: Go to Step 3 and add "Sign in with LinkedIn using OpenID Connect"

3. **Wrong LinkedIn account**
   - Solution: Make sure you're logged into the LinkedIn account that owns the app

4. **App was deleted**
   - Solution: Go to https://www.linkedin.com/developers/apps and check if your app exists

---

### Problem 6: "URN works in cURL but not in my GPT"

**Possible causes:**

1. **GPT is using wrong OAuth token**
   - Each user who authorizes the GPT gets their own token
   - You can't hardcode a URN - it must come from `GET /v2/userinfo`

2. **GPT not calling /v2/userinfo first**
   - Solution: Check your GPT Instructions (Step 6)
   - Make sure it says: "Call GET /v2/userinfo to get `sub`"

3. **Scope mismatch**
   - cURL test used different scopes than GPT
   - Solution: Both should use `openid profile w_member_social email`

**Sarah's debugging process:**

1. **Test with cURL** (works ✅):
   ```bash
   curl -X POST 'https://api.linkedin.com/rest/posts' \
     -H "Authorization: Bearer AQXNvXt2E7b..." \
     -H "Linkedin-Version: 202502" \
     -H "X-Restli-Protocol-Version: 2.0.0" \
     -d '{"author": "urn:li:person:KGWEb2LU1C", ...}'
   ```

2. **Test with GPT** (fails ❌):
   - Sarah checks GPT logs
   - Sees: GPT is using hardcoded URN instead of calling `/v2/userinfo`
   - Fix: Update GPT Instructions to call `/v2/userinfo` first

3. **Test again** (works ✅):
   - GPT calls `/v2/userinfo` → gets `sub`
   - GPT builds `urn:li:person:{sub}`
   - GPT posts successfully!

---

## 🎓 Quick Reference: URN Cheat Sheet

```
┌─────────────────────────────────────────────────────────────┐
│                    LinkedIn URN Quick Guide                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  What is it?                                                │
│    Unique identifier for your LinkedIn profile in the API  │
│                                                             │
│  Format:                                                    │
│    urn:li:person:XXXXXXXXXX                                 │
│                                                             │
│  Example:                                                   │
│    urn:li:person:KGWEb2LU1C                                 │
│                                                             │
│  How to get it:                                             │
│    1. Get access token (Token Generator or OAuth)          │
│    2. Call: GET /v2/userinfo                                │
│    3. Extract: "sub" field                                  │
│    4. Format: urn:li:person:{sub}                           │
│                                                             │
│  Common mistakes:                                           │
│    ❌ Missing prefix: KGWEb2LU1C                            │
│    ❌ Wrong endpoint: GET /v2/me (use /v2/userinfo)         │
│    ❌ Wrong field: "id" (use "sub")                         │
│    ❌ Organization URN: urn:li:organization:123             │
│    ✅ Correct: urn:li:person:KGWEb2LU1C                     │
│                                                             │
│  When to use it:                                            │
│    - "author" field when creating posts                     │
│    - Testing API calls with cURL                            │
│    - Debugging "who am I posting as?"                       │
│                                                             │
│  Is it secret?                                              │
│    No! It's just an identifier, like a username.            │
│    Don't confuse it with access tokens (those ARE secret).  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Troubleshooting (common, easy fixes)

- **Scope error / consent loop:** In the GPT's OAuth scopes, use *exactly* `openid profile w_member_social email`.
- **Redirect URI error:** The URL in your GPT must match what's listed on the LinkedIn app **Auth** tab character‑for‑character.
- **403 Not enough permissions:** Ensure the app's **Products** include *Share on LinkedIn*, and that you're posting to `/rest/posts` with the required headers.
- **429 Too Many Requests:** Wait and retry with backoff; you're rate‑limited.
- **Posting to a Page by accident:** Check `author` — it must be **urn:li:person:{sub}** for a personal post.

---

## Optional: Post by cURL (for sanity checks)

**Exchange code for token**
```bash
curl -X POST 'https://www.linkedin.com/oauth/v2/accessToken' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'grant_type=authorization_code' \
  --data-urlencode 'code=YOUR_CODE' \
  --data-urlencode 'client_id=YOUR_CLIENT_ID' \
  --data-urlencode 'client_secret=YOUR_CLIENT_SECRET' \
  --data-urlencode 'redirect_uri=YOUR_REDIRECT_URI'
```

**Get your person ID (sub)**
```bash
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  https://api.linkedin.com/v2/userinfo
```

**Create a text post**
```bash
curl -X POST 'https://api.linkedin.com/rest/posts' \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Linkedin-Version: 202502" \
  -H "X-Restli-Protocol-Version: 2.0.0" \
  -H "Content-Type: application/json" \
  --data '{
    "author": "urn:li:person:SUB_VALUE",
    "commentary": "Hello from my Custom GPT!",
    "visibility": "PUBLIC",
    "distribution": { "feedDistribution": "MAIN_FEED", "targetEntities": [], "thirdPartyDistributionChannels": [] },
    "lifecycleState": "PUBLISHED",
    "isReshareDisabledByAuthor": false
  }'
```

---

## **Copy‑paste conversation prompt** (for anyone to use with ChatGPT)

> **Goal:** "Help me set up LinkedIn + a Custom GPT Action so I can post to my personal feed."
> **How to behave:** Ask me **one question at a time**; validate each step before moving on.
>
> **My current info:**
> • I have a LinkedIn Page where I'm an Admin.
> • I'm creating a new LinkedIn Developer App called "[YOUR_APP_NAME]".
> • My GPT callback URL is `https://chat.openai.com/aip/g-[MY_GPT_ID]/oauth/callback`
>
> **What I want you to do:**
> 1) Guide me to create and verify a LinkedIn Developer App associated with my Page.
> 2) Ensure the app has the **Products**: *Sign in with LinkedIn using OpenID Connect* and *Share on LinkedIn*.
> 3) Guide me to configure OAuth in the GPT with:
>    - Authorization URL `https://www.linkedin.com/oauth/v2/authorization`
>    - Token URL `https://www.linkedin.com/oauth/v2/accessToken`
>    - Scopes `openid profile w_member_social email`
>    - My callback URL above (and added in the LinkedIn app).
> 4) Provide a minimal **OpenAPI schema** with `GET /v2/userinfo` and `POST /rest/posts` (with the `Linkedin-Version` + `X-Restli-Protocol-Version` headers).
> 5) Walk me through an **end‑to‑end test** that creates a text post.
> 6) If something fails, help me debug: scopes, redirect URI, headers, rate limits.
>
> **Important:** Don't proceed to the next step until you check that the previous step is done.

---

### You're done
Once this works for a text post, ask for the **image** or **link** post workflow and we'll extend the Action (image upload → asset URN → `content` block in the Posts API).
