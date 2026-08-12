/* ============================================================
   All Projects Page Logic (projects.js)
   ============================================================ */

let allProjectsData = [];
let currentCategory = 'all';

// Helper function to escape HTML
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Fallback GitHub repos
const fallbackGitHubRepos = [
  {
    name: 'linkedin_ai.skill',
    description: 'أتمتة صناعة المحتوى لنشر المنشورات والتفاعل على LinkedIn باستخدام AI.',
    html_url: 'https://github.com/alsaleh20/linkedin_ai.skill',
    language: 'JavaScript',
    stargazers_count: 5
  },
  {
    name: 'n8n_master.skill',
    description: 'مجموعة مهارات متقدمة لأتمتة سير العمل الربط الذكي مع n8n.',
    html_url: 'https://github.com/alsaleh20/n8n_master.skill',
    language: 'Python',
    stargazers_count: 4
  },
  {
    name: 'PayFlow',
    description: 'نظام إدارة وتسهيل التدفق المالي والعمليات في بيئة العمل.',
    html_url: 'https://github.com/alsaleh20/PayFlow',
    language: 'HTML',
    stargazers_count: 3
  }
];

// Fallback n8n Workflows
const fallbackN8nWorkflows = [
  {
    name: 'أتمتة إنشاء مقاطع الفيديو للشبكات الاجتماعية (n8n + AI)',
    description: 'سير عمل كامل يبدأ من فكرة النص وحتى توليد وتجميع المشاهد البصرية والصوتية تلقائياً وإرسال إشعار الجاهزية.',
    fileUrl: 'workflows/social_video_generator.json',
    active: true,
    updatedAt: new Date().toISOString()
  },
  {
    name: 'وكيل إدارة المهام الذكي (Google Sheets + GPT-4o)',
    description: 'وكيل ذكاء اصطناعي تفاعلي (AI Agent) يدير قائمة المهام داخل Google Sheets بالكامل من خلال فهم الأوامر.',
    fileUrl: 'workflows/google_sheets_task_agent.json',
    active: true,
    updatedAt: new Date().toISOString()
  },
  {
    name: 'مساعد البريد عبر تليجرام (Telegram Gmail Assistant)',
    description: 'مساعد ذكي يتيح صياغة، ومراجعة، وحفظ الإيميلات كمسودات، وإرسالها مباشرة من تليجرام.',
    fileUrl: 'workflows/telegram_gmail_assistant.json',
    active: true,
    updatedAt: new Date().toISOString()
  }
];

// Developed Websites
const staticWebsites = [
  {
    id: 'web-1',
    category: 'websites',
    badgeClass: 'badge-website',
    badgeText: 'Website',
    name: 'Pure Touch Plus',
    description_ar: 'موقع شركة Pure Touch Plus المتخصصة في خدمات التنظيف والتعقيم الاحترافية الشاملة.',
    description_en: 'Official website for Pure Touch Plus, specializing in professional cleaning & disinfection.',
    url: 'https://puretouchplus.com/',
    metaLang: 'Website',
    metaIcon: '🌐 Live'
  },
  {
    id: 'web-2',
    category: 'websites',
    badgeClass: 'badge-website',
    badgeText: 'Website',
    name: 'السلط تايم (Salt Time)',
    description_ar: 'موقع إخباري مخصص لنشر أخبار مدينة السلط والمملكة الأردنية الهاشمية.',
    description_en: 'News portal dedicated to reporting news from As-Salt city and Hashemite Kingdom of Jordan.',
    url: 'https://ashrafaldbas.com/',
    metaLang: 'Website',
    metaIcon: '🌐 Live'
  }
];

