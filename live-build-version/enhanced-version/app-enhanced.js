// Enhanced Workshop App - Session 2
// All features work client-side with localStorage

// ============================================
// STATE MANAGEMENT
// ============================================

const WorkshopState = {
  currentSection: 'tokenization',
  completedSections: [],
  prompts: [],
  templates: [],
  bestScore: 0,
  timeSaved: 0,
  agent: {
    name: '',
    instructions: '',
    tools: [],
    step: 1
  },
  challenges: {
    completed: [],
    scores: []
  },
  
  load() {
    const saved = localStorage.getItem('workshop_session2_state');
    if (saved) {
      const data = JSON.parse(saved);
      Object.assign(this, data);
      return true;
    }
    return false;
  },
  
  save() {
    localStorage.setItem('workshop_session2_state', JSON.stringify(this));
  },
  
  reset() {
    localStorage.removeItem('workshop_session2_state');
    location.reload();
  }
};

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${getToastIcon(type)}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function getToastIcon(type) {
  const icons = {
    success: '✓',
    error: '✗',
    info: 'ℹ️'
  };
  return icons[type] || icons.info;
}

// ============================================
// PROGRESS TRACKING
// ============================================

function updateProgress() {
  const sections = ['tokenization', 'prompting', 'templates', 'agents', 'challenges'];
  const currentIndex = sections.indexOf(WorkshopState.currentSection);
  const progress = ((currentIndex + 1) / sections.length) * 100;
  
  document.getElementById('progress-fill').style.width = `${progress}%`;
  
  // Update step indicators
  document.querySelectorAll('.progress-steps .step').forEach((step, index) => {
    step.classList.remove('active', 'completed');
    if (index < currentIndex) {
      step.classList.add('completed');
    } else if (index === currentIndex) {
      step.classList.add('active');
    }
  });
  
  WorkshopState.save();
}

function trackSectionView(sectionId) {
  WorkshopState.currentSection = sectionId;
  if (!WorkshopState.completedSections.includes(sectionId)) {
    WorkshopState.completedSections.push(sectionId);
  }
  updateProgress();
  updateStats();
}

// Intersection Observer for section tracking
function setupSectionTracking() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        const sectionId = entry.target.getAttribute('data-section');
        if (sectionId) {
          trackSectionView(sectionId);
        }
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('[data-section]').forEach(section => {
    observer.observe(section);
  });
}

// ============================================
// STATISTICS
// ============================================

function updateStats() {
  document.getElementById('stat-prompts').textContent = WorkshopState.prompts.length;
  document.getElementById('stat-templates').textContent = WorkshopState.templates.length;
  document.getElementById('stat-score').textContent = `${WorkshopState.bestScore}/10`;
  document.getElementById('stat-time').textContent = `${Math.round(WorkshopState.timeSaved)}h`;
}

// ============================================
// AI COPILOT
// ============================================

const copilotKnowledge = {
  'token': 'Tokens are how LLMs read text - think of them as chunks of ~4 characters. They matter because: 1) You pay per token, 2) Models have token limits (context windows), 3) More tokens = slower responses.',
  'prompt': 'Good prompts follow 4 principles: Be Specific (format, length, tone), Provide Context (background, constraints), Use Examples (show desired style), Break It Down (step-by-step for complex tasks).',
  'template': 'Templates are reusable prompt structures with variables. They save time and ensure consistency. Include: 1) Variables in {brackets}, 2) Clear instructions, 3) Format requirements, 4) Example outputs.',
  'agent': 'AI Agents combine LLMs with tools (web search, file analysis), memory (past conversations), and planning (breaking down complex tasks). They automate workflows beyond simple chat.',
  'cost': 'Most AI APIs charge around $0.03 per 1,000 tokens. A typical marketing email might be 200-300 tokens, costing less than $0.01.',
  'context': 'Context window is the amount of text an LLM can process at once. GPT-4 has 8k-128k tokens depending on version. If you exceed it, older messages get cut off.',
  'improve': 'To improve prompts: Add specifics (who, what, why), set constraints (length, tone), include examples, and structure multi-step requests clearly.',
  'share': 'You can export your work using the "Export My Work" button. Templates can be saved as .md files and shared with your team.',
  'time': 'Typical time savings: Email drafts (30min → 5min), Social posts (45min → 10min), Reports (2hr → 20min). That\'s 5-10 hours saved per week for most marketers.'
};

