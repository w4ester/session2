// Core workshop JS — no build step needed, works on GitHub Pages
// Tokenization uses a pure-JS CL100K tokenizer so it runs entirely client-side.

// Load Mermaid for the Agent diagram
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true });

// Lazy-import tokenizer on demand to keep initial load small
let encodeFn = null, decodeFn = null;
async function ensureTokenizer() {
  if (encodeFn) return;
  try {
    // Using esm.sh CDN for reliable browser ESM imports
    const mod = await import('https://esm.sh/gpt-tokenizer@2.8.0');
    encodeFn = mod.encode;
    decodeFn = mod.decode;
  } catch (err) {
    console.error('Failed to load tokenizer:', err);
    alert('Could not load the tokenizer library. Please check your network connection.');
  }
}

// Helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function tokenChip(text, id) {
  const span = document.createElement('span');
  span.className = 'token';
  span.textContent = JSON.stringify(text);
  const idEl = document.createElement('span');
  idEl.className = 'id';
  idEl.textContent = `#${id}`;
  span.appendChild(idEl);
  return span;
}

function tokenizeChatWrap(text) {
  // Adds simple ChatML-like wrappers to illustrate extra tokens
  // This is illustrative only; real chat formats vary by provider.
  return `<|im_start|>system\nYou are a helpful assistant.<|im_end|>\n` +
         `<|im_start|>user\n${text}<|im_end|>\n` +
         `<|im_start|>assistant\n`;
}

// Tokenization UI
$('#btn-tokenize')?.addEventListener('click', async () => {
  await ensureTokenizer();
  if (!encodeFn) return;
  const input = $('#tok-input').value.trim();
  const wrap = $('#chatml-toggle').checked;
  const text = wrap ? tokenizeChatWrap(input) : input;

  const ids = encodeFn(text);
  $('#tok-count').textContent = ids.length.toString();
  const uniq = new Set(ids);
  $('#tok-unique').textContent = uniq.size.toString();

  const list = $('#tok-list');
  list.innerHTML = '';
  // Show first 400 tokens max for performance
  const sample = ids.slice(0, 400);
  for (let i = 0; i < sample.length; i++) {
    // Show decoded token text for readability
    const piece = decodeFn ? decodeFn([sample[i]]) : String(sample[i]);
    list.appendChild(tokenChip(piece, sample[i]));
  }
  if (ids.length > sample.length) {
    const more = document.createElement('div');
    more.className = 'note';
    more.textContent = `… ${ids.length - sample.length} more tokens hidden`;
    list.appendChild(more);
  }
});

// Example text samples
const EXAMPLES = {
  short: "AI marketing saves time!",
  medium: "Our new AI-powered analytics dashboard helps marketing teams track campaign performance in real-time and save 5+ hours per week on reporting.",
  long: "Write a comprehensive 2-paragraph LinkedIn post announcing our new AI-powered marketing analytics dashboard for B2B marketers. The post should be professional but conversational, highlight the key benefit of saving 5+ hours per week on reporting, include a question to encourage engagement, be around 150 words, and include 3 relevant hashtags. Make sure the tone is authentic and speaks directly to marketing managers who are overwhelmed with manual reporting tasks.",
  emoji: "🚀 Excited to announce our new AI-powered analytics dashboard! 📊 Save 5+ hours/week on reporting 💪 Real-time insights 🎯 Better decisions #MarTech #AI",
  code: "import { encode, decode } from 'gpt-tokenizer';\nconst tokens = encode('Hello, world!');\nconsole.log(`Token count: ${tokens.length}`);"
};

// Example button handlers
$$('[data-example]').forEach(btn => {
  btn.addEventListener('click', () => {
    const example = btn.getAttribute('data-example');
    $('#tok-input').value = EXAMPLES[example] || '';
  });
});

// Prompt comparison — pre-seeded example outputs
const BASIC_EXAMPLE = `Check out our amazing new product! It's the best thing we've ever made and you're going to love it. Don't miss out on this incredible opportunity. Buy now!`;

const ENGINEERED_EXAMPLE = `Excited to announce the launch of our new AI-powered Marketing Analytics Dashboard! 🚀

As marketers, we all know the pain of spending hours putting together campaign reports, only to find that the data is already outdated by the time we present it.

Our new dashboard solves this problem with real-time analytics that put all your campaign metrics in one place. The best part? It's saving our beta users an average of 5+ hours every week on reporting tasks alone.

What would you do with an extra 5 hours in your work week?

#MarketingAnalytics #AIforMarketers #ProductivityHacks`;

$('#btn-basic-output')?.addEventListener('click', () => {
  $('#basic-output').textContent = BASIC_EXAMPLE;
});

