# Prompt for Creating LinkedIn OAuth Callback Page

Copy and paste this prompt to another LLM working in your edinfinite.com codebase:

---

I need to create a LinkedIn OAuth callback page for my website edinfinite.com which is hosted on Vercel.

**Context:**
- I have a LinkedIn Developer App set up
- Client ID: `78xb5ow8n5wj7r`
- I need a redirect URL endpoint to replace the temporary Postman callback URL
- This will be used for a LinkedIn MCP server that posts to LinkedIn
- The site is hosted on Vercel (free tier)
- I want to minimize costs and complexity

**Requirements:**
1. Create a static HTML callback page at `/public/linkedin-callback.html` (or appropriate location for the framework)
2. The page should extract the OAuth authorization code from the URL query parameter
3. Display the authorization code so I can copy it
4. Include clear instructions on what to do next
5. Make it look clean and professional (matches edinfinite.com branding if possible)

**What the page needs to do:**
- When LinkedIn redirects to `https://edinfinite.com/linkedin-callback.html?code=ABC123...`
- Extract the `code` parameter from the URL
- Display it prominently so I can copy it
- Optionally: provide a "Copy to Clipboard" button
- Show instructions: "Copy this code and use it to get your access token"

**LinkedIn App Settings:**
After you create this file, I'll update my LinkedIn Developer App to use:
- Redirect URL: `https://edinfinite.com/linkedin-callback.html`

**Additional Features (nice to have):**
- Auto-copy the code to clipboard on page load
- Show success/error states
- Timer showing when the code will expire (LinkedIn codes expire in ~10 minutes)
- Link back to edinfinite.com

**Deployment:**
- This should work with Vercel's static hosting (zero cost)
- No serverless functions needed
- No environment variables needed
- Just a simple static HTML page

Please create the file and let me know where to place it in the edinfinite.com project structure.

---

**My Current LinkedIn OAuth Flow:**
1. User visits: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78xb5ow8n5wj7r&redirect_uri=YOUR_REDIRECT_URI&scope=openid%20profile%20w_member_social`
2. LinkedIn redirects to: `YOUR_REDIRECT_URI?code=AUTHORIZATION_CODE`
3. I exchange the code for an access token manually using curl
4. I use the access token in my LinkedIn MCP server

**What I want:**
Replace step 2's `YOUR_REDIRECT_URI` with `https://edinfinite.com/linkedin-callback.html`

Please create this file now.