function initCopilot() {
  const toggle = document.getElementById('copilot-toggle');
  const panel = document.getElementById('copilot-panel');
  const close = document.getElementById('copilot-close');
  const send = document.getElementById('copilot-send');
  const input = document.getElementById('copilot-input');
  const messages = document.getElementById('copilot-messages');
  
  toggle.addEventListener('click', () => {
    panel.classList.toggle('active');
  });
  
  close.addEventListener('click', () => {
    panel.classList.remove('active');
  });
  
  function sendMessage() {
    const question = input.value.trim();
    if (!question) return;
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'copilot-message user';
    userMsg.innerHTML = `<p>${question}</p>`;
    messages.appendChild(userMsg);
    
    input.value = '';
    
    // Simulate thinking
    const thinkingMsg = document.createElement('div');
    thinkingMsg.className = 'copilot-message assistant';
    thinkingMsg.innerHTML = '<p>Thinking...</p>';
    messages.appendChild(thinkingMsg);
    messages.scrollTop = messages.scrollHeight;
    
    // Get response
    setTimeout(() => {
      const response = getCopilotResponse(question);
      thinkingMsg.innerHTML = `<p>${response}</p>`;
      messages.scrollTop = messages.scrollHeight;
    }, 1000);
  }
  
  send.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}

function getCopilotResponse(question) {
  const q = question.toLowerCase();
  
  // Check for keywords
  for (const [key, answer] of Object.entries(copilotKnowledge)) {
    if (q.includes(key)) {
      return answer;
    }
  }
  
  // Default helpful response
  if (q.includes('help') || q.includes('stuck')) {
    return 'I\'m here to help! Try being more specific - ask about tokens, prompts, templates, agents, or any specific challenges you\'re facing.';
  }
  
  if (q.includes('how') || q.includes('what')) {
    return 'Great question! I have info about: tokens & costs, prompt engineering, templates, AI agents, time savings. What would you like to know more about?';
  }
  
  return 'Interesting question! I can help with tokens, prompt engineering, templates, and AI agents. Try asking something specific like "How do tokens work?" or "How do I improve my prompts?"';
}

// ============================================
// TOKENIZATION
// ============================================

function initTokenization() {
  const input = document.getElementById('tok-input');
  const btnTokenize = document.getElementById('btn-tokenize');
  const chatToggle = document.getElementById('chatml-toggle');
  
  // Example buttons
  document.querySelectorAll('.btn-example[data-text]').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.text;
      tokenizeText();
    });
  });
  
  btnTokenize.addEventListener('click', tokenizeText);
  
  function tokenizeText() {
    const text = input.value;
    const addChatWrapper = chatToggle.checked;
    
    let processedText = text;
    if (addChatWrapper) {
      processedText = `<|im_start|>user\n${text}\n<|im_end|>`;
    }
    
    // Simple tokenization simulation (actual CL100K would be more complex)
    const tokens = simpleTokenize(processedText);
    const uniqueTokens = new Set(tokens);
    
    // Update stats
    document.getElementById('tok-count').textContent = tokens.length;
    document.getElementById('tok-unique').textContent = uniqueTokens.size;
    document.getElementById('tok-cost').textContent = `$${(tokens.length * 0.00003).toFixed(4)}`;
    
    // Display tokens
    const tokList = document.getElementById('tok-list');
    tokList.innerHTML = '';
    tokens.forEach((token, i) => {
      const span = document.createElement('span');
      span.className = 'token';
      span.textContent = token;
      span.style.animationDelay = `${i * 0.02}s`;
      tokList.appendChild(span);
    });
    
    // Show insights
    showTokenInsights(tokens.length, text.length);
    
    showToast('Text tokenized successfully!', 'success');
  }
}

function simpleTokenize(text) {
  // Simple tokenization (not actual CL100K, but good enough for demo)
  const tokens = [];
  const words = text.split(/(\s+|[.,!?;:])/);
  
  words.forEach(word => {
    if (word.trim()) {
      if (word.length <= 4) {
        tokens.push(word);
      } else {
        // Split longer words into chunks
        for (let i = 0; i < word.length; i += 4) {
          tokens.push(word.substring(i, i + 4));
        }
      }
    }
  });
  
  return tokens;
}

