// CEO Workshop JS — Anatomy Version
// Minimal JavaScript focused on CEO-specific interactive elements only
// No technical tools (tokenizer, prompt checkers) - those are for the progressive version

// Load Mermaid for the GPT architecture diagram
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true, theme: 'base', themeVariables: { primaryColor: '#7c5cff', primaryTextColor: '#fff', primaryBorderColor: '#6366f1', lineColor: '#6366f1', secondaryColor: '#e0d4ff', tertiaryColor: '#f8fafc' }});

// Helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// Theme toggle
const themeToggle = $('#theme-toggle');
const html = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
if (themeToggle) {
  themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
}

// Toggle theme
themeToggle?.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
});
