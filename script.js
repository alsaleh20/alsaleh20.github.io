const featuredWebsites = [
  {
    name: 'Pure Touch Plus',
    html_url: 'https://puretouchplus.com/',
    description: 'موقع شركة Pure Touch Plus المتخصصة في خدمات التنظيف والتعقيم الاحترافية الشاملة.',
    language: 'Website',
    stargazers_count: 'Live'
  },
  {
    name: 'السلط تايم',
    html_url: 'https://ashrafaldbas.com/',
    description: 'موقع إخباري مخصص لنشر أخبار مدينة السلط والمملكة الأردنية الهاشمية.',
    language: 'Website',
    stargazers_count: 'Live'
  }
];

const fallbackProjects = [
  {
    name: 'linkedin_ai.skill',
    html_url: 'https://github.com/alsaleh20/linkedin_ai.skill',
    description: 'مهارة الذكاء الاصطناعي الخاصة بأتمتة وصناعة المحتوى والتفاعل على منصة LinkedIn.',
    language: 'AI Skill',
    stargazers_count: 1
  },
  {
    name: 'n8n_master.skill',
    html_url: 'https://github.com/alsaleh20/n8n_master.skill',
    description: 'حزمة المهارات المتقدمة لبناء وأتمتة سيناريوهات وسير عمليات n8n الاحترافية.',
    language: 'n8n',
    stargazers_count: 1
  },
  {
    name: 'PayFlow',
    html_url: 'https://github.com/alsaleh20/PayFlow',
    description: 'مشروع PayFlow AR المتخصص في إدارة وتسهيل عمليات الدفع والتدفق المالي.',
    language: 'PHP',
    stargazers_count: 1
  }
];

const fallbackWorkflows = [
  {
    id: '1',
    name: 'معالجة حضور الطلاب (Ollama + n8n)',
    description: 'أتمتة ذكية تستخدم نموذج Ollama لمعالجة بيانات حضور الطلاب وإرسال تقرير فوري عبر تليجرام.',
    fileUrl: 'workflows/student_attendance.json',
    active: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'تجميع ونشر الأخبار تلقائياً على Telegram',
    description: 'سير عمل يقوم بسحب الأخبار من قنوات تليجرام متعددة، تنظيف النصوص برمجياً، وإعادة نشرها تلقائياً.',
    fileUrl: 'workflows/telegram_news_aggregator.json',
    active: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'بوابة إشعارات الويب الموحدة (Webhook Notification Hub)',
    description: 'نظام موحد لاستقبال وتصنيف إشعارات الموقع الإلكتروني (الرسائل، الطلبات، الأخطاء، والنجاحات) وإرسالها فوراً إلى قنوات تليجرام المحددة.',
    fileUrl: 'workflows/unified_webhook_input.json',
    active: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'توليد العملاء والبريد البارد (Gemini + GPT-4)',
    description: 'منظومة متكاملة لجمع بيانات الشركات محلياً، استخراج البريد الإلكتروني باستخدام Gemini، وإرسال بريد تسويقي عبر GPT-4.',
    fileUrl: 'workflows/ai_lead_generator.json',
    active: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'وكيل إدارة المهام الذكي (Google Sheets + GPT-4o)',
    description: 'وكيل ذكاء اصطناعي تفاعلي (AI Agent) يدير قائمة المهام داخل Google Sheets بالكامل من خلال فهم الأوامر وإضافتها وتحديثها وحذفها.',
    fileUrl: 'workflows/google_sheets_task_agent.json',
    active: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: '6',
    name: 'مساعد البريد عبر تليجرام (Telegram Gmail Assistant Agent)',
    description: 'مساعد ذكي يتيح صياغة، ومراجعة، وحفظ الإيميلات كمسودات، وإرسالها مباشرة من تليجرام باستخدام Gemini.',
    fileUrl: 'workflows/telegram_gmail_assistant.json',
    active: true,
    updatedAt: new Date().toISOString()
  }
];