function showTokenInsights(tokenCount, charCount) {
  const insights = document.getElementById('token-insights');
  let message = '';
  
  if (tokenCount < 100) {
    message = '💡 <strong>Great!</strong> This is a concise prompt that will be fast and cheap to process.';
  } else if (tokenCount < 500) {
    message = '💡 <strong>Good length.</strong> This prompt balances detail with efficiency.';
  } else if (tokenCount < 2000) {
    message = '⚠️ <strong>Getting long.</strong> Consider breaking this into multiple prompts for better results.';
  } else {
    message = '⚠️ <strong>Very long!</strong> This may hit context limits. Try splitting into smaller chunks.';
  }
  
  message += ` <br><small>Ratio: ${(tokenCount / charCount * 100).toFixed(1)}% (${tokenCount} tokens / ${charCount} characters)</small>`;
  
  insights.innerHTML = message;
}

// ============================================
// PROMPT ENGINEERING
// ============================================

function initPromptEngineering() {
  // Example outputs
  document.getElementById('btn-basic-output').addEventListener('click', () => {
    generateBasicOutput();
  });
  
  document.getElementById('btn-eng-output').addEventListener('click', () => {
    generateEngineeredOutput();
  });
  
  // Score prompt
  document.getElementById('btn-score').addEventListener('click', () => {
    scorePrompt();
  });
  
  // Copy prompt
  document.getElementById('btn-copy').addEventListener('click', () => {
    const text = document.getElementById('try-input').value;
    navigator.clipboard.writeText(text);
    showToast('Prompt copied to clipboard!', 'success');
  });
  
  // AI improvement suggestions
  document.getElementById('btn-ai-improve').addEventListener('click', () => {
    showAISuggestions();
  });
}

function generateBasicOutput() {
  const output = document.getElementById('basic-output');
  output.classList.add('loading');
  output.textContent = 'Generating...';
  
  setTimeout(() => {
    output.classList.remove('loading');
    output.textContent = '🚀 Check out our new product! It\'s amazing and will help your business. Click here to learn more. #product #innovation #business';
    showToast('Notice how generic this is?', 'info');
  }, 1500);
}

function generateEngineeredOutput() {
  const output = document.getElementById('eng-output');
  output.classList.add('loading');
  output.textContent = 'Generating...';
  
  setTimeout(() => {
    output.classList.remove('loading');
    output.innerHTML = `<strong>Transform Your Marketing Workflow with AI-Powered Analytics</strong>

Say goodbye to manual reporting! Our new marketing analytics dashboard gives you real-time campaign insights at a glance.

<strong>The result?</strong> Marketing teams save 5+ hours every week on data compilation and reporting. That's time you can invest in strategy and creativity instead of spreadsheets.

Ready to reclaim your time? What's the biggest reporting pain point for your team?

#MarketingAnalytics #MarketingAutomation #ProductivityTools`;
    
    // Show comparison
    const comparison = document.getElementById('result-comparison');
    comparison.innerHTML = '<strong>✨ The Difference:</strong> Specific benefit (5+ hours saved), clear audience (marketing teams), engagement question, professional tone, relevant hashtags. This gets 3x better engagement!';
    
    showToast('Much better! See the difference?', 'success');
  }, 2000);
}