$('#btn-eng-output')?.addEventListener('click', () => {
  $('#eng-output').textContent = ENGINEERED_EXAMPLE;
});

// Try-it-yourself scoring heuristic (no API keys required)
function scorePrompt(p) {
  let score = 0;
  const checks = [];

  const tests = [
    { id: 'task', label: 'Clear task verb ("Write", "Create", "Analyze"...).', ok: /\b(write|create|draft|analyze|summarize|generate|plan)\b/i.test(p) },
    { id: 'aud', label: 'Audience specified (e.g., B2B marketers, CMOs).', ok: /\b(b2b|b2c|marketers|cmo|sales|customers|prospects|audience)\b/i.test(p) },
    { id: 'tone', label: 'Tone/style mentioned (e.g., professional, friendly).', ok: /\b(tone|voice|style|professional|conversational|playful|formal)\b/i.test(p) },
    { id: 'format', label: 'Format/structure (bullets, list, headline, steps).', ok: /\b(bullets?|bullet points?|list|outline|headline|steps|sections?)\b/i.test(p) },
    { id: 'length', label: 'Length constraint (words, characters, paragraphs).', ok: /\b(\d+\s?(words?|chars?|characters?|paragraphs?))\b/i.test(p) },
    { id: 'context', label: 'Product/context details included.', ok: /\b(ai|analytics|dashboard|product|campaign|feature|benefit|use case|pain)\b/i.test(p) },
    { id: 'examples', label: 'Examples or few-shot demos provided.', ok: /\b(example|for instance|e\.g\.|sample)\b/i.test(p) },
    { id: 'constraints', label: 'Constraints (must include, avoid, CTA, hashtags).', ok: /\b(must|include|avoid|cta|call to action|hashtag)\b/i.test(p) },
    { id: 'metrics', label: 'Metrics or numbers (e.g., 5+ hours/week).', ok: /\d+\s?\+?|%/.test(p) },
    { id: 'eval', label: 'Evaluation/QA (checklist, rubric, self-critique).', ok: /\b(rubric|checklist|critique|revise|improve|review)\b/i.test(p) },
  ];

  for (const t of tests) {
    checks.push({ label: t.label, ok: t.ok });
    if (t.ok) score++;
  }
  return { score, checks };
}

$('#btn-score')?.addEventListener('click', () => {
  const p = $('#try-input').value;
  const { score, checks } = scorePrompt(p);
  const list = $('#score-list');
  list.innerHTML = '';
  checks.forEach(c => {
    const li = document.createElement('li');
    const dot = document.createElement('span');
    dot.className = 'check ' + (c.ok ? 'ok' : 'bad');
    li.appendChild(dot);
    const txt = document.createElement('span');
    txt.textContent = c.label;
    li.appendChild(txt);
    list.appendChild(li);
  });
  const pct = Math.round((score / 10) * 100);
  $('#score-meter').style.setProperty('--pct', pct + '%');
  $('#score-label').textContent = `Score: ${score}/10`;
});

$('#btn-copy')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText($('#try-input').value);
    alert('Prompt copied to clipboard.');
  } catch {}
});

// Template generator
function buildTemplate(task, vars, instr) {
  const varList = vars.split(',').map(v => v.trim()).filter(Boolean);
  const yamlVars = varList.map(v => `  - ${v}`).join('\n');
  return `# ${task} — Prompt Template

## Variables
${yamlVars || '  - (add variables)'}

## Instructions for the AI
${instr || '(add instructions)'}

## Structure
- Audience:
- Tone:
- Length:
- Must include:
- Avoid:

## Example Input
- ${varList[0] || 'product'}: (example)
- ${varList[1] || 'audience'}: (example)

## Example Output
(Provide a short, high-quality example output here)`;
}

$('#btn-make-template')?.addEventListener('click', () => {
  const task = $('#tpl-task').value || 'Untitled Marketing Task';
  const vars = $('#tpl-vars').value || 'product, audience';
  const instr = $('#tpl-instr').value || '';
  $('#tpl-output').textContent = buildTemplate(task, vars, instr);
});

$('#btn-copy-template')?.addEventListener('click', async () => {
  const text = $('#tpl-output').textContent || '';
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    alert('Template copied.');
  } catch {}
});

$('#btn-download-template')?.addEventListener('click', () => {
  const text = $('#tpl-output').textContent || '';
  if (!text) return;
  const blob = new Blob([text], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'prompt-template.md';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

// Theme toggle
const themeToggle = $('#theme-toggle');
const html = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
if (themeToggle) {
  themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
}

// Toggle theme
themeToggle?.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
});