// Side Projects
const staticSideProjects = [
  {
    id: 'side-1',
    category: 'side',
    badgeClass: 'badge-side',
    badgeText: 'Portfolio',
    name: 'أشرف الدباس (Ashraf Al-Dabbas)',
    description_ar: 'خبير الإعلام الرقمي وتطوير المحتوى الصحفي والإخباري.',
    description_en: 'Digital media expert and press content developer.',
    url: 'p/a/x.html',
    metaLang: 'Portfolio',
    metaIcon: '🌐 Live'
  },
  {
    id: 'side-2',
    category: 'side',
    badgeClass: 'badge-side',
    badgeText: 'Portfolio',
    name: 'رعد عربيات (Raad Arabiat)',
    description_ar: 'مدير عمليات وضيافة. استعراض الخبرات العملية والمهارات القيادية.',
    description_en: 'Operations & hospitality manager. Showcasing leadership and operational expertise.',
    url: 'p/r/x.html',
    metaLang: 'Portfolio',
    metaIcon: '🌐 Live'
  },
  {
    id: 'side-3',
    category: 'side',
    badgeClass: 'badge-side',
    badgeText: 'CV Site',
    name: 'إيهاب الخالدي (Ehab Al-Khaldi)',
    description_ar: 'استعراض السيرة الذاتية المهنية والمشاريع المنجزة.',
    description_en: 'Professional CV & portfolio showcasing completed projects.',
    url: 'p/k/x.html',
    metaLang: 'CV Site',
    metaIcon: '🌐 Live'
  },
  {
    id: 'side-4',
    category: 'side',
    badgeClass: 'badge-side',
    badgeText: 'Portfolio',
    name: 'رناد الكلوب (Renad Al-Kloub)',
    description_ar: 'أخصائية اجتماعية. تمكين الأفراد والعمل المجتمعي والتمكين الشبابي.',
    description_en: 'Social worker & youth empowerment specialist.',
    url: 'p/n/x.html',
    metaLang: 'Portfolio',
    metaIcon: '🌐 Live'
  },
  {
    id: 'side-5',
    category: 'side',
    badgeClass: 'badge-side',
    badgeText: 'Academic',
    name: 'د. إيمان العلي (Dr. Eman Al-Ali)',
    description_ar: 'أستاذ مساعد في كلية الحقوق. مسيرة أكاديمية وبحثية وقانونية حافلة.',
    description_en: 'Assistant Professor at College of Law. Academic, legal, and research journey.',
    url: 'p/e/x.html',
    metaLang: 'Academic',
    metaIcon: '🌐 Live'
  },
  {
    id: 'side-6',
    category: 'side',
    badgeClass: 'badge-side',
    badgeText: 'Trainer CV',
    name: 'آية حامد (Aya Hamed)',
    description_ar: 'استعراض السيرة الذاتية والمهارات التدريبية والأكاديمية.',
    description_en: 'Professional CV showcasing training and academic achievements.',
    url: 'p/y/x.html',
    metaLang: 'Trainer CV',
    metaIcon: '🌐 Live'
  },
  {
    id: 'side-7',
    category: 'side',
    badgeClass: 'badge-side',
    badgeText: 'Portfolio',
    name: 'عمر الحوارات (Omar Al-Hiwarat)',
    description_ar: 'عرض السيرة الذاتية والمهارات بتصميم مبسط وفعال.',
    description_en: 'Streamlined CV & skills presentation.',
    url: 'p/b/x.html',
    metaLang: 'Portfolio',
    metaIcon: '🌐 Live'
  }
];