function renderProjects(repos) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const hiddenRepos = ['alsaleh20.github.io'];
  const filteredRepos = repos.filter(repo => !repo.fork && !hiddenRepos.includes((repo.name || '').toLowerCase()));

  if (filteredRepos.length === 0) {
    container.innerHTML = '<p class="no-projects">لا توجد مشاريع عامة حالياً.</p>';
    return;
  }

  container.innerHTML = '';
  filteredRepos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const safeTitle = escapeHTML(repo.name);
    const safeDesc = escapeHTML(repo.description || 'مشروع مميز من مشاريع alsaleh20 المتاحة على GitHub.');
    const safeLang = repo.language ? escapeHTML(repo.language) : null;
    const safeUrl = escapeHTML(repo.html_url);
    
    card.innerHTML = `
      <h3 class="project-title">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeTitle}</a>
      </h3>
      <p class="project-desc">${safeDesc}</p>
      <div class="project-meta">
        ${safeLang ? `<span class="project-lang"><span class="lang-dot" style="background-color: ${getLanguageColor(repo.language)}"></span>${safeLang}</span>` : ''}
        <span class="project-stars">⭐ ${repo.stargazers_count || 0}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderWorkflows(workflows) {
  const container = document.getElementById('n8n-container');
  if (!container) return;

  if (workflows.length === 0) {
    container.innerHTML = '<p class="no-projects">لا توجد أتمتة نشطة حالياً.</p>';
    return;
  }

  container.innerHTML = '';
  workflows.forEach(flow => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const safeTitle = escapeHTML(flow.name);
    const safeDesc = escapeHTML(flow.description || 'أتمتة سير عمل نشطة وجاهزة للاستخدام في منصة n8n.');
    const formattedDate = new Date(flow.updatedAt).toLocaleDateString('ar-JO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const fileUrl = flow.fileUrl ? escapeHTML(flow.fileUrl) : null;
    
    card.innerHTML = `
      <h3 class="project-title" style="color: var(--white); margin-bottom: 0.5rem;">
        ${safeTitle}
      </h3>
      <p class="project-desc">${safeDesc}</p>
      <div class="project-meta" style="margin-top: 0.75rem;">
        <span class="project-lang">
          <span class="lang-dot" style="background-color: var(--green)"></span>
          ${flow.active ? 'نشط' : 'غير نشط'}
        </span>
        ${fileUrl ? `<a href="${fileUrl}" download style="color: var(--green); text-decoration: none; font-size: 0.8rem; font-weight: bold; margin-right: auto;">📥 تحميل JSON</a>` : ''}
        <span class="project-stars" style="margin-left: 0.5rem;">📅 ${formattedDate}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

