# Workshop Prep Todo List - Session 2

**Target:** Complete setup for tomorrow's workshop run-through

---

## PRIORITY 1: GPT OAuth Setup (FRESH START)

### 1.1 Create Brand New GPT
- [ ] Go to https://chatgpt.com/gpts/editor
- [ ] Click "Create" button
- [ ] Switch to "Configure" tab
- [ ] Fill in Name: "LinkedIn Post Creator – CEO Edition2"
- [ ] Fill in Description: "A writing assistant for busy CEOs and founders"
- [ ] Paste Instructions from GPT-SETUP-GUIDE.md (includes URN: `urn:li:person:YOUR_URN_HERE`)
- [ ] Add 4 conversation starters
- [ ] Uncheck all Capabilities (Web Browsing, DALL·E, Code Interpreter)

### 1.2 Configure OAuth Action
- [ ] Scroll to Actions section
- [ ] Click "Create new action"
- [ ] Set Authentication to "OAuth"
- [ ] Enter Client ID: (get from SECRETS.md)
- [ ] Enter Client Secret: (get from SECRETS.md)
- [ ] Enter Authorization URL: `https://www.linkedin.com/oauth/v2/authorization`
- [ ] Enter Token URL: `https://www.linkedin.com/oauth/v2/accessToken`
- [ ] Enter Scope: `openid profile email w_member_social`
- [ ] Set Token Exchange Method: "Default (POST request)"

### 1.3 Add OpenAPI Schema
- [ ] Paste complete OpenAPI schema from GPT-SETUP-GUIDE.md into Schema box
- [ ] Verify schema has NO `components` section (that causes errors)
- [ ] Verify schema has NO `security` array (OAuth configured separately)

### 1.4 Save and Get Callback URL
- [ ] Click "Save" button (top right)
- [ ] Wait for save to complete
- [ ] Copy the new Callback URL from OAuth section (format: `https://chat.openai.com/aip/g-XXXXX/oauth/callback`)
- [ ] Document the callback URL in SECRETS.md

### 1.5 Update LinkedIn Developer App
- [ ] Go to https://www.linkedin.com/developers/apps
- [ ] Open "LinkedIn Post Creator – CEO Edition2" app
- [ ] Go to "Auth" tab
- [ ] Under "Authorized redirect URLs", click "Update"
- [ ] **REMOVE** all old callback URLs (clean slate)
- [ ] **ADD** the new callback URL from step 1.4
- [ ] Click "Update" to save
- [ ] Wait 2-3 minutes for LinkedIn cache to clear

### 1.6 Publish GPT
- [ ] Click "Update" button in GPT editor (top right)
- [ ] Set access to "Only me" (for testing)
- [ ] Click "Confirm"
- [ ] Click "View GPT" to open chat interface

---

## PRIORITY 2: Test GPT OAuth Flow

### 2.1 Initial OAuth Test
- [ ] In GPT chat interface (NOT editor preview), type: "Post this test message to LinkedIn: Hello from my new GPT! This is test #1."
- [ ] Verify GPT shows "Sign in to api.linkedin.com" button
- [ ] Click the sign-in button
- [ ] Verify redirect to LinkedIn authorization page
- [ ] Click "Allow" on LinkedIn
- [ ] Verify redirect back to ChatGPT
- [ ] Verify post completes successfully
- [ ] Note the post ID returned

### 2.2 Verify Post on LinkedIn
- [ ] Go to https://www.linkedin.com/in/w4ester/
- [ ] Verify test post appears in feed
- [ ] Verify post displays correctly
- [ ] Verify no images are broken (should be text-only)

### 2.3 Test GPT Memory of URN
- [ ] In same GPT chat, ask: "Post another message: This is test #2 from GPT memory"
- [ ] Verify GPT does NOT ask for URN again (should use `urn:li:person:YOUR_URN_HERE` from instructions)
- [ ] Verify post completes without re-authentication
- [ ] Verify second post appears on LinkedIn

### 2.4 Test Fresh Session
- [ ] Open GPT in new incognito/private browser window
- [ ] Start new conversation
- [ ] Ask to post a message
- [ ] Verify OAuth flow works from fresh session
- [ ] Verify post succeeds

---

## PRIORITY 3: Workshop Slides Finalization

### 3.1 Fix Slide 11 Accordion Format
- [ ] Update slide 11 (GPT action section) to match the accordion setup style from slide 8
- [ ] Ensure 1-5 steps display with consistent accordion design
- [ ] Test format matches visually between slides 8 and 11
- **Reference URLs:**
  - Slide 8: http://127.0.0.1:5502/Wednesdayssession2/slides/#/8
  - Slide 11: http://127.0.0.1:5502/Wednesdayssession2/slides/#/11

### 3.2 Update OAuth Setup Slide
- [ ] Verify OAuth configuration steps in slides match GPT-SETUP-GUIDE.md
- [ ] Ensure callback URL instructions are clear
- [ ] Verify LinkedIn Developer Portal screenshots are current
- [ ] Check that all credentials shown are PLACEHOLDERS (not real values)

### 3.3 Add URN Instructions Clarity
- [ ] Review URN retrieval slide
- [ ] Ensure "Build Your URN" section is crystal clear
- [ ] Add emphasis that URN goes in GPT Instructions
- [ ] Show example of where to paste URN in Instructions