// Random Creations
const staticCreations = [
  {
    id: 'create-1',
    category: 'creations',
    badgeClass: 'badge-creation',
    badgeText: 'Creation',
    name: 'مطعم فحم ولحم (Fahm & Lahm Restaurant)',
    description_ar: 'موقع تفاعلي متكامل لمطعم فحم ولحم (قائمة الطعام، الفروع، والطلبات).',
    description_en: 'Interactive website for Fahm & Lahm Restaurant (Menu, branches, orders).',
    url: 'fahmlahm/index.html',
    metaLang: 'HTML/CSS/JS',
    metaIcon: '🌐 Preview'
  },
  {
    id: 'create-2',
    category: 'creations',
    badgeClass: 'badge-creation',
    badgeText: 'Creation',
    name: 'Golden Meal App',
    description_ar: 'تطبيق وجبات طعام وتصميم واجهة تفاعلية.',
    description_en: 'Food ordering app frontend and interactive layout.',
    url: 'pro_frontends/goldenmeal/index.html',
    metaLang: 'HTML/CSS/JS',
    metaIcon: '🌐 Preview'
  },
  {
    id: 'create-3',
    category: 'creations',
    badgeClass: 'badge-creation',
    badgeText: 'Creation',
    name: 'ZO1 - الأكاديمية (ZO1 Academy)',
    description_ar: 'تصميم واجهة المنصة التعليمية والأكاديمية.',
    description_en: 'Educational and academic platform interface.',
    url: 'pro_frontends/ZO1/index.html',
    metaLang: 'HTML/CSS/JS',
    metaIcon: '🌐 Preview'
  },
  {
    id: 'create-4',
    category: 'creations',
    badgeClass: 'badge-creation',
    badgeText: 'Creation',
    name: 'IDE Code Editor UI',
    description_ar: 'واجهة بيئة تطوير برمجية كود ومحرر نصوص.',
    description_en: 'Cloud IDE code editor & terminal layout.',
    url: 'pro_frontends/ide cood/frontend/index.html',
    metaLang: 'HTML/CSS/JS',
    metaIcon: '🌐 Preview'
  },
  {
    id: 'create-5',
    category: 'creations',
    badgeClass: 'badge-creation',
    badgeText: 'Creation',
    name: 'alsalseh_paey (PayFlow)',
    description_ar: 'مشروع إدارة وتسهيل عمليات الدفع والتدفق المالي (PayFlow).',
    description_en: 'Payment management & financial flow system (PayFlow).',
    url: 'pro_frontends/alsalseh_paey/',
    metaLang: 'HTML/CSS/JS',
    metaIcon: '🌐 Preview'
  }
];

