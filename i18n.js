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
    serverCliDesc: 'تيرمينال إدارة السيرفرات المتقدمة (Server Management Node). اكتب <code dir="ltr">help</code> لرؤية أوامر السيرفر.',
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
    serverCliDesc: 'Advanced Server Management CLI Node. Type <code dir="ltr">help</code> to see server commands.',
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

/* Keys added with the redesigned layout */
Object.assign(translations.ar, {
  founderOf: "مؤسس",
  startupTitle: "شركتي الناشئة",
  startupDesc: 'GLTCH شركة <strong>Agentic Media-Tech Heavy</strong>: إعلام بحجم كبير يقوم على تقنية ثقيلة ووكلاء ذكاء اصطناعي. نعمل مع عملائنا اليوم، وما زلنا نبني المزيد.',
  pillarAgentic: '<li>وكلاء AI ينتجون المحتوى</li><li>نشر وإدارة آلية للحسابات</li><li>نؤتمت حياتك وعملك</li>',
  pillarMedia: '<li>ندير الميديا ونخلّيك تنتشر بشكل فيروسي</li><li>نصمّم الميديا تبعتك لتوصل لعملائك</li><li>نصوّر ونخرج البثوث</li><li>إنتاج إبداعي</li>',
  pillarTech: '<li>عندنا داتا سنتر</li><li>نبرمج لك شيئاً خارجاً عن المألوف</li><li>نهكّر ونصلّح</li><li>نحميك</li><li>بنية تقنية للإعلام</li>',
  startupRole: "المؤسس",
  navAbout: "نبذة",
  navServices: "الخدمات",
  navProjects: "المشاريع",
  navTerminal: "التيرمينال",
  navContact: "تواصل",
  heroLead: "أبني أتمتة للمهام باستخدام n8n، أجهّز وأدير السيرفرات، وأطوّر مواقع ويب عملية ومباشرة.",
  heroContactBtn: "اطلب خدمة",
  servicesTitle: "الخدمات",
  svc1Title: "أتمتة n8n",
  svc1Desc: "بناء سير عمل يربط أدواتك ببعضها وينفّذ المهام المتكررة تلقائياً.",
  svc2Title: "إدارة السيرفرات",
  svc2Desc: "تجهيز وإدارة سيرفرات Linux و VPS ونشر التطبيقات عليها.",
  svc3Title: "تطوير الويب",
  svc3Desc: "مواقع وواجهات ويب سريعة ومتجاوبة مع جميع الشاشات.",
  svc4Title: "ربط API و Webhooks",
  svc4Desc: "تكامل الخدمات والأنظمة المختلفة عبر API و Webhooks.",
  platformsTitle: "حساباتي ومنصات العمل",
  contactTitle: "تواصل معي",
  contactLead: "اختر الخدمة واكتب ملخص فكرتك، وسيُفتح WhatsApp برسالة جاهزة للإرسال."
});

Object.assign(translations.en, {
  founderOf: "Founder of",
  startupTitle: "My Startup",
  startupDesc: 'GLTCH is an <strong>agentic, media-tech heavy</strong> company: high-volume media built on heavy technology and AI agents. We work with clients today and are still building more.',
  pillarAgentic: '<li>AI agents that produce content</li><li>Automated publishing and account management</li><li>We automate your life and work</li>',
  pillarMedia: '<li>We run your media and make you go viral</li><li>We design your media so it reaches your clients</li><li>We shoot and direct live streams</li><li>Creative production</li>',
  pillarTech: '<li>Our own data center</li><li>We build software out of the ordinary</li><li>We hack and we fix</li><li>We protect you</li><li>Technical infrastructure for media</li>',
  startupRole: "Founder",
  navAbout: "About",
  navServices: "Services",
  navProjects: "Projects",
  navTerminal: "Terminal",
  navContact: "Contact",
  heroLead: "I build task automation with n8n, set up and manage servers, and develop practical, straightforward websites.",
  heroContactBtn: "Request a service",
  servicesTitle: "Services",
  svc1Title: "n8n Automation",
  svc1Desc: "Workflows that connect your tools and run repetitive tasks automatically.",
  svc2Title: "Server Management",
  svc2Desc: "Setting up and managing Linux and VPS servers and deploying apps on them.",
  svc3Title: "Web Development",
  svc3Desc: "Fast websites and interfaces that work on every screen size.",
  svc4Title: "API & Webhook Integration",
  svc4Desc: "Connecting different services and systems through APIs and webhooks.",
  platformsTitle: "Profiles & Platforms",
  contactTitle: "Get in Touch",
  contactLead: "Pick a service and describe your idea; WhatsApp opens with the message ready to send."
});