function scorePrompt() {
  const prompt = document.getElementById('try-input').value;
  
  if (!prompt.trim()) {
    showToast('Please enter a prompt first!', 'error');
    return;
  }
  
  const criteria = [
    { name: 'Has clear format/structure specified', check: /format|structure|paragraph|word|bullet/i },
    { name: 'Specifies target audience', check: /audience|for|marketers|managers|customers/i },
    { name: 'Defines tone/voice', check: /tone|voice|professional|casual|friendly/i },
    { name: 'Includes length constraint', check: /\d+\s*(word|character|paragraph)/i },
    { name: 'Provides context or background', check: /.{200,}/s }, // At least 200 chars suggests context
    { name: 'Uses specific examples or details', check: /example|such as|like|including/i },
    { name: 'Has clear call-to-action or goal', check: /CTA|call.to.action|should|must|include/i },
    { name: 'Breaks down complex requests', check: /step|first|then|next|finally|-\s/i },
    { name: 'Specifies what to avoid', check: /don\'t|avoid|not|without/i },
    { name: 'Includes success criteria', check: /should|must|need to|ensure/i }
  ];
  
  let score = 0;
  const scoreList = document.getElementById('score-list');
  scoreList.innerHTML = '';
  
  criteria.forEach(criterion => {
    const passed = criterion.check.test(prompt);
    if (passed) score++;
    
    const li = document.createElement('li');
    li.className = passed ? 'checked' : '';
    li.textContent = criterion.name;
    scoreList.appendChild(li);
  });
  
  // Update score
  document.getElementById('score-meter').style.setProperty('--pct', `${score * 10}%`);
  document.getElementById('score-label').textContent = `Score: ${score}/10`;
  
  // Save best score
  if (score > WorkshopState.bestScore) {
    WorkshopState.bestScore = score;
    WorkshopState.save();
    updateStats();
    showToast(`New personal best: ${score}/10!`, 'success');
  }
  
  // Save prompt
  if (!WorkshopState.prompts.includes(prompt)) {
    WorkshopState.prompts.push(prompt);
    WorkshopState.timeSaved += 0.5; // Estimate 30min saved per good prompt
    WorkshopState.save();
    updateStats();
  }
  
  // Feedback
  const feedback = document.getElementById('score-feedback');
  if (score >= 8) {
    feedback.innerHTML = '<strong>🌟 Excellent!</strong> This is a high-quality prompt that will generate great results.';
    feedback.style.background = '#d1fae5';
    feedback.style.borderColor = '#10b981';
  } else if (score >= 5) {
    feedback.innerHTML = '<strong>👍 Good start!</strong> Try adding more specifics about format, audience, or tone to improve further.';
    feedback.style.background = '#fed7aa';
    feedback.style.borderColor = '#f59e0b';
  } else {
    feedback.innerHTML = '<strong>💡 Needs work.</strong> Apply the 4 principles: be specific, provide context, use examples, break it down.';
    feedback.style.background = '#fee2e2';
    feedback.style.borderColor = '#ef4444';
  }
}

function showAISuggestions() {
  const prompt = document.getElementById('try-input').value;
  const suggestions = document.getElementById('ai-suggestions');
  
  if (!prompt.trim()) {
    showToast('Enter a prompt first!', 'error');
    return;
  }
  
  suggestions.classList.add('active');
  suggestions.innerHTML = '<p><strong>💡 AI Suggestions:</strong></p><ul>' +
    '<li>Add specific word count (e.g., "around 150 words")</li>' +
    '<li>Define your target audience more precisely</li>' +
    '<li>Specify desired tone (professional/casual/witty)</li>' +
    '<li>Include an example of desired output</li>' +
    '<li>Add a clear call-to-action requirement</li>' +
    '</ul>';
}

// Continued in part 2...
// Enhanced Workshop App - Part 2: Templates, Agent Builder, Challenges

// ============================================
// TEMPLATES
// ============================================

function initTemplates() {
  // Quick start examples
  document.querySelectorAll('.template-examples .btn-example').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('tpl-task').value = btn.dataset.task;
      document.getElementById('tpl-vars').value = btn.dataset.vars;
      document.getElementById('tpl-instr').value = btn.dataset.instr;
    });
  });
  
  // Generate template
  document.getElementById('btn-make-template').addEventListener('click', generateTemplate);
  
  // Copy template
  document.getElementById('btn-copy-template').addEventListener('click', () => {
    const text = document.getElementById('tpl-output').textContent;
    if (text) {
      navigator.clipboard.writeText(text);
      showToast('Template copied!', 'success');
    }
  });
  
  // Save to library
  document.getElementById('btn-save-template').addEventListener('click', saveTemplate);
  
  // Download template
  document.getElementById('btn-download-template').addEventListener('click', downloadTemplate);
  
  // Load saved templates
  loadTemplateLibrary();
}

