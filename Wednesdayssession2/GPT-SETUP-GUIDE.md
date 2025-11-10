# LinkedIn Post Creator GPT - Complete Setup Guide

**Follow these steps EXACTLY to create your LinkedIn Post Creator GPT from scratch.**

---

## Step 1: Create New GPT

1. Go to: https://chatgpt.com/gpts/editor
2. Click **"Create"** button
3. You'll see two tabs: **Configure** and **Create**
4. Click on the **Configure** tab

---

## Step 2: Basic GPT Configuration

### Name
```
LinkedIn Post Creator – CEO Edition2
```

### Description
```
A writing assistant for busy CEOs and founders
```

### Instructions
```
You are a professional LinkedIn post writer specializing in content for CEOs and founders.

**IMPORTANT - My LinkedIn URN:**
My LinkedIn URN is: urn:li:person:KGWEb2LU1C

When posting to LinkedIn, ALWAYS use this exact URN in the "author" field.

**Your Role:**
- Help users draft engaging LinkedIn posts
- Use clear, professional language
- Keep posts concise and impactful
- Format for readability with line breaks
- Suggest relevant hashtags

**When user asks to post:**
1. Draft the post first for approval
2. After approval, use the postToLinkedIn action
3. ALWAYS use author: "urn:li:person:KGWEb2LU1C"
4. Confirm successful posting with post ID

**Tone:**
Professional yet approachable. Write as a thought leader sharing insights.
```

### Conversation starters (add these 4):
```
Draft a post about AI innovation
Create a post about leadership
Write about entrepreneurship
Post about team building
```

### Knowledge
- Leave empty (no files needed)

### Capabilities
- **Uncheck** Web Browsing
- **Uncheck** DALL·E Image Generation
- **Uncheck** Code Interpreter

---

## Step 3: Configure the Action

1. Scroll down to **Actions** section
2. Click **"Create new action"**

### Action Configuration:

#### Authentication
1. Click on **Authentication** dropdown
2. Select **OAuth**

#### OAuth Configuration:

**Client ID:**
```
YOUR_LINKEDIN_CLIENT_ID
```

**Client Secret:**
```
YOUR_LINKEDIN_CLIENT_SECRET
```

> **Note:** Get your actual credentials from SECRETS.md (in .gitignore)

**Authorization URL:**
```
https://www.linkedin.com/oauth/v2/authorization
```

**Token URL:**
```
https://www.linkedin.com/oauth/v2/accessToken
```

**Scope:**
```
openid profile email w_member_social
```

**Token Exchange Method:**
- Select: **Default (POST request)**

---

## Step 4: Schema Configuration

In the **Schema** box, paste this EXACT OpenAPI schema:

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
                  description: The URN of the LinkedIn user (e.g., urn:li:person:KGWEb2LU1C)
                  example: "urn:li:person:KGWEb2LU1C"
                lifecycleState:
                  type: string
                  enum: [PUBLISHED]
                  description: The state of the post
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
                              description: The text content of the post
                          required:
                            - text
                        shareMediaCategory:
                          type: string
                          enum: [NONE]
                          description: Media category (NONE for text-only posts)
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
                      description: Who can see this post
                  required:
                    - com.linkedin.ugc.MemberNetworkVisibility
      responses:
        '201':
          description: Post created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    description: The ID of the created post
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
```

---

## Step 5: Save and Get Callback URL

1. Click **Save** at the top right
2. After saving, look at the **OAuth** section
3. You'll see a new **Callback URL** - it will look like:
   ```
   https://chat.openai.com/aip/g-XXXXXXXXXXXXX/oauth/callback
   ```
4. **COPY THIS EXACT URL** - you'll need it for Step 6

---

## Step 6: Update LinkedIn App with Callback URL

1. Go to: https://www.linkedin.com/developers/apps
2. Click on your app: **LinkedIn Post Creator – CEO Edition2**
3. Go to **Auth** tab
4. Under **OAuth 2.0 settings**
5. Find **Authorized redirect URLs for your app**
6. Click **Update** or **Add redirect URL**
7. **PASTE THE CALLBACK URL FROM STEP 5**
8. Click **Update**

---

## Step 7: Publish Your GPT

1. In the GPT Editor, click **Update** at top right
2. For "Who can access this GPT?" select **Only me** (for testing)
3. Click **Confirm**
4. Click **View GPT** button

---

## Step 8: Test the OAuth Flow

1. You should now be in your GPT chat interface
2. Type: "Post this test message to LinkedIn: Hello from my new GPT!"
3. The GPT will show you a **"Sign in to api.linkedin.com"** button
4. Click that button
5. You should be redirected to LinkedIn authorization
6. Click **Allow** on LinkedIn
7. You'll be redirected back to ChatGPT
8. The post should complete successfully

---

## Step 9: Verify on LinkedIn

1. Go to: https://www.linkedin.com/in/w4ester/
2. Check your feed
3. You should see the test post!

---

## Troubleshooting

### If you get "Login failed - data is missing":
1. Make sure the Callback URL in LinkedIn EXACTLY matches the one from Step 5
2. Try removing old callback URLs from LinkedIn (keep only the new one)
3. Wait 2-3 minutes after updating LinkedIn callback (cache may need to clear)

### If OAuth button doesn't appear:
1. Make sure you're testing from the actual GPT chat, NOT the editor preview
2. URL should be `https://chatgpt.com/g/g-XXXXX`, not `.../gpts/editor/...`

### If post fails with wrong URN:
1. Check that GPT Instructions include: `My LinkedIn URN is: urn:li:person:KGWEb2LU1C`
2. The GPT should remember this from instructions

---

## Quick Reference URLs

- **GPT Editor:** https://chatgpt.com/gpts/editor
- **LinkedIn Developer Apps:** https://www.linkedin.com/developers/apps
- **Your LinkedIn Profile:** https://www.linkedin.com/in/w4ester/
- **Your Credentials:** See SECRETS.md (in .gitignore)

---

## Success Checklist

- [ ] GPT created with name and description
- [ ] Instructions include your URN: `urn:li:person:KGWEb2LU1C`
- [ ] OAuth configured with Client ID and Secret
- [ ] OpenAPI schema pasted correctly
- [ ] GPT saved and callback URL copied
- [ ] LinkedIn app updated with callback URL
- [ ] GPT published
- [ ] Test post successful via OAuth button
- [ ] Post appears on LinkedIn profile

---

**You're done! 🎉**

Your GPT can now post directly to LinkedIn using OAuth authentication.