### 3.4 Test All Slide Links
- [ ] Click through every link in slides
- [ ] Verify LinkedIn Developer Portal links work
- [ ] Verify GPT Editor link works
- [ ] Verify example JSON/code blocks display correctly

---

## PRIORITY 4: GitHub Pages Deployment

### 4.1 GitHub Pages URL Configuration
- [ ] Verify GitHub Pages URL configuration
- [ ] Ensure local folder structure (http://127.0.0.1:5502/Wednesdayssession2/) maps correctly to GitHub Pages session2 repo
- [ ] Test that pushing new items with new folder structure doesn't break GitHub Pages deployment
- [ ] Confirm demo displays correct information on GitHub Pages

### 4.2 Push Updates to GitHub
- [ ] Review all changes with `git status`
- [ ] Verify SECRETS.md is NOT being committed (check .gitignore)
- [ ] Commit GPT-SETUP-GUIDE.md
- [ ] Commit any slide updates
- [ ] Push to main branch
- [ ] Wait for GitHub Pages to rebuild (2-3 minutes)

### 4.3 Test GitHub Pages Live
- [ ] Open GitHub Pages URL in browser
- [ ] Verify slides load correctly
- [ ] Test slide navigation
- [ ] Test code blocks display properly
- [ ] Verify no 404 errors on any resources

---

## PRIORITY 5: Workshop Demo Preparation

### 5.1 Demo Script Creation
- [ ] Create step-by-step demo script
- [ ] Include what to say at each slide
- [ ] Include live demo talking points
- [ ] Add backup plan if OAuth fails during demo (use direct API)

### 5.2 Demo Environment Setup
- [ ] Have GPT chat interface open in one tab
- [ ] Have LinkedIn profile (https://www.linkedin.com/in/w4ester/) open in another tab
- [ ] Have slides open in presentation mode
- [ ] Have SECRETS.md open for quick reference
- [ ] Have GPT-SETUP-GUIDE.md open as backup reference

### 5.3 Prepare Demo LinkedIn Posts
- [ ] Draft 2-3 example posts to use during demo
- [ ] Test these posts work via GPT beforehand
- [ ] Have them saved in a doc for easy copy/paste during demo

### 5.4 Backup Plan Testing
- [ ] Verify direct API still works (in case GPT OAuth fails during demo)
- [ ] Have curl command ready in SECRETS.md
- [ ] Test one direct API post to confirm access token is valid

---

## PRIORITY 6: Communication & Documentation

### 6.1 Draft Email to Team
- [ ] Draft email to Todd, Neil, Carol, and Mo
- [ ] Include GitHub Pages demo link
- [ ] Include presentation overview
- [ ] Include session objectives
- [ ] Include what attendees will learn
- [ ] Include any pre-workshop preparation needed
- [ ] Set clear expectations for session format
- [ ] Ensure all context is clear for recipients

### 6.2 Update Workshop README
- [ ] Update Wednesdayssession2/README.md if it exists
- [ ] Document what's included in this session
- [ ] Link to GPT-SETUP-GUIDE.md
- [ ] Link to SECRETS.md (with note it's in .gitignore)
- [ ] Add troubleshooting section

### 6.3 Create Quick Reference Card
- [ ] Create one-page quick reference for attendees
- [ ] Include OAuth setup checklist
- [ ] Include common errors and fixes
- [ ] Include key URLs (LinkedIn Developer Portal, GPT Editor)
- [ ] Include support resources

---

## PRIORITY 7: Final Pre-Workshop Checks

### 7.1 Run Full Workshop Flow (Dry Run)
- [ ] Present slides from beginning to end
- [ ] Time the presentation
- [ ] Do live GPT OAuth demo
- [ ] Post actual test message to LinkedIn
- [ ] Verify everything works smoothly
- [ ] Note any rough spots to improve

### 7.2 Equipment & Technical Checks
- [ ] Test screen sharing if remote workshop
- [ ] Test microphone and audio
- [ ] Verify browser tabs are organized
- [ ] Close unnecessary apps/distractions
- [ ] Charge laptop fully
- [ ] Have backup internet connection plan

### 7.3 Contingency Planning
- [ ] Document what to do if GPT OAuth fails mid-demo
- [ ] Have direct API demo ready as backup
- [ ] Have screenshots of successful posts as backup
- [ ] Know how to gracefully pivot if tech issues occur

---

## SUCCESS CHECKLIST (Before Tomorrow)

**GPT & OAuth:**
- [ ] Brand new GPT created and configured
- [ ] OAuth working perfectly (tested from fresh session)
- [ ] At least 2 successful test posts via GPT OAuth
- [ ] URN remembered by GPT (no re-asking)

**Slides & Materials:**
- [ ] All slides finalized and tested
- [ ] GitHub Pages deployed and accessible
- [ ] GPT-SETUP-GUIDE.md complete and accurate
- [ ] All credentials protected (SECRETS.md in .gitignore)

**Demo Readiness:**
- [ ] Full dry-run completed successfully
- [ ] Demo script prepared
- [ ] Backup plan ready
- [ ] Equipment tested

**Communication:**
- [ ] Team email sent
- [ ] Quick reference card created
- [ ] Documentation complete

---

**START HERE:** Priority 1 (GPT OAuth Setup) - Complete this first, then test (Priority 2) before moving to slides.