function generateTemplate() {
  const task = document.getElementById('tpl-task').value.trim();
  const vars = document.getElementById('tpl-vars').value.trim();
  const instr = document.getElementById('tpl-instr').value.trim();
  
  if (!task || !instr) {
    showToast('Please fill in task and instructions!', 'error');
    return;
  }
  
  const varList = vars.split(',').map(v => v.trim()).filter(v => v);
  const varPlaceholders = varList.map(v => `{${v}}`).join(', ');
  
  const template = `# ${task} Template

## Variables
${varList.map(v => `- {${v}}`).join('\n')}

## Instructions
${instr}

## Usage
Fill in the variables below and run this prompt:

---

${instr}

${varList.map(v => `${v}: {${v}}`).join('\n')}

---

## Example Output Format
[Describe what good output looks like]

---

**Created:** ${new Date().toLocaleDateString()}
**Template ID:** TPL-${Date.now()}
`;

  document.getElementById('tpl-output').textContent = template;
  showToast('Template generated!', 'success');
  
  // Track stats
  WorkshopState.timeSaved += 1; // Estimate 1 hour saved per template created
  WorkshopState.save();
  updateStats();
}

function saveTemplate() {
  const task = document.getElementById('tpl-task').value.trim();
  const template = document.getElementById('tpl-output').textContent;
  
  if (!template || template === '') {
    showToast('Generate a template first!', 'error');
    return;
  }
  
  const templateObj = {
    id: `TPL-${Date.now()}`,
    task,
    content: template,
    created: new Date().toISOString()
  };
  
  WorkshopState.templates.push(templateObj);
  WorkshopState.save();
  updateStats();
  
  loadTemplateLibrary();
  showToast('Template saved to library!', 'success');
}

function loadTemplateLibrary() {
  const grid = document.getElementById('saved-templates');
  
  if (WorkshopState.templates.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>No templates yet. Create your first one below! 👇</p></div>';
    return;
  }
  
  grid.innerHTML = '';
  WorkshopState.templates.forEach((template, index) => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.innerHTML = `
      <h4>${template.task}</h4>
      <div class="template-card-meta">
        <span>${new Date(template.created).toLocaleDateString()}</span>
        <button class="btn-small" onclick="loadTemplate(${index})">Load</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

window.loadTemplate = function(index) {
  const template = WorkshopState.templates[index];
  document.getElementById('tpl-output').textContent = template.content;
  showToast('Template loaded!', 'success');
};

function downloadTemplate() {
  const template = document.getElementById('tpl-output').textContent;
  const task = document.getElementById('tpl-task').value.trim() || 'template';
  
  if (!template) {
    showToast('Generate a template first!', 'error');
    return;
  }
  
  const blob = new Blob([template], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${task.toLowerCase().replace(/\s+/g, '-')}-template.md`;
  a.click();
  URL.revokeObjectURL(url);
  
  showToast('Template downloaded!', 'success');
}

// ============================================
// AGENT BUILDER
// ============================================

function initAgentBuilder() {
  // Navigation
  document.getElementById('btn-next-step').addEventListener('click', nextAgentStep);
  document.getElementById('btn-prev-step').addEventListener('click', prevAgentStep);
  
  // Quick fill examples
  document.querySelectorAll('.examples .btn-small[data-name]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('agent-name').value = btn.dataset.name;
    });
  });
  
  document.getElementById('use-template-instr').addEventListener('click', () => {
    document.getElementById('agent-instructions').value = `You are a marketing assistant for [Company Name].

Your role:
- Draft and optimize campaign content
- Maintain brand voice: [professional/casual/witty]
- Always include measurable benefits
- Always include clear CTAs
- Format content for [LinkedIn/Email/Ads]

Quality standards:
- Check for clarity and conciseness
- Ensure claims are specific and believable
- Match the requested tone exactly`;
  });
  
  // Test agent
  document.getElementById('btn-test-agent').addEventListener('click', testAgent);
  
  // Download agent config
  document.getElementById('btn-download-agent').addEventListener('click', downloadAgentConfig);
  
  // Load saved agent progress
  loadAgentProgress();
}

function nextAgentStep() {
  const currentStep = WorkshopState.agent.step;
  if (currentStep >= 5) return;
  
  // Validate current step
  if (!validateAgentStep(currentStep)) return;
  
  // Save current step data
  saveAgentStepData(currentStep);
  
  // Move to next step
  WorkshopState.agent.step = currentStep + 1;
  showAgentStep(WorkshopState.agent.step);
  WorkshopState.save();
}

function prevAgentStep() {
  const currentStep = WorkshopState.agent.step;
  if (currentStep <= 1) return;
  
  WorkshopState.agent.step = currentStep - 1;
  showAgentStep(WorkshopState.agent.step);
  WorkshopState.save();
}

