
# Zero‑to‑Post: Set up LinkedIn + Custom GPT Action (Non‑Developer Guide)

*A plain‑English, step‑by‑step checklist with the exact pages to click, so you can let a Custom GPT post to your personal LinkedIn feed after you approve it.*

---

## What you will have at the end

- A **LinkedIn Developer App** that’s verified and allowed to post **as you**.
- A **Custom GPT Action** connected to that app via OAuth.
- A **test flow** that: gets your LinkedIn ID via OpenID Connect and publishes a **text post** to your feed.

> **Safety:** The GPT can only post **after you authorize it** on LinkedIn. You can revoke access anytime in LinkedIn → *Settings & Privacy → Data privacy → Other applications → Permitted services*.

---

## Your values (fill in / keep for reference)

- **LinkedIn App Name:** `edinfinite dev`  
- **LinkedIn App ID:** `226524382`  
- **GPT OAuth Callback URL (from your GPT editor):**  
  `https://chat.openai.com/aip/g-f51c3355655efc201d486af2e197e84593b348c0/oauth/callback`  
- **Do NOT share** your **Client Secret**.

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

- A personal LinkedIn account (you have this).  
- A **LinkedIn Page** where you are **Super Admin**.  
  - Create one if needed → https://www.linkedin.com/help/linkedin/answer/a543852  
- Access to the **LinkedIn Developer Portal** (same account) → https://developer.linkedin.com/ → **My apps**.

---

## Step 1 — Create your LinkedIn Developer App (or open the one you have)

- Go to **My apps** → https://www.linkedin.com/developers/apps  
- Click **Create app** (or open your existing app).  
- Fill **App name, logo, privacy policy URL**. Save.

> **Your app:** `edinfinite dev` (ID `226524382`).

---

## Step 2 — Associate the app to your LinkedIn Page (verification)

**Why:** LinkedIn requires every app to be tied to a Page for ownership/branding. This does **not** force posts to go to the Page; you can still post as **you**.

1. Open your app **Settings** → `My apps → edinfinite dev → Settings`  
   Direct link: `https://www.linkedin.com/developers/apps/226524382/settings`  
2. Under **LinkedIn Page**, associate your Page and send a **verification request**.  
3. A **Page Super Admin** must approve the request (you can be that person).  
   - Help:  
     - Associate an app with a LinkedIn Page → https://www.linkedin.com/help/linkedin/answer/a548360  
     - Approve or deny an app verification → https://www.linkedin.com/help/linkedin/answer/a1669245  
4. Confirm you see **Verified** on the app’s Settings page.

> Your screenshot shows **Verified: Nov 11, 2025** — ✅ complete.

---

## Step 3 — Add the two required Products (permissions)

Open your app’s **Products** tab → `https://www.linkedin.com/developers/apps/226524382/products`

- **Sign in with LinkedIn using OpenID Connect** (grants `openid profile email`)  
  Docs: https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2
- **Share on LinkedIn** (grants `w_member_social` to post as the authenticated member)  
  Docs: https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/share-on-linkedin

**You already have both added** — ✅

---

## Step 4 — Configure OAuth on the LinkedIn app **and** in your GPT

### 4A. In the **LinkedIn app** (Auth tab)
- Open: `https://www.linkedin.com/developers/apps/226524382/auth`  
- Confirm **Authorized redirect URLs** includes your GPT callback exactly:  
  `https://chat.openai.com/aip/g-f51c3355655efc201d486af2e197e84593b348c0/oauth/callback`  
- Note the **Client ID** and keep the **Client Secret** safe (never publish it).

### 4B. In the **GPT editor** (Custom GPT → Actions → OAuth)
- **Authorization URL:** `https://www.linkedin.com/oauth/v2/authorization`  
- **Token URL:** `https://www.linkedin.com/oauth/v2/accessToken`  
- **Scopes:** `openid profile email w_member_social`  
- Paste your **Client ID** and **Client Secret** from the LinkedIn app.  
- Save.

Docs for GPT Actions OAuth: https://platform.openai.com/docs/actions/authentication/oauth

---

## Step 5 — Add the Action endpoints (OpenAPI schema)

Paste the following into **Actions → Add Action → Schema** in your GPT:

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
                      items: { type: string }
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

> If you prefer the legacy UGC Shares API, you can swap `/rest/posts` for `POST https://api.linkedin.com/v2/ugcPosts` (and drop the `Linkedin-Version` header). For most new builds, **Posts API** is recommended.

---

## Step 6 — Suggested **Instructions** for your GPT (copy/paste)

Paste this into the **Instructions** field of the GPT editor:

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

---

## Step 7 — Authorize and test

1. In your GPT chat, run the Action by asking:  
   **“Connect my LinkedIn and make a public test post that says ‘Hello from my Custom GPT!’”**  
2. You’ll be sent to LinkedIn to **approve** the app with scopes: `openid profile email w_member_social`.  
3. After approval, the GPT should:  
   - Call **GET** `https://api.linkedin.com/v2/userinfo` → returns `{ "sub": "..." }`  
   - Call **POST** `https://api.linkedin.com/rest/posts` with your `author` URN and text.  
   - Report **Created (201)** and the **post URN** from the `x-restli-id` header.
4. Open LinkedIn and verify the post is on **your personal feed**.

---

## Troubleshooting (common, easy fixes)

- **Scope error / consent loop:** In the GPT’s OAuth scopes, use *exactly* `openid profile email w_member_social`.  
- **Redirect URI error:** The URL in your GPT must match what’s listed on the LinkedIn app **Auth** tab character‑for‑character.  
- **403 Not enough permissions:** Ensure the app’s **Products** include *Share on LinkedIn*, and that you’re posting to `/rest/posts` with the required headers.  
- **429 Too Many Requests:** Wait and retry with backoff; you’re rate‑limited.  
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

> **Goal:** “Help me set up LinkedIn + a Custom GPT Action so I can post to my personal feed.”  
> **How to behave:** Ask me **one question at a time**; validate each step before moving on.  
>
> **My current info:**  
> • I have a LinkedIn Page where I’m Super Admin.  
> • My LinkedIn app name is “edinfinite dev” (ID 226524382).  
> • My GPT callback URL is `https://chat.openai.com/aip/g-f51c3355655efc201d486af2e197e84593b348c0/oauth/callback`  
>
> **What I want you to do:**  
> 1) Confirm my app is **Verified** and associated with my Page.  
> 2) Ensure the app has the **Products**: *Sign in with LinkedIn using OpenID Connect* and *Share on LinkedIn*.  
> 3) Guide me to configure OAuth in the GPT with:  
>    - Authorization URL `https://www.linkedin.com/oauth/v2/authorization`  
>    - Token URL `https://www.linkedin.com/oauth/v2/accessToken`  
>    - Scopes `openid profile email w_member_social`  
>    - My callback URL above (and added in the LinkedIn app).  
> 4) Provide a minimal **OpenAPI schema** with `GET /v2/userinfo` and `POST /rest/posts` (with the `Linkedin-Version` + `X-Restli-Protocol-Version` headers).  
> 5) Walk me through an **end‑to‑end test** that creates a text post.  
> 6) If something fails, help me debug: scopes, redirect URI, headers, rate limits.
>
> **Important:** Don’t proceed to the next step until you check that the previous step is done.

---

### You’re done
Once this works for a text post, ask for the **image** or **link** post workflow and we’ll extend the Action (image upload → asset URN → `content` block in the Posts API).
