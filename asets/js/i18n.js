/* ============================================================
   Portfolio i18n (Bilingual Arabic / English System)
   ============================================================ */

const translations = {
  ar: {
    pageTitle: "الصفحة الشخصية والمشاريع - الصالح حياري",
    name: "الصالح أحمد الحياري",
    location: "الأردن 🇯🇴",
    bio: '"إدارة سيرفرات | أتمتة n8n | تطوير ويب"',
    
    // Quick Icons & vCard
    vcardBtn: "📇 حفظ الكرت بالهاتف (.vcf)",
    qrBtn: "📱 QR Code",
    
    // Sidebar Links
    linkCreations: "🎨 إبداعات مختارة (8 مشاريع)",
    linkAllProjects: "🚀 جميع المشاريع والأعمال",
    
    // WhatsApp Inquiry Box
    waTitle: "طلب خدمة سريع عبر WhatsApp 💬",
    waServiceLabel: "الخدمة المطلوبة:",
    waPhoneLabel: "الرقم المفصل للتواصل:",
    waTimelineLabel: "الإطار الزمني المتوقع:",
    waDetailsLabel: "تفاصيل أو وصف مختصر للمشروع:",
    waDetailsPlaceholder: "أكتب هنا ملخص الفكرة...",
    waSubmitBtn: "إرسال الطلب عبر WhatsApp الآن",
    
    // WhatsApp Form Options
    waOptService1: "⚡ أتمتة المهام والعمليات (n8n Automations)",
    waOptService2: "🖥️ تجهيز وإدارة السيرفرات (Linux Server Setup & Management)",
    waOptService3: "🌐 تطوير موقع ويب إلكتروني (Web Development)",
    waOptService4: "🔗 ربط وتكامل API (API Integration & Webhooks)",
    waOptService5: "💡 استشارة تقنية شاملة (Technical Consultation)",
    
    waOptTimeline1: "⚡ عاجل (خلال 24-48 ساعة)",
    waOptTimeline2: "📅 خلال أسبوع",
    waOptTimeline3: "⏳ مرن / حسب حجم المشروع",
    
    // About Me
    aboutTitle: "نبذة عني",
    aboutText: 'أنا <strong>الصالح أحمد الحياري</strong>، أعمل في مجال إدارة وتجهيز السيرفرات، وبناء أتمتة للمهام والعمليات باستخدام <strong>n8n</strong>، بالإضافة لتطوير مواقع الويب. أركز على تقديم حلول عملية ومباشرة تساعد في تنظيم العمل وتسهيل الربط بين الخدمات.',
    skillServer: "إدارة سيرفرات",
    skillWeb: "تطوير ويب",
    
    // GitHub Section
    githubTitle: "مشاريعي على GitHub",
    viewAllGithubBtn: "🚀 عرض جميع المشاريع صفحة مستقلة",
    loadingProjects: "جاري تحميل المشاريع...",
    noProjects: "لا توجد مشاريع عامة حالياً.",
    
    // Developed Websites Section
    websitesTitle: "مواقع قمت بتطويرها",
    descPureTouch: "موقع شركة Pure Touch Plus المتخصصة في خدمات التنظيف والتعقيم الاحترافية الشاملة.",
    descSaltTime: "موقع إخباري مخصص لنشر أخبار مدينة السلط والمملكة الأردنية الهاشمية.",
    
    // CLI Terminal
    cliTitle: "my CLI",
    cliDesc: 'واجهة تفاعلية لاستكشاف مشاريعي ومهاراتي في الأتمتة وإدارة السيرفرات. اكتب <code dir="ltr">help</code> للبدء.',
    cliWelcome: "مرحباً بك في نظام الصالح حياري! اكتب 'help' للبدء.",
    cliExpandBtn: "⛶ تكبير الشاشة",
    
    // Server CLI
    serverCliDesc: 'تيرمينال إدارة السيرفرات المتقدمة (Server Management Node). اكتب <code dir="ltr" style="color: #00ff66;">help</code> لرؤية أوامر السيرفر.',
    serverCliWelcome: "[SERVER NODE CONNECTED] أهلاً بك في تيرمينال إدارة السيرفرات (Server CLI)!",
    
    // n8n Section
    n8nTitle: "أحدث أتمتة وسير العمل (n8n)",
    loadingN8n: "جاري تحميل أتمتة n8n...",
    noN8n: "لا توجد أتمتة نشطة حالياً.",
    n8nActive: "نشط",
    n8nInactive: "غير نشط",
    n8nDownload: "📥 تحميل JSON",
    
    // Side Projects Section
    sideProjectsTitle: "مشاريع جانبية",
    descAshraf: "خبير الإعلام الرقمي وتطوير المحتوى الصحفي والإخباري.",
    descRaad: "مدير عمليات وضيافة. استعراض الخبرات العملية والمهارات القيادية.",
    descEhab: "استعراض السيرة الذاتية المهنية والمشاريع المنجزة.",
    descRenad: "أخصائية اجتماعية. تمكين الأفراد والعمل المجتمعي والتمكين الشبابي.",
    descEman: "أستاذ مساعد في كلية الحقوق. مسيرة أكاديمية وبحثية وقانونية حافلة.",
    descAya: "استعراض السيرة الذاتية والمهارات التدريبية والأكاديمية.",
    descOmar: "عرض السيرة الذاتية والمهارات بتصميم مبسط وفعال.",
    
    // Random Creations Section
    randomTitle: "إبداعات عشوائية 🎨",
    descFahm: "موقع تفاعلي متكامل لمطعم فحم ولحم (قائمة الطعام، الفروع، والطلبات).",
    descAlis: "موقع وتطبيق ويب لمطعم عليز (فرع أبو نصير) - وجبات البروستد والشاورما والبرجر.",
    descArmy: "موقع تفاعلي بطابع عسكري تكتيكي لمطعم آرمي برقر (Army Burger) في عمان.",
    descSushi: "موقع فاخر لمطعم فودو سوشي (Fugu Sushi) تجربة السوشي الياباني في عمان.",
    descGolden: "تطبيق وجبات طعام وتصميم واجهة تفاعلية.",
    descZO1: "تصميم واجهة المنصة التعليمية والأكاديمية.",
    descIDE: "واجهة بيئة تطوير برمجية كود ومحرر نصوص.",
    descPayflow: "مشروع إدارة وتسهيل عمليات الدفع والتدفق المالي (PayFlow).",
    livePreview: "🌐 معاينة مباشرة",
    
    // Automation ROI Calculator
    roiTitle: "حاسبة توفير الوقت والمال بالأتمتة 🧮",
    roiDesc: "احسب كم من الوقت والمبالغ المالية يمكنك توفيرها شهرياً عند تحويل المهام الروتينية إلى أتمتة ذكية باستخدام n8n:",
    roiEmployeesLabel: "عدد الموظفين / فريق العمل:",
    roiHoursLabel: "ساعات المهام اليدوية يومياً (لكل شخص):",
    roiRateLabel: "متوسط أجر الساعة التقديري ($):",
    roiSavedHoursLabel: "الوقت الموفر شهرياً:",
    roiSavedMoneyLabel: "التوفير المالي الشهري:",
    hoursUnit: "ساعة ⏳",
    moneyUnit: "دولار 💰",
    
    // All Projects Page Specific
    allProjectsPageTitle: "جميع المشاريع والأعمال - الصالح حياري",
    allProjectsHeaderTitle: "🚀 جميع المشاريع والأعمال",
    allProjectsHeaderSub: "استكشف مستودعات GitHub، أتمتات n8n، المواقع الإلكترونية، والمشاريع الجانبية في مكان واحد.",
    backHomeBtn: "🏠 الصفحة الرئيسية",
    searchPlaceholder: "🔍 ابحث باسم المشروع أو الكلمات المفتاحية...",
    
    // Category Tabs
    catAll: "🌐 الكل",
    catGithub: "💻 مشاريع GitHub",
    catN8n: "⚡ أتمتة n8n",
    catWebsites: "🌐 مواقع إلكترونية",
    catSide: "👤 مشاريع جانبية",
    catCreations: "🎨 إبداعات عشوائية",
    
    // Footer
    footerRights: "جميع الحقوق محفوظة © الصالح أحمد الحياري"
  },

  en: {
    pageTitle: "Portfolio & Projects - Alsaleh Al-Hayari",
    name: "Alsaleh Ahmad Al-Hayari",
    location: "Jordan 🇯🇴",
    bio: '"Server Management | n8n Automation | Web Development"',
    
    // Quick Icons & vCard
    vcardBtn: "📇 Save Contact Card (.vcf)",
    qrBtn: "📱 QR Code",
    
    // Sidebar Links
    linkCreations: "🎨 Selected Creations (8 Projects)",
    linkAllProjects: "🚀 All Projects & Automations",
    
    // WhatsApp Inquiry Box
    waTitle: "Quick Service Request via WhatsApp 💬",
    waServiceLabel: "Requested Service:",
    waPhoneLabel: "Preferred Contact Number:",
    waTimelineLabel: "Expected Timeline:",
    waDetailsLabel: "Project Details or Summary:",
    waDetailsPlaceholder: "Write a brief summary of your idea...",
    waSubmitBtn: "Send Request via WhatsApp Now",
    
    // WhatsApp Form Options
    waOptService1: "⚡ Task & Workflow Automation (n8n)",
    waOptService2: "🖥️ Linux Server Setup & Management (VPS)",
    waOptService3: "🌐 Web Application Development",
    waOptService4: "🔗 API Integration & Webhooks",
    waOptService5: "💡 Comprehensive Technical Consultation",
    
    waOptTimeline1: "⚡ Urgent (Within 24-48 hours)",
    waOptTimeline2: "📅 Within 1 week",
    waOptTimeline3: "⏳ Flexible / Depending on project scope",
    
    // About Me
    aboutTitle: "About Me",
    aboutText: 'I am <strong>Alsaleh Ahmad Al-Hayari</strong>, specializing in server setup & management, workflow automation via <strong>n8n</strong>, and modern web development. I focus on delivering practical, scalable tech solutions that streamline business operations.',
    skillServer: "Server Management",
    skillWeb: "Web Development",
    
    // GitHub Section
    githubTitle: "My GitHub Projects",
    viewAllGithubBtn: "🚀 View All Projects (Dedicated Page)",
    loadingProjects: "Loading projects...",
    noProjects: "No public repositories found.",
    
    // Developed Websites Section
    websitesTitle: "Developed Websites",
    descPureTouch: "Official website for Pure Touch Plus, specializing in commercial cleaning and disinfection services.",
    descSaltTime: "News portal dedicated to reporting news from As-Salt city and Hashemite Kingdom of Jordan.",
    
    // CLI Terminal
    cliTitle: "my CLI",
    cliDesc: 'Interactive CLI terminal to explore my automation & server projects. Type <code dir="ltr">help</code> to start.',
    cliWelcome: "Welcome to Alsaleh's System! Type 'help' to start.",
    cliExpandBtn: "⛶ Fullscreen",
    
    // Server CLI
    serverCliDesc: 'Advanced Server Management CLI Node. Type <code dir="ltr" style="color: #00ff66;">help</code> to see server commands.',
    serverCliWelcome: "[SERVER NODE CONNECTED] Welcome to Server Management CLI!",
    
    // n8n Section
    n8nTitle: "Latest n8n Automations & Workflows",
    loadingN8n: "Loading n8n automations...",
    noN8n: "No active workflows currently.",
    n8nActive: "Active",
    n8nInactive: "Inactive",
    n8nDownload: "📥 Download JSON",
    
    // Side Projects Section
    sideProjectsTitle: "Side Portfolios & Projects",
    descAshraf: "Digital media expert and press content developer.",
    descRaad: "Operations & hospitality manager. Showcasing leadership and operational expertise.",
    descEhab: "Professional CV & portfolio showcasing completed projects.",
    descRenad: "Social worker & youth empowerment specialist.",
    descEman: "Assistant Professor at College of Law. Academic, legal, and research journey.",
    descAya: "Professional CV showcasing training and academic achievements.",
    descOmar: "Streamlined CV & skills presentation.",
    
    // Random Creations Section
    randomTitle: "Random Creations 🎨",
    descFahm: "Interactive website for Fahm & Lahm Restaurant (Menu, branches, orders).",
    descAlis: "Interactive website for Alis Restaurant (Abu Nseir branch) - Broasted, Shawarma & Burgers.",
    descArmy: "Tactical military themed website for Army Burger restaurant in Amman.",
    descSushi: "Luxury website for Fugu Sushi restaurant showcasing Japanese sushi in Amman.",
    descGolden: "Food ordering app frontend and interactive layout.",
    descZO1: "Educational and academic platform interface.",
    descIDE: "Cloud IDE code editor & terminal layout.",
    descPayflow: "Payment management & financial flow system (PayFlow).",
    livePreview: "🌐 Live Preview",
    
    // Automation ROI Calculator
    roiTitle: "Automation Time & Money Saved Calculator 🧮",
    roiDesc: "Calculate how much time and money you can save monthly by automating routine tasks with n8n:",
    roiEmployeesLabel: "Number of Team Members:",
    roiHoursLabel: "Manual Task Hours / Day (Per Person):",
    roiRateLabel: "Estimated Hourly Wage ($):",
    roiSavedHoursLabel: "Monthly Hours Saved:",
    roiSavedMoneyLabel: "Monthly Cost Savings:",
    hoursUnit: "Hours ⏳",
    moneyUnit: "USD 💰",
    
    // All Projects Page Specific
    allProjectsPageTitle: "All Projects & Automations - Alsaleh Al-Hayari",
    allProjectsHeaderTitle: "🚀 All Projects & Automations",
    allProjectsHeaderSub: "Explore all GitHub repositories, n8n workflows, websites, and side projects in one unified directory.",
    backHomeBtn: "🏠 Back to Home",
    searchPlaceholder: "🔍 Search by project name or keywords...",
    
    // Category Tabs
    catAll: "🌐 All",
    catGithub: "💻 GitHub Repos",
    catN8n: "⚡ n8n Automations",
    catWebsites: "🌐 Live Websites",
    catSide: "👤 Side Portfolios",
    catCreations: "🎨 Random Creations",
    
    // Footer
    footerRights: "All Rights Reserved © Alsaleh Ahmad Al-Hayari"
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'ar';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'ar';
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update document title if present
  if (document.querySelector('meta[name="i18n-title"]')) {
    document.title = dict.pageTitle;
  }
  
  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.hasAttribute('placeholder')) {
          el.placeholder = dict[key];
        }
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Translate placeholders with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update switcher button label if exists
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.innerHTML = lang === 'ar' ? '🌐 English' : '🌐 عربي';
  }
}

function toggleLanguage() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(newLang);
  // Trigger custom event so page scripts can re-render dynamic content if needed
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: newLang } }));
}

// Auto initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