function showAgentStep(step) {
  // Hide all steps
  document.querySelectorAll('.builder-step').forEach(s => {
    s.classList.remove('active');
  });
  
  // Show current step
  document.querySelector(`[data-step="${step}"]`).classList.add('active');
  
  // Update navigation
  document.getElementById('step-indicator').textContent = `Step ${step} of 5`;
  document.getElementById('btn-prev-step').disabled = step === 1;
  document.getElementById('btn-next-step').textContent = step === 5 ? 'Finish' : 'Next →';
}

function validateAgentStep(step) {
  switch(step) {
    case 1:
      const name = document.getElementById('agent-name').value.trim();
      if (!name) {
        showToast('Please name your agent!', 'error');
        return false;
      }
      return true;
    case 2:
      const instructions = document.getElementById('agent-instructions').value.trim();
      if (!instructions) {
        showToast('Please add instructions!', 'error');
        return false;
      }
      return true;
    default:
      return true;
  }
}

function saveAgentStepData(step) {
  switch(step) {
    case 1:
      WorkshopState.agent.name = document.getElementById('agent-name').value.trim();
      break;
    case 2:
      WorkshopState.agent.instructions = document.getElementById('agent-instructions').value.trim();
      break;
    case 3:
      WorkshopState.agent.tools = [];
      if (document.getElementById('tool-web').checked) WorkshopState.agent.tools.push('web');
      if (document.getElementById('tool-data').checked) WorkshopState.agent.tools.push('data');
      if (document.getElementById('tool-image').checked) WorkshopState.agent.tools.push('image');
      break;
  }
}

function loadAgentProgress() {
  // Restore agent data
  if (WorkshopState.agent.name) {
    document.getElementById('agent-name').value = WorkshopState.agent.name;
  }
  if (WorkshopState.agent.instructions) {
    document.getElementById('agent-instructions').value = WorkshopState.agent.instructions;
  }
  if (WorkshopState.agent.tools) {
    if (WorkshopState.agent.tools.includes('web')) document.getElementById('tool-web').checked = true;
    if (WorkshopState.agent.tools.includes('data')) document.getElementById('tool-data').checked = true;
    if (WorkshopState.agent.tools.includes('image')) document.getElementById('tool-image').checked = true;
  }
  
  // Show correct step
  showAgentStep(WorkshopState.agent.step);
}

function testAgent() {
  const prompt = document.getElementById('agent-test-prompt').value.trim();
  const output = document.getElementById('agent-test-output');
  
  if (!prompt) {
    showToast('Enter a test prompt!', 'error');
    return;
  }
  
  output.innerHTML = '<p style="color: #64748b;">Simulating agent response...</p>';
  
  setTimeout(() => {
    const agentName = WorkshopState.agent.name || 'Marketing Agent';
    const toolsUsed = WorkshopState.agent.tools.join(', ') || 'none';
    
    output.innerHTML = `
      <p><strong>${agentName} Response:</strong></p>
      <p style="margin: 1rem 0; padding: 1rem; background: #f8fafc; border-radius: 8px;">
        I'll help you with that! Here are 3 LinkedIn posts for your analytics feature:
        
        <strong>Post 1: ROI Focus</strong>
        "Stop drowning in spreadsheets. Our new analytics dashboard delivers real-time campaign insights that save marketing teams 5+ hours every week. That's 260 hours per year you can reinvest in strategy. What would you do with an extra workweek each month? #MarketingAnalytics #ProductivityHacks"
        
        <strong>Post 2: Ease of Use</strong>
        "Complex analytics, simple dashboard. We built our marketing analytics platform for humans, not data scientists. Set up in 5 minutes, insights in seconds. Your team will actually USE this one. Ready to ditch the complexity? #MarketingTech #MarketingDashboard"
        
        <strong>Post 3: Team Collaboration</strong>
        "When your entire marketing team can access the same real-time data, magic happens. Our analytics dashboard breaks down silos and gets everyone on the same page—literally. How does your team share campaign insights today? #TeamCollaboration #MarketingAnalytics"
      </p>
      <p><small>🔧 Tools used: ${toolsUsed}<br>⏱️ Response time: 2.3s</small></p>
    `;
    
    // Show summary
    updateAgentSummary();
    showToast('Agent test successful!', 'success');
    
    // Track time saved
    WorkshopState.timeSaved += 0.5;
    WorkshopState.save();
    updateStats();
  }, 2000);
}