async function fetchProjects() {
  const username = 'alsaleh20';
  const container = document.getElementById('projects-container');
  if (!container) return;

  try {
    const cachedData = localStorage.getItem('alsaleh20_repos_cache');
    if (cachedData) {
      const parsed = JSON.parse(cachedData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        renderProjects(parsed);
      }
    }
  } catch (e) {
    console.warn('Cache read error:', e);
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (response.ok) {
      const repos = await response.json();
      if (Array.isArray(repos) && repos.length > 0) {
        localStorage.setItem('alsaleh20_repos_cache', JSON.stringify(repos));
        renderProjects(repos);
        return;
      }
    }
  } catch (error) {
    console.warn('Direct GitHub API limited/blocked, trying CORS proxy...', error);
  }

  try {
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)}`;
    const proxyResponse = await fetch(proxyUrl);
    if (proxyResponse.ok) {
      const repos = await proxyResponse.json();
      if (Array.isArray(repos) && repos.length > 0) {
        localStorage.setItem('alsaleh20_repos_cache', JSON.stringify(repos));
        renderProjects(repos);
        return;
      }
    }
  } catch (proxyError) {
    console.warn('Proxy fetch failed, rendering real fallback repos.', proxyError);
  }

  renderProjects(fallbackProjects);
}

async function fetchN8NWorkflows() {
  const webhookUrl = 'https://nonapplicatory-hitchier-tu.ngrok-free.dev/webhook/get-latest-automations';
  
  try {
    const cachedData = localStorage.getItem('n8n_workflows_cache');
    if (cachedData) {
      const parsed = JSON.parse(cachedData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        renderWorkflows(parsed);
      }
    }
  } catch (e) {
    console.warn('n8n Cache read error:', e);
  }

  try {
    const response = await fetch(webhookUrl);
    if (response.ok) {
      const workflows = await response.json();
      if (Array.isArray(workflows) && workflows.length > 0) {
        localStorage.setItem('n8n_workflows_cache', JSON.stringify(workflows));
        renderWorkflows(workflows);
        return;
      }
    }
  } catch (error) {
    console.warn('Failed to fetch from n8n webhook, using fallback workflows', error);
  }

  renderWorkflows(fallbackWorkflows);
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getLanguageColor(lang) {
  const colors = {
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    TypeScript: '#3178c6',
    PHP: '#4F5D95',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Java: '#b07219',
    Go: '#00ADD8',
    Rust: '#dea584',
    Shell: '#89e051'
  };
  return colors[lang] || '#8b949e';
}

// ============================================================
// Interactive Terminal CLI Logic
// ============================================================
const cliInput = document.getElementById('cli-input');
const cliBody = document.getElementById('cli-body');
let commandHistory = [];
let historyIndex = -1;

if (cliInput) {
  cliInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const command = this.value.trim();
      if (command) {
        commandHistory.push(command);
        historyIndex = commandHistory.length;
        executeCommand(command);
      }
      this.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        this.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        this.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        this.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const currentVal = this.value.trim().toLowerCase();
      if (currentVal) {
        const commands = [
          'about', 'skills', 'projects', 'contact', 'clear', 'github', 'help', 
          'puretouch', 'salttime', 'ashraf', 'valve-steam',
          'matrix', 'cyberpunk', 'neon', 'hacker', 'hack', 'sudo', 'party', 'celebrate', 'secret', 'vault'
        ];
        const matches = commands.filter(cmd => cmd.startsWith(currentVal));
        if (matches.length > 0) {
          this.value = matches[0];
        }
      }
    }
  });
}

function appendTerminalLine(text, className = '') {
  const line = document.createElement('div');
  line.className = `terminal-line ${className}`;
  line.textContent = text;
  
  const inputLine = cliBody.querySelector('.terminal-input-line');
  cliBody.insertBefore(line, inputLine);
  cliBody.scrollTop = cliBody.scrollHeight;
}

function executeCommand(cmd) {
  appendTerminalLine(`guest@alhayari:~$ ${cmd}`, 'terminal-command-response');

  const parts = cmd.trim().split(/\s+/);
  const mainCmd = parts[0].toLowerCase();
  const arg = parts[1] ? parts[1].toLowerCase() : '';

  switch(mainCmd) {
    case 'help':
      if (arg === '--sudo' || arg === '-sudo') {
        triggerHackerFallEffect();
      } else {
        appendTerminalLine('Available commands:\n' +
                           '  about      - Show information about Alsaleh Al-Hayari\n' +
                           '  skills     - List technical skills and proficiency\n' +
                           '  projects   - Show key portfolio projects\n' +
                           '  puretouch  - Open Pure Touch Plus website\n' +
                           '  salttime   - Open Salt Time news website\n' +
                           '  contact    - Options: -wa, -git, -link\n' +
                           '  clear      - Clear the terminal screen');
      }
      break;
    case 'about':
      appendTerminalLine('Name: Alsaleh Al-Hayari\n' +
                         'Role: Server Administrator & Automation Expert (n8n)\n' +
                         'Location: Salt, Jordan\n' +
                         'Bio: I design workflows, deploy web servers, configure secure Linux systems, and connect APIs.');
      break;
    case 'skills':
      appendTerminalLine('[ Server Administration ]  ██████████████████ 90%\n' +
                         '[ n8n / Automations ]      ████████████████████ 95%\n' +
                         '[ Linux / Bash Scripting ] ████████████████ 85%\n' +
                         '[ Frontend Web (HTML/JS) ] ██████████████ 70%');
      break;
    case 'projects':
      appendTerminalLine('Featured Web Projects:\n' +
                         '1. Pure Touch Plus   - Cleaning & Sterilization Service Website (https://puretouchplus.com/)\n' +
                         '2. Salt Time News    - Salt Time News Website (https://ashrafaldbas.com/)\n\n' +
                         'GitHub Repositories:\n' +
                         '3. linkedin_ai.skill  - Content creation automation for LinkedIn\n' +
                         '4. n8n_master.skill  - Advanced n8n workflow templates\n' +
                         '5. PayFlow           - Financial flow & payment management system\n\n' +
                         'n8n Workflows:\n' +
                         '6. Student Attendance Processing (Ollama + n8n)\n' +
                         '7. Telegram News Aggregator Scraper\n' +
                         '8. Unified Webhook Notifications Hub\n' +
                         '9. AI Lead Generator & Cold Outreach (Gemini + GPT-4)\n' +
                         '10. Task Management AI Agent (Google Sheets + GPT-4o)\n' +
                         '11. Telegram Gmail Assistant Agent (Gemini)\n\n' +
                         'Type "puretouch", "salttime", or "github" to open them.');
      break;
    case 'puretouch':
      appendTerminalLine('Opening Pure Touch Plus...');
      window.open('https://puretouchplus.com/', '_blank');
      break;
    case 'salttime':
    case 'ashraf':
      appendTerminalLine('Opening Salt Time News...');
      window.open('https://ashrafaldbas.com/', '_blank');
      break;
    case 'contact':
      if (arg === '-wa') {
        appendTerminalLine('Opening WhatsApp chat 1...');
        window.open('https://wa.me/962775858328', '_blank');
      } else if (arg === '-wa2') {
        appendTerminalLine('Opening WhatsApp chat 2...');
        window.open('https://wa.me/962779511729', '_blank');
      } else if (arg === '-mail') {
        appendTerminalLine('Opening email composer...');
        window.open('mailto:alsalehhiary@gmail.com', '_self');
      } else if (arg === '-git') {
        appendTerminalLine('Opening GitHub profile...');
        window.open('https://github.com/alsaleh20', '_blank');
      } else if (arg === '-link') {
        appendTerminalLine('Opening LinkedIn profile...');
        window.open('https://www.linkedin.com/in/alsaleh-hyari-b2b5b5392/', '_blank');
      } else if (arg === '-insta') {
        appendTerminalLine('Opening Instagram profile...');
        window.open('https://instagram.com/k_alsaleh20_', '_blank');
      } else if (arg === '-x') {
        appendTerminalLine('Opening X profile...');
        window.open('https://x.com/k_alsaleh20', '_blank');
      } else if (arg === '-yt') {
        appendTerminalLine('Opening YouTube channel...');
        window.open('https://www.youtube.com/@alsaleh20', '_blank');
      } else if (arg === '-fb') {
        appendTerminalLine('Opening Facebook profile...');
        window.open('https://www.facebook.com/alsaleh.hiary.2025', '_blank');
      } else {
        appendTerminalLine('Usage: contact [option]\n' +
                           'Options:\n' +
                           '  -wa    : Open WhatsApp chat 1 (+962775858328)\n' +
                           '  -wa2   : Open WhatsApp chat 2 (+962779511729)\n' +
                           '  -mail  : Send an Email (alsalehhiary@gmail.com)\n' +
                           '  -git   : Open GitHub profile\n' +
                           '  -link  : Open LinkedIn profile\n' +
                           '  -insta : Open Instagram profile\n' +
                           '  -x     : Open X (Twitter) profile\n' +
                           '  -yt    : Open YouTube channel\n' +
                           '  -fb    : Open Facebook profile\n' +
                           'Example: contact -mail');
      }
      break;
    case 'github':
      appendTerminalLine('Opening GitHub profile...');
      window.open('https://github.com/alsaleh20', '_blank');
      break;
    case 'clear':
      const lines = cliBody.querySelectorAll('.terminal-line, .terminal-welcome');
      lines.forEach(line => line.remove());
      // Reset Easter Egg themes
      const windowElem = document.querySelector('.terminal-window');
      if (windowElem) {
        windowElem.classList.remove('matrix-mode', 'cyberpunk-mode', 'hacker-mode');
      }
      // Restore fallen elements
      document.querySelectorAll('.falling-element').forEach(el => el.classList.remove('falling-element'));
      break;

    // ============================================================
    // Hidden Easter Egg Commands (Not shown in 'help')
    // ============================================================
    case 'valve-steam':
      triggerValveSteamPrank();
      break;

    // ============================================================
    // Hidden Easter Egg Commands (Not shown in 'help')
    // ============================================================
    case 'matrix':
      triggerMatrixEffect();
      break;
    case 'cyberpunk':
    case 'neon':
      triggerCyberpunkEffect();
      break;
    case 'hacker':
    case 'hack':
      triggerHackerEffect();
      break;
    case 'sudo':
      triggerSudoEffect();
      break;
    case 'party':
    case 'celebrate':
      triggerPartyEffect();
      break;
    case 'secret':
    case 'vault':
      appendTerminalLine('🔓 SECRET UNLOCKED:\n' +
                         '✨ "Creativity is intelligence having fun." - Albert Einstein\n' +
                         '🚀 You found the hidden Easter Egg! Try typing: matrix, cyberpunk, hacker, sudo, or party.', 'matrix-text');
      break;

    default:
      appendTerminalLine(`bash: command not found: ${cmd}. Type 'help' for options.`, 'terminal-error');
  }
}

// Helper Functions for Secret Easter Eggs
function triggerMatrixEffect() {
  const windowElem = document.querySelector('.terminal-window');
  if (windowElem) {
    windowElem.classList.remove('cyberpunk-mode', 'hacker-mode');
    windowElem.classList.add('matrix-mode', 'glitch-effect');
    setTimeout(() => windowElem.classList.remove('glitch-effect'), 600);
  }
  appendTerminalLine('Entering Matrix visual mode...', 'matrix-text');
  
  const matrixChars = '01010101010101010101010101010101';
  let count = 0;
  const interval = setInterval(() => {
    let lineText = '';
    for(let i = 0; i < 45; i++) {
      lineText += Math.random() > 0.5 ? '1 ' : '0 ';
    }
    appendTerminalLine(lineText, 'matrix-text');
    count++;
    if (count > 6) {
      clearInterval(interval);
      appendTerminalLine('[ System Encrypted & Ready ]', 'matrix-text');
    }
  }, 100);
}

function triggerCyberpunkEffect() {
  const windowElem = document.querySelector('.terminal-window');
  if (windowElem) {
    windowElem.classList.remove('matrix-mode', 'hacker-mode');
    windowElem.classList.add('cyberpunk-mode', 'glitch-effect');
    setTimeout(() => windowElem.classList.remove('glitch-effect'), 600);
  }
  appendTerminalLine('⚡ CYBERPUNK NEON OVERDRIVE ACTIVATED ⚡', 'cyberpunk-text');
}

function triggerHackerEffect() {
  const windowElem = document.querySelector('.terminal-window');
  if (windowElem) {
    windowElem.classList.remove('matrix-mode', 'cyberpunk-mode');
    windowElem.classList.add('hacker-mode', 'glitch-effect');
    setTimeout(() => windowElem.classList.remove('glitch-effect'), 600);
  }
  appendTerminalLine('🚨 ACCESS GRANTED - ROOT LEVEL PROTOCOLS INITIALIZED...', 'hacker-text');
}

function triggerSudoEffect() {
  const windowElem = document.querySelector('.terminal-window');
  if (windowElem) {
    windowElem.classList.add('glitch-effect');
    setTimeout(() => windowElem.classList.remove('glitch-effect'), 600);
  }
  appendTerminalLine('guest IS NOT IN THE SUDOERS FILE. THIS INCIDENT WILL BE REPORTED TO ALSALEH! 🚨', 'terminal-error');
}

function triggerPartyEffect() {
  appendTerminalLine('🎉 🥳 PARTY TIME! 🎉 🥳', 'cyberpunk-text');
  appendTerminalLine('✨ 🚀 Welcome to Alsaleh Al-Hayari Portfolio! 🚀 ✨', 'matrix-text');
  const windowElem = document.querySelector('.terminal-window');
  if (windowElem) {
    windowElem.classList.add('cyberpunk-mode', 'glitch-effect');
    setTimeout(() => windowElem.classList.remove('glitch-effect'), 600);
  }
}

function triggerValveSteamPrank() {
  const windowElem = document.querySelector('.terminal-window');
  if (windowElem) {
    windowElem.classList.remove('matrix-mode', 'cyberpunk-mode');
    windowElem.classList.add('hacker-mode', 'glitch-effect');
    setTimeout(() => windowElem.classList.remove('glitch-effect'), 800);
  }
  
  appendTerminalLine('⚠️ [VALVE ANTI-CHEAT PROTOCOL ACTIVATED]', 'terminal-error');
  setTimeout(() => {
    appendTerminalLine('🚨 تم إقصاء المخترق (إعدامه) ☠️', 'hacker-text');
  }, 400);

  setTimeout(() => {
    appendTerminalLine('🎯 وأنت الهدف التالي... 👁️⚔️', 'hacker-text');
  }, 1000);
}

function triggerHackerFallEffect() {
  const windowElem = document.querySelector('.terminal-window');
  if (windowElem) {
    windowElem.classList.remove('matrix-mode', 'cyberpunk-mode');
    windowElem.classList.add('hacker-mode', 'glitch-effect');
    setTimeout(() => windowElem.classList.remove('glitch-effect'), 800);
  }

  appendTerminalLine('⚠️ OVERRIDING SYSTEM SECURITY PERMISSIONS...', 'hacker-text');
  
  setTimeout(() => {
    appendTerminalLine('🔥 SYSTEM CRASH: GRAVITY PROTOCOL OVERLOAD! 💥', 'terminal-error');
    
    // Select sections to fall except terminal section
    const sections = document.querySelectorAll('.card, .about-card-section, .projects-section');
    sections.forEach((sec, idx) => {
      const parentSection = sec.closest('section');
      // If it is not the CLI terminal section, make it fall
      if (!sec.querySelector('.terminal-window')) {
        setTimeout(() => {
          sec.classList.add('falling-element');
        }, idx * 150);
      }
    });

    setTimeout(() => {
      appendTerminalLine('\n🎉 💻 🏆 مبروك انت هاكر 🏆 💻 🎉', 'cyberpunk-text');
      appendTerminalLine('System bypass complete. Type "clear" to restore the matrix.', 'matrix-text');
    }, 1200);

  }, 600);
}

document.addEventListener('DOMContentLoaded', () => {
  fetchProjects();
  fetchN8NWorkflows();
});