// Initialize Data Fetching
async function loadAllProjectsData() {
  const username = 'alsaleh20';
  let fetchedGithub = [];
  let fetchedN8n = [];

  // Fetch GitHub
  try {
    const cachedData = localStorage.getItem('alsaleh20_repos_cache');
    if (cachedData) {
      fetchedGithub = JSON.parse(cachedData);
    }
  } catch (e) {}

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    if (res.ok) {
      const repos = await res.json();
      if (Array.isArray(repos) && repos.length > 0) {
        fetchedGithub = repos;
        localStorage.setItem('alsaleh20_repos_cache', JSON.stringify(repos));
      }
    }
  } catch (err) {
    try {
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)}`;
      const pRes = await fetch(proxyUrl);
      if (pRes.ok) {
        const repos = await pRes.json();
        if (Array.isArray(repos) && repos.length > 0) {
          fetchedGithub = repos;
          localStorage.setItem('alsaleh20_repos_cache', JSON.stringify(repos));
        }
      }
    } catch (proxyErr) {}
  }

  if (!fetchedGithub || fetchedGithub.length === 0) {
    fetchedGithub = fallbackGitHubRepos;
  }

  // Fetch n8n
  try {
    const res = await fetch('https://nonapplicatory-hitchier-tu.ngrok-free.dev/webhook/get-latest-automations');
    if (res.ok) {
      const flows = await res.json();
      if (Array.isArray(flows) && flows.length > 0) {
        fetchedN8n = flows;
      }
    }
  } catch (e) {}

  if (!fetchedN8n || fetchedN8n.length === 0) {
    fetchedN8n = fallbackN8nWorkflows;
  }

  // Map GitHub Repos to unified format
  const hiddenRepos = ['alsaleh20.github.io'];
  const formattedGithub = fetchedGithub
    .filter(repo => !repo.fork && !hiddenRepos.includes((repo.name || '').toLowerCase()))
    .map(repo => ({
      id: `gh-${repo.id || repo.name}`,
      category: 'github',
      badgeClass: 'badge-github',
      badgeText: 'GitHub Repo',
      name: repo.name,
      description_ar: repo.description || 'مشروع مميز من مشاريع alsaleh20 المتاحة على GitHub.',
      description_en: repo.description || 'Featured GitHub project repository by alsaleh20.',
      url: repo.html_url,
      metaLang: repo.language || 'Code',
      metaIcon: `⭐ ${repo.stargazers_count || 0}`
    }));

  // Map n8n Workflows
  const formattedN8n = fetchedN8n.map(flow => ({
    id: `n8n-${flow.id || flow.name}`,
    category: 'n8n',
    badgeClass: 'badge-n8n',
    badgeText: 'n8n Workflow',
    name: flow.name,
    description_ar: flow.description || 'أتمتة سير عمل نشطة وجاهزة للاستخدام في منصة n8n.',
    description_en: flow.description || 'Active workflow automation ready for n8n execution.',
    url: flow.fileUrl || '#',
    fileUrl: flow.fileUrl,
    active: flow.active !== false,
    metaLang: flow.active ? 'نشط / Active' : 'غير نشط / Inactive',
    metaIcon: '⚡ Automation'
  }));

  // Combine into master array
  allProjectsData = [
    ...formattedGithub,
    ...formattedN8n,
    ...staticWebsites,
    ...staticSideProjects,
    ...staticCreations
  ];

  renderAllProjects();
}

function selectCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === cat);
  });
  renderAllProjects();
}

function filterAllProjects() {
  renderAllProjects();
}

function renderAllProjects() {
  const container = document.getElementById('all-projects-grid');
  if (!container) return;

  const searchQuery = (document.getElementById('project-search-input')?.value || '').trim().toLowerCase();
  const lang = localStorage.getItem('portfolio_lang') || 'ar';

  const filtered = allProjectsData.filter(item => {
    // Category check
    if (currentCategory !== 'all' && item.category !== currentCategory) {
      return false;
    }

    // Search query check
    if (searchQuery) {
      const nameMatch = (item.name || '').toLowerCase().includes(searchQuery);
      const descArMatch = (item.description_ar || '').toLowerCase().includes(searchQuery);
      const descEnMatch = (item.description_en || '').toLowerCase().includes(searchQuery);
      return nameMatch || descArMatch || descEnMatch;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-projects" style="grid-column: 1/-1; text-align: center; color: var(--grey); padding: 2rem;">${lang === 'ar' ? 'لا توجد مشاريع تطابق بحثك.' : 'No projects match your search.'}</p>`;
    return;
  }

  container.innerHTML = '';
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const title = escapeHTML(item.name);
    const desc = escapeHTML(lang === 'en' ? item.description_en : item.description_ar);
    const url = escapeHTML(item.url);

    let downloadBtn = '';
    if (item.category === 'n8n' && item.fileUrl) {
      downloadBtn = `<a href="${escapeHTML(item.fileUrl)}" download style="color: var(--green); text-decoration: none; font-size: 0.8rem; font-weight: bold; margin-right: auto;">📥 ${lang === 'en' ? 'Download JSON' : 'تحميل JSON'}</a>`;
    }

    card.innerHTML = `
      <span class="project-category-badge ${item.badgeClass}">${item.badgeText}</span>
      <h3 class="project-title">
        <a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
      </h3>
      <p class="project-desc">${desc}</p>
      <div class="project-meta">
        <span class="project-lang">
          <span class="lang-dot" style="background-color: var(--green)"></span>
          ${escapeHTML(item.metaLang)}
        </span>
        ${downloadBtn}
        <span class="project-stars" style="margin-left: 0.5rem;">${escapeHTML(item.metaIcon)}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Re-render when language changes
window.addEventListener('languageChanged', () => {
  renderAllProjects();
});

document.addEventListener('DOMContentLoaded', () => {
  loadAllProjectsData();
});