function updateAgentSummary() {
  const summary = document.getElementById('agent-summary');
  const agent = WorkshopState.agent;
  
  summary.innerHTML = `
    <h4>✅ Your Agent is Ready!</h4>
    <div style="display: grid; gap: 1rem; margin-top: 1rem;">
      <div><strong>Name:</strong> ${agent.name}</div>
      <div><strong>Tools:</strong> ${agent.tools.length > 0 ? agent.tools.join(', ') : 'None selected'}</div>
      <div><strong>Instructions:</strong> ${agent.instructions.substring(0, 100)}...</div>
    </div>
    <p style="margin-top: 1rem; color: #64748b;">
      <strong>Next:</strong> Take this configuration to OpenAI's Agent Builder to create the real thing!
    </p>
  `;
}

function downloadAgentConfig() {
  const agent = WorkshopState.agent;
  
  const config = {
    name: agent.name,
    instructions: agent.instructions,
    tools: agent.tools,
    created: new Date().toISOString(),
    workshop: 'session-2'
  };
  
  const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${agent.name.toLowerCase().replace(/\s+/g, '-')}-agent-config.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  showToast('Agent configuration downloaded!', 'success');
}

// ============================================
// CHALLENGES
// ============================================

function initChallenges() {
  // Submit buttons
  document.querySelectorAll('.challenge-actions .btn.primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const challengeId = parseInt(e.target.dataset.challengeId);
      submitChallenge(challengeId);
    });
  });
  
  // Hint buttons
  document.querySelectorAll('.challenge-actions .btn.ghost[data-hint]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const hintId = e.target.dataset.hint;
      showHint(hintId);
    });
  });
  
  // Update leaderboard
  updateChallengeLeaderboard();
}

function submitChallenge(challengeId) {
  const input = document.getElementById(`challenge-${challengeId}-input`).value.trim();
  const result = document.getElementById(`challenge-${challengeId}-result`);
  
  if (!input) {
    showToast('Please enter your solution!', 'error');
    return;
  }
  
  // Score the solution
  const score = scoreChallenge(challengeId, input);
  
  // Show result
  result.classList.add('show');
  result.className = `challenge-result show ${score.level}`;
  result.innerHTML = `
    <h4>${score.level === 'success' ? '🎉 Excellent!' : '👍 Good Attempt!'}</h4>
    <p><strong>Score:</strong> ${score.points}/100</p>
    <p>${score.feedback}</p>
    ${score.tips ? `<p><strong>Tips:</strong> ${score.tips}</p>` : ''}
  `;
  
  // Save progress
  if (!WorkshopState.challenges.completed.includes(challengeId)) {
    WorkshopState.challenges.completed.push(challengeId);
  }
  WorkshopState.challenges.scores[challengeId] = score.points;
  WorkshopState.timeSaved += score.points / 20; // Estimate time saved based on quality
  WorkshopState.save();
  
  updateChallengeLeaderboard();
  updateStats();
  
  if (score.points >= 80) {
    showToast(`Challenge ${challengeId} completed!`, 'success');
  }
}