/* Keys for case studies, stats and the GLTCH page */
Object.assign(translations.ar, {
  linkCreations: "🎨 إبداعات مختارة (6 مشاريع)",
  statClientSites: "مواقع عملاء على الإنترنت",
  statPortfolios: "مواقع شخصية وسير ذاتية",
  statFrontends: "واجهات ومواقع مطاعم",
  statWorkflows: "سير عمل n8n منشورة",
  casesTitle: "دراسات حالة",
  caseRead: "اقرأ دراسة الحالة",
  caseBack: "كل المشاريع",
  caseLive: "افتح الموقع",
  caseIdeaH: "الفكرة",
  caseBuiltH: "ما بنيته",
  caseTechH: "التقنيات",
  caseOutcomeH: "المُخرَج",
  caseAlisTitle: "مطعم عليز — قائمة طعام وسلة طلبات",
  caseAlisSummary: "واجهة ويب لمطعم تعرض الأطباق وتجمع الطلب في سلة تحسب الإجمالي.",
  caseAlisIdea: "واجهة ويب لمطعم عليز (فرع أبو نصير) تعرض الأطباق بشكل واضح على الجوال، وتسهّل على الزائر تجهيز طلبه قبل التواصل مع المطعم.",
  caseAlisBuilt: "<li>قائمة أطباق مع فلترة حسب الصنف</li><li>سلة طلبات مع تعديل الكميات وحساب الإجمالي تلقائياً</li><li>قسم لأشهر الوجبات ومعرض صور للأطباق</li><li>قسم يشرح معايير الجودة في المطعم</li><li>موقع الفرع وطرق التواصل وطلب التوصيل</li>",
  caseAlisOutcome: "واجهة تعمل كاملة داخل المتصفح بدون خادم خلفي، ويمكن تجربتها مباشرة من الرابط.",
  caseAshrafTitle: "أشرف الدباس — موقع شخصي بروبوت دردشة",
  caseAshrafSummary: "موقع شخصي بلغتين لخبير إعلام رقمي، مع روبوت دردشة يستقبل استفسارات الزوار.",
  caseAshrafIdea: "موقع شخصي يعرّف بخبرة أشرف الدباس في الإعلام الرقمي وصناعة المحتوى، ويعطي الزائر طريقة سهلة لإرسال استفساره.",
  caseAshrafBuilt: "<li>واجهة بلغتين مع تبديل فوري للغة</li><li>وضع داكن ووضع فاتح</li><li>أقسام للتعريف والمسار المهني مع عدّادات متحركة وأسئلة شائعة</li><li>روبوت دردشة يسأل الزائر خطوة بخطوة ثم يرسل بياناته عبر Webhook</li><li>حركات ظهور للعناصر عند التمرير</li>",
  caseAshrafOutcome: "موقع منشور يمكن تصفحه من الرابط، وروبوت الدردشة فيه يحوّل الاستفسار إلى بيانات منظمة جاهزة للمعالجة.",
  gltchPageBtn: "صفحة GLTCH الكاملة",
  gltchHeroLead: "شركة ناشئة Agentic Media-Tech Heavy: إعلام بحجم كبير يقوم على تقنية ثقيلة ووكلاء ذكاء اصطناعي. نعمل مع عملائنا اليوم، وما زلنا نبني المزيد.",
  gltchRequestBtn: "اطلب خدمة من GLTCH",
  gltchFounderLine: "المؤسس: الصالح أحمد الحياري",
  gltchServicesTitle: "ماذا نقدّم",
  gltchProcessTitle: "كيف نعمل",
  gltchCtaTitle: "عندك مشروع؟",
  gltchCtaText: "احكِ لنا عن فكرتك على WhatsApp ونرجع لك بخطة واضحة.",
  gltchAgenticLead: "وكلاء ذكاء اصطناعي يشتغلون عنك: ينتجون، ينشرون، ويتابعون.",
  gltchMediaLead: "نصنع حضورك الإعلامي من التصوير إلى الانتشار.",
  gltchTechLead: "هندسة ثقيلة تشغّل كل ذلك وتحميه.",
  gltchStep1T: "نسمعك",
  gltchStep1D: "نفهم مشروعك وجمهورك وما تريد الوصول إليه.",
  gltchStep2T: "نخطّط",
  gltchStep2D: "نحدد الميديا والتقنية والوكلاء المناسبين لهدفك.",
  gltchStep3T: "ننفّذ",
  gltchStep3D: "نصوّر ونصمّم ونبرمج ونؤتمت.",
  gltchStep4T: "نشغّل ونحمي",
  gltchStep4D: "ندير التشغيل اليومي، نراقب، ونحمي ما بنيناه."
});

