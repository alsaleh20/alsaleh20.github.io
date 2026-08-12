const pageStartTime = new Date();

function getRealUptimeFormatted() {
  const now = new Date();
  const diffMs = now - pageStartTime;
  const totalSeconds = Math.floor(diffMs / 1000);
  
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('ar-JO', dateOptions);
  const formattedTime = now.toLocaleTimeString('ar-JO');
  const sessionUptime = `${hours}h ${minutes}m ${seconds}s`;

  return {
    now,
    formattedDate,
    formattedTime,
    sessionUptime,
    totalSeconds
  };
}

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

  const currentLang = localStorage.getItem('portfolio_lang') || 'ar';
  const hiddenRepos = ['alsaleh20.github.io'];
  const filteredRepos = repos.filter(repo => !repo.fork && !hiddenRepos.includes((repo.name || '').toLowerCase()));

  if (filteredRepos.length === 0) {
    container.innerHTML = `<p class="no-projects">${currentLang === 'en' ? 'No public projects found.' : 'لا توجد مشاريع عامة حالياً.'}</p>`;
    return;
  }

  container.innerHTML = '';
  filteredRepos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const safeTitle = escapeHTML(repo.name);
    const fallbackDesc = currentLang === 'en' ? 'Featured GitHub repository by alsaleh20.' : 'مشروع مميز من مشاريع alsaleh20 المتاحة على GitHub.';
    const safeDesc = escapeHTML(repo.description || fallbackDesc);
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

  const currentLang = localStorage.getItem('portfolio_lang') || 'ar';

  if (workflows.length === 0) {
    container.innerHTML = `<p class="no-projects">${currentLang === 'en' ? 'No active automations found.' : 'لا توجد أتمتة نشطة حالياً.'}</p>`;
    return;
  }

  container.innerHTML = '';
  workflows.forEach(flow => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const safeTitle = escapeHTML(flow.name);
    const fallbackDesc = currentLang === 'en' ? 'Active workflow automation ready for n8n execution.' : 'أتمتة سير عمل نشطة وجاهزة للاستخدام في منصة n8n.';
    const safeDesc = escapeHTML(flow.description || fallbackDesc);
    const formattedDate = new Date(flow.updatedAt).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ar-JO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    const fileUrl = flow.fileUrl ? escapeHTML(flow.fileUrl) : null;
    const activeLabel = flow.active ? (currentLang === 'en' ? 'Active' : 'نشط') : (currentLang === 'en' ? 'Inactive' : 'غير نشط');
    const downloadLabel = currentLang === 'en' ? '📥 Download JSON' : '📥 تحميل JSON';
    
    card.innerHTML = `
      <h3 class="project-title" style="color: var(--white); margin-bottom: 0.5rem;">
        ${safeTitle}
      </h3>
      <p class="project-desc">${safeDesc}</p>
      <div class="project-meta" style="margin-top: 0.75rem;">
        <span class="project-lang">
          <span class="lang-dot" style="background-color: var(--green)"></span>
          ${activeLabel}
        </span>
        ${fileUrl ? `<a href="${fileUrl}" download style="color: var(--green); text-decoration: none; font-size: 0.8rem; font-weight: bold; margin-right: auto;">${downloadLabel}</a>` : ''}
        <span class="project-stars" style="margin-left: 0.5rem;">📅 ${formattedDate}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

window.addEventListener('languageChanged', () => {
  try {
    const cachedRepos = localStorage.getItem('alsaleh20_repos_cache');
    if (cachedRepos) renderProjects(JSON.parse(cachedRepos));
    const cachedFlows = localStorage.getItem('n8n_workflows_cache');
    if (cachedFlows) renderWorkflows(JSON.parse(cachedFlows));
  } catch (e) {}
});

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
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
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
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)}`;
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
      const fullVal = this.value.toLowerCase();
      const parts = fullVal.split(' ');
      
      if (parts.length === 1) {
        // Complete main command
        const currentVal = parts[0];
        if (currentVal) {
          const commands = [
            'about', 'skills', 'projects', 'sub-projects', 'contact', 'clear', 'github', 'help', 'apt',
            'puretouch', 'salttime', 'ashraf', 'status', 'ping', 'htop', 'uptime', 'logs', 'services', 'valve-steam',
            'matrix', 'cyberpunk', 'neon', 'hacker', 'hack', 'sudo', 'party', 'celebrate', 'secret', 'vault'
          ];
          const matches = commands.filter(cmd => cmd.startsWith(currentVal));
          if (matches.length > 0) {
            this.value = matches[0];
          }
        }
      } else if (parts.length >= 2) {
        // Complete arguments after space
        const mainCmd = parts[0];
        const argVal = parts[parts.length - 1];

        const argMap = {
          'apt': ['servar', 'server'],
          'help': ['--sudo', '-sudo'],
          'contact': ['-wa', '-wa2', '-mail', '-git', '-link', '-khamsat', '-mostaql', '-baaeed', '-hsoub', '-unicoders', '-insta', '-x', '-yt', '-fb'],
          'ping': ['puretouchplus.com', 'ashrafaldbas.com', 'github.com', 'salttime', 'puretouch']
        };

        if (argMap[mainCmd]) {
          const options = argMap[mainCmd];
          const matches = options.filter(opt => opt.startsWith(argVal));
          if (matches.length > 0) {
            parts[parts.length - 1] = matches[0];
            this.value = parts.join(' ');
          } else if (argVal === '') {
            parts[parts.length - 1] = options[0];
            this.value = parts.join(' ');
          }
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
  // Check if handled by secret sudo deployer module (sudo-deployer.js)
  if (typeof checkSudoCommand === 'function' && checkSudoCommand(cmd)) {
    return;
  }

  appendTerminalLine(`guest@alhayari:~$ ${cmd}`, 'terminal-command-response');

  const parts = cmd.trim().split(/\s+/);
  const mainCmd = parts[0].toLowerCase();
  const arg = parts[1] ? parts[1].toLowerCase() : '';

  switch(mainCmd) {
    case 'apt':
      if (arg === 'servar' || arg === 'server') {
        openServerCLITerminal();
      } else {
        appendTerminalLine('Usage: apt servar  (Deploys and launches the Server CLI Terminal)', 'cli-highlight');
      }
      break;
    case 'help':
      if (arg === '--sudo' || arg === '-sudo') {
        triggerHackerFallEffect();
      } else {
        appendTerminalLine('Available commands:\n' +
                           '  apt servar    - 🚀 Launch second terminal: Server CLI\n' +
                           '  projects      - Show key portfolio projects & repositories\n' +
                           '  sub-projects  - 📂 Show all imported side projects\n' +
                           '  skills        - List technical skills and proficiency\n' +
                           '  about         - Show information about Alsaleh Al-Hayari\n' +
                           '  contact       - Options: -wa, -git, -link, -mail\n' +
                           '  clear         - Clear the terminal screen');
      }
      break;
    case '/rgb':
    case 'rgb':
      openRgbModal();
      appendTerminalLine('🎨 Opening RGB Theme Customizer...', 'cli-success');
      break;
    case 'sub-projects':
    case 'side-projects':
      appendTerminalLine('📂 Side Projects Portfolio:\n' +
                         '1. Ashraf Al-Dabas    - Digital Media Portfolio (p/a/x.html)\n' +
                         '2. Raad Arabiyat      - Hospitality Leader CV (p/r/x.html)\n' +
                         '3. Ehab Al-Khaldi     - Operations Manager CV (p/k/x.html)\n' +
                         '4. Renad Kloob        - Social Worker Portfolio (p/n/x.html)\n' +
                         '5. Dr. Eman Al-Ali    - Academic Law Professor (p/e/x.html)\n' +
                         '6. Aya Hamed          - Life Skills Trainer (p/y/x.html)\n' +
                         '7. Omar Al-Hiwarat    - Professional Barista (p/b/x.html)\n\n' +
                         'All side projects are live and accessible under the /p/ directory.');
      break;
    case 'status':
    case 'system':
      showServerStatus();
      break;
    case 'htop':
    case 'top':
      showHtopMonitor();
      break;
    case 'services':
      showServicesStatus();
      break;
    case 'ping':
      executePingCommand(arg);
      break;
    case 'logs':
      showServerLogs();
      break;
    case 'uptime':
      showUptime();
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
      } else if (arg === '-khamsat') {
        appendTerminalLine('Opening Khamsat profile...');
        window.open('https://khamsat.com/user/alsaleh20', '_blank');
      } else if (arg === '-mostaql') {
        appendTerminalLine('Opening Mostaql profile...');
        window.open('https://mostaql.com/u/k_alsaleh20', '_blank');
      } else if (arg === '-baaeed') {
        appendTerminalLine('Opening Baaeed profile...');
        window.open('https://baaeed.com/u/alsaleh20', '_blank');
      } else if (arg === '-hsoub') {
        appendTerminalLine('Opening Hsoub Academy profile...');
        window.open('https://academy.hsoub.com/profile/4433240-alsaleh-hiary/', '_blank');
      } else if (arg === '-unicoders') {
        appendTerminalLine('Opening Unicoders profile...');
        window.open('https://unicoders.co/profile/alsaleh20', '_blank');
      } else {
        appendTerminalLine('Usage: contact [option]\n' +
                           'Options:\n' +
                           '  -wa       : Open WhatsApp chat 1 (+962775858328)\n' +
                           '  -wa2      : Open WhatsApp chat 2 (+962779511729)\n' +
                           '  -mail     : Send an Email (alsalehhiary@gmail.com)\n' +
                           '  -git      : Open GitHub profile\n' +
                           '  -link     : Open LinkedIn profile\n' +
                           '  -khamsat  : Open Khamsat profile\n' +
                           '  -mostaql  : Open Mostaql profile\n' +
                           '  -baaeed   : Open Baaeed profile\n' +
                           '  -hsoub    : Open Hsoub Academy profile\n' +
                           '  -unicoders: Open Unicoders profile\n' +
                           '  -insta    : Open Instagram profile\n' +
                           '  -x        : Open X (Twitter) profile\n' +
                           '  -yt       : Open YouTube channel\n' +
                           '  -fb       : Open Facebook profile\n' +
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

// ============================================================
// Server Admin CLI Simulation Functions
// ============================================================
function showServerStatus() {
  const cpuUsage = Math.floor(Math.random() * 12 + 14); // ~14-26%
  const ramUsed = (1.8 + Math.random() * 0.3).toFixed(1);
  
  appendTerminalLine('🖥️  ALSALEH PRODUCTION LINUX SERVER STATUS', 'cli-highlight');
  appendTerminalLine('--------------------------------------------------');
  appendTerminalLine(`OS          : Ubuntu 24.04 LTS (x86_64 Linux 6.8.0-generic)`);
  appendTerminalLine(`Hostname    : srv.alsaleh.cloud [Salt, Jordan Node]`);
  appendTerminalLine(`Uptime      : 42 days, 14 hours, 28 mins`);
  appendTerminalLine(`CPU Usage   : [████░░░░░░░░░░░░░░░░] ${cpuUsage}% (AMD EPYC 8-Core)`);
  appendTerminalLine(`RAM Usage   : [███████░░░░░░░░░░░░░] ${ramUsed} GB / 8.00 GB (24%)`);
  appendTerminalLine(`Disk Usage  : [█████████░░░░░░░░░░░] 48.2 GB / 160 GB (30%)`);
  appendTerminalLine(`Network In  : 142.5 MB/s | Network Out: 89.2 MB/s`);
  appendTerminalLine(`Status      : ALL SYSTEMS OPERATIONAL 🟢`, 'cli-success');
}

function showHtopMonitor() {
  appendTerminalLine('  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND', 'cli-highlight');
  appendTerminalLine(' 1042 n8n       20   0 1145M  284M  45M S   4.2   3.5  142:15.82 n8n-executor');
  appendTerminalLine('  892 nginx     20   0  145M   18M  12M S   1.8   0.2   45:12.10 nginx: master');
  appendTerminalLine(' 1450 postgres  20   0  890M  142M  88M S   1.2   1.7   89:04.30 postgres: main');
  appendTerminalLine(' 1820 docker    20   0  620M   95M  34M S   0.8   1.1   12:45.00 dockerd');
  appendTerminalLine(' 2105 redis     20   0   85M   12M  8M  S   0.3   0.1    4:02.11 redis-server');
  appendTerminalLine('--------------------------------------------------------------------------------');
  appendTerminalLine('Tasks: 112 total, 1 running, 111 sleeping. Load avg: 0.18, 0.22, 0.19');
}

function showServicesStatus() {
  appendTerminalLine('⚙️  CORE SYSTEM SERVICES & CONTAINERS', 'cli-highlight');
  appendTerminalLine('● n8n-automation.service  - n8n Workflow Automation Engine  [ACTIVE - RUNNING 🟢]', 'cli-success');
  appendTerminalLine('● nginx.service           - Nginx Reverse Proxy & SSL      [ACTIVE - RUNNING 🟢]', 'cli-success');
  appendTerminalLine('● docker.service          - Docker Application Containers  [ACTIVE - RUNNING 🟢]', 'cli-success');
  appendTerminalLine('● postgresql.service      - PostgreSQL Primary Database    [ACTIVE - RUNNING 🟢]', 'cli-success');
  appendTerminalLine('● redis.service           - Redis In-Memory Cache          [ACTIVE - RUNNING 🟢]', 'cli-success');
}

function executePingCommand(target) {
  let host = 'puretouchplus.com';
  if (target === 'salttime' || target === 'ashrafaldbas.com') host = 'ashrafaldbas.com';
  else if (target === 'github' || target === 'github.com') host = 'github.com';
  else if (target) host = target;

  appendTerminalLine(`PING ${host} (104.21.55.120) 56(84) bytes of data.`);
  
  let pingCount = 0;
  const pingInterval = setInterval(() => {
    pingCount++;
    const ms = (18 + Math.random() * 8).toFixed(1);
    appendTerminalLine(`64 bytes from ${host}: icmp_seq=${pingCount} ttl=58 time=${ms} ms`, 'cli-success');
    if (pingCount >= 4) {
      clearInterval(pingInterval);
      appendTerminalLine(`--- ${host} ping statistics ---`);
      appendTerminalLine(`4 packets transmitted, 4 received, 0% packet loss, time 3004ms`);
    }
  }, 300);
}

function showServerLogs() {
  const timeStr = new Date().toLocaleTimeString();
  appendTerminalLine(`[${timeStr}] [INFO] [n8n]: Executed workflow "Telegram News Aggregator" (ID: #8492) -> SUCCESS`, 'cli-success');
  appendTerminalLine(`[${timeStr}] [INFO] [Nginx]: GET /api/v1/health 200 OK - 14ms`, 'cli-highlight');
  appendTerminalLine(`[${timeStr}] [INFO] [n8n]: Webhook triggered for "Student Attendance Processing"`, 'cli-success');
  appendTerminalLine(`[${timeStr}] [INFO] [Docker]: Container n8n-automation-hub status healthy`);
  appendTerminalLine(`[${timeStr}] [SUCCESS] All cron automations synchronized without errors.`, 'cli-success');
}

function showUptime() {
  const info = getRealUptimeFormatted();
  appendTerminalLine('⏱️  CURRENT SYSTEM TIME & UPTIME REPORT', 'cli-highlight');
  appendTerminalLine(`📅 التاريخ الحالي  : ${info.formattedDate}`);
  appendTerminalLine(`⏰ الوقت الحالي     : ${info.formattedTime}`);
  appendTerminalLine(`🚀 وقت بدء التشغيل : ${pageStartTime.toLocaleTimeString('ar-JO')} (${pageStartTime.toLocaleDateString('ar-JO')})`);
  appendTerminalLine(`⏳ مدة الجلسة الحية : ${info.sessionUptime} (${info.totalSeconds} ثانية فعلياً)`, 'cli-success');
  appendTerminalLine(`🌐 Server Node Uptime: 42 days, 14 hours, 28 mins [Load avg: 0.15, 0.18, 0.20]`);
}

// ============================================================
// Second Terminal: Server CLI Logic
// ============================================================
function openServerCLITerminal() {
  const serverSection = document.getElementById('server-cli-section');
  if (serverSection) {
    serverSection.style.display = 'block';
    serverSection.scrollIntoView({ behavior: 'smooth' });
    appendTerminalLine('🚀 Launching second terminal: "Server CLI"...', 'cli-highlight');
    appendServerCLILine('[CONNECTED TO SERVER NODE] Type "help" to see available server administration commands.', 'cli-success');
    
    // Focus second terminal input
    setTimeout(() => {
      const serverInput = document.getElementById('server-cli-input');
      if (serverInput) serverInput.focus();
    }, 300);
  }
}

const serverCliInput = document.getElementById('server-cli-input');
const serverCliBody = document.getElementById('server-cli-body');
let serverCommandHistory = [];
let serverHistoryIndex = -1;

if (serverCliInput) {
  serverCliInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const command = this.value.trim();
      if (command) {
        serverCommandHistory.push(command);
        serverHistoryIndex = serverCommandHistory.length;
        executeServerCLICommand(command);
      }
      this.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (serverHistoryIndex > 0) {
        serverHistoryIndex--;
        this.value = serverCommandHistory[serverHistoryIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (serverHistoryIndex < serverCommandHistory.length - 1) {
        serverHistoryIndex++;
        this.value = serverCommandHistory[serverHistoryIndex];
      } else {
        serverHistoryIndex = serverCommandHistory.length;
        this.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const fullVal = this.value.toLowerCase();
      const parts = fullVal.split(' ');
      
      if (parts.length === 1) {
        const currentVal = parts[0];
        if (currentVal) {
          const commands = ['status', 'htop', 'services', 'ping', 'logs', 'uptime', 'clear', 'exit', 'help'];
          const matches = commands.filter(cmd => cmd.startsWith(currentVal));
          if (matches.length > 0) {
            this.value = matches[0];
          }
        }
      } else if (parts.length >= 2) {
        const mainCmd = parts[0];
        const argVal = parts[parts.length - 1];

        const argMap = {
          'ping': ['puretouchplus.com', 'ashrafaldbas.com', 'github.com', 'salttime', 'puretouch']
        };

        if (argMap[mainCmd]) {
          const options = argMap[mainCmd];
          const matches = options.filter(opt => opt.startsWith(argVal));
          if (matches.length > 0) {
            parts[parts.length - 1] = matches[0];
            this.value = parts.join(' ');
          } else if (argVal === '') {
            parts[parts.length - 1] = options[0];
            this.value = parts.join(' ');
          }
        }
      }
    }
  });
}

function appendServerCLILine(text, className = '') {
  const line = document.createElement('div');
  line.className = `terminal-line ${className}`;
  line.textContent = text;
  
  const inputLine = serverCliBody.querySelector('.terminal-input-line');
  serverCliBody.insertBefore(line, inputLine);
  serverCliBody.scrollTop = serverCliBody.scrollHeight;
}

function executeServerCLICommand(cmd) {
  appendServerCLILine(`root@alsaleh-server:~$ ${cmd}`, 'cli-highlight');

  const parts = cmd.trim().split(/\s+/);
  const mainCmd = parts[0].toLowerCase();
  const arg = parts[1] ? parts[1].toLowerCase() : '';

  switch(mainCmd) {
    case 'help':
      appendServerCLILine('Server CLI Commands:\n' +
                          '  status     - Real-time Linux server health & resources\n' +
                          '  htop       - Interactive CPU & RAM process monitor\n' +
                          '  services   - Status of n8n, Nginx, Docker & PostgreSQL\n' +
                          '  ping [host]- Check latency to websites (puretouch / salttime)\n' +
                          '  logs       - View latest n8n & server automation logs\n' +
                          '  uptime     - View server running time & load averages\n' +
                          '  clear      - Clear the server CLI screen\n' +
                          '  exit       - Close Server CLI terminal');
      break;
    case 'status':
    case 'system':
      showServerStatusCLI();
      break;
    case 'htop':
    case 'top':
      showHtopMonitorCLI();
      break;
    case 'services':
      showServicesStatusCLI();
      break;
    case 'ping':
      executePingCommandCLI(arg);
      break;
    case 'logs':
      showServerLogsCLI();
      break;
    case 'uptime':
      showUptimeCLI();
      break;
    case 'clear':
      const lines = serverCliBody.querySelectorAll('.terminal-line, .terminal-welcome');
      lines.forEach(line => line.remove());
      break;
    case 'exit':
      const serverSection = document.getElementById('server-cli-section');
      if (serverSection) serverSection.style.display = 'none';
      break;
    default:
      appendServerCLILine(`bash: command not found: ${cmd}. Type 'help' for options.`, 'terminal-error');
  }
}

function showServerStatusCLI() {
  const cpuUsage = Math.floor(Math.random() * 12 + 14);
  const ramUsed = (1.8 + Math.random() * 0.3).toFixed(1);
  appendServerCLILine('🖥️  ALSALEH PRODUCTION LINUX SERVER STATUS', 'cli-highlight');
  appendServerCLILine('--------------------------------------------------');
  appendServerCLILine(`OS          : Ubuntu 24.04 LTS (x86_64 Linux 6.8.0-generic)`);
  appendServerCLILine(`Hostname    : srv.alsaleh.cloud [Salt, Jordan Node]`);
  appendServerCLILine(`Uptime      : 42 days, 14 hours, 28 mins`);
  appendServerCLILine(`CPU Usage   : [████░░░░░░░░░░░░░░░░] ${cpuUsage}% (AMD EPYC 8-Core)`);
  appendServerCLILine(`RAM Usage   : [███████░░░░░░░░░░░░░] ${ramUsed} GB / 8.00 GB (24%)`);
  appendServerCLILine(`Disk Usage  : [█████████░░░░░░░░░░░] 48.2 GB / 160 GB (30%)`);
  appendServerCLILine(`Network In  : 142.5 MB/s | Network Out: 89.2 MB/s`);
  appendServerCLILine(`Status      : ALL SYSTEMS OPERATIONAL 🟢`, 'cli-success');
}

function showHtopMonitorCLI() {
  appendServerCLILine('  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND', 'cli-highlight');
  appendServerCLILine(' 1042 n8n       20   0 1145M  284M  45M S   4.2   3.5  142:15.82 n8n-executor');
  appendServerCLILine('  892 nginx     20   0  145M   18M  12M S   1.8   0.2   45:12.10 nginx: master');
  appendServerCLILine(' 1450 postgres  20   0  890M  142M  88M S   1.2   1.7   89:04.30 postgres: main');
  appendServerCLILine(' 1820 docker    20   0  620M   95M  34M S   0.8   1.1   12:45.00 dockerd');
  appendServerCLILine(' 2105 redis     20   0   85M   12M  8M  S   0.3   0.1    4:02.11 redis-server');
  appendServerCLILine('--------------------------------------------------------------------------------');
  appendServerCLILine('Tasks: 112 total, 1 running, 111 sleeping. Load avg: 0.18, 0.22, 0.19');
}

function showServicesStatusCLI() {
  appendServerCLILine('⚙️  CORE SYSTEM SERVICES & CONTAINERS', 'cli-highlight');
  appendServerCLILine('● n8n-automation.service  - n8n Workflow Automation Engine  [ACTIVE - RUNNING 🟢]', 'cli-success');
  appendServerCLILine('● nginx.service           - Nginx Reverse Proxy & SSL      [ACTIVE - RUNNING 🟢]', 'cli-success');
  appendServerCLILine('● docker.service          - Docker Application Containers  [ACTIVE - RUNNING 🟢]', 'cli-success');
  appendServerCLILine('● postgresql.service      - PostgreSQL Primary Database    [ACTIVE - RUNNING 🟢]', 'cli-success');
  appendServerCLILine('● redis.service           - Redis In-Memory Cache          [ACTIVE - RUNNING 🟢]', 'cli-success');
}

function executePingCommandCLI(target) {
  let host = 'puretouchplus.com';
  if (target === 'salttime' || target === 'ashrafaldbas.com') host = 'ashrafaldbas.com';
  else if (target === 'github' || target === 'github.com') host = 'github.com';
  else if (target) host = target;

  appendServerCLILine(`PING ${host} (104.21.55.120) 56(84) bytes of data.`);
  
  let pingCount = 0;
  const pingInterval = setInterval(() => {
    pingCount++;
    const ms = (18 + Math.random() * 8).toFixed(1);
    appendServerCLILine(`64 bytes from ${host}: icmp_seq=${pingCount} ttl=58 time=${ms} ms`, 'cli-success');
    if (pingCount >= 4) {
      clearInterval(pingInterval);
      appendServerCLILine(`--- ${host} ping statistics ---`);
      appendServerCLILine(`4 packets transmitted, 4 received, 0% packet loss, time 3004ms`);
    }
  }, 300);
}

function showServerLogsCLI() {
  const timeStr = new Date().toLocaleTimeString();
  appendServerCLILine(`[${timeStr}] [INFO] [n8n]: Executed workflow "Telegram News Aggregator" (ID: #8492) -> SUCCESS`, 'cli-success');
  appendServerCLILine(`[${timeStr}] [INFO] [Nginx]: GET /api/v1/health 200 OK - 14ms`, 'cli-highlight');
  appendServerCLILine(`[${timeStr}] [INFO] [n8n]: Webhook triggered for "Student Attendance Processing"`, 'cli-success');
  appendServerCLILine(`[${timeStr}] [INFO] [Docker]: Container n8n-automation-hub status healthy`);
  appendServerCLILine(`[${timeStr}] [SUCCESS] All cron automations synchronized without errors.`, 'cli-success');
}

function showUptimeCLI() {
  const info = getRealUptimeFormatted();
  appendServerCLILine('⏱️  SERVER NODE UPTIME & LIVE TIME REPORT', 'cli-highlight');
  appendServerCLILine(`📅 التاريخ الحالي  : ${info.formattedDate}`);
  appendServerCLILine(`⏰ الوقت الحالي     : ${info.formattedTime}`);
  appendServerCLILine(`🚀 وقت بدء تشغيل الكود: ${pageStartTime.toLocaleTimeString('ar-JO')} (${pageStartTime.toLocaleDateString('ar-JO')})`);
  appendServerCLILine(`⏳ مدة التشغيل الحية : ${info.sessionUptime} (${info.totalSeconds} ثانية فعلياً)`, 'cli-success');
  appendServerCLILine(`🌐 Server Node Uptime: 42 days, 14 hours, 28 mins [Load avg: 0.15, 0.18, 0.20]`);
}

// Terminal Fullscreen, Expanded & Minimize Handlers
function toggleFullscreenTerminal(windowId) {
  const win = document.getElementById(windowId);
  if (!win) return;
  win.classList.remove('terminal-minimized');
  win.classList.toggle('terminal-expanded');
}

function toggleMinimizeTerminal(windowId) {
  const win = document.getElementById(windowId);
  if (!win) return;
  win.classList.remove('terminal-fullscreen');
  win.classList.toggle('terminal-minimized');
}

function clearTerminal() {
  const cliBody = document.getElementById('cli-body');
  if (!cliBody) return;
  const inputLine = cliBody.querySelector('.terminal-input-line');
  cliBody.innerHTML = '';
  if (inputLine) cliBody.appendChild(inputLine);
  appendTerminalLine('Screen cleared.');
}

function closeServerTerminal() {
  const sec = document.getElementById('server-cli-section');
  if (sec) sec.style.display = 'none';
}

// RGB Color Customizer Functions
function openRgbModal() {
  const modal = document.getElementById('rgb-modal');
  if (modal) modal.style.display = 'flex';
}

function closeRgbModal() {
  const modal = document.getElementById('rgb-modal');
  if (modal) modal.style.display = 'none';
}

function updateRgbColor(cssVar, colorVal) {
  document.documentElement.style.setProperty(cssVar, colorVal);
  const varMap = {
    '--green': 'hex-green',
    '--black': 'hex-black',
    '--dark-grey': 'hex-dark-grey',
    '--off-black': 'hex-off-black',
    '--white': 'hex-white'
  };
  if (varMap[cssVar]) {
    const span = document.getElementById(varMap[cssVar]);
    if (span) span.textContent = colorVal;
  }
}

const rgbPresets = {
  'cyberpunk': { '--green': '#ff0055', '--black': '#0a0012', '--dark-grey': '#1a002b', '--off-black': '#12001f', '--white': '#00f3ff' },
  'matrix': { '--green': '#00ff66', '--black': '#020d05', '--dark-grey': '#06240e', '--off-black': '#041709', '--white': '#e0ffe8' },
  'neon-blue': { '--green': '#00f3ff', '--black': '#020b14', '--dark-grey': '#092038', '--off-black': '#061526', '--white': '#ffffff' },
  'sunset': { '--green': '#ff9900', '--black': '#1a0808', '--dark-grey': '#331212', '--off-black': '#240b0b', '--white': '#ffebcc' }
};

function applyRgbPreset(presetName) {
  const preset = rgbPresets[presetName];
  if (!preset) return;
  for (let varName in preset) {
    updateRgbColor(varName, preset[varName]);
    const inputId = 'picker-' + varName.replace('--', '');
    const input = document.getElementById(inputId);
    if (input) input.value = preset[varName];
  }
}

function resetRgbColors() {
  const defaultColors = {
    '--green': '#c4f82a',
    '--black': '#0d0d0d',
    '--dark-grey': '#1f1f1f',
    '--off-black': '#141414',
    '--white': '#ffffff'
  };
  for (let varName in defaultColors) {
    updateRgbColor(varName, defaultColors[varName]);
    const inputId = 'picker-' + varName.replace('--', '');
    const input = document.getElementById(inputId);
    if (input) input.value = defaultColors[varName];
  }
}

// Smart WhatsApp Inquiry Builder Function
function sendWhatsAppInquiry(e) {
  e.preventDefault();
  
  const service = document.getElementById('wa-service').value;
  const phone = document.getElementById('wa-phone-choice').value;
  const timeline = document.getElementById('wa-timeline').value;
  const details = document.getElementById('wa-details').value.trim();

  let message = `مرحباً أستاذ الصالح،\nأرغب في الاستفسار عن تقديم خدمة جديدة عبر موقعك:\n\n`;
  message += `📌 *الخدمة المطلوبة:* ${service}\n`;
  message += `⏳ *الإطار الزمني:* ${timeline}\n`;
  if (details) {
    message += `📝 *تفاصيل المشروع:* ${details}\n`;
  }
  message += `\nأتمنى التواصل لبحث التفاصيل والبدء. وشكراً!`;

  const encodedMsg = encodeURIComponent(message);
  const targetUrl = `https://wa.me/${phone}?text=${encodedMsg}`;
  
  window.open(targetUrl, '_blank');
}

// vCard & QR Code Modal Functions
function downloadVCard() {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
N:الحياري;الصالح;أحمد;;
FN:الصالح أحمد الحياري
TITLE:خبير إدارة سيرفرات وأتمتة n8n وتطوير ويب
TEL;TYPE=CELL,VOICE:+962775858328
TEL;TYPE=CELL,VOICE:+962779511729
EMAIL;TYPE=PREF,INTERNET:alsalehhiary@gmail.com
URL;TYPE=WORK:https://github.com/alsaleh20
URL:https://www.linkedin.com/in/alsaleh-hyari-b2b5b5392/
NOTE:إدارة سيرفرات Linux | أتمتة مهام n8n | تطوير مواقع الويب
END:VCARD`;

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Alsaleh_Al_Hayari.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function openQrModal() {
  const modal = document.getElementById('qr-modal');
  if (modal) modal.style.display = 'flex';
}

function closeQrModal() {
  const modal = document.getElementById('qr-modal');
  if (modal) modal.style.display = 'none';
}

// Automation ROI Calculator Function
function calculateAutomationRoi() {
  const employees = parseFloat(document.getElementById('roi-employees').value) || 1;
  const hoursPerDay = parseFloat(document.getElementById('roi-hours').value) || 1;
  const hourlyRate = parseFloat(document.getElementById('roi-hourly-rate').value) || 10;

  // Assuming 20 working days per month
  const totalSavedHoursMonthly = Math.round(employees * hoursPerDay * 20 * 0.8); // 80% efficiency automation
  const totalSavedMoneyMonthly = Math.round(totalSavedHoursMonthly * hourlyRate);

  const hoursEl = document.getElementById('roi-saved-hours');
  const moneyEl = document.getElementById('roi-saved-money');

  if (hoursEl) hoursEl.textContent = `${totalSavedHoursMonthly} ساعة ⏳`;
  if (moneyEl) moneyEl.textContent = `$${totalSavedMoneyMonthly.toLocaleString()} دولار 💰`;
}

document.addEventListener('DOMContentLoaded', () => {
  fetchProjects();
  fetchN8NWorkflows();
  calculateAutomationRoi();
});

// === قسم إبداعات عشوائية ===
const remainingRandomProjects = [];

function loadMoreRandomCreations() {
  const container = document.getElementById('load-more-container');
  if (container) {
    container.style.display = 'none';
  }
}