function scoreChallenge(challengeId, solution) {
  let points = 0;
  let feedback = '';
  let tips = '';
  let level = 'partial';
  
  const s = solution.toLowerCase();
  
  switch(challengeId) {
    case 1: // LinkedIn Posts
      if (s.includes('linkedin')) points += 20;
      if (/\d+\s*(hour|hr|h)/i.test(solution)) points += 20;
      if (s.includes('?')) points += 20;
      if (/#\w+/g.test(solution)) points += 20;
      if (solution.length > 200) points += 20;
      
      if (points >= 80) {
        feedback = 'Great prompt! You included all key elements: platform, time savings, engagement, hashtags, and good length.';
        level = 'success';
      } else {
        feedback = 'Good start! Your prompt has some key elements.';
        tips = 'Make sure to specify: LinkedIn as platform, time savings metric, engagement question, and hashtags.';
      }
      break;
      
    case 2: // Email Template
      if (/{.*}/g.test(solution)) points += 30;
      if (s.includes('subject') || s.includes('headline')) points += 20;
      if (s.includes('cta') || s.includes('call to action')) points += 20;
      if (s.includes('tone') || s.includes('voice')) points += 15;
      if (s.includes('segment') || s.includes('personali')) points += 15;
      
      if (points >= 80) {
        feedback = 'Excellent template! You included variables, structure, tone guidance, and personalization.';
        level = 'success';
      } else {
        feedback = 'Good template foundation.';
        tips = 'Add: variables in {brackets}, subject line structure, CTA requirements, tone options, and segment variations.';
      }
      break;
      
    case 3: // Campaign Agent
      if (s.includes('csv') || s.includes('data') || s.includes('file')) points += 25;
      if (s.includes('analy') || s.includes('insight')) points += 25;
      if (s.includes('summar') || s.includes('report')) points += 25;
      if (s.includes('recommend') || s.includes('suggest')) points += 25;
      
      if (points >= 80) {
        feedback = 'Outstanding agent design! You covered data analysis, insights, reporting, and recommendations.';
        level = 'success';
      } else {
        feedback = 'Good agent concept.';
        tips = 'Include: CSV upload capability, analysis methods, summary format, and actionable recommendations.';
      }
      break;
  }
  
  return { points, feedback, tips, level };
}

function showHint(hintId) {
  const hints = {
    '1': 'Think about what makes a great LinkedIn post: clear value proposition, specific metrics (like "5+ hours saved"), a question to drive engagement, and relevant hashtags. Structure your prompt to request all of these elements.',
    '2': 'Great templates have: 1) Variables in {curly_braces} for customization, 2) Clear structure (Subject + Body + CTA), 3) Tone options (professional/casual), 4) Examples of good output, 5) Segment-specific variations.',
    '3': 'Design your agent with these capabilities: 1) Accept CSV uploads (data analysis tool), 2) Identify patterns and outliers, 3) Generate executive summaries in a specific format, 4) Provide channel-specific recommendations based on performance data.'
  };
  
  showToast(`💡 ${hints[hintId]}`, 'info');
}

function updateChallengeLeaderboard() {
  const completed = WorkshopState.challenges.completed.length;
  const totalScore = Object.values(WorkshopState.challenges.scores).reduce((a, b) => a + b, 0);
  
  document.querySelector('#challenges-completed .achievement-value').textContent = `${completed} / 3`;
  document.querySelector('#total-score .achievement-value').textContent = `${totalScore} points`;
}

// ============================================
// EXPORT FUNCTIONALITY
// ============================================

function initExport() {
  document.getElementById('export-work').addEventListener('click', exportWorkshopData);
  document.getElementById('export-work-final').addEventListener('click', exportWorkshopData);
  document.getElementById('reset-workshop').addEventListener('click', () => {
    if (confirm('Are you sure? This will delete all your progress.')) {
      WorkshopState.reset();
    }
  });
}

function exportWorkshopData() {
  const data = {
    workshop: 'Session 2: AI Agents for Marketing',
    exported: new Date().toISOString(),
    stats: {
      promptsCreated: WorkshopState.prompts.length,
      templatesBuilt: WorkshopState.templates.length,
      bestScore: WorkshopState.bestScore,
      timeSaved: WorkshopState.timeSaved,
      challengesCompleted: WorkshopState.challenges.completed.length,
      sectionsCompleted: WorkshopState.completedSections.length
    },
    prompts: WorkshopState.prompts,
    templates: WorkshopState.templates,
    agent: WorkshopState.agent,
    challenges: WorkshopState.challenges
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `workshop-session2-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  showToast('All your work has been exported!', 'success');
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Load saved state
  const hasState = WorkshopState.load();
  if (hasState) {
    showToast('Welcome back! Your progress has been restored.', 'success');
  }
  
  // Initialize all modules
  initCopilot();
  initTokenization();
  initPromptEngineering();
  initTemplates();
  initAgentBuilder();
  initChallenges();
  initExport();
  setupSectionTracking();
  
  // Update UI
  updateProgress();
  updateStats();
  
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Progress step navigation
  document.querySelectorAll('.progress-steps .step').forEach(step => {
    step.addEventListener('click', () => {
      const section = step.dataset.section;
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  console.log('🤖 Workshop Session 2 Enhanced - Ready!');
});