/* Keys for case studies, stats and the GLTCH page */
Object.assign(translations.en, {
  linkCreations: "🎨 Selected Creations (6 Projects)",
  statClientSites: "Client websites live",
  statPortfolios: "Personal sites and CVs",
  statFrontends: "Front-ends and restaurant sites",
  statWorkflows: "Published n8n workflows",
  casesTitle: "Case Studies",
  caseRead: "Read the case study",
  caseBack: "All projects",
  caseLive: "Open the site",
  caseIdeaH: "The idea",
  caseBuiltH: "What I built",
  caseTechH: "Technology",
  caseOutcomeH: "Outcome",
  caseAlisTitle: "Alis Restaurant — menu and order cart",
  caseAlisSummary: "A restaurant web front-end that shows the dishes and collects the order in a cart with a running total.",
  caseAlisIdea: "A web front-end for Alis Restaurant (Abu Nseir branch) that shows the dishes clearly on a phone and lets a visitor put an order together before contacting the restaurant.",
  caseAlisBuilt: "<li>Dish menu with filtering by category</li><li>Order cart with quantity changes and an automatic total</li><li>Featured meals and a photo gallery</li><li>A section explaining the restaurant’s quality standards</li><li>Branch location, contact options and delivery ordering</li>",
  caseAlisOutcome: "A front-end that runs entirely in the browser with no back-end, and can be tried from the link.",
  caseAshrafTitle: "Ashraf Al-Dabbas — personal site with a chatbot",
  caseAshrafSummary: "A bilingual personal site for a digital media expert, with a chatbot that takes visitor enquiries.",
  caseAshrafIdea: "A personal site presenting Ashraf Al-Dabbas’s experience in digital media and content, with an easy way for visitors to send an enquiry.",
  caseAshrafBuilt: "<li>Two languages with instant switching</li><li>Dark and light modes</li><li>About and career sections with animated counters and an FAQ</li><li>A chatbot that asks the visitor step by step, then sends the answers through a webhook</li><li>Reveal animations on scroll</li>",
  caseAshrafOutcome: "A published site you can browse from the link, whose chatbot turns an enquiry into structured data ready to process.",
  gltchPageBtn: "Full GLTCH page",
  gltchHeroLead: "An agentic, media-tech heavy startup: high-volume media built on heavy technology and AI agents. We work with clients today and are still building more.",
  gltchRequestBtn: "Request a GLTCH service",
  gltchFounderLine: "Founder: Alsaleh Ahmad Al-Hayari",
  gltchServicesTitle: "What we do",
  gltchProcessTitle: "How we work",
  gltchCtaTitle: "Have a project?",
  gltchCtaText: "Tell us about your idea on WhatsApp and we will come back with a clear plan.",
  gltchAgenticLead: "AI agents that work for you: they produce, publish and follow up.",
  gltchMediaLead: "We build your media presence, from the shoot to going viral.",
  gltchTechLead: "Heavy engineering that runs all of it and keeps it safe.",
  gltchStep1T: "We listen",
  gltchStep1D: "We learn your project, your audience and where you want to get to.",
  gltchStep2T: "We plan",
  gltchStep2D: "We pick the media, technology and agents that fit your goal.",
  gltchStep3T: "We build",
  gltchStep3D: "We shoot, design, code and automate.",
  gltchStep4T: "We run and protect",
  gltchStep4D: "We handle day-to-day operation, monitor it, and protect what we built."
});

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
